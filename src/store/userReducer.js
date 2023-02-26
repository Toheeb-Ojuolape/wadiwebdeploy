import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import { db } from "../db"
import { getDoc,doc } from "firebase/firestore";


// interface initialState {
//     value:String
//     loading: Boolean
// }


const initialState = {
  value: localStorage.getItem("wadiKey"),
  loading: false,
} 
// as initialState



export const getUser = createAsyncThunk("users/getUser", async () => {
  try {
    const docRef = doc(db,"users",localStorage.getItem('wadiKey') || '{}');
    const response = await getDoc(docRef)
    return response.data()
  } catch (error) {
    return error;
  }
});

export const usersSlice = createSlice({
  name: "user",
  initialState,
  extraReducers:(builder) => {
    builder.addCase(getUser.pending,(state,action) =>{
      state.loading = true;
    })

    builder.addCase(getUser.fulfilled,(state,action) =>{
      state.loading = false;
      state.value = action.payload;
    })

    builder.addCase(getUser.rejected,(state,action) =>{
      state.loading = false;
    })
  },
});

export default usersSlice.reducer;