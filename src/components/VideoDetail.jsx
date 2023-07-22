import { Box, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import ReactPlayer from "react-player";
import { apiData } from "../utils/fetchFromApi";
import { CheckCircle } from "@mui/icons-material";
import { NavLink } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import Videos from "./Videos";
const VideoDetail = ({}) => {
  const { id } = useParams();
  const [data, setdata] = useState([]);
  const [videos, setvideos] = useState([]);
  const [isloadingVideo, setisloadingVideo] = useState(true);
  const [isloadingrelated, setisloadingrelated] = useState(true);

  useEffect(() => {
    setisloadingVideo(true);
    setisloadingrelated(true);
    apiData(`videos?part=snippet,statistics&id=${id}`).then((data) => {
      setdata(data.items[0]);
      setisloadingVideo(false);
    });
    apiData(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => {
        setvideos(data.items);
        setisloadingrelated(false);
      }
    );
  }, [id]);
  console.log(data);
  return (
    <Box minHeight="92vh">
      <Stack
        direction={{
          xs: "column",
          md: "row",
        }}
        spacing={2}
      >
        <Box flex={1}>
          <Box
            sx={{
              width: "100%",
              position: "sticky",
            }}
          >
            {isloadingVideo ? (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flex: 1,
                }}
              >
                <CircularProgress color="error" />
              </Box>
            ) : (
              <ReactPlayer
                url={`https://www.youtube.com/watch?v=${id}`}
                controls
                className="react-player"
              />
            )}

            <Typography variant="h5" color="secondary" fontWeight="bold" p={2}>
              {data?.snippet?.title}
            </Typography>
          </Box>
          <Stack
            direction={{
              xs: "column",
              sm: "row",
            }}
            sx={{
              color: "white",
              justifyContent: "space-between",
            }}
            py={2}
            px={1}
          >
            <NavLink to={`/channel/${data?.snippet?.channelId}`}>
              <Typography
                variant={{ sm: "subtitle1", md: "h6" }}
                color="secondary"
              >
                {data?.snippet?.channelTitle}
                <CheckCircle
                  color="gray"
                  sx={{
                    fontSize: "12px",
                    ml: 1,
                  }}
                />
              </Typography>
            </NavLink>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              gap={2}
            >
              <Typography
                sx={{
                  opacity: 0.8,
                }}
              >
                {parseInt(data?.statistics?.viewCount).toLocaleString()}views
              </Typography>
              <Typography
                sx={{
                  opacity: 0.8,
                }}
              >
                {parseInt(data?.statistics?.likeCount).toLocaleString()}likes
              </Typography>
            </Stack>
          </Stack>
        </Box>
        <Box
          px={2}
          py={{
            md: 1,
            xs: 5,
          }}
          justifyContent="center"
          alignItems="center"
          sx={{
            height: "92vh",
            overflow: "auto",
          }}
        >
          {isloadingrelated ? (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flex: 1,
              }}
            >
              <CircularProgress color="error" />
            </Box>
          ) : (
            <Videos data={videos} direction="column" />
          )}
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetail;
