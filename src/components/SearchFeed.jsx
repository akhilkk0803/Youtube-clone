import React from "react";
import Typography from "@mui/material/Typography";
import { useState, useEffect } from "react";
import { Stack, Box } from "@mui/material";
import SideBar from "./SideBar";
import Videos from "./Videos";
import { apiData } from "../utils/fetchFromApi";
import { useParams } from "react-router";
const SearchFeed = () => {
  const { searchid } = useParams();
  const [Data, setData] = useState([]);
  useEffect(() => {
    const data = apiData(`search?part=snippet&q=${searchid}`).then((data) => {
      setData(data.items);
    });
  }, [searchid]);
  return (
    <Box
      sx={{
        overflow: "auto",
        height: "92vh",
      }}
      flexGrow={2}
      p={2}
    >
      <Typography variant="h4" fontWeight="bold" mb={2} color="secondary">
        Search results for {searchid}
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
  );
};

export default SearchFeed;
