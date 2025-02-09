"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Select, SelectItem, SelectTrigger, SelectValue, SelectContent } from "@/components/ui/select";

const LanguageSelection = () => {
  const [languages, setLanguages] = useState([]); // Start with an empty list
  const [isOpen, setIsOpen] = useState(false);
  const [newLanguage, setNewLanguage] = useState("");
  const [proficiency, setProficiency] = useState("Fluent");
  const router = useRouter();

  const addLanguage = () => {
    if (newLanguage && proficiency) {
      setLanguages([...languages, { name: newLanguage, proficiency }]);
      setNewLanguage("");
      setProficiency("Fluent");
      setIsOpen(false);
    }
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-white shadow-md rounded-lg flex flex-col min-h-screen">
      <h2 className="text-xl font-bold">Looking good. Next, tell us which languages you speak.</h2>

      {/* Language List (Empty Initially) */}
      <div className="mt-4 flex-grow">
        {languages.length === 0 ? (
          <p className="text-gray-500">No languages added yet.</p>
        ) : (
          languages.map((lang, index) => (
            <div key={index} className="flex justify-between p-2 border rounded-lg mb-2">
              <span>{lang.name}</span>
              <span className="text-gray-500">{lang.proficiency}</span>
            </div>
          ))
        )}
      </div>

      <Button className="mt-4" onClick={() => setIsOpen(true)}>+ Add a language</Button>

      {/* Dialog for Adding Language */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add Language</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <input 
              type="text" 
              placeholder="Language" 
              value={newLanguage} 
              onChange={(e) => setNewLanguage(e.target.value)}
              className="w-full p-2 border rounded-md"
            />
            <Select value={proficiency} onValueChange={setProficiency}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select Proficiency" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Basic">Basic</SelectItem>
                <SelectItem value="Conversational">Conversational</SelectItem>
                <SelectItem value="Fluent">Fluent</SelectItem>
                <SelectItem value="Native">Native</SelectItem>
              </SelectContent>
            </Select>
            <Button onClick={addLanguage} className="w-full">Save</Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Navigation Buttons */}
      <div className="mt-auto flex justify-between pt-6">
        <Button 
          className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400" 
          onClick={() => router.push("pageEight")} 
        >
          Back
        </Button>
        <Button 
          className="bg-blue-900 text-white px-4 py-2 rounded-lg hover:bg-blue-700" 
          onClick={() => router.push("pageTen")} 
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default LanguageSelection;
