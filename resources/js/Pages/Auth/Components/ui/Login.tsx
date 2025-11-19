import { useForm } from "@inertiajs/react";

const Login = () => {
  const {data, setData, post, processing, errors} = useForm({
    email: '',
    password: '',
    remember: false,
});
  
  const handleSubmit = ( e?:any ) => {
    e.preventDefault();
    post(route('login'))
  }
    return (
      <form onSubmit={handleSubmit}>
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
            value={data.email}
            onChange={(e) => setData('email', e.target.value)}
          />
          {errors.email && <div className="text-sm text-red-600 mt-1">{errors.email}</div>}
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
            value={data.password}
            onChange={(e) => setData('password', e.target.value)}
          />
          {errors.password && <div className="text-sm text-red-600 mt-1">{errors.password}</div>}
        </p>
  
        {/* Login */}
        <p className="mt-3">
          <button type="submit" disabled={processing} className="w-full border font-medium rounded-lg py-2 bg-button-purple text-white hover:bg-button-purple/90">
            Sign In
          </button>
        </p>
  
        {/* Forget Password */}
        <p className="mt-3">
          <button className="w-full border font-medium rounded-lg py-2 bg-[#f5f7f9] text-black">
            Forgot Password?
          </button>
        </p>
      </form>
    );
  };
  
export default Login;