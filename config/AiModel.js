const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};

  export const courseOutline = model.startChat({
    generationConfig,
    history: [
      {
        role: "user",
        parts: [
          {text: "Generate a study material for \npython for exam and level of difficulty will be easy with summery of course, List of Chapters along with summery  for each chapter, Topic list in each chapter, all result in JSON format"},
        ],
      },
      {
        role: "model",
        parts: [
          {text: "```json\n{\n  \"course_title\": \"Python for Beginners: Exam Preparation\",\n  \"course_summary\": \"This study guide provides a foundational overview of Python programming, suitable for beginners preparing for introductory exams. It covers basic syntax, data types, control flow, functions, and common data structures. The focus is on understanding core concepts and applying them to simple problems.\",\n  \"level_of_difficulty\": \"Easy\",\n  \"chapters\": [\n    {\n      \"chapter_number\": 1,\n      \"chapter_title\": \"Introduction to Python\",\n      \"chapter_summary\": \"This chapter introduces Python's history, advantages, and installation process. It also covers how to run Python code and understand basic syntax rules.\",\n      \"topics\": [\n        \"What is Python?\",\n        \"Why learn Python? (Advantages)\",\n        \"Python Versions (Python 2 vs Python 3)\",\n        \"Installing Python\",\n        \"Setting up a Development Environment (IDE: VS Code, Thonny, etc.)\",\n        \"Running Python Code (Interactive Mode, Scripts)\",\n        \"Basic Syntax (Indentation, Comments)\",\n        \"Hello World Program\"\n      ]\n    },\n    {\n      \"chapter_number\": 2,\n      \"chapter_title\": \"Data Types and Variables\",\n      \"chapter_summary\": \"This chapter explores Python's fundamental data types (integers, floats, strings, booleans) and how to declare and use variables to store data.\",\n      \"topics\": [\n        \"Data Types (Integers, Floats, Strings, Booleans)\",\n        \"Variables (Naming Conventions, Assignment)\",\n        \"Type Conversion (Casting)\",\n        \"Operators (Arithmetic, Comparison, Logical, Assignment)\",\n        \"String Manipulation (Concatenation, Slicing, Formatting)\"\n      ]\n    },\n    {\n      \"chapter_number\": 3,\n      \"chapter_title\": \"Control Flow\",\n      \"chapter_summary\": \"This chapter introduces control flow statements (if, else, elif) to execute code based on conditions, and loops (for, while) to repeat code blocks.\",\n      \"topics\": [\n        \"Conditional Statements (if, else, elif)\",\n        \"Comparison Operators (==, !=, >, <, >=, <=)\",\n        \"Logical Operators (and, or, not)\",\n        \"Loops (for loop, while loop)\",\n        \"Loop Control Statements (break, continue)\",\n        \"Nested Loops\"\n      ]\n    },\n    {\n      \"chapter_number\": 4,\n      \"chapter_title\": \"Functions\",\n      \"chapter_summary\": \"This chapter explains how to define and call functions to organize code into reusable blocks. It also covers function parameters and return values.\",\n      \"topics\": [\n        \"Defining Functions (def keyword)\",\n        \"Function Arguments (Positional, Keyword, Default)\",\n        \"Return Values\",\n        \"Scope of Variables (Local vs Global)\",\n        \"Function Calls\",\n        \"Docstrings\"\n      ]\n    },\n    {\n      \"chapter_number\": 5,\n      \"chapter_title\": \"Data Structures: Lists and Tuples\",\n      \"chapter_summary\": \"This chapter introduces lists and tuples, two fundamental data structures for storing collections of items. It covers how to create, access, and modify lists and tuples.\",\n      \"topics\": [\n        \"Lists (Creating, Accessing, Modifying)\",\n        \"List Methods (append, insert, remove, pop, sort)\",\n        \"Tuples (Creating, Accessing)\",\n        \"Tuple Immutability\",\n        \"List vs Tuple: When to Use Which\",\n        \"List Comprehension (Introduction)\"\n      ]\n    },\n    {\n      \"chapter_number\": 6,\n      \"chapter_title\": \"Data Structures: Dictionaries\",\n      \"chapter_summary\": \"This chapter introduces dictionaries, a data structure that stores key-value pairs. It covers how to create, access, and modify dictionaries.\",\n      \"topics\": [\n        \"Dictionaries (Creating, Accessing, Modifying)\",\n        \"Dictionary Methods (keys, values, items, get, update)\",\n        \"Checking for Key Existence\",\n        \"Iterating through Dictionaries\"\n      ]\n    },\n    {\n      \"chapter_number\": 7,\n      \"chapter_title\": \"Basic Input and Output\",\n      \"chapter_summary\": \"This chapter covers how to get input from the user and display output to the console using the `input()` and `print()` functions.\",\n      \"topics\": [\n        \"The `input()` Function (Getting User Input)\",\n        \"The `print()` Function (Displaying Output)\",\n        \"String Formatting (f-strings, .format())\",\n        \"Basic File I/O (Reading and Writing Text Files - introduction only)\"\n      ]\n    }\n  ]\n}\n```"},
        ],
      },
    ],
  });

  // const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
  // console.log(result.response.text());