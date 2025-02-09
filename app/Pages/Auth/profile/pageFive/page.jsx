"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Plus, X } from "lucide-react";

export default function SkillsSelection() {
  const [skills, setSkills] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const router = useRouter();

  const suggestedSkills = [
    "Photography", "Animation", "Web Development", "Graphic Design", 
    "Content Writing", "Video Editing", "SEO", "UI/UX Design", 
    "Data Analysis", "Cybersecurity", "Digital Marketing", "Blockchain Development", 
    "Artificial Intelligence", "Project Management", "Cloud Computing"
  ];

  const addSkill = (skill) => {
    if (skills.length < 15 && !skills.includes(skill)) {
      setSkills([...skills, skill]);
    }
  };

  const removeSkill = (skill) => {
    setSkills(skills.filter((s) => s !== skill));
  };

  const handleInputKeyDown = (e) => {
    if (e.key === "Enter" && inputValue.trim()) {
      addSkill(inputValue.trim());
      setInputValue("");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-6">
      <h2 className="text-2xl font-bold">Nearly there! What work are you here to do?</h2>
      <p className="text-gray-600">
        Your skills show clients what you can offer and help us choose which jobs to recommend to you.
      </p>

      <div>
        <label className="block text-lg font-semibold mb-2">Your skills</label>
        <Input
          type="text"
          placeholder="Enter skills here"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleInputKeyDown}
        />
        <p className="text-sm text-gray-500">Max 15 skills</p>
      </div>

      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <div key={skill} className="flex items-center bg-gray-200 px-3 py-1 rounded-full">
            {skill}
            <X className="ml-2 cursor-pointer" size={16} onClick={() => removeSkill(skill)} />
          </div>
        ))}
      </div>

      <div>
        <p className="font-semibold">Suggested skills</p>
        <div className="flex flex-wrap gap-2 mt-2">
          {suggestedSkills.map((skill) => (
            <Button
              key={skill}
              variant="outline"
              size="sm"
              onClick={() => addSkill(skill)}
              className="flex items-center space-x-1"
            >
              <Plus size={16} />
              <span>{skill}</span>
            </Button>
          ))}
        </div>
      </div>

      <Card>
        <CardContent className="p-4">
          <p className="text-gray-600 italic">
            "App's algorithm will recommend specific job posts to you based on your skills. So choose them carefully to get the best match!"
          </p>
        </CardContent>
      </Card>

      <div className="flex justify-between">
      <button 
            className="bg-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-400"
            onClick={() => router.push("pageThree")}
          >
            Back
          </button>
        <Button className="bg-blue-900 text-white rounded-lg hover:bg-blue-700" onClick={() => router.push("pageSix")}>
          Next, your profile title
        </Button>
      </div>
    </div>
  );
}
