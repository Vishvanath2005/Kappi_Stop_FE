import React from "react";
import { Route, Routes } from "react-router";
import User_Settings from "../../pages/settings/user/User_Settings";
import Edit_User_Settings from "../../pages/settings/user/Edit_User_Settings";

const Settings_Route = () => {
  return (
    <>
        <Route path="/settings">
          <Route path="user">
            <Route index element={<User_Settings />} />
            <Route path="edit_user_setting" element={<Edit_User_Settings />} />
          </Route>
        </Route>
    </>
  );
};

export default Settings_Route;
