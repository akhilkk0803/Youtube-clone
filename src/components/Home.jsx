import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import { Box } from "@mui/material";
const Home = () => {
  return (
    <Box sx={{
      backgroundColor:'#000'
    }}>
      <NavBar />
      <Outlet />
    </Box>
  );
};

export default Home;
