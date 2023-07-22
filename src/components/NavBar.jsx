import React from "react";
import { Box, AppBar, Toolbar, Typography, Stack, Button } from "@mui/material";
import { logo } from "../utils/constants";
import { NavLink } from "react-router-dom";
import SearchBar from "./SearchBar";
const NavBar = () => {
  return (
    <AppBar position="sticky" color="primary" sx={{
      marginBottom:"20px"
    }}>
      <Toolbar
        sx={{
          minHeight: "70px",
          marginTop: "10px",
        }}
      >
        <Box flexGrow={0.9}>
          <NavLink to="/">
            <img src={logo} height={45} alt="logo" />
          </NavLink>
        </Box>
        <SearchBar />
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
