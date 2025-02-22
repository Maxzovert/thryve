import { generateNotes } from "@/config/AiModel";
import { inngest } from "./client";
import { db } from "@/config/db";
import { CHAPTER_NOTES_TABLE, STUDY_MATERIAL_TABLE, USER_TABLE } from "@/config/schema";
import { eq } from "drizzle-orm";

export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event, step }) => {
    await step.sleep("wait-a-moment", "1s");
    return { message: `Hello ${event.data.email}!` };
  }
);

export const CreateNewUser = inngest.createFunction(
  { id: "create-user" },
  { event: "user.create" },
  async ({ event, step }) => {
    const {user} = event.data;
    //Get event data or the data u r going to pass
    const result = await step.run(
      "Check User and create new if Not in the DB",
      async () => {
        const result = await db
          .select()
          .from(USER_TABLE)
          .where(eq(USER_TABLE.email, user?.primaryEmailAddress?.emailAddress));
        console.log(result);

        if (result?.length == 0) {
          const userResp = await db
            .insert(USER_TABLE)
            .values({
              name: user?.fullName,
              email: user?.primaryEmailAddress?.emailAddress,
            })
            .returning({ id: USER_TABLE.id });
                return userResp;
        }
        return result;
      }
    );

    return "Sucess";
  }

  //Step 2 TO send email notification
);

export const GenerateNotes = inngest.createFunction(
  {id : 'generate-course'},
  {event : 'notes.generate'},
  async({event , step})=>{
    const {course} = event.data;

   const noteResult = await step.run('Generate Chapter Notes',async()=>{
    const Chapters = course?.courseLayout?.chapters;
    let index = 0;
    Chapters.forEach(async(Chapter)=>{
      const PROMPT = `Generate a well-structured, readable, and engaging exam material for each chapter in HTML format.  
**Ensure the content is fully compatible with dangerouslySetInnerHTML.**  

📌 **Content Structure:**  
- Use **<h1>** for the chapter title.  
- Use **<h2>** for main topics.  
- Use **<h3>** for subtopics.  
- Use **<p>** for explanations with proper spacing.  
- Use **<strong>** and **<em>** for emphasis.  
- Use **<ul>** and **<li>** for listing key points.  
- Use **<pre>** and **<code>** for code snippets.  
- Ensure **all tags are properly closed and well-formed.**  
- Include an **"Exam Questions"** section at the end of each chapter.  

📌 **Key Considerations:**  
- The HTML should be **clean, readable, and visually appealing**.  
- Avoid inline styles; rely on semantic HTML.  
- Ensure the content is **safe for direct rendering** with dangerouslySetInnerHTML.  

**Chapters:** ${JSON.stringify(Chapter)}`;
      const result = await generateNotes.sendMessage(PROMPT);
      const aiResp = result.response.text();

      await db.insert(CHAPTER_NOTES_TABLE).values({
        chapterId : index,
        courseId : course?.courseId,
        notes : aiResp,
      })
      index = index+1;
    })

    return 'Completed'
   })

   const updateCourseStatusResult = await step.run('Update Course Status to Ready',async()=>{
    const result = await db
    .update(STUDY_MATERIAL_TABLE)
    .set({status : 'Ready'})
    .where(eq(STUDY_MATERIAL_TABLE.courseId,course?.courseId))
    // .returning();
    return 'Success';
   })
  }
)