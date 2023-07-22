import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import { demoChannelUrl, demoProfilePicture } from "../utils/constants";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const CardChannel = ({ channel, margintop }) => {
  console.log(channel);
  return (
    <Box
      borderRadius={20}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        color: "white",
        marginTop: margintop,
      }}
    >
      <CardContent>
        <NavLink to={`/channel/${channel?.id?.channelId || channel?.id}`}>
          <CardMedia
            image={
              channel?.snippet?.thumbnails?.high?.url || demoProfilePicture
            }
            sx={{
              borderRadius: "50%",
              height: "180px",
              width: "180px",
              mb: 2,
            }}
          />
          <Typography variant="h6" color="white">
            {channel?.snippet?.title}
            <CheckCircleIcon
              sx={{
                fontSize: "18px",
                ml: 1,
                alignItems: "center",
              }}
            />
          </Typography>
          {channel?.statistics?.subscriberCount && (
            <Typography variant="subtitle1" color="secondary">
              {parseInt(channel?.statistics?.subscriberCount) / Math.pow(10, 5)}
              lakh subscribers
            </Typography>
          )}
        </NavLink>
      </CardContent>
    </Box>
  );
};

export default CardChannel;
