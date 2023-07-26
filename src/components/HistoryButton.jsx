import React from "react";
import { NavLink } from "react-router-dom";
import HistoryIcon from "@mui/icons-material/History";
import { Box, Stack } from "@mui/material";
const HistoryButton = () => {
  return (
    <Box
      component="div"
      style={{
        display: "flex",
        justifyContent: "flex-end ",
        alignItems: "center",
        height:{
            md:'10px',
            sm:'15px'
        }
      }}
    >
      <NavLink to="/history">
        <button
          className="category-btn"
          style={{
            color: "white",
          }}
        >
          {" "}
          <span
            style={{
              color: "white",
            }}
          >
            <HistoryIcon />
          </span>
          History
        </button>
      </NavLink>
    </Box>
  );
};

export default HistoryButton;
