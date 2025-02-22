"use client"
import { Button } from "@/components/ui/button";
import axios from "axios";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from 'react';
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github.css";

function ViewNotes() {
    const { courseId } = useParams();
    const [notes, setNotes] = useState([]);
    const [stepCount, setStepCount] = useState(0); // Start from index 0

    useEffect(() => {
        GetNotes();
    }, []);

    const GetNotes = async () => {
        const result = await axios.post('/api/study-type', {
            courseId: courseId,
            studyType: 'notes'
        });

        console.log(result?.data);
        setNotes(result?.data || []);
    };

    return notes.length > 0 && (
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
                            className={`h-2 flex-1 rounded-full ${index <= stepCount ? 'bg-primary' : 'bg-gray-200'}`}
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

            {/* Markdown Content */}
            <div className="prose prose-lg max-w-full">
            <div dangerouslySetInnerHTML={{ __html: notes[stepCount]?.notes?.replaceAll(/\n/g, "<br/>") || "" }} />

            </div>
        </div>
    );
}

export default ViewNotes;
