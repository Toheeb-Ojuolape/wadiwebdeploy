import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "../db";
import { getDocs, query, collection, where } from "firebase/firestore";

// interface initialState {
//     value:String
//     loading: Boolean
// }

const initialState = {
  loading: false,
};
// as initialState

export const getReviewerProject = createAsyncThunk(
  "reviewers/getProjects",
  async () => {
    try {
      let array = [];
      const docRef = query(
        collection(db, "projects"),
        where(
          "field",
          "==",
          JSON.parse(localStorage.getItem("userData")).specialization
        )
      );
      const response = await getDocs(docRef);
      response.forEach((doc) => {
        array.push(doc.data());
      });
      return array;
    } catch (error) {
      return error;
    }
  }
);

export const reviewerProjectSlice = createSlice({
  name: "reviewerproject",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getReviewerProject.pending, (state, action) => {
      state.loading = true;
    });

    builder.addCase(getReviewerProject.fulfilled, (state, action) => {
      state.loading = false;
      state.value = action.payload;
    });

    builder.addCase(getReviewerProject.rejected, (state, action) => {
      state.loading = false;
    });
  },
});

export default reviewerProjectSlice.reducer;
