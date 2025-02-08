"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const categories = [
  "Accounting & Consulting",
  "Admin Support",
  "Customer Service",
  "Data Science & Analytics",
  "Design & Creative",
  "Engineering & Architecture",
  "IT & Networking",
  "Legal",
  "Sales & Marketing",
  "Translation",
  "Web, Mobile & Software Dev",
  "Writing",
];

const specialties = {
  "Design & Creative": [
    "Art & Illustration",
    "Audio & Music Production",
    "Branding & Logo Design",
    "NFT, AR/VR & Game Art",
    "Graphic, Editorial & Presentation Design",
    "Performing Arts",
    "Photography",
    "Product Design",
    "Video & Animation",
  ],
};

const WorkSelection = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSpecialties, setSelectedSpecialties] = useState([]);
  const router = useRouter();

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setSelectedSpecialties([]); // Reset specialties when category changes
  };

  const handleSpecialtySelect = (specialty) => {
    setSelectedSpecialties((prev) =>
      prev.includes(specialty)
        ? prev.filter((s) => s !== specialty)
        : [...prev, specialty]
    );
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="w-full max-w-3xl bg-white p-6 rounded-2xl shadow-lg">
        <h2 className="text-xl font-bold text-gray-800">
          Great, so what kind of work are you here to do?
        </h2>
        <p className="mt-2 text-gray-600">Don’t worry, you can change these choices later on.</p>

        <div className="mt-6 grid grid-cols-2 gap-4">
          <div>
            <h3 className="font-semibold text-gray-700">Select 1 category</h3>
            <ul className="mt-2 space-y-2">
              {categories.map((category) => (
                <li
                  key={category}
                  className={`cursor-pointer p-2 border rounded-lg hover:bg-gray-200 ${
                    selectedCategory === category ? "bg-gray-300" : ""
                  }`}
                  onClick={() => handleCategorySelect(category)}
                >
                  {category} {selectedCategory === category ? "✓" : ""}
                </li>
              ))}
            </ul>
          </div>

          {selectedCategory && specialties[selectedCategory] && (
            <div>
              <h3 className="font-semibold text-gray-700">
                Now, select 1 to 3 specialties
              </h3>
              <ul className="mt-2 space-y-2">
                {specialties[selectedCategory].map((specialty) => (
                  <li
                    key={specialty}
                    className={`cursor-pointer p-2 border rounded-lg hover:bg-gray-200 ${
                      selectedSpecialties.includes(specialty) ? "bg-green-300" : ""
                    }`}
                    onClick={() => handleSpecialtySelect(specialty)}
                  >
                    <input
                      type="checkbox"
                      checked={selectedSpecialties.includes(specialty)}
                      readOnly
                      className="mr-2"
                    />
                    {specialty}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Navigation Buttons */}
        <div className="mt-6 flex justify-between">
          <button 
            className="bg-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-400"
            onClick={() => router.push("pageTwo")}
          >
            Back
          </button>

          <button 
            className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700"
            onClick={() => router.push("pageFive")}
          >
            Next, add your skills
          </button>
        </div>
      </div>
    </div>
  );
};

export default WorkSelection;
