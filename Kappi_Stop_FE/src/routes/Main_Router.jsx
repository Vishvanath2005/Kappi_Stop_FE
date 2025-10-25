import React from "react";
import { BrowserRouter, Routes } from "react-router-dom";
import Auth_Route from "./Auth_Route";

const Main_Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>{Auth_Route()}</Routes>
      </BrowserRouter>
    </>
  );
};

export default Main_Router;
