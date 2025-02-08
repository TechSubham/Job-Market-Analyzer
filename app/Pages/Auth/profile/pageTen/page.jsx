"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function BioInputForm() {
  const [bio, setBio] = useState("");
  const router = useRouter();

  return (
    <div className="flex flex-col md:flex-row gap-6 p-6 max-w-4xl mx-auto">
      <div className="flex-1">
        <h2 className="text-xl font-semibold">Great. Now write a bio to tell the world about yourself.</h2>
        <p className="text-sm text-gray-600 mt-2">
          Help people get to know you at a glance. What work do you do best? Tell them
          clearly, using paragraphs or bullet points. You can always edit later; just
          make sure you proofread now.
        </p>
        <textarea
          className="w-full p-3 border border-gray-300 rounded-lg mt-4"
          rows="6"
          placeholder="Enter your top skills, experiences, and interests..."
          value={bio}
          onChange={(e) => setBio(e.target.value)}
        ></textarea>
        <p className="text-xs text-gray-500 mt-1">At least 100 characters</p>
        <Button className="mt-4">Next, set your rate</Button>
      </div>

      <div className="hidden md:block w-1/3">
        <Card>
          <CardContent className="p-4">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-gray-300 mb-3"></div>
              <h3 className="font-semibold">Your Name</h3>
              <p className="text-sm text-gray-500">$XX.XX/hr</p>
            </div>
            <p className="text-sm text-gray-700 mt-4">
              {bio || "Your bio preview will appear here..."}
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
