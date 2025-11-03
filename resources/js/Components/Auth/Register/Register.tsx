const Register = () => {
    return (
      <form>
        {/* Name */}
        <p>
          <label className="block font-[500] mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="h-10 w-full rounded-md border border-gray-300 text-base 
                           focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed
                         placeholder:text-gray-400 bg-background disabled:opacity-50 md:text-sm"
            type="text"
            placeholder="John Doe"
            name="name"
            id="name"
          />
        </p>

        {/* Email */}
        <p>
          <label className="block font-[500] mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="h-10 w-full rounded-md border border-gray-300 text-base 
                           focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed
                         placeholder:text-gray-400 bg-background disabled:opacity-50 md:text-sm"
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

        {/* Confirm Password */}
        <p className="mt-3">
          <label className="block font-[500] mb-2" htmlFor="confirmPassword">
            Confirm Password
          </label>
          <input
            className="h-10 w-full rounded-md border border-gray-300 text-base 
                           focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed
                         placeholder:text-gray-400 bg-background disabled:opacity-50 md:text-sm "
            type="password"
            placeholder="********"
            name="confirmPassword"
            id="confirmPassword"
          />
        </p>
  
        {/* Register */}
        <p className="mt-3">
          <button className="w-full border rounded-lg py-2 bg-button-purple text-white hover:bg-button-purple/90">
            Sign Up
          </button>
        </p>
  
      </form>
    );
  };
  
export default Register;