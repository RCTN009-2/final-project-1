import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const saveNews = createAsyncThunk(
  "saveNews/saveSlice",
  async (category) => {
    try {
      return category;
    } catch (error) {
      console.error(error);
    }
  }
);

const SaveSlice = createSlice({
  name: "saveSlice",
  initialState: {
    article: [],
  },
  extraReducers: (builder) => {
    builder.addCase(saveNews.fulfilled, (state, action) => {
      state.article.push(action.payload);
    });
  },
});

export default SaveSlice.reducer;
