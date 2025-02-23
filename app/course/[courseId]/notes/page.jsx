"use client";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

function ViewNotes() {
    const route = useRouter();
  const { courseId } = useParams();
  const [notes, setNotes] = useState([]);
  const [stepCount, setStepCount] = useState(0);
  useEffect(() => {
    GetNotes();
  }, []);

  const GetNotes = async () => {
    try {
      const result = await axios.post("/api/study-type", {
        courseId: courseId,
        studyType: "notes",
      });

      console.log(result?.data);
      setNotes(result?.data || []);
    } catch (error) {
      console.error("Error fetching notes:", error);
    }
  };

  const rawNotes = notes[stepCount]?.notes || "{}";
  let parsedNotes;
  try {
    parsedNotes = typeof rawNotes === "string" ? JSON.parse(rawNotes) : rawNotes;
  } catch (error) {
    console.error("Error parsing notes:", error);
    parsedNotes = { content: rawNotes };
  }

  return (
    notes.length > 0 && (
      <div className="p-5">
        {/* Progress Navigation */}
        <div className="flex gap-5 items-center mb-4">
          <Button
            variant="outline"
            size="sm"
            disabled={stepCount === 0}
            onClick={() => setStepCount(stepCount - 1)}
          >
            Previous
          </Button>
          <div className="flex w-full gap-2">
            {notes.map((_, index) => (
              <div
                key={index}
                className={`h-2 flex-1 rounded-full ${
                  index <= stepCount ? "bg-primary" : "bg-gray-200"
                }`}
              />
            ))}
          </div>
          <Button
            variant="outline"
            size="sm"
            disabled={stepCount === notes.length - 1}
            onClick={() => setStepCount(stepCount + 1)}
          >
            Next
          </Button>
        </div>

        {/* Render Structured Chapter Information */}
        <div className="prose prose-lg max-w-full">
          {parsedNotes.chapter_title && (
            <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-2">
              {parsedNotes.emoji && <span>{parsedNotes.emoji}</span>}
              {parsedNotes.chapter_title}
            </h1>
          )}

          {parsedNotes.chapter_summary && (
            <p className="text-lg text-gray-700 font-semibold mt-2">
              {parsedNotes.chapter_summary}
            </p>
          )}

          {parsedNotes.topics && parsedNotes.topics.length > 0 && (
            <ul className="list-disc pl-5 mt-3">
              {parsedNotes.topics.map((topic, index) => (
                <li key={index} className="text-gray-800">{topic}</li>
              ))}
            </ul>
          )}

          {/* Render Cleaned Chapter Content */}
          <div
            className="mt-10 prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl prose-h4:text-lg prose-pre:bg-gray-900 prose-pre:text-white prose-pre:p-4 prose-pre:rounded-lg prose-code:bg-gray-200 prose-code:p-1 prose-code:rounded prose-code:text-sm prose-code:font-mono"
            dangerouslySetInnerHTML={{
              __html: parsedNotes.content
                ?.replace(/\n/g, "<br/>") 
                ?.replace(/\\n/g, "<br/>") || "",
            }}
          />
          {notes?.length == stepCount + 1 && 
          <div className="flex justify-center flex-col w-50 items-center mt-10">
            <h2>END of Notes</h2>
            <Button className="mt-5" onClick={()=>route.back()}>Go to Course Page</Button>
            </div>}
        </div>
      </div>
    )
  );
}

export default ViewNotes;
