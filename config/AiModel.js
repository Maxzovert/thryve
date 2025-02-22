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
          {text: "Generate a study material for pytho  for exam and level of difficulty will be easy with summery of course, List of Chapters (Atleast 8 chapters) along with summery and Emoji icon for each chapter for each chapter sepratly(do not add emoji in chapter_title and generate emoji in json like this  \"emoji\": \"➕\"), Topic list in each chapter, all result in JSON format"},
        ],
      },
      {
        role: "model",
        parts: [
          {text: "```json\n{\n  \"course_title\": \"Python for Beginners: Exam Study Guide\",\n  \"course_difficulty\": \"Easy\",\n  \"course_summary\": \"This study guide provides a foundational understanding of Python programming, covering basic syntax, data structures, control flow, functions, and object-oriented programming principles. It's designed for individuals with little to no prior programming experience aiming to pass a beginner-level Python exam.\",\n  \"chapters\": [\n    {\n      \"chapter_title\": \"Introduction to Python\",\n      \"emoji\": \"🐍\",\n      \"chapter_summary\": \"This chapter introduces Python's history, features, installation, and basic syntax.  It covers the core principles of writing simple Python programs.\",\n      \"topics\": [\n        \"What is Python?\",\n        \"History and features of Python\",\n        \"Installing Python and setting up the development environment\",\n        \"Basic syntax: variables, comments, and indentation\",\n        \"Running your first Python program\"\n      ]\n    },\n    {\n      \"chapter_title\": \"Data Types and Variables\",\n      \"emoji\": \"🔢\",\n      \"chapter_summary\": \"This chapter explains fundamental data types in Python, including integers, floats, strings, and booleans. It also covers variable assignment and operations.\",\n      \"topics\": [\n        \"Integers (int)\",\n        \"Floating-point numbers (float)\",\n        \"Strings (str)\",\n        \"Booleans (bool)\",\n        \"Variable assignment and naming conventions\",\n        \"Basic arithmetic operations (+, -, *, /, %)\",\n        \"Type conversion (casting)\"\n      ]\n    },\n    {\n      \"chapter_title\": \"Operators\",\n      \"emoji\": \"➕\",\n      \"chapter_summary\": \"Learn about different types of operators in Python, including arithmetic, comparison, logical, and assignment operators.\",\n      \"topics\": [\n        \"Arithmetic operators (+, -, *, /, %, //, **)\",\n        \"Comparison operators (==, !=, >, <, >=, <=)\",\n        \"Logical operators (and, or, not)\",\n        \"Assignment operators (=, +=, -=, *=, /=)\",\n        \"Operator precedence\"\n      ]\n    },\n    {\n      \"chapter_title\": \"Control Flow: Conditional Statements\",\n      \"emoji\": \"🚦\",\n      \"chapter_summary\": \"This chapter covers conditional statements (if, elif, else) to control the execution flow of your programs based on conditions.\",\n      \"topics\": [\n        \"The `if` statement\",\n        \"The `if-else` statement\",\n        \"The `if-elif-else` statement\",\n        \"Nested `if` statements\",\n        \"Using comparison and logical operators in conditional statements\"\n      ]\n    },\n    {\n      \"chapter_title\": \"Control Flow: Loops\",\n      \"emoji\": \"🔄\",\n      \"chapter_summary\": \"Learn about `for` and `while` loops for iterating over sequences and repeating code blocks. Includes `break` and `continue` statements.\",\n      \"topics\": [\n        \"The `for` loop\",\n        \"Iterating over strings and lists\",\n        \"The `while` loop\",\n        \"The `break` statement\",\n        \"The `continue` statement\",\n        \"Nested loops\"\n      ]\n    },\n    {\n      \"chapter_title\": \"Data Structures: Lists\",\n      \"emoji\": \"📃\",\n      \"chapter_summary\": \"This chapter introduces lists, a versatile data structure for storing ordered collections of items. Covers list operations and methods.\",\n      \"topics\": [\n        \"Creating lists\",\n        \"Accessing list elements (indexing)\",\n        \"Slicing lists\",\n        \"List methods (append, insert, remove, pop, len, sort)\",\n        \"List comprehension (optional intro)\",\n        \"Iterating over lists\"\n      ]\n    },\n    {\n      \"chapter_title\": \"Data Structures: Strings\",\n      \"emoji\": \"🔤\",\n      \"chapter_summary\": \"Learn about strings and common string operations, including slicing, concatenation, formatting, and built-in string methods.\",\n      \"topics\": [\n        \"Creating strings\",\n        \"String indexing and slicing\",\n        \"String concatenation\",\n        \"String formatting (using f-strings)\",\n        \"String methods (upper, lower, strip, find, replace, split)\"\n      ]\n    },\n    {\n      \"chapter_title\": \"Functions\",\n      \"emoji\": \"⚙️\",\n      \"chapter_summary\": \"This chapter teaches how to define and call functions, pass arguments, return values, and understand scope.\",\n      \"topics\": [\n        \"Defining functions using `def`\",\n        \"Calling functions\",\n        \"Function arguments (positional and keyword)\",\n        \"Return values\",\n        \"Variable scope (local and global)\",\n        \"Docstrings\"\n      ]\n    },\n     {\n      \"chapter_title\": \"Input and Output\",\n      \"emoji\": \"⌨️\",\n      \"chapter_summary\": \"This chapter teaches how to take user input and Print Out put\",\n      \"topics\": [\n        \"input() function\",\n        \"print() function\",\n        \"String formatting\",\n        \"Reading and Writing to file\"\n      ]\n    },\n\n    {\n      \"chapter_title\": \"Error Handling\",\n      \"emoji\": \"❗\",\n      \"chapter_summary\": \"This chapter introduces error handling using try-except blocks to gracefully handle exceptions.\",\n      \"topics\": [\n        \"Types of errors (SyntaxError, NameError, TypeError, ValueError, ZeroDivisionError)\",\n        \"The `try-except` block\",\n        \"Handling specific exceptions\",\n        \"The `finally` block (optional)\"\n      ]\n    }\n  ]\n}\n```\n"},
        ],
      },
    ],
  });

  export const generateNotes = model.startChat({
    generationConfig,

  });
  // const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
  // console.log(result.response.text());