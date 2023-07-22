import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { NavLink } from "react-router-dom";
import {
  demoThumbnailUrl,
  demoChannelUrl,
  demoVideoUrl,
  demoChannelTitle,
  demoVideoTitle,
  demoProfilePicture,
} from "../utils/constants";
const CardVideo = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  console.log(snippet);
  return (
    <Card
      sx={{
        width: {
          md: "300px",
          sm: "70%",
          xs: "100%",
          marginTop: "20px",
          alignItems: "center",
          justifyContent: "center",
          marginRight: "10px",
        },
      }}
    >
      <NavLink to={videoId ? `/video/${videoId}` : "/"}>
        <CardMedia
          image={snippet?.thumbnails?.high?.url || demoProfilePicture}
          sx={{
            height: 180,
            width: {
              md: 340,
              sm: "100%",
              xs: "100%",
            },
          }}
        />{" "}
      </NavLink>
      <CardContent
        sx={{
          backgroundColor: "#1e1e1e",
          height: "106px",
        }}
      >
        <NavLink to={videoId ? `/video/${videoId}` : "/"}>
          <Typography variant="subtitle1" color="secondary" fontWeight="bold">
            {snippet?.title.slice(0, 60) || demoVideoTitle}
          </Typography>
        </NavLink>

        <Typography variant="subtitle2" color="gray">
          {snippet?.channelTitle || demoChannelTitle}
          <CheckCircleIcon
            sx={{
              fontSize: 12,
              color: "gray",
              ml: "5px",
            }}
          />
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardVideo;
