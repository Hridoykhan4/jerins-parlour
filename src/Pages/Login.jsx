import { Link } from "react-router-dom";
import Logo from "../Components/Logo";
import googleLogo from "../assets/icons/Group 573.png";
const Login = () => {
  return (
    <div className="flex justify-center items-center h-screen flex-col text-center">
      <Logo></Logo>

      {/* Login Section */}
      <div className="space-y-3">
        <h2 className="font-semibold text-lg text-center pt-10">Login With</h2>
        <button className="btn btn-wide border-gray-300 rounded-l-full rounded-r-full">
          <img className="w-5 h-5 " src={googleLogo} alt="" />
          <span className="text-xs">Continue with Google</span>
        </button>
        <p>Don't have an account? <Link to="/register" className="link text-pink-500">Create an account</Link></p>
      </div>
    </div>
  );
};

export default Login;
