import { configureStore } from "@reduxjs/toolkit";
import newsReducer from "./slices/newsSlice";
import { combineEpics, createEpicMiddleware } from "redux-observable";
import { getNewsListEpic, getNewsListWithLastSeenIdEpic } from "./epics";

const epicMiddleware = createEpicMiddleware();

export const store = configureStore({
  reducer: {
    news: newsReducer,
  },
  middleware: [epicMiddleware],
});

const epic = combineEpics(getNewsListEpic, getNewsListWithLastSeenIdEpic);

epicMiddleware.run(epic);
