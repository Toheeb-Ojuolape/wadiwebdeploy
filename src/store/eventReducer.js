import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import { db } from "../db"
import { getDoc,doc } from "firebase/firestore";


// interface initialState {
//     value:String
//     loading: Boolean
// }


const initialState = {
  loading: false,
} 
// as initialState



export const getEvent = createAsyncThunk("users/getEvent", async () => {
  try {
    const docRef = doc(db,"events","T9OKOEXNH6cMLyXAavK0" || '{}');
    const response = await getDoc(docRef)
    return response.data()
  } catch (error) {
    return error;
  }
});

export const eventSlice = createSlice({
  name: "event",
  initialState,
  extraReducers:(builder) => {
    builder.addCase(getEvent.pending,(state,action) =>{
      state.loading = true;
    })

    builder.addCase(getEvent.fulfilled,(state,action) =>{
      state.loading = false;
      state.value = action.payload;
    })

    builder.addCase(getEvent.rejected,(state,action) =>{
      state.loading = false;
    })
  },
});

export default eventSlice.reducer;