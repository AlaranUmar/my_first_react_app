import { useState } from "react";
import { FaEnvelope, FaKey, FaEye, FaEyeSlash, FaUser } from "react-icons/fa";
function Input({
  className = "",
  type = "text",
  placeholder = "",
  label = "",
  value,
  onChange,
  autoComplete
}) {
  const [showPassword, setShowPassword] = useState(false);
  const inputType = type === "password" && showPassword ? "text" : type;
  const IconComponent =
    type === "password" ? FaKey : type === "text" ? FaUser : FaEnvelope;
  return (
    <div className="flex">
      <div className="flex w-1/1 items-center">
        <label
          htmlFor={label}
          className="w-1/4  flex items-center gap-1 text-gray-800 font-mono text-lg font-semibold"
        >
          {<IconComponent className="text-xl text-cyan-800" />}
          {label}
        </label>
        <div className="relative flex bg-slate-200 border-b-2 border-gray-300 focus-within:border-blue-300 w-3/4 rounded-lg px-3 py-1 lowercase text-slate-700 font-mono items-center ">
          <input
            id={label}
            type={inputType}
            className={`focus:outline-none w-full  ${className}`}
            placeholder={placeholder}
            onChange={onChange}
            value={value}
            required
            autoComplete={autoComplete}
          />
          {type === "password" &&
            (showPassword ? (
              <FaEye
                className="w-8 cursor-pointer absolute right-0 mr-2 text-xl text-cyan-800"
                onClick={() => {
                  setShowPassword(false);
                }}
              />
            ) : (
              <FaEyeSlash
                className="w-8 cursor-pointer absolute right-0 mr-2 text-xl text-cyan-800"
                onClick={() => {
                  setShowPassword(true);
                }}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default Input;
