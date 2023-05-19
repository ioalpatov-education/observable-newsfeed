import { ofType } from "redux-observable";
import {
  sendRequestToReceiveNews,
  receiptNewsSuccess,
  sendRequestToReceiveNewsWithLastSeenId,
} from "../slices/newsSlice";
import { retry } from "rxjs";
import { map, exhaustMap } from "rxjs/operators";
import { ajax } from "rxjs/ajax";

export const getNewsListEpic = (action$) =>
  action$.pipe(
    ofType(sendRequestToReceiveNews.type),
    exhaustMap((o) =>
      ajax.getJSON(`${process.env.REACT_APP_API_URL}/api/news`).pipe(
        retry({ delay: 3000 }),
        map((o) => receiptNewsSuccess(o))
      )
    )
  );

export const getNewsListWithLastSeenIdEpic = (action$, state$) =>
  action$.pipe(
    ofType(sendRequestToReceiveNewsWithLastSeenId.type),
    map((o) => state$.value.news.lastSeenId),
    map((o) => new URLSearchParams({ lastSeenId: o })),
    exhaustMap((o) =>
      ajax.getJSON(`${process.env.REACT_APP_API_URL}/api/news?${o}`).pipe(
        retry({ delay: 3000 }),
        map((o) => receiptNewsSuccess(o))
      )
    )
  );
