import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider as StoreProvider } from "react-redux";
import CssBaseline from "@material-ui/core/CssBaseline";
import ThemeProvider from "@material-ui/styles/ThemeProvider";

import { theme } from "./theme";
import store from "./store";
import reportWebVitals from "./reportWebVitals";

import App from "./App";

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <StoreProvider store={store}>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <CssBaseline />
            <App />
          </BrowserRouter>
        </ThemeProvider>
      </StoreProvider>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
