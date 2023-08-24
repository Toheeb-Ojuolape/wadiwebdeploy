import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "../db";
import { getDocs, collection, query} from "firebase/firestore";

// interface initialState {
//     value:String
//     loading: Boolean
// }

const initialState = {
  loading: false,
  equipments: sessionStorage.getItem("equipments")
};
// as initialState

export const fetchEquiments = createAsyncThunk(
  "equipments/fetchEquipments",
  async () => {
    try {
      if(initialState.equipments){
        return JSON.parse(initialState.equipments).sort((a,b)=>a.name[0].localeCompare(b.name[0]))
      }
      else {
      const equipments = [];
      const labs = query(collection(db, "labs"));
      const querySnapshot = await getDocs(labs);
      querySnapshot.forEach((doc) => {
        equipments.push(...doc.data().equipment)
      });
      sessionStorage.setItem("equipments",JSON.stringify(equipments))
      return equipments.sort((a,b)=>a.name[0].localeCompare(b.name[0]))
    }
    } catch (error) {
      return error;
    }
  }
);

export const equipmentSlice = createSlice({
  name: "event",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchEquiments.pending, (state, action) => {
      state.loading = true;
    });

    builder.addCase(fetchEquiments.fulfilled, (state, action) => {
      state.loading = false;
      state.value = action.payload;
    });

    builder.addCase(fetchEquiments.rejected, (state, action) => {
      state.loading = false;
    });
  },
});

export default equipmentSlice.reducer;
