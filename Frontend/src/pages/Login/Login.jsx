import React from "react";
// import { AuthContext } from "../../context/AuthContext";
// import { loginAuth } from "../../utils/api/auth.api";

const Login = () => {
  return (
    <div className="w-screen h-screen bg-customDarkViolet flex items-center justify-center">
      <div className="w-[70%] h-[70%] flex">
        <div className="flex flex-col justify-center" style={{ flex: 1 }}>
          <h1 className="font-extrabold text-3xl text-violet-500">
            Shake Hands
          </h1>
          <span className="text-lg font-semibold text-white">
            Connect With Friends On Shake Hands.
          </span>
        </div>
        <div className="flex flex-col justify-center" style={{ flex: 1 }}>
          <form>
            <div className="bg-white h-[300px] p-[20px] rounded-md flex flex-col justify-between shadow-lg">
              <input
                type="email"
                placeholder="email"
                className="h-[50px] rounded-md border border-gray-200 text-lg p-[20px] focus:outline-none"
              />
              <input
                type="password"
                placeholder="password"
                className="h-[50px] rounded-md border border-gray-200 text-lg p-[20px] focus:outline-none"
              />
              <button className="h-[50px] w-1/2 rounded-lg bg-green-600 hover:bg-green-700 transition text-white text-lg font-bold self-center">
                Login
              </button>
              <span className="text-center text-violet-700 cursor-pointer">
                forgot password?
              </span>
              <button className="h-[50px] w-1/2 rounded-lg bg-blue-600 hover:bg-blue-700 transition text-white text-lg font-bold self-center">
                New User
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
