import { Stack, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import CardVideo from "./CardVideo";
import HomeIcon from "@mui/icons-material/Home";

import Videos from "./Videos";
const History = () => {
  const [data, setdata] = useState(null);
  useEffect(() => {
    const get = JSON.parse(localStorage.getItem("history"));
    // console.log(get);
    setdata(get);
  }, []);
  function deletehandlder() {
    localStorage.removeItem("history");
    setdata(null);
  }
  return (
    <Stack
      style={{
        height: "92vh",
        overflow: "auto",
      }}
    >
      <Stack direction="row">
        <NavLink to="/">
          <button
            className="category-btn"
            style={{
              color: "white",
            }}
          >
            <span
              style={{
                color: "white",
              }}
            >
              <HomeIcon />
            </span>
            Home{" "}
          </button>
        </NavLink>
        <button
          className="category-btn"
          style={{
            color: "white",
          }}
          onClick={deletehandlder}
        >
          Clear History
        </button>
      </Stack>
      {data ? (
        <Videos data={data} />
      ) : (
        <Typography variant="h2" color="secondary">
          This list has no videos
        </Typography>
      )}
    </Stack>
  );
};

export default History;
