"use client";
import React from "react";
import { useRouter } from "next/navigation";

const UpworkProfile = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="w-full max-w-2xl bg-white p-6 rounded-2xl shadow-lg">
        <h2 className="text-xl font-bold text-gray-800">How would you like to tell us about yourself?</h2>
        <p className="mt-2 text-gray-600">
          We need to get a sense of your education, experience, and skills. It’s quickest to import your
          information — you can edit it before your profile goes live.
        </p>

        <div className="mt-6 space-y-4">
          <button className="w-full flex items-center justify-center border py-2 rounded-lg text-gray-700 hover:bg-gray-200">
            📎 Import from LinkedIn
          </button>
          <button className="w-full flex items-center justify-center border py-2 rounded-lg text-gray-700 hover:bg-gray-200">
            📄 Upload your resume
          </button>
          <button className="w-full flex items-center justify-center border py-2 rounded-lg text-gray-700 hover:bg-gray-200">
            📝 Fill out manually (15 min)
          </button>
        </div>

        <p className="mt-6 text-gray-500 italic text-sm">
          “Your profile is how you stand out from the crowd. It’s what you use to win work, so let’s make it a good one.”
        </p>
        
        <div className="mt-6 flex justify-between">
          <button 
            className="bg-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-400"
            onClick={() => router.push("pageOne")}
          >
            Back
          </button>
          <button 
            className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700"
            onClick={() => router.push("pageThree")}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpworkProfile;
