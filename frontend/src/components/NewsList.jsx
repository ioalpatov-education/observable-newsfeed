import NewsCard from "./NewsCard";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  sendRequestToReceiveNews,
  sendRequestToReceiveNewsWithLastSeenId,
} from "../store/slices/newsSlice";

const NewsList = () => {
  const lastSeenId = useSelector((state) => state.news.lastSeenId);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(sendRequestToReceiveNews());
  }, []);

  const loadMoreNews = () => {
    if (!!lastSeenId) {
      dispatch(sendRequestToReceiveNewsWithLastSeenId());
    }
  };

  return (
    <div>
      test <button onClick={loadMoreNews}>еще </button>
    </div>
  );
};

export default NewsList;
