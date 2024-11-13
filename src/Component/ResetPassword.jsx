import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Import eye icons
import image from './Asset/image1.png';

function CreatePassword() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = {};

    if (!password) {
      validationErrors.password = 'This field is required';
    } else if (password.length < 8) {
      validationErrors.password = 'Password must be at least 8 characters';
    }

    if (!confirmPassword) {
      validationErrors.confirmPassword = 'This field is required';
    } else if (confirmPassword !== password) {
      validationErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log('Form submitted');
    }
  };

  return (
    <div className="flex justify-center gap-10 items-center min-h-screen w-full">
      <div className="w-1/2 relative">
        <img src={image} alt="Logo" className="fixed inset-0 h-full w-1/2 border rounded-50% bg-red-100 object-cover" />
      </div>

      <div className="w-1/2 items-center mx-10 justify-center">
        <h2 className="text-start ml-10 text-4xl font-semibold">Reset Password</h2>
        <p className="ml-10 text-start mb-6 mt-3 text-gray-600 text-lg">Must be at least 8 characters</p>
        <form onSubmit={handleSubmit} className="space-y-4 w-full">
          <div className="relative ml-10 w-3/5">
            <label className="block font-semibold">New Password</label>
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="knfhr34@-"
              autoComplete="off"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 mb-2 border-2 border-red-800 bg-transparent opacity-60 rounded"
            />
            <span
              className="absolute right-3 top-10 cursor-pointer text-gray-600"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
            {errors.password && <p className="text-red-600 text-sm">{errors.password}</p>}
          </div>

          <div className="relative ml-10 w-3/5">
            <label className="block font-semibold">Confirm Password</label>
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="knfhr34@-"
              autoComplete="off"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full p-2 mb-2 border-2 border-red-800 bg-transparent opacity-60 rounded"
            />
            <span
              className="absolute right-3 top-10 cursor-pointer text-gray-600"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
            {errors.confirmPassword && <p className="text-red-600 text-sm">{errors.confirmPassword}</p>}
          </div>

          <label className="block ml-10 mb-4">
            <input type="checkbox" className="mr-2" />
            I agree to the terms and conditions
          </label>

          <p className="mb-4 ml-10">
            Already have an account?{' '}
            <Link to="/" className="text-red-500">
              Log In
            </Link>
          </p>

          <div className="w-3/5 text-center bg-red-800 text-red-200 ml-10 p-2 rounded">
            <button type="submit" className="w-full">
              <Link to="/Password-changed">Sign Up</Link>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreatePassword;
