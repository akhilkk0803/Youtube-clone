import {
  Box,
  Card,
  CardContent,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import CardVideo from "./CardVideo";
import CardChannel from "./CardChannel";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { motion } from "framer-motion";
const Videos = ({ data, direction }) => {
  console.log(data);
  return (
    <Stack
      flexWrap="wrap"
      direction={direction || "row"}
      justifyContent="space-evenly"
    >
      {data ? (
        data.map(
          (el, idx) =>
            !el?.id?.playlistId && (
              <Box
                key={idx}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: {
                    xs: "100%",
                    sm: "450px",
                    md: "300px",
                  },
                  marginTop: "20px",
                  alignItems: "center",
                  justifyContent: "centexr",
                  marginRight: "10px",
                }}
              >
                <motion.div
                  whileHover={{
                    scale: 1.05,
                    boxShadow:
                      "box-shadow:box-shadow: rgba(231, 231, 231, 0.788) 0px 8px 24px",
                  }}
                  style={{
                    width: "inherit",
                  }}
                >
                  {/* {console.log(el)} */}
                  {el?.id?.videoId && <CardVideo video={el} />}
                  {el?.id?.channelId && <CardChannel channel={el} />}
                </motion.div>
              </Box>
            )
        )
      ) : (
        <Typography variant="h5" color="secondary">
          Not data available
        </Typography>
      )}
    </Stack>
  );
};

export default Videos;
