import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import image from './Asset/image.png';
import AOS from 'aos';  
import 'aos/dist/aos.css'; 

function CreatePassword() {
  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); 
  }, []);

  return (
    <div className="flex flex-col min-h-screen lg:flex-row justify-center items-center min-h-screen lg:gap-0 w-full gap-9 bg-gray-100">
      {/* Left Side with Image */}
      <div className="w-full lg:w-1/3 lg:h-screen flex flex-grow flex-col items-center justify-center" data-aos="fade-right">
        <img
          src={image}
          alt="Logo"
          className="h-48 w-full lg:h-full lg:w-full lg:rounded-none bg-red-100 lg:bg-red-100 object-cover"
        />
      </div>

      {/* Right Side with Form */}
      <div className="w-full lg:w-2/3 p-10 flex justify-center" data-aos="fade-left">
        <form className="space-y-4 w-full lg:w-3/5 lg:shadow-lg lg:p-5">
          <h2 className="text-start ml-10 text-4xl font-semibold" data-aos="fade-up">
            Create a Password
          </h2>
          <p className="ml-10 text-start mb-6 mt-3 text-gray-600 text-lg" data-aos="fade-up" data-aos-delay="200">
            Must be at least 8 characters
          </p>
          
          <div data-aos="fade-up" data-aos-delay="400">
            <label className="block text-black ml-10 font-semibold">
              Password <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              autoComplete="off"
              className="w-4/5 p-2 mb-4 ml-10 border-2 bg-transparent border-red-800 opacity-60 rounded"
            />
          </div>

          <div data-aos="fade-up" data-aos-delay="600">
            <label className="block text-black ml-10 font-semibold">
              Confirm Password <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              placeholder="Confirm your password"
              autoComplete="off"
              className="w-4/5 p-2 mb-4 ml-10 border-2 bg-transparent border-red-800 opacity-60 rounded"
            />
          </div>

          <label className="block ml-10 mb-4" data-aos="fade-up" data-aos-delay="800">
            <input
              type="checkbox"
              checked={checked}
              onChange={handleChange}
              className="mr-2"
            />
            I agree to the terms and conditions
          </label>

          <p className="mb-4 ml-10" data-aos="fade-up" data-aos-delay="1000">
            Already have an account? <Link to="/" className="text-red-500">Log In</Link>
          </p>

          <div className="w-4/5 ml-10 bg-red-800 text-red-200 text-lg p-2 rounded" data-aos="fade-up" data-aos-delay="1200">
            <button type="submit" className="w-full">
              <Link to="/" className="text-red-500">Sign Up</Link>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreatePassword;
