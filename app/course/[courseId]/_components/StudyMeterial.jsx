"use client"
import React from 'react'
import MaterialCardItem from "./MaterialCardItem"

function StudyMeterial() {
    const MaterislList = [
        {
            name: 'Notes/Chapters',
            desc: 'Read notes to prepare it',
            icon: '/notes.png',
            path: '/notes'
        },
        {
            name: 'Flashcard',
            desc: 'It help to remember the concepts',
            icon: '/flashcard.png',
            path: '/notes'
        },
        {
            name: 'Quiz',
            desc: 'Great way to test your knowledge' ,
            icon: '/quiz.png',
            path: '/quiz'
        },
        {
            name:'Question/Answer',
            desc: 'Help to pratice your learning',
            icon: '/qa.png',
            path: '/qa'
        }


    ]
return (
    <div className="mt-5">
        <h2 className="font-medium text-xl">Study Matertial</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-3a">
            {MaterislList.map((item , index)=>(
                <MaterialCardItem item={item}/>
            ))}
        </div>
    </div>
)
}

export default StudyMeterial
