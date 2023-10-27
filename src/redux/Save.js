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
      const isSaved = state.article.find(
        (article) => article.title === action.payload.title
      );
      isSaved
        ? (state.article = state.article.filter(
            (article) => article.title !== action.payload.title // ini kalo unsave
          ))
        : state.article.push(action.payload); // ini kalo save
    });
  },
});

export default SaveSlice.reducer;
