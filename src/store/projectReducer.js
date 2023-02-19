import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import { db } from "../db"
import {getDocs,query, collection, where } from "firebase/firestore";



// interface initialState {
//     value:String
//     loading: Boolean
// }


const initialState = {
  loading: false,
} 
// as initialState



export const getProject = createAsyncThunk("users/getProjects", async () => {
  try {
    let array = []
    const docRef = query(collection(db,"projects"),where("author","==",localStorage.getItem("wadiKey")))
    const response = await getDocs(docRef)
    response.forEach((doc)=>{
        array.push(doc.data())
    })
    return array
  } catch (error) {
    return error;
  }
});

export const projectSlice = createSlice({
  name: "project",
  initialState,
  extraReducers:(builder) => {
    builder.addCase(getProject.pending,(state,action) =>{
      state.loading = true;
    })

    builder.addCase(getProject.fulfilled,(state,action) =>{
      state.loading = false;
      state.value = action.payload;
    })

    builder.addCase(getProject.rejected,(state,action) =>{
      state.loading = false;
    })
  },
});

export default projectSlice.reducer;