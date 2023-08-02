import React from "react";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";
import { useNavigate } from "react-router";
import { Button } from "@mui/material";
import { modeactions } from "../store/mode";
import Stack from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
const SearchBar = () => {
  const dispatch = useDispatch();
  const mode = useSelector((state) => state.mode.isDark);
  const [search, setsearch] = useState("");
  const navigate = useNavigate();
  function submithandler(e) {
    e.preventDefault();
    if (search) {
      navigate(`/search/${search}`);
      setsearch("");
    }
  }
  function modehandler() {
    dispatch(modeactions.toggleMode());
  }
  return (
    <>
      <Paper
        sx={{
          borderRadius: "40px",
        }}
        component="form"
        onSubmit={submithandler}
      >
        <TextField
          id="search"
          label="Search"
          variant="filled"
          value={search}
          onChange={(e) => setsearch(e.target.value)}
          sx={{
            width: {
              sm: "400px",
              xs: "200px",
              outline: "none",
            },
          }}
          fullWidth
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Button type="submit" onClick={submithandler}>
                  <IconButton
                    size="small"
                    sx={{
                      color: "red",
                    }}
                  >
                    <SearchIcon />
                  </IconButton>
                </Button>
              </InputAdornment>
            ),
            disableUnderline: true,
            disableInjectingGlobalStyles: true,
          }}
        />
      </Paper>
      {/* <Box component="div" onClick={modehandler}>
        <Typography variant="h4" color="secondary">
          {mode ? "Light" : "Dark"} mode
        </Typography>
      </Box> */}
    </>
  );
};

export default SearchBar;
