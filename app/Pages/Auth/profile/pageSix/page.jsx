"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const ProfileTitle = () => {
  const [title, setTitle] = useState("");
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-2xl w-full">
        <h2 className="text-2xl font-semibold mb-2">Got it. Now, add a title to tell the world what you do.</h2>
        <p className="text-gray-600 mb-4">
          It's the very first thing clients see, so make it count. Stand out by describing your expertise in your own words.
        </p>

        <label className="block text-gray-700 font-medium mb-2">Your professional role</label>
        <input
          type="text"
          className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Example: Design & Creative"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <div className="flex justify-between mt-6">
          <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg"
          onClick={() => router.push("pageFive")}
          >
            Back</button>
          <button className="bg-blue-900 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
           onClick={() => router.push("pageSeven")}
           >Next, add your experience</button>
        </div>
      </div>
    </div>
  );
};

export default ProfileTitle;
