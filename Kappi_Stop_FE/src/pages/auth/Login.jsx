import React, { useState } from "react";
import Auth_Screens from "../../components/auth_component/Auth_Screens";
import Auth_Inputs from "../../components/auth_component/Auth_Inputs";

const Login = () => {
  const [LoginData, setLoginData] = useState({ email: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login details:", LoginData);
  };

  return (
    <Auth_Screens
      auth_title="Login"
      auth_body={
        <form onSubmit={handleSubmit}>
          <Auth_Inputs
            label="Email ID"
            type="email"
            placeholder="Enter email or phone number"
            onChange={(e) =>
              setLoginData({ ...LoginData, email: e.target.value })
            }
            value={LoginData.email}
          />
          <Auth_Inputs
            label="Password"
            type="password"
            placeholder="Enter Password"
            onChange={(e) =>
              setLoginData({ ...LoginData, password: e.target.value })
            }
            value={LoginData.password}
          />
          <p className="text-right text-sm cursor-pointer hover:underline">
            Forgot Password?
          </p>
          <label className="px-1.5 space-y-3 my-5">
            <input type="checkbox" /> Remember me
          </label>
          <button
            type="submit"
            className="cursor-pointer text-white bg-layout-text text-center w-full py-2 my-3 rounded-md text-lg font-semibold transition duration-200"
          >
            Login
          </button>
          <p className="text-center cursor-pointer text-sm">
            Don’t have an account?{" "}
            <span className="hover:underline font-semibold">Sign up</span>
          </p>
        </form>
      }
    />
  );
};

export default Login;
