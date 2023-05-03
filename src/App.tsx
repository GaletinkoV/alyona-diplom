import React from "react";
import { Global } from "@emotion/react";
import { RecoilRoot } from "recoil";

import Router from "./router";

import "antd/dist/reset.css";

import { globalStyles } from "./App.styled";

function App() {
  return (
    <RecoilRoot>
      <Global styles={globalStyles} />
      <Router />
    </RecoilRoot>
  );
}

export default App;
