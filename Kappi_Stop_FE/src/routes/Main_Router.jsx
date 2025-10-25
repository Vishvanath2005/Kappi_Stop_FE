import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth_Route from "./Auth_Route";
import Layouts from "../layout/Layouts";
import Dashboard_Route from "./Dashboard_Route";
import User_Route from "./User_Route";

const Main_Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {Auth_Route()}
          <Route element={<Layouts />}>
            {Dashboard_Route()}
            {User_Route()}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Main_Router;
