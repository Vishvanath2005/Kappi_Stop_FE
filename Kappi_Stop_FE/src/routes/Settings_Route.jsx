import React from "react";
import { Route } from "react-router";
import User_Settings from "../pages/settings/user/User_Settings";

const Settings_Route = () => {
  return (
    <>
      <Route path="/settings">
        <Route path="user">
          <Route index element={<User_Settings />} />
        </Route>
      </Route>
    </>
  );
};

export default Settings_Route;
