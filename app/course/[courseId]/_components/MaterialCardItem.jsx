import { Button } from "@/components/ui/button"
import axios from "axios"
import { RefreshCcw } from "lucide-react";
import Image from "next/image"
import React, { useState } from 'react'

function MaterialCardItem({item , studyTypeContent , courseId,course}) {
  const [loading , setLoading] = useState(false);

  const GenerateContent =async() => {
    setLoading(true)
    let chapters = ''
    course?.courseLayout.chapters.forEach((chapter)=>{
      chapters = (chapter.chapter_title || chapter?.chaptertitle)+','+chapters
    });
    const result = await axios.post('/api/study-type-content',{
      courseId: course?.courseId,
      type : item.name,
      chapters : chapters,
    })
    setLoading(false);
    console.log(result)
  }
  return (
    <div
    className={`border shadow-md rounded-lg p-5 flex flex-col items-center
      ${studyTypeContent?.[item.type]?.length == null && 'grayscale'}
  `}
  >
      {studyTypeContent?.[item.type]?.length == null ? <h2 className="p-1 px-2 bg-gray-500 text-white rounded-full text-[10px] mb-2">Not Ready</h2> :
      <h2 className="p-1 px-2 bg-green-500 text-white rounded-full text-[10px] mb-2">Ready</h2>}
      <Image src={item.icon} alt={item.name} height={50} width={50}/>
      <h2 className="font-medium mt-3">{item.name}</h2>
      <p className="text-gray-500 text-sm text-center">{item.desc}</p>

      {studyTypeContent?.[item.type]?.length == null ? 
      <Button className="mt-3 w-full" variant="outline" 
      onClick={()=>GenerateContent()}>{loading && <RefreshCcw className="animate-spin"/>}Generate</Button> :
      <Button className="mt-3 w-full" variant="outline">View</Button>}
    </div>
  )
}

export default MaterialCardItem
