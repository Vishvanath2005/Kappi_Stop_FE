import React from "react";
import { Route } from "react-router";
import Login from "../pages/auth/Login";

const Auth_Route = () => {
  return (
    <>
      <Route path="/" element={<Login />} />
    </>
  );
};

export default Auth_Route;
