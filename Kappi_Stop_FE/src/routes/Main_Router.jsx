import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth_Route from "./other_Routes/Auth_Route";
import Layouts from "../layout/Layouts";
import Dashboard_Route from "./other_Routes/Dashboard_Route";
import User_Route from "./other_Routes/User_Route";
import Report_Route from "./other_Routes/Report_Route";
import Settings_Route from "./other_Routes/Settings_Route";

const Main_Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {Auth_Route()}
          <Route element={<Layouts />}>
            {Dashboard_Route()}
            {User_Route()}
            {Report_Route()}
            {Settings_Route()}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Main_Router;
