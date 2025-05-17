import {
  generateNotes,
  GenerateQUizAiModel,
  GenerateStudyTypeContentAiModel,
} from "@/config/AiModel";
import { inngest } from "./client";
import { db } from "@/config/db";
import {
  CHAPTER_NOTES_TABLE,
  STUDY_MATERIAL_TABLE,
  STUDY_TYPE_CONTENT_TABLE,
  USER_TABLE,
} from "@/config/schema";
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
    const { user } = event.data;
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
  { id: "generate-course" },
  { event: "notes.generate" },
  async ({ event, step }) => {
    const { course } = event.data;

    const noteResult = await step.run("Generate Chapter Notes", async () => {
      const Chapters = course?.courseLayout?.chapters;
      let index = 0;
      Chapters.forEach(async (Chapter) => {
        const PROMPT = `Generate exam material with detailed content for each chapter. Ensure all topic points are covered thoroughly. Format the output using proper HTML structure:Use <h1> for chapter titles. Use <h2> for subheadings (topics within the chapter). Use <code> and <pre> tags for code snippets and examples. Ensure well-structured and readable content. and make sure to givy content in HTML format (Do not Add HTML , Head, Body, title tag) ${JSON.stringify(
          Chapter
        )}`;

        const result = await generateNotes.sendMessage(PROMPT);
        const aiResp = result.response.text();

        await db.insert(CHAPTER_NOTES_TABLE).values({
          chapterId: index,
          courseId: course?.courseId,
          notes: aiResp,
        });
        index = index + 1;
      });

      return "Completed";
    });

    const updateCourseStatusResult = await step.run(
      "Update Course Status to Ready",
      async () => {
        const result = await db
          .update(STUDY_MATERIAL_TABLE)
          .set({ status: "Ready" })
          .where(eq(STUDY_MATERIAL_TABLE.courseId, course?.courseId));
        // .returning();
        return "Success";
      }
    );
  }
);

export const GenerateStudyTypeContent = inngest.createFunction(
  { id: "Generate Study Type Content" },
  { event: "studyType.content" },
  async ({ event, step }) => {
    const { studyType, prompt, courseId, recordId } = event.data;
    const AiResult = await step.run(
      "Generating FlashCard using Ai",
      async () => {
        const result =
          studyType == "Flashcard"
            ? await GenerateStudyTypeContentAiModel.sendMessage(prompt)
            : await GenerateQUizAiModel.sendMessage(prompt);
        const AIResult = JSON.parse(result.response.text());
        return AIResult;
      }
    );
    const DBResult = await step.run("Save Result to DB", async () => {
      const result = await db
        .update(STUDY_TYPE_CONTENT_TABLE)
        .set({
          content: AiResult,
          status: "Ready",
        })
        .where(eq(STUDY_TYPE_CONTENT_TABLE.id, recordId));
      return "Data inserted";
    });
  }
);
