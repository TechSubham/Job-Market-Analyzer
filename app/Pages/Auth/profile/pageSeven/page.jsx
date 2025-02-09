"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const AddExperience = () => {
  const router = useRouter();
  const [isEditing, setIsEditing] = useState(false);
  const [experience, setExperience] = useState("");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="max-w-2xl bg-white shadow-lg rounded-2xl p-8">
        <h2 className="text-2xl font-semibold">If you have relevant work experience, add it here.</h2>
        <p className="text-gray-600 mt-2">
          Applicants who add their experience are twice as likely to win work. But if you’re just starting out, you can still create a great profile. Just head on to the next page.
        </p>

        <div 
          className="mt-6 border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center w-full"
        >
          {isEditing ? (
            <textarea
              className="w-full h-32 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Describe your experience..."
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
            />
          ) : (
            <button
              className="bg-blue-900 text-white px-4 py-2 rounded-full flex items-center hover:bg-blue-700"
              onClick={() => setIsEditing(true)}
            >
              <span className="text-2xl mr-2">+</span> Add experience
            </button>
          )}
        </div>

        <div className="mt-6 flex justify-between">
          <button
            className="px-4 py-2 bg-gray-300 rounded-lg"
            onClick={() => router.push("pageSix")}
          >
            Back
          </button>
          <div className="flex space-x-4">
            <button
              className="px-4 py-2 bg-gray-300 rounded-lg"
              onClick={() => router.push("pageEight")}
            >
              Skip for now
            </button>
            <button
              className="px-4 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-700"
              onClick={() => router.push("pageEight")}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddExperience;
