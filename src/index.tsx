import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./store/store";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
  /* outline: 1px solid red; */
}
`;

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Global />
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
