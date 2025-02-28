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

      setNotes(result?.data || []);
    } catch (error) {
      console.error("Error fetching notes:", error);
    }
  };

  return  notes && (
   <div>
    <div className="flex gap-5 items-center">
      <Button variant="outline" size="sm" onClick={()=>setStepCount(stepCount-1)}>Previous</Button>
      {notes?.map((item , index)=>(
        <div key={index} className={`w-full h-2 rounded-full 
          ${index < stepCount ? "bg-primary" : "bg-gray-200"}`}></div>
      ))}
      <Button variant="outline" size="sm" onClick={()=>setStepCount(stepCount + 1)}>Previous</Button>
    </div>
    <div>
      <div dangerouslySetInnerHTML={{__html : (notes[stepCount]?.notes
        .replace('```html','')
        .replace('```','')
      )}}/>
    </div>
   </div>
  );
}

export default ViewNotes;
