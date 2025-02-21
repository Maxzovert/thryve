import { courseOutline } from "@/config/AiModel";
import { db } from "@/config/db";
import { STUDY_MATERIAL_TABLE } from "@/config/schema";
import { inngest } from "@/inngest/client";
import { NextResponse } from "next/server";

export async function POST(req) {
    const {courseId , topic , courseType , difficultyLevel , createdBy} = await req.json();

     const PROMPT = 'Generate a study material for '+topic+' for '+courseType+' and level of difficulty will be '+difficultyLevel+' with summery of course, List of Chapters (Atleast 10 chapters) along with summery and Emoji icon for each chapter for each chapter sepratly(do not add emoji in chapter_title and generate emoji in json like this  "emoji": "➕"), Topic list in each chapter, all result in JSON format'


    const aiResp = await courseOutline.sendMessage(PROMPT);
    const aiResult = JSON.parse(aiResp.response.text()) ;

    const dbResult = await db.insert(STUDY_MATERIAL_TABLE).values({
        courseId : courseId,
        courseType : courseType,
        createdBy : createdBy,
        topic : topic,
        courseLayout : aiResult
    }).returning({resp : STUDY_MATERIAL_TABLE});

    const result = await inngest.send({
        name : 'notes.generate',
        data:{
            course : dbResult[0].resp
        }
    });
    console.log(result)
    return NextResponse.json({result:dbResult[0]});
}