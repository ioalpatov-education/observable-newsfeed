import { CardContent, Link, CardMedia } from "@mui/material";

const Attachment = ({ attachment }) => {
  const { type } = attachment;
  let content = null;
  switch (type) {
    case "link": {
      const { link } = attachment;
      const { url, title, target } = link;
      content = (
        <CardContent className="attachment--link">
          <Link href={url} target={target}>
            <h6>{title}</h6>
            <span className="attachment--link__url">{url}</span>
          </Link>
        </CardContent>
      );
      break;
    }
    // case "video": {
    //   content = (
    //     <CardMedia
    //       component="img"
    //       height="194"
    //       image="/static/images/cards/paella.jpg"
    //       alt="Paella dish"
    //     />
    //   );
    //   break;
    // }
    case "photo": {
      console.log(attachment);
      const { photo } = attachment;
      const { url } = photo.sizes[3];
      content = (
        <CardMedia
          component="img"
          height="213"
          image={url}
          alt="Описание изображения, которого нет"
        />
      );
      break;
    }

    default: {
      break;
    }
  }

  return <>{content}</>;
};

export default Attachment;
