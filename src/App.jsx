import React from "react";
import Wave from "react-wavify";
import { useState } from "react";
import "./App.css";
import Message from "./text";
import Wavo from "./wavo";

function App() {
  return (
    <>
      <Message />

      <Wavo />
    </>
  );
}

export default App;
