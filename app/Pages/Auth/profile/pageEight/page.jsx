"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const ProfileSetup = () => {
  const [showWorkModal, setShowWorkModal] = useState(false);
  const [showEducationModal, setShowEducationModal] = useState(false);
  const router = useRouter();

  return (
    <div className="p-8 max-w-2xl mx-auto flex flex-col min-h-screen">
      <h2 className="text-xl font-bold mb-4">Profile Setup</h2>

      {/* Add Work Experience Section */}
      <div
        className="border p-4 rounded-lg mb-4 bg-gray-100 cursor-pointer"
        onClick={() => setShowWorkModal(true)}
      >
        <p className="text-lg">+ Add Work Experience</p>
      </div>

      {/* Add Education Section */}
      <div
        className="border p-4 rounded-lg bg-gray-100 cursor-pointer"
        onClick={() => setShowEducationModal(true)}
      >
        <p className="text-lg">+ Add Education</p>
      </div>

      {/* Work Experience Modal */}
      {showWorkModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h3 className="text-lg font-bold mb-4">Add Work Experience</h3>
            <input className="border p-2 w-full mb-2" placeholder="Title (e.g. Software Engineer)" />
            <input className="border p-2 w-full mb-2" placeholder="Company (e.g. Microsoft)" />
            <input className="border p-2 w-full mb-2" placeholder="Location (e.g. London)" />
            <div className="flex gap-2 mb-2">
              <input className="border p-2 w-1/2" placeholder="Start Date" type="month" />
              <input className="border p-2 w-1/2" placeholder="End Date" type="month" />
            </div>
            <textarea className="border p-2 w-full mb-4" placeholder="Description"></textarea>
            <div className="flex justify-end gap-2">
              <button className="bg-gray-300 px-4 py-2 rounded" onClick={() => setShowWorkModal(false)}>
                Cancel
              </button>
              <button className="bg-green-500 text-white px-4 py-2 rounded">Save</button>
            </div>
          </div>
        </div>
      )}

      {/* Education Modal */}
      {showEducationModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h3 className="text-lg font-bold mb-4">Add Education History</h3>
            <input className="border p-2 w-full mb-2" placeholder="School (e.g. Northwestern University)" />
            <input className="border p-2 w-full mb-2" placeholder="Degree (e.g. Bachelors)" />
            <input className="border p-2 w-full mb-2" placeholder="Field of Study (e.g. Computer Science)" />
            <div className="flex gap-2 mb-2">
              <input className="border p-2 w-1/2" placeholder="From" type="month" />
              <input className="border p-2 w-1/2" placeholder="To" type="month" />
            </div>
            <textarea className="border p-2 w-full mb-4" placeholder="Description"></textarea>
            <div className="flex justify-end gap-2">
              <button className="bg-gray-300 px-4 py-2 rounded" onClick={() => setShowEducationModal(false)}>
                Cancel
              </button>
              <button className="bg-green-500 text-white px-4 py-2 rounded">Save</button>
            </div>
          </div>
        </div>
      )}

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-auto py-4">
        <button
          className="bg-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-400"
          onClick={() => router.push("pageSeven")}
        >
          Back
        </button>
        <button
          className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700"
          onClick={() => router.push("pageNine")}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ProfileSetup;
