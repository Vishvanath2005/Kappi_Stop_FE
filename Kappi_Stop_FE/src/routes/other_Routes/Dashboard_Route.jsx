import React from "react";
import { Route } from "react-router";
import Dashboard from "../../pages/dashboard/Dashboard";

const Dashboard_Route = () => {
  return (
    <>
      <Route path="/dashboard" element={<Dashboard />} />
    </>
  );
};

export default Dashboard_Route;
