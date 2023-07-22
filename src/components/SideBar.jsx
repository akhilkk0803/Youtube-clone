import React from "react";
import { categories } from "../utils/constants";
import { Stack, Button, Typography, IconButton } from "@mui/material";
import { useState } from "react";
const SideBar = ({ selected, setselected }) => {
  return (
    <Stack
      direction="row"
      sx={{
        overflow: "auto",
        height: {
          md: "95%",
          sx: "auto",
        },
        flexDirection: {
          md: "column",
        },
      }}
    >
      {categories.map((cat) => {
        return (
          <button
            className="category-btn "
            style={{
              backgroundColor: cat.name === selected && "#fc1503",
              color: "white",
            }}
            onClick={() => {
              setselected(cat.name);
            }}
            key={cat.name}
          >
            <span
              style={{
                color: selected === cat.name ? "white" : "#fc1503",
              }}
            >
              {cat.icon}
            </span>
            <span
              style={{
                opacity: selected === cat.name ? "1" : "0.8",
              }}
            >
              {cat.name}
            </span>
          </button>
        );
      })}
    </Stack>
  );
};

export default SideBar;
