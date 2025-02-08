"use client";
import React from "react";
import { useRouter } from "next/navigation";

const AddExperience = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="max-w-2xl bg-white shadow-lg rounded-2xl p-8">
        <h2 className="text-2xl font-semibold">If you have relevant work experience, add it here.</h2>
        <p className="text-gray-600 mt-2">
          Freelancers who add their experience are twice as likely to win work. But if you’re just starting out, you can still create a great profile. Just head on to the next page.
        </p>
        
        <div className="mt-6 border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center">
          <button className="bg-green-500 text-white px-4 py-2 rounded-full flex items-center">
            <span className="text-2xl mr-2">+</span> Add experience
          </button>
        </div>
        
        <div className="mt-6 flex justify-between">
          <button className="px-4 py-2 bg-gray-300 rounded-lg"
          onClick={() => router.push("pageSix")}
          >
            Back</button>
          <div className="flex space-x-4">
            <button className="px-4 py-2 bg-gray-300 rounded-lg">Skip for now</button>
            <button className="px-4 py-2 bg-green-500 text-white rounded-lg"
            onClick={() => router.push("pageEight")}
            >Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddExperience;
