const Login = () => {
    return (
      <form>
        {/* Email */}
        <p>
          <label className="block font-[500] mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="h-10 w-full rounded-md border border-gray-300 text-base 
                           focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed
                         placeholder:text-gray-400 bg-background disabled:opacity-50 md:text-sm "
            type="email"
            placeholder="name@example.com"
            name="email"
            id="email"
          />
        </p>
  
        {/* Password */}
        <p className="mt-3">
          <label className="block font-[500] mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="h-10 w-full rounded-md border border-gray-300 text-base 
                           focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed
                         placeholder:text-gray-400 bg-background disabled:opacity-50 md:text-sm "
            type="password"
            placeholder="********"
            name="password"
            id="password"
          />
        </p>
  
        {/* Login */}
        <p className="mt-3">
          <button className="w-full border rounded-lg py-2 bg-button-purple text-white hover:bg-button-purple/90">
            Sign In
          </button>
        </p>
  
        {/* Forget Password */}
        <p className="mt-3">
          <button className="w-full border rounded-lg py-2 bg-[#f5f7f9] text-black">
            Forgot Password?
          </button>
        </p>
      </form>
    );
  };
  
export default Login;