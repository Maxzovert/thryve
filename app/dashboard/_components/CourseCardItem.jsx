"use client"
import React from 'react';
import Image from "next/image";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { RefreshCcw } from "lucide-react";
import Link from "next/link";

function CourseCardItem({course}) {

  const formattedDate = course?.createdAt
  ? new Date(course.createdAt).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  : "Unknown";

  return (
    <div className="border rounded-lg shadow-md p-5">
      <div>
        <div className="flex items-center justify-between">
            <Image src={'/knowledge.png'} alt='other' width={50} height= {50}/>
            <h2 className="text-[10px] p-1 px-2 rounded-full bg-blue-600 text-white">{formattedDate}</h2>
        </div>
        <h2 className="mt-3 font-medium text-lg">{course?.courseLayout?.course_title}</h2>
        <p className="text-xs line-clamp-2 text-gray-500 mt-2">{course?.courseLayout?.course_summary}</p>
      </div>

      <div className="mt-3">
        <Progress value={0}/>
      </div>
      <div className="mt-3 flex justify-end">
        {course?.status == 'Generating' ? <h2 className="text-md first-letter:p-1 px-2 rounded-full flex gap-2 items-center bg-gray-400 text-white"> 
            <RefreshCcw className="h-5 w-5 animate-spin"/>
            Generating...</h2>:<Link href={'/course/'+course?.courseId}><Button>view</Button></Link>}
      </div>
    </div>
  )
}
export default CourseCardItem;