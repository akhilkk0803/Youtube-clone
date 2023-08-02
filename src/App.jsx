import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  Feed,
  Home,
  VideoDetail,
  SearchFeed,
  ChannelDetail,
} from "./components/index";
import History from "./components/History";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Error from "./components/Error";
import { useSelector, UseSelector } from "react-redux/es/hooks/useSelector";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Feed />,
      },
      {
        path: "video/:id",
        element: <VideoDetail />,
      },
      {
        path: "channel/:id",
        element: <ChannelDetail />,
      },
      {
        path: "search/:searchid",
        element: <SearchFeed />,
      },
      {
        path: "history",
        element: <History />,
      },
    ],
  },
]);

const App = () => {
  const mode = useSelector((state) => state.mode.isDark);
  const theme = createTheme({
    palette: {
      primary: {
        main: mode ? "#000" : "#fff",
      },
      secondary: {
        main: mode ? "#fff" : "#000",
        dark: mode ? "#efefef" : "#000",
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default App;
