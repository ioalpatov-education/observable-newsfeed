import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  news: [],
  lastSeenId: null,
  loading: false,
};

export const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    sendRequestToReceiveNews: (state) => {
      state.loading = true;
    },
    sendRequestToReceiveNewsWithLastSeenId: (state) => {
      state.loading = true;
    },
    receiptNewsSuccess: (state, action) => {
      const news = action.payload;
      state.news = [...state.news, ...news];
      state.lastSeenId = news.length < 5 ? null : news[news.length - 1].id;
      state.loading = false;
    },
  },
});

export const {
  sendRequestToReceiveNews,
  sendRequestToReceiveNewsWithLastSeenId,
  receiptNewsSuccess,
} = newsSlice.actions;

export default newsSlice.reducer;
