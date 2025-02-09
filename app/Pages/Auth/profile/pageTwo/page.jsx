"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const Profile = () => {
  const router = useRouter();
  const [linkedinLink, setLinkedinLink] = useState("");
  const [showLinkedinInput, setShowLinkedinInput] = useState(false);

  const handleLinkedinSubmit = () => {
    if (linkedinLink.trim()) {
      console.log("LinkedIn URL:", linkedinLink);
      setShowLinkedinInput(false);
      router.push("pageEleven"); // Redirect to personal details page
    }
  };

  const handleResumeUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log("Resume uploaded:", file.name);
      router.push("pageEleven"); // Redirect to personal details page
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="w-full max-w-2xl bg-white p-6 rounded-2xl shadow-lg">
        <h2 className="text-xl font-bold text-gray-800">
          How would you like to tell us about yourself?
        </h2>
        <p className="mt-2 text-gray-600">
          We need to get a sense of your education, experience, and skills. 
        </p>

        <div className="mt-6 space-y-4">
          {/* LinkedIn Upload */}
          <button
            className="w-full flex items-center justify-center border py-2 rounded-lg text-gray-700 hover:bg-gray-200"
            onClick={() => setShowLinkedinInput(true)}
          >
            📎 LinkedIn link
          </button>
          {showLinkedinInput && (
            <div className="mt-2">
              <input
                type="url"
                placeholder="Paste your LinkedIn profile link here..."
                value={linkedinLink}
                onChange={(e) => setLinkedinLink(e.target.value)}
                className="w-full border p-2 rounded-lg"
              />
              <button
                className="mt-2 px-3 py-1 bg-blue-500 text-white rounded"
                onClick={handleLinkedinSubmit}
              >
                Save & Continue
              </button>
            </div>
          )}

          {/* Resume Upload */}
          <label className="w-full flex items-center justify-center border py-2 rounded-lg text-gray-700 hover:bg-gray-200 cursor-pointer">
            📄 Upload your resume
            <input
              type="file"
              className="hidden"
              accept=".pdf,.doc,.docx"
              onChange={handleResumeUpload}
            />
          </label>

          {/* Fill Out Manually */}
          <button
            className="w-full flex items-center justify-center border py-2 rounded-lg text-gray-700 hover:bg-gray-200"
            onClick={() => router.push("pageThree")}
          >
            📝 Fill out manually (15 min)
          </button>
        </div>

        <p className="mt-6 text-gray-500 italic text-sm">
          “Your profile is how you stand out from the crowd. It’s what you use to win work, so let’s make it a good one.”
        </p>

        {/* Navigation Buttons */}
        <div className="mt-6 flex justify-between">
          <button
            className="bg-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-400"
            onClick={() => router.push("pageOne")}
          >
            Back
          </button>
          <button
            className="bg-blue-900 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
            onClick={() => router.push("pageThree")}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
