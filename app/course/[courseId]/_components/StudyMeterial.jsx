"use client"
import React, { useEffect, useState } from 'react'
import MaterialCardItem from "./MaterialCardItem"
import axios from "axios"


function StudyMeterial({courseId , course}) {
    const [studyTypeContent , setStudyTypeContent] = useState()
    const MaterislList = [
        {
            name: 'Notes/Chapters',
            desc: 'Read notes to prepare it',
            icon: '/notes.png',
            path: '/notes',
            type: 'notes'
        },
        {
            name: 'Flashcard',
            desc: 'It help to remember the concepts',
            icon: '/flashcard.png',
            path: '/flashcards',
            type: 'flashcard'
        },
        {
            name: 'Quiz',
            desc: 'Great way to test your knowledge' ,
            icon: '/quiz.png',
            path: '/quiz',
            type: 'quiz'
        },
        {
            name:'Question/Answer',
            desc: 'Help to pratice your learning',
            icon: '/qa.png',
            path: '/qa',
            type: 'qa'
        }


    ];

    useEffect(()=>{
        GetStudyMaterial();
    },[courseId])
    const GetStudyMaterial = async() =>{
        const result = await axios.post('/api/study-type',{
            courseId : courseId,
            studyType : 'ALL'
        })
        setStudyTypeContent(result.data)
    }
return (
    <div className="mt-5">
        <h2 className="font-medium text-xl">Study Matertial</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-3a">
            {MaterislList.map((item , index)=>(
                    <MaterialCardItem item={item} key={index}
                        studyTypeContent={studyTypeContent}
                        course={course} 
                        refreshData={GetStudyMaterial}
                    />
            ))}
        </div>
    </div>
)
}

export default StudyMeterial
