import { Box, Card, CardContent, Grid, Paper, Stack } from "@mui/material";
import React from "react";
import CardVideo from "./CardVideo";
import CardChannel from "./CardChannel";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const Videos = ({ data, direction }) => {
  console.log(data);
  return (
    <Stack
      flexWrap="wrap"
      direction={direction || "row"}
      justifyContent="space-evenly"
    >
      {data.map(
        (el, idx) =>
          !el.id.playlistId && (
            <Box
              key={idx}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {el.id.videoId && <CardVideo video={el} />}
              {el.id.channelId && <CardChannel channel={el} />}
            </Box>
          )
      )}
    </Stack>
  );
};

export default Videos;
