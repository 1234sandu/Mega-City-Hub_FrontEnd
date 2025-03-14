import React, { useState } from "react";
import { UserIcon, LockIcon, EyeIcon, EyeOffIcon, ArrowRightIcon } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../util/AuthContext";

const LoginForm = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(""); // Clear error when user starts typing
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const response = await axios.post(
        "http://localhost:8080/auth/login",
        formData
      );

      console.log("Login response:", response.data); // Debug log

      const { token, userId, role } = response.data;

      localStorage.setItem("jwtToken", token);
      localStorage.setItem("userId", userId);
      localStorage.setItem("role", role);

      login(token);

      // Navigate based on role
      switch (role) {
        case "ROLE_ADMIN":
          navigate("/AdminDashBoard");
          break;
        case "ROLE_CUSTOMER":
          navigate("/home");
          break;
        case "ROLE_DRIVER":
          navigate("/driver-dashboard");
          break;
        default:
          setError("Invalid user role");
      }
    } catch (error) {
      console.error("Login error:", error);

      if (error.response) {
        // Handle specific error responses from the server
        switch (error.response.status) {
          case 401:
            setError("Invalid email or password");
            break;
          case 404:
            setError("User not found");
            break;
          case 403:
            setError("Account is locked. Please contact support");
            break;
          default:
            setError("Login failed. Please try again later");
        }
      } else if (error.request) {
        setError("Cannot connect to server. Please check your internet connection");
      } else {
        setError("An unexpected error occurred. Please try again");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-md w-full bg-[#051b11] rounded-xl shadow-2xl overflow-hidden">
      <div className="px-8 pt-8 pb-6 text-center">
        <h2 className="text-3xl font-bold text-[#f2d94a] mb-2">Welcome Back</h2>
        <p className="text-gray-300 text-sm">Sign in to access your account</p>
      </div>
      <div className="h-1 w-full bg-gradient-to-r from-[#f2d94a] to-[#ffeb80]"></div>
      <form onSubmit={handleSubmit} className="px-8 pt-6 pb-8">
        {error && (
          <div className="mb-6 bg-red-900/30 backdrop-blur-sm border border-red-500/50 p-2 rounded-lg">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <svg
                  className="h-4 w-4 text-red-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="ml-2">
                <p className="text-xs font-medium text-red-300">{error}</p>
              </div>
            </div>
          </div>
        )}

        <div className="mb-6">
          <label
            className="block text-gray-300 text-sm font-medium mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <UserIcon className="h-5 w-5 text-gray-400" />
            </div>
            <input
              className="bg-[#0a2818] appearance-none border border-[#164430] rounded-lg w-full py-3 px-10 text-gray-200 leading-tight focus:outline-none focus:ring-2 focus:ring-[#f2d94a] focus:border-transparent transition-all duration-200"
              id="email"
              type="email"
              placeholder="your@email.com"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="mb-6">
          <label
            className="block text-gray-300 text-sm font-medium mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <LockIcon className="h-5 w-5 text-gray-400" />
            </div>
            <input
              className="bg-[#0a2818] appearance-none border border-[#164430] rounded-lg w-full py-3 px-10 text-gray-200 leading-tight focus:outline-none focus:ring-2 focus:ring-[#f2d94a] focus:border-transparent transition-all duration-200"
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-gray-400 hover:text-gray-200 focus:outline-none"
              >
                {showPassword ? (
                  <EyeOffIcon className="h-5 w-5" />
                ) : (
                  <EyeIcon className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>
        </div>

        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center">
            <input
              id="remember-me"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-600 text-[#f2d94a] focus:ring-[#f2d94a] bg-[#0a2818]"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <label
              htmlFor="remember-me"
              className="ml-2 block text-sm text-gray-300"
            >
              Remember me
            </label>
          </div>
          <div className="text-sm">
            <a
              href="#"
              className="font-medium text-[#f2d94a] hover:text-[#ffeb80] transition-colors"
            >
              Forgot password?
            </a>
          </div>
        </div>

        <div className="mb-6">
          <button
            type="submit"
            disabled={isLoading}
            className="group relative w-full flex justify-center py-3 px-4 border border-transparent rounded-lg text-[#051b11] bg-[#f2d94a] hover:bg-[#ffeb80] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#f2d94a] font-medium transition-all duration-200"
          >
            {isLoading ? (
              <svg
                className="animate-spin h-5 w-5 text-[#051b11]"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            ) : (
              <>
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <ArrowRightIcon className="h-5 w-5 text-[#051b11] group-hover:translate-x-1 transition-transform duration-200" />
                </span>
                Sign in
              </>
            )}
          </button>
        </div>

        <div className="text-center">
          <p className="text-sm text-gray-400">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="font-medium text-[#f2d94a] hover:text-[#ffeb80] transition-colors"
            >
              Sign up
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;