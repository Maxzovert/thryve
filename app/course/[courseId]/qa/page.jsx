'use client'
import axios from "axios";
import { useParams } from "next/navigation"
import React, { useEffect, useState } from 'react'
import StepProgress from "../_components/StepProgress";

function QuestionAnswers() {
    const {courseId} = useParams();
    const [qA , setQA] = useState([]);
    const [qaData , setQAData] = useState();
     const [stepCount , setStepCount] = useState(0);


    useEffect(()=>{
        GetQuestionAnswers();
    },[])
    const GetQuestionAnswers = async() => {
        const result = await axios.post('/api/study-type',{
            courseId : courseId,
            studyType : 'Question/Answer'
        })

        console.log(result);
        setQAData(result.data)
        setQA(result.data[0].content.QuestionAnswers);
    }

  return (
    <div>
      <h2 className="font-bold text-2xl text-center mb-10">Question / Answers</h2>
      <StepProgress data={qA} stepCount={stepCount} setStepCount={(value)=>setStepCount(value)}/>
      {qA.length > 0 ? (
        <div>
                <h2 className="text-center font-bold mt-10">Question No: {stepCount + 1}</h2>
                <div className="p-4 border rounded-lg shadow-md mt-4 text-center">
                    <h1 className="font-semibold text-lg">{qA[stepCount]?.question}</h1>
                </div>
                <h2 className="text-center font-bold mt-10">Answer</h2>
                <div className="p-4 border rounded-lg shadow-md mt-4">
                    <p >{qA[stepCount]?.answer}</p>
                </div>

        </div>
            ) : (
                <p className="text-center">Loading questions...</p>
            )}
    </div>
  )
}

export default QuestionAnswers
