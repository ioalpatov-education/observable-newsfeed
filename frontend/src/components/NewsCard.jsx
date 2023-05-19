import {
  Card,
  CardHeader,
  Avatar,
  IconButton,
  CardContent,
  CardActions,
} from "@mui/material";
import {
  ArrowBackIosNew,
  Favorite,
  ChatBubbleOutline,
  RemoveRedEye,
  Reply,
} from "@mui/icons-material";
import { convertDate } from "../utils";
import Attachment from "./Attachment";

const NewsCard = ({ oneNews }) => {
  const { date, text, attachments, likes, comments, views, reposts } = oneNews;
  return (
    <Card className="news-card">
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "#4776bd" }} aria-label="recipe">
            Нe
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <ArrowBackIosNew className="arrow-back-icon" />
          </IconButton>
        }
        title="Университет интернет-профессий Нетология"
        subheader={convertDate(new Date(date))}
      />
      <CardContent>
        <p className="main-text">{text}</p>
      </CardContent>
      {attachments.map((att, attIdx) => {
        return <Attachment key={attIdx} attachment={att} />;
      })}
      <CardActions className="actions">
        <div className="actions__btns-container">
          <div className="actions-block">
            <IconButton aria-label="add to favorites">
              <Favorite />
            </IconButton>
            <span>{!!likes.count ? likes.count : ""}</span>
          </div>
          <div className="actions-block">
            <IconButton aria-label="share">
              <ChatBubbleOutline />
            </IconButton>
            <span>{!!comments.count ? comments.count : ""}</span>
          </div>
          <div className="actions-block">
            <IconButton aria-label="share">
              <Reply className="reposts-icon" />
            </IconButton>
            <span>{!!reposts.count ? reposts.count : ""}</span>
          </div>
        </div>

        <span>
          <RemoveRedEye /> {!!views.count ? views.count : ""}
        </span>
      </CardActions>
    </Card>
  );
};

export default NewsCard;
