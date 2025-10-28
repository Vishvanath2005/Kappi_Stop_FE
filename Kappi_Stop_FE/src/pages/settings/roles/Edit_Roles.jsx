import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "../../../components/Button";
import { IoSave } from "react-icons/io5";

const Edit_Roles = () => {
  const { handleSubmit } = useForm();

  const settingsData = [
    "Dashboard",
    "GMD",
    "Leads",
    "CMS",
    "Appointment",
    "Finance",
    "Reports",
    "Subscribers",
    "Subscription",
    "Settings",
  ];

  const permissionTypes = ["All", "View", "Create", "Edit", "Delete", "Download"];

  const [checkedSettings, setCheckedSettings] = useState({});

  const handleSettingChange = (setting) => {
    setCheckedSettings((prev) => ({
      ...prev,
      [setting]: !prev[setting],
    }));
  };

  const handlePermissionChange = (setting, perm) => {
    setCheckedSettings((prev) => {
      const current = prev[setting] || {};
      let updatedPerms = { ...current };

      // If "All" is clicked
      if (perm === "All") {
        const newState = !current["All"];
        permissionTypes.forEach((p) => {
          updatedPerms[p] = newState;
        });
      } else {
        updatedPerms[perm] = !current[perm];
        const allChecked = permissionTypes
          .filter((p) => p !== "All")
          .every((p) => updatedPerms[p]);
        updatedPerms["All"] = allChecked;
      }

      return { ...prev, [setting]: updatedPerms };
    });
  };

  const onSubmit = (data) => {
    console.log("Form Submitted:", data);
  };

  return (
    <>
      <div className="flex justify-between items-center">
        <div className="font-roboto-flex flex flex-col">
          <p className="space-x-1">
            <span>Settings</span>
            <span>/ Roles</span>
          </p>
          <p className="text-xl font-semibold">Edit Roles</p>
        </div>
        <Button
          button_icon={<IoSave size={20} />}
          button_name="Save"
          bgColor="bg-layout-text"
          textColor="text-white"
          paddingX="px-4"
        />
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col lg:flex-row lg:items-center gap-6 m-4"
      >
        <div className="flex gap-3 items-center">
          <span className="font-semibold">Role</span>
          <select className="w-60 px-3 py-2 drop-shadow-sm text-sm rounded-md outline-none bg-white text-black border border-gray-200 focus:ring-2 focus:ring-blue-500">
            <option value="">Select Role</option>
            <option value="admin">Admin</option>
            <option value="manager">Manager</option>
            <option value="bd">Business Developer</option>
            <option value="executive">Executive</option>
          </select>
        </div>

        <div className="w-full flex gap-3 items-center">
          <span className="font-semibold">Created By</span>
          <p className="w-60 px-3 py-2 drop-shadow-sm text-sm rounded-md outline-none bg-white text-black">
            Super Admin
          </p>
        </div>
      </form>
      <div className="bg-white p-7 rounded-md drop-shadow-sm">
        <div className="grid grid-cols-12 ">
          <div className="col-span-3 text-lg font-semibold text-center pb-3 border-r">
            Settings
          </div>
          <div className="col-span-9 text-lg font-semibold pl-10">
            Permissions
          </div>
        </div>
        {settingsData.map((setting, sIndex) => (
          <div
            key={sIndex}
            className="grid grid-cols-12 items-center "
          >
            <div className="col-span-3 flex items-center pl-5 gap-3 py-2.5 border-r">
              <input
                type="checkbox"
                name={setting.toLowerCase()}
                checked={!!checkedSettings[setting]}
                onChange={() => handleSettingChange(setting)}
                className="size-4 accent-layout-text cursor-pointer"
              />
              <p className="font-medium">{setting}</p>
            </div>
            <div className="col-span-9 flex justify-start gap-6 pl-10 py-2.5">
              {permissionTypes.map((perm, pIndex) => (
                <div
                  key={pIndex}
                  className={`flex gap-2 items-center transition-all duration-200 ${
                    checkedSettings[setting]
                      ? "opacity-100"
                      : "hidden"
                  }`}
                >
                  <input
                    type="checkbox"
                    name={`${setting.toLowerCase()}_${perm.toLowerCase()}`}
                    checked={checkedSettings[setting]?.[perm] || false}
                    onChange={() => handlePermissionChange(setting, perm)}
                    className="size-4 accent-layout-text cursor-pointer"
                  />
                  <p className="font-medium">{perm}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Edit_Roles;
