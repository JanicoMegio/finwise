import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; 
import Logo from "../assets/images/Logo.png"
import facebook from "../assets/images/icons/facebook.png";
import google from "../assets/images/icons/google.png";
import twitter from "../assets/images/icons/twitter.png";
import LoadingScreen from "../components/LoadingScreen.jsx";

function Login() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setData({ message: "Data loaded!" });
      setIsLoading(false);
    }, 1000);
  }, []);

  const handleLogin = (event) => {
    event.preventDefault();  
    navigate("/dashboard");

  };
  if (isLoading) {
    return <LoadingScreen />;
  }
  return (
    <div className="login-container">
    <div className="login-box">
      <img src={Logo} className="brand" alt="Logo" />
      <form onSubmit={handleLogin}>  {/* Attach handleLogin to form submit */}
        <div className="form-group mb-3">
          <input
            type="email"
            className="form-control"
            placeholder="Username or Email"
            required
          />
        </div>
        <div className="form-group mb-3">
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            required
          />
          <a href="#" className="forgot-password w-100 float-right mb-4">
            Forget Password?
          </a>
        </div>
        <button
          type="submit"
          className="btn btn-primary align-items-center justify-content-center mx-auto px-5"
        >
          Log in
        </button>
      </form>
      <p className="text-center mt-3">or Signing Up Using</p>
      <div className="social-login text-center">
        <a href="#" className="social-icon">
          <img src={facebook} alt="Facebook" />
        </a>
        <a href="#" className="social-icon">
          <img src={twitter} alt="Twitter" />
        </a>
        <a href="#" className="social-icon">
          <img src={google} alt="Google" />
        </a>
      </div>
    </div>
  </div>
  );
}

export default Login;
