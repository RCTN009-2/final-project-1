import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getNews = createAsyncThunk("get/api", async (category) => {
  try {
    const response = await axios.get(
      `https://newsapi.org/v2/everything?q=${category}&apiKey=c9e6de4127a040c59d479b3be8928869`
    );

    return response.data.articles;
  } catch (error) {
    console.error(error);
  }
});

const APISlice = createSlice({
  name: "APISlice",
  initialState: { article: [] },
  extraReducers: (builder) => {
    builder.addCase(getNews.fulfilled, (state, action) => {
      state.article = action.payload;
    });
  },
});

export default APISlice.reducer;
