'use client'
import axios from "axios";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from 'react'
import StepProgress from "../_components/StepProgress";
import QuizCardItem from "./_components/QuizCardItem";

function Quiz() {

  const {courseId} = useParams();
  const [quizData , setQuizData] = useState();
  const [quiz , setQuiz] = useState([]);
  const [stepCount , setStepCount] = useState(0);
  const [isCorrectAnswer , setIsCorrectAnswer] = useState(null);
  const [corAns , setIsCorAns] = useState();

  useEffect(()=>{
    GetQuiz();
  },[]);
  
  const GetQuiz = async() => {
    const result = await axios.post('/api/study-type',{
      courseId : courseId,
      studyType : 'Quiz'
    });
    
    console.log(result);
    setQuizData(result.data);
    setQuiz(result.data[0].content.quiz.questions);
  }

  const checkAnswer = (userAnswer , currentQuestion) => {
    setIsCorAns(currentQuestion.answer);
    if(userAnswer == currentQuestion?.answer){
      setIsCorrectAnswer(true);
      return;
    }
    setIsCorrectAnswer(false)
  }

  useEffect(()=>{
    setIsCorAns(null);
    setIsCorrectAnswer(null)
  },[stepCount])
  return (
    <div>
      <h2 className="font-bold text-2xl text-center mb-10">Quiz</h2>
      <StepProgress data={quiz} stepCount={stepCount} setStepCount={(value)=>setStepCount(value)}/>

        <div>
            <QuizCardItem 
              quiz={quiz[stepCount]}
              userSelectedOption={(v)=>checkAnswer(v,quiz[stepCount])}
            />
        </div>

        {isCorrectAnswer == false &&  <div>
          <div className="border  p-3 border-red-700 bg-red-200 rounded-lg text-center ">
            <h2 className="font-bold text-lg text-red-700 text-center">Incorrect</h2>
            <p className="text-green-700">Correct Answer is : {corAns.replace(/`/g, "")}</p>
          </div>
        </div> }
        {isCorrectAnswer == true &&  <div>
          <div className="border  p-3 border-green-700 bg-green-200 rounded-lg text-center ">
            <h2 className="font-bold text-lg text-green-700 text-center">Correct</h2>
            <p className="text-green-700">Well done!!!! Correct Answer</p>
          </div>
        </div> }
    </div>
  )
}

export default Quiz;