import NewsCard from "./NewsCard";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  sendRequestToReceiveNews,
  sendRequestToReceiveNewsWithLastSeenId,
} from "../store/slices/newsSlice";
import { CircularProgress, Button } from "@mui/material";
import { LoadingButton } from "@mui/lab";

const NewsList = () => {
  const { news, lastSeenId, loading } = useSelector((state) => state.news);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(sendRequestToReceiveNews());
  }, []);

  const loadMoreNews = () => {
    if (!!lastSeenId) {
      dispatch(sendRequestToReceiveNewsWithLastSeenId());
    }
  };

  const newsList = !!news.length
    ? news.map((el) => {
        return <NewsCard key={el.id} oneNews={el} />;
      })
    : null;

  return (
    <div className="news-container">
      {loading && !news.length ? (
        <div className="loader-container">
          <CircularProgress />
        </div>
      ) : (
        <>
          {newsList}
          {!!lastSeenId ? (
            <>
              {loading ? (
                <LoadingButton
                  size="small"
                  loading={loading}
                  variant="contained"
                  disabled
                >
                  К предыдущим записям
                </LoadingButton>
              ) : (
                <Button onClick={loadMoreNews} variant="contained">
                  К предыдущим записям
                </Button>
              )}
            </>
          ) : null}
        </>
      )}
    </div>
  );
};

export default NewsList;
