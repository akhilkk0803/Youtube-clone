import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import { Box } from "@mui/material";
import HistoryIcon from "@mui/icons-material/History";
import HistoryButton from "./HistoryButton";

const Home = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#000",
      }}
    >
      <NavBar />
      <HistoryButton />
      <Outlet />
    </Box>
  );
};

export default Home;
