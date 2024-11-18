
import { list } from "postcss";
import {AppleSvg, BoySvg, WomanSvg} from "~/components/Svgs";
 

export const lessonProblem1 = {
    type: "SELECT_1_OF_3",
    question: "Which of these is a correct way to declare a variable in Python?",
    answers: [
      { icon: <AppleSvg/>, name: "x = 5" },
      { icon: <AppleSvg/>, name: "int x 5" },
      { icon: <AppleSvg/>, name: "x : 5" },
    ],
    correctAnswer: 0,
  } as const;
  
  export const lessonProblem2 = {
    type: "WRITE",
    question: "Write the Python code to print 'Hello, World!'",
    answerTiles: ["print", "('","')", "world", "Hello"],
    correctAnswer: [0, 1, 4, 3, 2]
  } as const;
  
  export const lessonProblem3 = {
    type: "SELECT_1_OF_3",
    question: "What is the output of the following Python code: `x = 5; print(x)`?",
    answers: [
      { icon: <AppleSvg />, name: "5" },
      { icon: <BoySvg />, name: "x" },
      { icon: <WomanSvg />, name: "undefined" },
    ],
    correctAnswer: 0,
  } as const;
  
  export const lessonProblem4 = {
    type: "SELECT_1_OF_3",
    question: "What data type is `True` in Python?",
    answers: [
      { icon: <AppleSvg />, name: "int" },
      { icon: <AppleSvg />, name: "bool" },
      { icon: <AppleSvg />, name: "str" },
    ],
    correctAnswer: 1,
  } as const;
  
  export const lessonProblem5 = {
    type: "WRITE",
    question: "Write a Python code snippet to create a variable for the chick's age.",
    answerTiles: ["age", "=", "chickie_age", "2"],
    correctAnswer: [2, 1, 3],
  } as const;
  
  export const lessonProblem6 = {
    type: "SELECT_1_OF_3",
    question: "Which of these is a valid comment in Python?",
    answers: [
      { icon: <AppleSvg />, name: "// This is a comment" },
      { icon: <AppleSvg />, name: "# This is a comment" },
      { icon: <AppleSvg />, name: "//* This is a comment *//" }
    ],
    correctAnswer: 1,
  } as const;
  
  export const lessonProblem7 = {
    type: "WRITE",
    question: "Write a Python statement to assign the value 10 to a variable named `a`.",
    answerTiles: ["a", "10", "=", "assign"],
    correctAnswer: [0, 2, 1],
  } as const;
  
  export const lessonProblem8 = {
    type: "SELECT_1_OF_3",
    question: "Which operator is used for exponentiation in Python?",
    answers: [
      { icon: <AppleSvg />, name: "**" },
      { icon: <AppleSvg />, name: "%" },
      { icon: <AppleSvg />, name: "^" },
    ],
    correctAnswer: 0,
  } as const;
  
  export const lessonProblem9 = {
    type: "WRITE",
    question: "Write a Python program to check if a number is even.",
    answerTiles: ["if", "number", "%", "2", "==", "0", ":", "print"],
    correctAnswer: [0, 1, 2, 3, 4, 5, 6, 7],
  } as const;
  
  export const lessonProblem10 = {
    type: "SELECT_1_OF_3",
    question: "Which of these is the correct syntax for a Python `if` statement?",
    answers: [
      { icon: <AppleSvg />, name: "if x > 5:" },
      { icon: <AppleSvg />, name: "if (x > 5) then" },
      { icon: <AppleSvg />, name: "if x > 5 do" },
    ],
    correctAnswer: 0,
  } as const;
  
  export const lessonProblem11 = {
    type: "SELECT_1_OF_3",
    question: "What is the correct way to import a module in Python?",
    answers: [
      { icon: <AppleSvg />, name: "import math" },
      { icon: <AppleSvg />, name: "use math" },
      { icon: <AppleSvg />, name: "import module math" },
    ],
    correctAnswer: 0,
  } as const;
  
  export const lessonProblem12 = {
    type: "WRITE",
    question: "Write a Python program to find the length of a string.",
    answerTiles: ["len", "(", "string", ")"],
    correctAnswer: [0, 1, 2, 3],
  } as const;
  
  export const lessonProblem13 = {
    type: "SELECT_1_OF_3",
    question: "Which of the following is a mutable data type in Python?",
    answers: [
      { icon: <AppleSvg />, name: "list" },
      { icon: <AppleSvg />, name: "tuple" },
      { icon: <AppleSvg />, name: "str" },
    ],
    correctAnswer: 0,
  } as const;
  
  export const lessonProblem14 = {
    type: "WRITE",
    question: "Write a Python function to add two numbers.",
    answerTiles: ["def", "add", "(", "a", ",", "b", ")", ":", "return", "a", "+", "b"],
    correctAnswer: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  } as const;
  
  export const lessonProblem15 = {
    type: "SELECT_1_OF_3",
    question: "Which of these is used to define a Python function?",
    answers: [
      { icon: <AppleSvg />, name: "def" },
      { icon: <AppleSvg />, name: "function" },
      { icon: <AppleSvg />, name: "fun" },
    ],
    correctAnswer: 0,
  } as const;
  
  export const lessonProblem16 = {
    type: "SELECT_1_OF_3",
    question: "What is the default return value of a Python function that doesn't explicitly return anything?",
    answers: [
      { icon: <AppleSvg />, name: "None" },
      { icon: <AppleSvg />, name: "0" },
      { icon: <AppleSvg />, name: "False" },
    ],
    correctAnswer: 0,
  } as const;
  
  export const lessonProblem17 = {
    type: "WRITE",
    question: "Write the Python code to create a dictionary with keys 'name' and 'age'.",
    answerTiles: ["{", "'name'", ":", "'John'", ",", "'age'", ":", "30", "}"],
    correctAnswer: [0, 1, 2, 3, 4, 5, 6, 7, 8],
  } as const;
  
  export const lessonProblem18 = {
    type: "SELECT_1_OF_3",
    question: "Which of the following is used to create a loop that iterates a fixed number of times?",
    answers: [
      { icon: <AppleSvg />, name: "for" },
      { icon: <AppleSvg />, name: "while" },
      { icon: <AppleSvg />, name: "repeat" },
    ],
    correctAnswer: 0,
  } as const;
  
  export const lessonProblem19 = {
    type: "WRITE",
    question: "Write a `for` loop in Python to print numbers from 1 to 3.",
    answerTiles: ["for", "i", "in", "range", "(", "1", ",", "4", "):", "print", "i"],
    correctAnswer: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  } as const;
  
  export const lessonProblem20 = {
    type: "SELECT_1_OF_3",
    question: "Which keyword is used to define a class in Python?",
    answers: [
      { icon: <AppleSvg />, name: "class" },
      { icon: <AppleSvg />, name: "def" },
      { icon: <AppleSvg />, name: "object" },
    ],
    correctAnswer: 0,
  } as const;
  
  export const lessonProblem21 = {
    type: "WRITE",
    question: "Write a Python class named `Dog` with an attribute `name`.",
    answerTiles: ["class", "Dog", ":", "def", "__init__", "(", "self", ",", "name", "):", "self.name", "=", "name"],
    correctAnswer: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  } as const;
  
  export const lessonProblem22 = {
    type: "SELECT_1_OF_3",
    question: "Which of the following is used to handle exceptions in Python?",
    answers: [
      { icon: <AppleSvg />, name: "try-except" },
      { icon: <AppleSvg />, name: "error-catch" },
      { icon: <AppleSvg />, name: "except-try" },
    ],
    correctAnswer: 0,
  } as const;
  
  export const lessonProblem23 = {
    type: "WRITE",
    question: "Write a Python code snippet to check if a number is greater than 10 and print 'Large'.",
    answerTiles: ["if", "number", ">", "10", ":", "print", "'Large'"],
    correctAnswer: [0, 1, 2, 3, 4, 5, 6],
  } as const;
  
  export const lessonProblem24 = {
    type: "SELECT_1_OF_3",
    question: "Which of the following is used to return the value of the first item in a list?",
    answers: [
      { icon: <AppleSvg />, name: "list[0]" },
      { icon: <AppleSvg />, name: "list(0)" },
      { icon: <AppleSvg />, name: "list.first()" },
    ],
    correctAnswer: 0,
  } as const;
  
  export const lessonProblem25 = {
    type: "SELECT_1_OF_3",
    question: "What is the result of `5 // 2` in Python?",
    answers: [
      { icon: <AppleSvg />, name: "2" },
      { icon: <AppleSvg />, name: "2.5" },
      { icon: <AppleSvg />, name: "3" },
    ],
    correctAnswer: 0,
  } as const;
  
 export const pythonLessonProblems = [
    lessonProblem1, lessonProblem2, lessonProblem3, lessonProblem4, lessonProblem5,
    lessonProblem6, lessonProblem7, lessonProblem8, lessonProblem9, lessonProblem10,
    lessonProblem11, lessonProblem12, lessonProblem13, lessonProblem14, lessonProblem15,
    lessonProblem16, lessonProblem17, lessonProblem18, lessonProblem19, lessonProblem20,
    lessonProblem21, lessonProblem22, lessonProblem23, lessonProblem24, lessonProblem25
  ];
  