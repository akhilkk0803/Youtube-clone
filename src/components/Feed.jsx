import React from "react";
import Typography from "@mui/material/Typography";
import { useState, useEffect } from "react";
import { Stack, Box } from "@mui/material";
import SideBar from "./SideBar";
import Videos from "./Videos";
import CircularProgress from "@mui/material/CircularProgress";
import { apiData } from "../utils/fetchFromApi";
const Feed = () => {
  const [selected, setselected] = useState("New");
  const [Data, setData] = useState([]);
  const [isloading, setisloading] = useState(true);
  useEffect(() => {
    setisloading(true);
    const data = apiData(`search?part=snippet&q=${selected}`).then((data) => {
      setisloading(false);
      setData(data.items);
    });
  }, [selected]);
  return (
    <Stack
      display="flex"
      sx={{
        flexDirection: {
          sx: "column",
          md: "row",
        },
      }}
    >
      <Box
        sx={{
          height: {
            sx: "auto",
            md: "92vh",
            borderRight: "1px solid #3d3d3d",
            padding: "0px 24px",
            marginRight: "10px",
          },
        }}
      >
        <SideBar setselected={setselected} selected={selected} />
        <Typography
          variant="body2"
          color="secondary"
          className="copyright"
          sx={{
            display: {
              md: "block",
              xs: "none",
            },
          }}
        >
          CopyRight Akhil 2022
        </Typography>
      </Box>
      {isloading ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flex:1
          }}
        >
          <CircularProgress color="error" />
        </Box>
      ) : (
        <Box
          sx={{
            overflow: "auto",
            height: "92vh",
          }}
          flexGrow={2}
          p={2}
        >
          <Typography variant="h4" fontWeight="bold" mb={2} color="secondary">
            {selected}
            <span
              style={{
                color: "#f31503",
                marginLeft: "4px",
              }}
            >
              videos
            </span>
          </Typography>
          <Videos data={Data} />
        </Box>
      )}
    </Stack>
  );
};

export default Feed;
