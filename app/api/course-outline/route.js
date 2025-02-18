import { courseOutline } from "@/config/AiModel";
import { db } from "@/config/db";
import { STUDY_MATERIAL_TABLE } from "@/config/schema";
import { NextResponse } from "next/server";

export async function POST(req) {
    const {courseId , topic , courseType , difficultyLevel , createdBy} = await req.json();

     const PROMPT = 'Generate a study material for '+topic+' for '+courseType+' and level of difficulty will be '+difficultyLevel+' with summery of course, List of Chapters along with summery  for each chapter, Topic list in each chapter, all result in JSON format'


    const aiResp = await courseOutline.sendMessage(PROMPT);
    const aiResult = JSON.parse(aiResp.response.text()) ;

    const dbResult = await db.insert(STUDY_MATERIAL_TABLE).values({
        courseId : courseId,
        courseType : courseType,
        createdBy : createdBy,
        topic : topic,
        courseLayout : aiResult
    }).returning({STUDY_MATERIAL_TABLE});

    console.log(dbResult);

    return NextResponse.json({result:dbResult[0]});
}