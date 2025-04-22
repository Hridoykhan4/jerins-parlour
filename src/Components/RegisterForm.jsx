import { FaFacebookF, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

const RegisterForm = () => {
  return (
    <div className="flex justify-center pb-6 items-center min-h-screen bg-base-100">
      <div className="w-full max-w-md p-8 border border-gray-300 rounded-lg shadow-sm bg-white">
        <h2 className="text-2xl font-semibold mb-6">Create an account</h2>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="First Name"
            className="input input-bordered w-full border-0 border-b border-gray-300 rounded-none focus:outline-none"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="input input-bordered w-full border-0 border-b border-gray-300 rounded-none focus:outline-none"
          />
          <input
            type="email"
            placeholder="Username or Email"
            className="input input-bordered w-full border-0 border-b border-gray-300 rounded-none focus:outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            className="input input-bordered w-full border-0 border-b border-gray-300 rounded-none focus:outline-none"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="input input-bordered w-full border-0 border-b border-gray-300 rounded-none focus:outline-none"
          />

          <button className="btn w-full bg-pink-500 hover:bg-pink-600 border-none text-white mt-2">
            Create an account
          </button>
        </form>

        <p className="text-center text-sm mt-4">
          Already have an account?{" "}
          <Link href="/login" className="text-pink-500 hover:underline">
            Login
          </Link>
        </p>

      
        <div className="flex items-center gap-2 my-4">
          <div className="border-b border-gray-300 w-full"></div>
          <span className="text-sm text-gray-400">Or</span>
          <div className="border-b border-gray-300 w-full"></div>
        </div>

        <div className="space-y-3">
          <button className="btn w-full rounded-full border border-gray-300">
            <FaFacebookF className="text-blue-600" />
            Continue with Facebook
          </button>
          <button className="btn w-full rounded-full border border-gray-300">
            <FaGoogle className="text-red-500" />
            Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
