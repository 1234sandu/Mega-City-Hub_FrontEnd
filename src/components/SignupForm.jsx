import React, { useState } from 'react';
import { FormInput } from './FormInput';
import { UserIcon, MailIcon, LockIcon, ArrowRightIcon } from 'lucide-react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const SignupForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [isLoading, setIsLoading] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const validate = () => {
    const newErrors = {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    };

    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    return !Object.values(newErrors).some((error) => error);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsLoading(true);
    setSubmitError('');

    try {
      const customerData = {
        customerName: formData.name,
        email: formData.email,
        password: formData.password,
        role: 'Customer', // Default role for new customers
      };

      const response = await axios.post(
        'http://localhost:8080/createCustomer',
        customerData
      );

      console.log('Customer created:', response.data);

      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
      });

      // Redirect to login page or dashboard
      navigate('/login'); // Adjust the route as needed
    } catch (error) {
      console.error('Error creating customer:', error);
      if (error.response) {
        setSubmitError(error.response.data.message || 'Failed to create customer');
      } else if (error.request) {
        setSubmitError('Cannot connect to server. Please check your internet connection');
      } else {
        setSubmitError('An unexpected error occurred. Please try again');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md bg-emerald-900 rounded-xl shadow-xl overflow-hidden">
      <div className="px-8 pt-8 pb-6 bg-emerald-800 rounded-t-xl">
        <h2 className="text-2xl font-bold text-yellow-300 text-center">
          Create Account
        </h2>
        <p className="text-emerald-100 text-center mt-2">
          Join us today and start your journey
        </p>
      </div>
      <form onSubmit={handleSubmit} className="px-8 py-6 space-y-4">
        {submitError && (
          <div className="bg-red-900/30 backdrop-blur-sm border border-red-500/50 p-2 rounded-lg">
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
                <p className="text-xs font-medium text-red-300">{submitError}</p>
              </div>
            </div>
          </div>
        )}

        <FormInput
          label="Full Name"
          name="name"
          type="text"
          icon={<UserIcon className="h-5 w-5 text-emerald-600" />}
          value={formData.name}
          onChange={handleChange}
          error={errors.name}
          placeholder="Cab Rent"
        />
        <FormInput
          label="Email Address"
          name="email"
          type="email"
          icon={<MailIcon className="h-5 w-5 text-emerald-600" />}
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
          placeholder="john@example.com"
        />
        <FormInput
          label="Password"
          name="password"
          type="password"
          icon={<LockIcon className="h-5 w-5 text-emerald-600" />}
          value={formData.password}
          onChange={handleChange}
          error={errors.password}
          placeholder="••••••••"
        />
        <FormInput
          label="Confirm Password"
          name="confirmPassword"
          type="password"
          icon={<LockIcon className="h-5 w-5 text-emerald-600" />}
          value={formData.confirmPassword}
          onChange={handleChange}
          error={errors.confirmPassword}
          placeholder="••••••••"
        />
        <button
          type="submit"
          disabled={isLoading}
          className="w-full py-3 px-4 bg-yellow-500 hover:bg-yellow-400 text-emerald-900 font-medium rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
        >
          {isLoading ? (
            <svg
              className="animate-spin h-5 w-5 text-emerald-900"
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
              Sign Up
              <ArrowRightIcon className="h-5 w-5" />
            </>
          )}
        </button>
      </form>
      <div className="px-8 py-4 bg-emerald-800/50 border-t border-emerald-700">
        <p className="text-emerald-100 text-center text-sm">
          Already have an account?
          <a
            href="/login"
            className="text-yellow-300 hover:text-yellow-200 ml-1 font-medium"
          >
            Sign in
          </a>
        </p>
      </div>
    </div>
  );
};