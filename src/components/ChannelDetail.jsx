import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Videos from "./Videos";
import CardChannel from "./CardChannel";
import { Box } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

import { apiData } from "../utils/fetchFromApi";
import CardVideo from "./CardVideo";
const ChannelDetail = () => {
  const [channeldata, setdata] = useState({});
  const [videos, setvideos] = useState([]);
  const { id } = useParams();
  const [isloading, setisloading] = useState(true);

  useEffect(() => {
    setisloading(true);
    apiData(`channels?part=snippet%2Cstatistics&id=${id}`).then((data) => {
      setdata(data?.items[0]);
    });
    apiData(
      `search?channelId=${id}&part=snippet%2Cid&order=date&maxResults=50`
    ).then((data) => {
      setvideos(data?.items);
      setisloading(false);
    });
  }, [id]);
  console.log(channeldata);
  console.log(videos);
  return (
    <Box minHeight="95vh">
      <div
        style={{
          background:
            "linear-gradient(90deg, rgba(0,238,252,1) 31%, rgba(20,185,237,1) 46%, rgba(217,91,172,1) 94%)",
          zIndex: 10,
          height: "300px",
        }}
      />

      <CardChannel channel={channeldata} margintop="-93px" />
      {isloading ? (
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
        <Box display="flex" p={2}>
          <Box
            sx={{
              mr: {
                sm: "100px",
              },
            }}
          />
          <Videos data={videos} />
        </Box>
      )}
    </Box>
  );
};

export default ChannelDetail;
