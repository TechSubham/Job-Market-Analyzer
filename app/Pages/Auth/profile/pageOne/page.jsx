"use client";
import React from "react";
import { useRouter } from "next/navigation";

const UpworkOnboarding = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="w-full max-w-md bg-white p-6 rounded-2xl shadow-lg text-center">
        <h1 className="text-2xl font-bold text-gray-800">Ready for your next big opportunity?</h1>
        
        <div className="mt-6 space-y-4 text-gray-700">
          <div className="flex items-center space-x-3">
            <span className="text-xl">👤</span>
            <p>Answer a few questions and start building your profile</p>
          </div>
          <div className="flex items-center space-x-3">
            <span className="text-xl">📋</span>
            <p>Apply for open roles or list services</p>
          </div>
          <div className="flex items-center space-x-3">
            <span className="text-xl">💰</span>
            <p>Get paid safely and know we’re there to help</p>
          </div>
        </div>

        <p className="mt-6 text-sm text-gray-500">It only takes 5-10 minutes and you can edit it later. We’ll save as you go.</p>

        <button 
          className="mt-6 w-full bg-green-600 text-white py-2 rounded-lg text-lg font-semibold hover:bg-green-700"
          onClick={() => router.push("pageTwo")}
        >
          Get started
        </button>
      </div>
    </div>
  );
};

export default UpworkOnboarding;
