import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";

import "./index.css";
import App from "./components/App";

import { ThemeProvider, createTheme } from "@mui/material/styles";

const THEME = createTheme({
  typography: {
    fontFamily: `-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji`,
  },
  overrides: {
    MuiButton: {
      root: {
        margin: "5px 0 5px",
      },
    },
  },
});

const store = configureStore();

ReactDOM.render(
  <ThemeProvider theme={THEME}>
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>
  </ThemeProvider>,
  document.getElementById("root")
);


