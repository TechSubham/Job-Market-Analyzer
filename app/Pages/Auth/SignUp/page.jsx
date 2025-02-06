import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faLock, } from '@fortawesome/free-solid-svg-icons';

export default function Signup() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-4xl flex items-center">
        {/* Left Section */}
        <div className="w-1/2">
          {/* Top SVG Icon */}
          <div className="flex justify-center mb-6">
            <FontAwesomeIcon
              icon={faUser}
              className="text-blue-600 size-11"
            />
          </div>
          <h1 className="font-sans text-3xl font-bold text-center mb-6">Create an Account</h1>
          <form>
            {/* Name Input */}
            <div className="mb-4 relative">
              <label htmlFor="name" className=" font-sans block text-sm font-medium text-gray-700">
                Name
              </label>
              <div className="relative mt-1">
                {/* <FontAwesomeIcon
                  icon={faUser}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                /> */}
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  className="font-sans w-full px-2 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            {/* Email Input */}
            <div className="mb-4 relative">
              <label htmlFor="email" className="font-sans block text-sm font-medium text-gray-700">
                Email
              </label>
              <div className="relative mt-1">
                {/* <FontAwesomeIcon
                  icon={faEnvelope}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                /> */}
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="font-sans w-full px-2 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            {/* Password Input */}
            <div className="mb-6 relative">
              <label htmlFor="password" className="font-sans block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="relative mt-1">
                {/* <FontAwesomeIcon
                  icon={faLock}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                /> */}
                <input
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                  className="font-sans w-full px-2 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            <button
              type="submit"
              className="font-sans w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition"
            >
              Create Account
            </button>
          </form>
          <p className="font-sans mt-4 text-sm text-center text-gray-600">
            Already have an account?{' '}
            <a href="/login" className="text-blue-600 font-sans hover:underline">
              Log in
            </a>
          </p>
        </div>

        {/* Right Section */}
        <div className="w-1/2 hidden md:block">
          <img
            src="/signup-illustration.png"
            alt="Signup illustration"
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
}