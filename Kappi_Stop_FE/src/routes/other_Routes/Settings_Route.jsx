import React from "react";
import { Routes, Route } from "react-router-dom";
import User_Settings from "../../pages/settings/user/User_Settings";
import Edit_User_Settings from "../../pages/settings/user/Edit_User_Settings";
import Roles_Settings from "../../pages/settings/roles/Roles_Settings";

const Settings_Route = () => {
  return (
    <Route path="/settings">
      <Route path="user">
        <Route index element={<User_Settings />} />
        <Route path="edit_user_setting" element={<Edit_User_Settings />} />
      </Route>
      <Route path="roles" element={<Roles_Settings />} />
    </Route>
  );
};

export default Settings_Route;
