"use client"
import axios from "axios";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from 'react'
import CourseIntro from "./_components/CourseIntro";
import StudyMeterial from "./_components/StudyMeterial";
import ChapterList from "./_components/ChapterList";

function  Course() {
    const {courseId} = useParams();
    const [course , setCourse] = useState();
    useEffect(()=>{
        GetCourse();
    },[])

    const GetCourse = async() =>{
        const result = await axios.get('/api/courses?courseId='+courseId)
        setCourse(result.data.result);
    }
  return (
    <div>
      <div className="">
      <CourseIntro course={course}/>
      <StudyMeterial courseId={courseId} course={course}/>
      <ChapterList course={course}/>
      </div>
    </div>
  )
}

export default  Course;
