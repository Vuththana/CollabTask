import { useForm } from "@inertiajs/react";

const Register = () => {
  const {data, setData, post, processing, errors} = useForm({
    name: '',
    email: '',
    password: '',
    password_confirmation : '',
  })

  const handleRegister = (e?:any) => {
    e.preventDefault()
    post(route('register'))
  }

    return (
      <form onSubmit={handleRegister}>
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
            value={data.name}
            onChange={(e) => setData('name', e.target.value)}
          />
          {errors.name && <div className="text-sm text-red-600 mt-1">{errors.name}</div>}
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
            name="password_confirmation "
            id="password_confirmation "
            value={data.password_confirmation }
            onChange={(e) => setData('password_confirmation', e.target.value)}
          />
          {errors.password_confirmation  && <div className="text-sm text-red-600 mt-1">{errors.password_confirmation }</div>}
        </p>
  
        {/* Register */}
        <p className="mt-3">
          <button type="submit" disabled={processing} className="w-full border font-medium rounded-lg py-2 bg-button-purple text-white hover:bg-button-purple/90">
            Sign Up
          </button>
        </p>
  
      </form>
    );
  };
  
export default Register;