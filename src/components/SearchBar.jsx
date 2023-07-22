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
const SearchBar = () => {
  const [search, setsearch] = useState("");
  const navigate = useNavigate();
  function submithandler(e) {
    e.preventDefault();
    if (search) {
      navigate(`/search/${search}`);
      setsearch("");
    }
  }
  return (
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
  );
};

export default SearchBar;
