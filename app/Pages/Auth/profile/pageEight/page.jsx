"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const ProfileSetup = () => {
  const [showWorkModal, setShowWorkModal] = useState(false);
  const [showEducationModal, setShowEducationModal] = useState(false);
  const [workExperience, setWorkExperience] = useState([]);
  const [educationHistory, setEducationHistory] = useState([]);
  const [workData, setWorkData] = useState({ title: "", company: "", location: "", startYear: "", endYear: "", description: "" });
  const [educationData, setEducationData] = useState({ school: "", degree: "", field: "", startYear: "", endYear: "", description: "" });
  const router = useRouter();

  const years = Array.from({ length: 50 }, (_, i) => new Date().getFullYear() - i); // Last 50 years

  const handleSaveWork = () => {
    if (workData.title && workData.company) {
      setWorkExperience([...workExperience, workData]);
      setShowWorkModal(false);
      setWorkData({ title: "", company: "", location: "", startYear: "", endYear: "", description: "" });
    }
  };

  const handleSaveEducation = () => {
    if (educationData.school && educationData.degree) {
      setEducationHistory([...educationHistory, educationData]);
      setShowEducationModal(false);
      setEducationData({ school: "", degree: "", field: "", startYear: "", endYear: "", description: "" });
    }
  };

  return (
    <div className="p-8 max-w-2xl mx-auto flex flex-col min-h-screen">
      <h2 className="text-xl font-bold mb-4">Profile Setup</h2>

      {/* Work Experience Section */}
      <div className="border p-4 rounded-lg mb-4 bg-gray-100 cursor-pointer" onClick={() => setShowWorkModal(true)}>
        <p className="text-lg">+ Add Work Experience</p>
      </div>
      {workExperience.map((work, index) => (
        <div key={index} className="border p-3 rounded-lg bg-white shadow mt-2">
          <p className="font-semibold">{work.title} at {work.company}</p>
          <p className="text-sm text-gray-600">{work.startYear} - {work.endYear}</p>
          <p className="text-sm">{work.description}</p>
        </div>
      ))}

      {/* Education Section */}
      <div className="border p-4 rounded-lg bg-gray-100 cursor-pointer" onClick={() => setShowEducationModal(true)}>
        <p className="text-lg">+ Add Education</p>
      </div>
      {educationHistory.map((edu, index) => (
        <div key={index} className="border p-3 rounded-lg bg-white shadow mt-2">
          <p className="font-semibold">{edu.degree} in {edu.field} from {edu.school}</p>
          <p className="text-sm text-gray-600">{edu.startYear} - {edu.endYear}</p>
          <p className="text-sm">{edu.description}</p>
        </div>
      ))}

      {/* Work Experience Modal */}
      {showWorkModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h3 className="text-lg font-bold mb-4">Add Work Experience</h3>
            <input className="border p-2 w-full mb-2" placeholder="Title (e.g. Software Engineer)" 
              value={workData.title} onChange={(e) => setWorkData({ ...workData, title: e.target.value })} />
            <input className="border p-2 w-full mb-2" placeholder="Company (e.g. Microsoft)" 
              value={workData.company} onChange={(e) => setWorkData({ ...workData, company: e.target.value })} />
            <input className="border p-2 w-full mb-2" placeholder="Location (e.g. London)" 
              value={workData.location} onChange={(e) => setWorkData({ ...workData, location: e.target.value })} />
            
            <div className="flex gap-2 mb-2">
              <select className="border p-2 w-1/2" value={workData.startYear} 
                onChange={(e) => setWorkData({ ...workData, startYear: e.target.value })}>
                <option value="">Start Year</option>
                {years.map((year) => <option key={year} value={year}>{year}</option>)}
              </select>
              <select className="border p-2 w-1/2" value={workData.endYear} 
                onChange={(e) => setWorkData({ ...workData, endYear: e.target.value })}>
                <option value="">End Year</option>
                {years.map((year) => <option key={year} value={year}>{year}</option>)}
              </select>
            </div>
            <textarea className="border p-2 w-full mb-4" placeholder="Description" 
              value={workData.description} onChange={(e) => setWorkData({ ...workData, description: e.target.value })} />
            <div className="flex justify-end gap-2">
              <button className="bg-gray-300 px-4 py-2 rounded" onClick={() => setShowWorkModal(false)}>Cancel</button>
              <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleSaveWork}>Save</button>
            </div>
          </div>
        </div>
      )}

      {/* Education Modal */}
      {showEducationModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h3 className="text-lg font-bold mb-4">Add Education History</h3>
            <input className="border p-2 w-full mb-2" placeholder="School (e.g. Northwestern University)" 
              value={educationData.school} onChange={(e) => setEducationData({ ...educationData, school: e.target.value })} />
            <input className="border p-2 w-full mb-2" placeholder="Degree (e.g. Bachelors)" 
              value={educationData.degree} onChange={(e) => setEducationData({ ...educationData, degree: e.target.value })} />
            <input className="border p-2 w-full mb-2" placeholder="Field of Study (e.g. Computer Science)" 
              value={educationData.field} onChange={(e) => setEducationData({ ...educationData, field: e.target.value })} />
            
            <div className="flex gap-2 mb-2">
              <select className="border p-2 w-1/2" value={educationData.startYear} 
                onChange={(e) => setEducationData({ ...educationData, startYear: e.target.value })}>
                <option value="">Start Year</option>
                {years.map((year) => <option key={year} value={year}>{year}</option>)}
              </select>
              <select className="border p-2 w-1/2" value={educationData.endYear} 
                onChange={(e) => setEducationData({ ...educationData, endYear: e.target.value })}>
                <option value="">End Year</option>
                {years.map((year) => <option key={year} value={year}>{year}</option>)}
              </select>
            </div>
            <textarea className="border p-2 w-full mb-4" placeholder="Description" 
              value={educationData.description} onChange={(e) => setEducationData({ ...educationData, description: e.target.value })} />
            <div className="flex justify-end gap-2">
              <button className="bg-gray-300 px-4 py-2 rounded" onClick={() => setShowEducationModal(false)}>Cancel</button>
              <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleSaveEducation}>Save</button>
            </div>
          </div>
        </div>
      )}

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-auto py-4">
        <button className="bg-gray-300 py-2 px-4 rounded-lg" onClick={() => router.push("pageSeven")}>Back</button>
        <button className="bg-blue-900 text-white py-2 px-4 rounded-lg hover:bg-blue-700" onClick={() => router.push("pageNine")}>Next</button>
      </div>
    </div>
  );
};

export default ProfileSetup;
