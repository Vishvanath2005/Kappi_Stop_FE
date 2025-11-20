import React, { useState } from "react";
import { IoEye, IoEyeOff } from "react-icons/io5";

export const InputField = ({
  label,
  name,
  register,
  errors,
  bg_color,
  width,
  text_size = "text-sm",
  gap = "gap-x-10",
  placeholder,
  type = "text",
  options = [],
  multiple = false, // NEW: allow multiple file uploads
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={`grid grid-cols-12 items-center ${gap}`}>
      <label className={`col-span-5 ${text_size} font-medium`}>
        {label}
      </label>

      {/* Dropdown Select */}
      {type === "select" ? (
        <select
          defaultValue=""
          {...register(name)}
          className={`col-span-7 ${bg_color} ${width} border border-input-bordergrey rounded-lg outline-none py-2.5 pl-2 text-xs font-light 
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
        // Password Input with Show/Hide
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

      ) : type === "file" ? (
        // NEW FILE UPLOAD INPUT
        <input
          type="file"
          {...register(name)}
          multiple={multiple}
          className={`col-span-7 border border-input-bordergrey rounded-lg outline-none py-3 px-2 text-xs font-semibold text-gray-600
          ${errors[name] ? "border-red-500" : ""}`}
        />

      ) : (
        // Normal Text/Number Inputs
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
