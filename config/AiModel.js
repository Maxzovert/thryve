const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
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
    history: [
      {
        role: "user",
        parts: [
          {text: "Generate exam material detail content for each chapter , Make sure to includes all topic point in the\ncontent, make sure to givy content in HTML format (Do not Add HTMLK , Head, Body, title tag), The\nchapters :\n{\n      \"chapter_title\": \"Object-Oriented Programming (OOP)\",\n      \"emoji\": \"🏛️\",\n      \"chapter_summary\": \"This chapter introduces the concepts of object-oriented programming, including classes, objects, inheritance, polymorphism, and encapsulation.\",\n      \"topics\": [\n        \"Classes and Objects\",\n        \"Attributes and Methods\",\n        \"Inheritance (single and multiple)\",\n        \"Polymorphism (method overriding and overloading)\",\n        \"Encapsulation (private and protected attributes)\",\n        \"Abstraction\",\n        \"`__init__` method (constructor)\",\n        \"`self` parameter\"\n      ]\n    },\n\n(use h1 tag for heading and h2 for subheadding and code for code snippet and pre tag make it looking good  i want to use it in next js with dangerouslySetInnerHTML)"},
        ],
      },
      {
        role: "model",
        parts: [
          {text: "```html\n<h1>Object-Oriented Programming (OOP) 🏛️</h1>\n\n<h2>Classes and Objects</h2>\n<p>This section covers the fundamental concepts of classes and objects.  A class is a blueprint for creating objects, while an object is an instance of a class.  We'll explore how to define classes and create objects from them.</p>\n\n<h2>Attributes and Methods</h2>\n<p>Attributes represent the data associated with an object, while methods define the actions an object can perform.  We will learn how to define and access both attributes and methods within a class.</p>\n<pre><code class=\"language-python\">\nclass Dog:\n    def __init__(self, name, breed):\n        self.name = name\n        self.breed = breed\n\n    def bark(self):\n        print(\"Woof!\")\n\nmy_dog = Dog(\"Buddy\", \"Golden Retriever\")\nprint(my_dog.name)  # Output: Buddy\nmy_dog.bark()       # Output: Woof!\n</code></pre>\n\n\n<h2>Inheritance (Single and Multiple)</h2>\n<p>Inheritance allows you to create new classes (derived classes) based on existing classes (base classes).  This promotes code reusability and reduces redundancy. We will explore both single inheritance (one base class) and multiple inheritance (multiple base classes).</p>\n<pre><code class=\"language-python\">\nclass Animal:\n    def __init__(self, name):\n        self.name = name\n\nclass Dog(Animal):\n    def bark(self):\n        print(\"Woof!\")\n\nmy_dog = Dog(\"Buddy\")\nprint(my_dog.name)  # Output: Buddy (inherited from Animal)\nmy_dog.bark()       # Output: Woof!\n</code></pre>\n\n<h2>Polymorphism (Method Overriding and Overloading)</h2>\n<p>Polymorphism allows objects of different classes to be treated as objects of a common type. Method overriding involves changing the implementation of a method inherited from a base class.  Method overloading (not directly supported in Python in the same way as some other languages) will be discussed conceptually.</p>\n\n<h2>Encapsulation (Private and Protected Attributes)</h2>\n<p>Encapsulation protects the internal state of an object by restricting direct access to its attributes.  We will discuss the use of naming conventions (e.g., `_protected`, `__private`) to achieve encapsulation in Python.</p>\n<pre><code class=\"language-python\">\nclass Person:\n    def __init__(self, age):\n        self._age = age  # Protected attribute\n\n    def get_age(self):\n        return self._age\n\nmy_person = Person(30)\nprint(my_person.get_age()) # Accessing through a method\n</code></pre>\n\n<h2>Abstraction</h2>\n<p>Abstraction hides complex implementation details and presents a simplified interface to the user.  We'll explore how abstraction improves code organization and maintainability.</p>\n\n<h2>`__init__` Method (Constructor)</h2>\n<p>The `__init__` method is a special method in Python that is automatically called when you create an object of a class.  It is used to initialize the object's attributes.</p>\n\n<h2>`self` Parameter</h2>\n<p>The `self` parameter is a convention in Python class methods. It refers to the instance of the class itself. It is used to access and modify the attributes of the object.</p>\n\n```\n"},
        ],
      },
    ],
  });
  // const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
  // console.log(result.response.text());