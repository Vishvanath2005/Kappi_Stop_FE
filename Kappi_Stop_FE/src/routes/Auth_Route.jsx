import React from "react";
import { Route } from "react-router";
import Login from "../pages/auth/Login";
import Forgot_Password from "../pages/auth/Forgot_Password";

const Auth_Route = () => {
  return (
    <>
      <Route path="/" element={<Login />} />
      <Route path="/forgot_password" element={<Forgot_Password />} />
    </>
  );
};

export default Auth_Route;
