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
import { Box } from "@mui/material";
const CardVideo = ({
  video,
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  function clickhandler() {
    console.log(video);
    let data = JSON.parse(localStorage.getItem("history"));
    if (data) {
      const index = data.findIndex((el) => el.id.videoId === video.id.videoId);
      console.log(index);
      if (index != -1) data.splice(index, 1);
      console.log(data);
      data.unshift(video);
      //console.log(st);
      localStorage.setItem("history", JSON.stringify(data));
    } else {
      data = [video];
      localStorage.setItem("history", JSON.stringify(data));
    }
  }
  return (
   
      <Card
        sx={{
          width: {
            md: "300px",
            xs: "100%",
          },
          
        }}
      >
        <NavLink
          to={videoId ? `/video/${videoId}` : "/"}
          onClick={clickhandler}
        >
          <CardMedia
            image={snippet?.thumbnails?.high?.url || demoProfilePicture}
            sx={{
              height: 180,
              width: {
                md: 340,
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
          <NavLink
            to={videoId ? `/video/${videoId}` : "/"}
            onClick={clickhandler}
          >
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
