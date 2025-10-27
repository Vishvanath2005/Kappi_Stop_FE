import React, { useState } from "react";
import { IoEye, IoEyeOff } from "react-icons/io5";

export const InputField = ({
  label,
  name,
  register,
  errors,
  placeholder,
  type = "text",
  options = [],
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="grid grid-cols-12 items-center gap-x-10">
      <label className="col-span-5 text-sm font-medium">{label}</label>

      {type === "select" ? (
        <select
          defaultValue=""
          {...register(name)}
          className={`col-span-7 border border-input-bordergrey rounded-lg outline-none py-2.5 pl-2 text-xs font-light 
          ${errors[name] ? "border-red-500" : ""}`}
        >
          <option value="" disabled>
            {placeholder}
          </option>
          {options?.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ) : type === "password" ? (
        <div className="col-span-7 relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder={placeholder}
            {...register(name)}
            className={`w-full border border-input-bordergrey rounded-lg outline-none py-2 px-2 pr-10 placeholder:text-xs placeholder:font-semibold placeholder:text-gray-400 
            ${errors[name] ? "border-red-500" : ""}`}
          />
          <span
            className="absolute right-3 top-3.5 cursor-pointer text-gray-500"
            onClick={() => setShowPassword((prev) => !prev)}
          >
            {showPassword ? <IoEyeOff size={18} /> : <IoEye size={18} />}
          </span>
        </div>
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          {...register(name)}
          className={`col-span-7 border border-input-bordergrey rounded-lg outline-none py-2 px-2 placeholder:text-xs placeholder:font-semibold placeholder:text-gray-400
          ${errors[name] ? "border-red-500" : ""}`}
        />
      )}

      {errors[name] && (
        <p className="text-red-500 text-xs col-span-12 text-end pt-1.5">
          {errors[name].message}
        </p>
      )}
    </div>
  );
};