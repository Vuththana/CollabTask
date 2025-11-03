import { useState } from "react";
import Login from "./Login/Login";
import Register from "./Register/Register";

const AuthForm = () => {
  const [isAuth, setAuth] = useState(true);

  return (
    <div className="border px-5 py-4 rounded-md">
      <div className="">
        <h2 className="text-2xl font-bold">Get Started</h2>
        <p className="text-sm text-gray-400">
          Sign in to your account to continue
        </p>
      </div>

      {/* Login & Register Button */}
      <div className="flex justify-between border py-1 rounded-lg px-1 bg-[#f5f7f9] font-bold transition-all duration-300 relative overflow-hidden">
        <button
          className={`relative z-10 w-full py-1 rounded-lg transition-all duration-300 ${
            isAuth ? "text-gray-900" : "text-gray-500"
          }`}
          onClick={() => setAuth(true)}
        >
          Login
        </button>

        <button
          className={`relative z-10 w-full py-1 rounded-lg transition-all duration-300 ${
            !isAuth ? "text-gray-900" : "text-gray-500"
          }`}
          onClick={() => setAuth(false)}
        >
          Register
        </button>

        {/* Animated background indicator */}
        <span
          className={`absolute top-1 bottom-1 w-1/2 rounded-md bg-gray-200 transition-all duration-300 ${
            isAuth ? "left-1" : "left-[49%]"
          }`}
        ></span>
      </div>

      {/* Auth */}
      <div className="mt-3">{isAuth ? <Login /> : <Register />}</div>


    </div>
  );
};

export default AuthForm;
