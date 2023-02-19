import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import { db } from "../db"
import {getDocs,query, collection } from "firebase/firestore";
import { orderBy } from "lodash";


// interface initialState {
//     value:String
//     loading: Boolean
// }


const initialState = {
  loading: false,
} 
// as initialState



export const getForum = createAsyncThunk("users/getForum", async () => {
  try {
    let array = []
    const docRef = query(collection(db,"forum"),orderBy("timestamp","desc"))
    const response = await getDocs(docRef)
    response.forEach((doc)=>{
        array.push(doc.data())
    })
    return array
  } catch (error) {
    return error;
  }
});

export const forumSlice = createSlice({
  name: "forum",
  initialState,
  extraReducers:(builder) => {
    builder.addCase(getForum.pending,(state,action) =>{
      state.loading = true;
    })

    builder.addCase(getForum.fulfilled,(state,action) =>{
      state.loading = false;
      state.value = action.payload;
    })

    builder.addCase(getForum.rejected,(state,action) =>{
      state.loading = false;
    })
  },
});

export default forumSlice.reducer;