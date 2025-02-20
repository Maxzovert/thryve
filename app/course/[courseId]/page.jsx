"use client"
import Header from "@/app/dashboard/_components/Header";
import axios from "axios";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from 'react'
import CourseIntro from "./_components/CourseIntro";

function  Course() {
    const {courseId} = useParams();
    const [course , setCourse] = useState();
    useEffect(()=>{
        GetCourse();
    },[])

    const GetCourse = async() =>{
        const result = await axios.get('/api/courses?courseId='+courseId)
        console.log(result);
        setCourse(result.data.result);
    }
  return (
    <div>
      <Header/>
      <div className="mx-10 md:mx-36 lg:px-60 mt-10">
      <CourseIntro course={course}/>
      </div>
    </div>
  )
}

export default  Course;
