import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState } from "react";
import {
  AppleSvg,
  BigCloseSvg,
  BoySvg,
  CloseSvg,
  DoneSvg,
  LessonFastForwardEndFailSvg,
  LessonFastForwardEndPassSvg,
  LessonFastForwardStartSvg,
  LessonTopBarEmptyHeart,
  LessonTopBarHeart,
  WomanSvg,
} from "~/components/Svgs";
import { useSound } from "~/hooks/useSound";
import { useProgress } from "~/components/ProgressContext";

import two_birds from "../../theme/two_birds.png";
import three_chicks from "../../theme/three_chicks.png";
import five_candles from "../../theme/five_candles.png";
import chick_microphone from "../../theme/chick_microphone.png";
import two_chicks from "../../theme/two_chicks.png";
import chick_card from "../../theme/chick_card.png";
import cow_2fingers from "../../theme/two_cow_fingers.png";
import chick_flattered from "../../theme/chick_flattered.png";
import three_cows from "../../theme/three_cows.png";
import cake from "../../theme/cake.png";
import chick_thumbsup from "../../theme/chick_thumbs_up.png";
import hen_thumbsup from "../../theme/hen_thumbsup.png";
import cow_sleeping from "../../theme/cow_sleeping.png";
import cow_dollars from "../../theme/cow_dollars.png";
import crying_chick from "../../theme/crying_chick.png";
import crying_chick2 from "../../theme/crying_chick2.png";
import crying_chick3 from "../../theme/crying_chick3.png";
import crying_chick4 from "../../theme/crying_chick4.png";
import crying_chick5 from "../../theme/crying_chick5.png";
import crying_cow from "../../theme/crying_cow.png";
import crying_cow2 from "../../theme/crying_cow2.png";
import crying_cow3 from "../../theme/crying_cow3.png";
import chick_twothumbs from "../../theme/chick_twothumbs.png";
import cow_twothumbs from "../../theme/cow_thumbstwo.png";
import sleeping_chick from "../../theme/sleeping_chick.png";
import laying_cow from "../../theme/lazy_cow.png";
import wrong_chick from "../../theme/chick_wrong.png";
import happy_chick from "../../theme/happy_chick.png";
import happy_chick2 from "../../theme/happy_chick2.png"
import happy_chick4 from "../../theme/happy_chick4.png"
import happy_chickfamily from "../../theme/happy_chickfamily.png";
import happy_chick3 from "../../theme/happy_chick3.png";
import sad_chick from "../../theme/sad_chick.png";
import happy_twochicks from "../../theme/happy_2chicks.png";
import happy_hen from "../../theme/happy_hen.png";
import chick_sleeping from "../../theme/chick_sleeping.png";
import cow_greeting from "../../theme/cow_greeting.png";

import cow_lightbulb from "../../theme/cow_lightbulb.png";
import cow_question from "../../theme/cow_question.png";
import cow_questioning from "../../theme/cow_questioning.png";
import cow_thinking from "../../theme/cow_thinking.png";
import chick_question from "../../theme/chick_question.png";
import chick_question2 from "../../theme/chick_question2.png";
import chick_question3 from "../../theme/chick_question3.png";
import chick_question4 from "../../theme/chick_question4.png";
import chick_thinking from "../../theme/chick_thinking.png";
import hen_question from "../../theme/hen_question.png";


import { useBoundStore } from "~/hooks/useBoundStore";
import { useRouter } from "next/router";

const lessonProblem1 = {
  type: "SELECT_1_OF_3",
  question: `Which one of these is "the apple"?`,
  answers: [
    { icon: <AppleSvg />, name: "la manzana" },
    { icon: <BoySvg />, name: "el niño" },
    { icon: <WomanSvg />, name: "la mujer" },
  ],
  correctAnswer: 0,
} as const;

const lessonProblem2 = {
  type: "WRITE_IN_ENGLISH",
  question: "El niño",
  answerTiles: ["woman", "milk", "water", "I", "The", "boy"],
  correctAnswer: [4, 5],
} as const;

const lessonProblems = [lessonProblem1, lessonProblem2];

{}
const pythonLessonProblemA1 = {
  type: "SELECT_1_OF_3",
  question: "Which of these is a correct way to declare a variable in Python?",
  answers: [
    { icon: <Image src={three_chicks} alt="" width={212} height={212}  className="w-full" />, name: "chicks x 3" },
    
    { icon: <Image src={two_birds} alt="" width={212} height={212}  className="w-full" />, name: "birds = 2" },
    { icon: <Image src={five_candles} alt="" width={212} height={212}  className="w-full" />, name: "candles : 5" },
  ],
  correctAnswer: 1,
} as const;

const pythonLessonProblemA2 = {
  type: "SELECT_1_OF_3",
  question: "Which of the following is NOT a valid Python variable name?",
  answers: [
    { icon: <Image src={happy_chickfamily} alt="" width={212} height={212} className="w-full" />, name: "chick_count" },
    { icon: <Image src={cow_twothumbs} alt="" width={212} height={212} className="w-full" />, name: "2thumbs" },
    { icon: <Image src={three_cows} alt="" width={212} height={212} className="w-full" />, name: "total_cows" },
  ],
  correctAnswer: 1,
} as const;


const pythonLessonProblemA3 = {
  type: "WRITE",
  question: "Write the Python code to print 'Hello, World!'",
  answerTiles: ["print", "('","')", "world", "Hello"],
  correctAnswer: [0, 1, 4, 3, 2]
} as const;

const pythonLessonProblemA4 = {
  type: "WRITE",
  question: "Write the Python code to print the phrase 'Goodbye!'",
  answerTiles: ["print", "('","')", "Goodbye"],
  correctAnswer: [0, 1, 3, 2]
} as const;



const pythonLessonProblemA5 = {
  type: "SELECT_1_OF_3",
  question: "Which of these is a valid variable name in Python?",
  answers: [
    { icon: <Image src={chick_microphone} alt="" width={212} height={212}  className="w-full" />, name: "1_microphone" },
    { icon: <Image src={two_chicks} alt="" width={212} height={212}  className="w-full" />, name: "chicks 2" },
    { icon: <Image src={chick_card} alt="" width={212} height={212}  className="w-full" />, name: "my_card" },
  ],
  correctAnswer: 2,
} as const;


const pythonLessonProblemA6 = {
  type: "SELECT_1_OF_3",
  question: "Which of the following is a correct way to declare a string variable in Python?",
  answers: [
    { icon:<Image src={cow_2fingers} alt="" width={212} height={212}  className="w-full" />, name: "fingers : '2'" },
    { icon: <Image src={chick_flattered} alt="" width={212} height={212}  className="w-full" />, name: "mood = 'flattered'" },
    { icon: <Image src={three_cows} alt="" width={212} height={212}  className="w-full" />, name: "cows = 3" },
  ],
  correctAnswer: 1,
} as const;


const pythonLessonProblemA7 = {
  type: "WRITE",
  question: "Write a comment in Python that says 'This is a comment'.",
  answerTiles: ["is", "a", "comment", "This", "#"],
  correctAnswer: [ 4, 3, 0, 1, 2]
} as const;



const pythonLessonProblemA8 = {
  type: "SELECT_1_OF_3",
  question: "Which of the following is a correct way to declare a float variable in Python?",
  answers: [
    { icon: <Image src={happy_chickfamily} alt="" width={212} height={212} className="w-full" />, name: "price = 3.5" },
    { icon: <Image src={sad_chick} alt="" width={212} height={212} className="w-full" />, name: "temperature = '25.3'" },
    { icon: <Image src={crying_cow} alt="" width={212} height={212} className="w-full" />, name: "height = 5,5" },
  ],
  correctAnswer: 0,
} as const;

const pythonLessonProblemA9 = {
  type: "WRITE",
  question: "Write the Python code to concatenate 'Python' and 'rocks' into a single string and print it.",
  answerTiles: ["print", "'Python'", "'rocks'", ")", "+","("],
  correctAnswer: [0, 5, 1,4, 2, 3],
} as const;

const pythonLessonProblemA10 = {
  type: "WRITE",
  question: "Assign the value 10 to the variable 'a'.",
  answerTiles: ["a", "10", "="],
  correctAnswer: [0, 2, 1]
} as const;
const pythonLessonProblemA11 = {
  type: "WRITE",
  question: "Write the Python code to add a comment about the following line of code: 'x = 10'.",
  answerTiles: [ "Assign", "10", "to x", "x = 10", "#"],
  correctAnswer: [3, 4, 0, 1, 2],
} as const;


const pythonLessonProblemA12 = {
  type: "WRITE",
  question: "Write the Python code to concatenate 'Hello' and 'World' into one string and print it.",
  answerTiles: [")", "print", "+", "'World'", "(", "'Hello'"],
  correctAnswer: [1, 4, 5, 2, 3, 0]
} as const;




const pythonLessonProblemA13 = {
  type: "WRITE",
  question: "Write a Python statement to assign the values 1, 2, and 3 to the variables 'a', 'b', and 'c' respectively in one line.",
  answerTiles: ["=", "a,",  "3", "c",  "1,","b,", "2,", "=="],
  correctAnswer: [1, 5, 3, 0, 4, 6, 2]
} as const;

const pythonLessonProblemA14 = {
  type: "WRITE",
  question: "Write the Python code to print the result of adding 5 and 8.",
  answerTiles: ["print", "5", "+", "(","8", ")"],
  correctAnswer: [0, 3, 1, 2,  4, 5],
} as const;

const pythonLessonProblemA15 = {
  type: "WRITE",
  question: "Write Python code to assign the values 'apple', 'banana', and 'cherry' to the variables 'x', 'y', and 'z' respectively in one line.",
  answerTiles: ["x,", "y,",  "apple,", "banana,", "cherry", "z", "="],
  correctAnswer: [0,1,5,6, 2,3,4],
} as const;

const pythonLessonProblemA16 = {
  type: "SELECT_1_OF_3",
  question: "Which of the following is a valid data type in Python?",
  answers: [
    { icon: <Image src={crying_chick} alt="" width={212} height={212} className="w-full" />, name: "decimal" },
    { icon: <Image src={happy_chick} alt="" width={212} height={212} className="w-full" />, name: "integer" },
    { icon: <Image src={crying_cow} alt="" width={212} height={212} className="w-full" />, name: "word" },
  ],
  correctAnswer: 1,
} as const;



const pythonLessonProblemB1 = {
  type: "WRITE",
  question: "Write Python code to add 7 and 3.",
  answerTiles: ["7", "3", "+", "-", "++"],
  correctAnswer: [0, 2, 1]
} as const;


const pythonLessonProblemB2 = {
  type: "WRITE",
  question: "Write the Python code to assign the value 20 to the variable 'a' and then subtract 5 from it.",
  answerTiles: ["a", "-", "5", "=", "20"],
  correctAnswer: [0, 3, 4, 1, 2],
} as const;


const pythonLessonProblemB3 = {
  type: "WRITE",
  question: "Write Python code to multiply 6 and 4.",
  answerTiles: ["6", "*", "4", "**"],
  correctAnswer: [0, 1, 2]
} as const;

const pythonLessonProblemB4 = {
  type: "WRITE",
  question: "Write Python code to divide 20 and 2.",
  answerTiles: ["20", "//", "2", "/"],
  correctAnswer: [0, 3, 2]
} as const;


const pythonLessonProblemB5 = {
  type: "SELECT_1_OF_3",
  question: "Which operator is used to find the remainder in Python?",
  answers: [
    { icon: <Image src={crying_chick} alt="" width={212} height={212}  className="w-full" />, name: "mod" },
    { icon: <Image src={sleeping_chick} alt="" width={212} height={212}  className="w-full" />, name: "/" },
    { icon:<Image src={chick_twothumbs} alt="" width={212} height={212}  className="w-full" />, name: "%" },
  ],
  correctAnswer: 2,
} as const;

const pythonLessonProblemB6 = {
  type: "WRITE",
  question: "Write Python code to subtract 5 from 10.",
  answerTiles: ["10", "--", "5", "-", "-*"],
  correctAnswer: [0, 3,2]
} as const;


const pythonLessonProblemB7 = {
  type: "SELECT_1_OF_3",
  question: "What is the result of 5 + 3 * 2 in Python?",
  answers: [
    { icon: <Image src={crying_chick2} alt="" width={212} height={212}  className="w-full" />, name: "16" },
    { icon: <Image src={cow_twothumbs} alt="" width={212} height={212}  className="w-full" />, name: "11" },
    { icon: <Image src={crying_chick5} alt="" width={212} height={212}  className="w-full" />, name: "13" },
  ],
  correctAnswer: 1,
} as const;

const pythonLessonProblemB8 = {
  type: "SELECT_1_OF_3",
  question: "Which operator is used to perform exponentiation in Python?",
  answers: [
    { icon: <Image src={crying_chick} alt="" width={212} height={212} className="w-full" />, name: "*" },
    { icon: <Image src={cow_sleeping} alt="" width={212} height={212} className="w-full" />, name: "**" },
    { icon: <Image src={three_cows} alt="" width={212} height={212} className="w-full" />, name: "^" },
  ],
  correctAnswer: 1,
} as const;


const pythonLessonProblemB9= {
  type: "SELECT_1_OF_3",
  question: "What is the result of -10 + 5 in Python?",
  answers: [
    { icon: <Image src={laying_cow} alt="" width={212} height={212}  className="w-full" />, name: "-5" },
    { icon: <Image src={crying_chick3} alt="" width={212} height={212}  className="w-full" />, name: "5" },
    { icon:<Image src={crying_chick4} alt="" width={212} height={212}  className="w-full" />, name: "15" },
  ],
  correctAnswer: 0,
} as const;
const pythonLessonProblemB10 = {
  type: "WRITE",
  question: "Write Python code to subtract 12 from 25 and then multiply the result by 3.",
  answerTiles: ["25",  "*", "3", "-", "12", "**"],
  correctAnswer: [0, 3, 4, 1, 2]
} as const;

const pythonLessonProblemB11 = {
  type: "WRITE",
  question: "Write Python code to calculate 2 raised to the power of 3.",
  answerTiles: ["2", "**", "3", "^"],
  correctAnswer: [0, 1, 2]
} as const;

const pythonLessonProblemB12 = {
  type: "SELECT_1_OF_3",
  question: "What is the result of 5 ** 2 in Python?",
  answers: [
    { icon: <Image src={happy_chick2} alt="" width={212} height={212} className="w-full" />, name: "25" },
    { icon: <Image src={crying_chick} alt="" width={212} height={212} className="w-full" />, name: "10" },
    { icon: <Image src={sad_chick} alt="" width={212} height={212} className="w-full" />, name: "5" },
  ],
  correctAnswer: 0,
} as const;

const pythonLessonProblemB13 = {
  type: "WRITE",
  question: "Write Python code to assign the value 100 to the variable 'b' and then divide it by 4.",
  answerTiles: [ "=", "b","100", "//", "4", "/"],
  correctAnswer: [1,0, 2, 5, 4]
} as const;

const pythonLessonProblemB14= {
  type: "WRITE",
  question: "Write Python code to convert the string '10' to an integer and store it in 'x'.",
  answerTiles: ["x", "int", "('10')", "=", "10"],
  correctAnswer: [0, 3, 1, 2]
} as const;


const pythonLessonProblemB15 = {
  type: "SELECT_1_OF_3",
  question: "What is the result of 8 % 3 in Python?",
  answers: [
    { icon: <Image src={crying_cow2} alt="" width={212} height={212} className="w-full" />, name: "3" },
    { icon: <Image src={crying_chick3} alt="" width={212} height={212} className="w-full" />, name: "1" },
    { icon: <Image src={happy_chick2} alt="" width={212} height={212} className="w-full" />, name: "2" },
  ],
  correctAnswer: 2,
} as const;



const pythonLessonProblemB16 = {
  type: "SELECT_1_OF_3",
  question: "What is the result of 10 // 3 in Python?",
  answers: [
    { icon: <Image src={cow_sleeping} alt="" width={212} height={212}  className="w-full" />, name: "3.333" },
    { icon:<Image src={three_cows} alt="" width={212} height={212}  className="w-full" />, name: "3" },
    { icon:<Image src={cow_dollars} alt="" width={212} height={212}  className="w-full" />, name: "4" },
  ],
  correctAnswer: 1,
} as const;




const pythonLessonProblemC1 = {
  type: "SELECT_1_OF_3",
  question: "Which of the following represents a Boolean value in Python?",
  answers: [
    { icon:<Image src={chick_thumbsup} alt="" width={212} height={212}  className="w-full" />, name: "True" },
    { icon: <Image src={hen_thumbsup} alt="" width={212} height={212}  className="w-full" />, name: "'True'" },
    { icon: <Image src={cake} alt="" width={212} height={212}  className="w-full" />, name: "1" },
  ],
  correctAnswer: 0,

} as const;
const pythonLessonProblemC2 = {
  type: "WRITE",
  question: "Write the Python code to negate the Boolean value 'True'.",
  answerTiles: [ "True", "not", "False"],
  correctAnswer: [1, 0]
} as const;
const pythonLessonProblemC3 = {
  type: "SELECT_1_OF_3",
  question: "Which of the following is the correct way to combine two Boolean conditions with 'and' in Python?",
  answers: [
    { icon: <Image src={crying_cow2} alt="" width={212} height={212}  className="w-full" />, name: "condition1 && condition2" },
    { icon: <Image src={happy_chick2} alt="" width={212} height={212}  className="w-full" />, name: "condition1 and condition2" },
    { icon: <Image src={crying_cow3} alt="" width={212} height={212}  className="w-full" />, name: "condition1 + condition2" },
  ],
  correctAnswer: 1,
} as const;

const pythonLessonProblemC4 = {
  type: "SELECT_1_OF_3",
  question: "Which of these expressions checks if a value is not equal to another in Python?",
  answers: [
    { icon: <Image src={chick_flattered} alt="" width={212} height={212} className="w-full" />, name: "!=" },
    { icon: <Image src={sleeping_chick} alt="" width={212} height={212} className="w-full" />, name: "==" },
    { icon: <Image src={chick_question3} alt="" width={212} height={212} className="w-full" />, name: ">" },
  ],
  correctAnswer: 0,
} as const;


const pythonLessonProblemC5 = {
  type: "SELECT_1_OF_3",
  question: "What is the output of the expression '9 == 9' in Python?",
  answers: [
    { icon: <Image src={crying_cow3} alt="" width={212} height={212} className="w-full" />, name: "False" },
    { icon: <Image src={happy_chick3} alt="" width={212} height={212} className="w-full" />, name: "True" },
    { icon: <Image src={crying_cow} alt="" width={212} height={212} className="w-full" />, name: "None" },
  ],
  correctAnswer: 1,
} as const;


const pythonLessonProblemC6 = {
  type: "SELECT_1_OF_3",
  question: "What is the result of 5 != 3 in Python?",
  answers: [
    { icon: <Image src={happy_chick} alt="" width={212} height={212}  className="w-full" />, name: "True" },
    { icon: <Image src={wrong_chick} alt="" width={212} height={212}  className="w-full" />, name: "False" },
    { icon: <Image src={crying_cow} alt="" width={212} height={212}  className="w-full" />, name: "None" },
  ],
  correctAnswer: 0,
} as const;

const pythonLessonProblemC7 = {
  type: "SELECT_1_OF_3",
  question: "What is the result of 3 < 5 in Python?",
  answers: [
    { icon: <Image src={chick_sleeping} alt="" width={212} height={212}  className="w-full" />, name: "False" },
    { icon: <Image src={happy_chickfamily} alt="" width={212} height={212}  className="w-full" />, name: "True" },
    { icon: <Image src={sad_chick} alt="" width={212} height={212}  className="w-full" />, name: "None" },
  ],
  correctAnswer: 1,
} as const;



const pythonLessonProblemC8 = {
  type: "WRITE",
  question: "Write Python code to check if 5 is equal to 5.",
  answerTiles: ["5", "==", "5", "="],
  correctAnswer: [0, 1, 2]
} as const;


const pythonLessonProblemC9 = {
  type: "WRITE",
  question: "Write Python code to check if 3 is less than 5.",
  answerTiles: ["3", "=<", "<", "5"],
  correctAnswer: [0, 2, 3]
} as const;

const pythonLessonProblemC10 = {
  type: "SELECT_1_OF_3",
  question: "Which of the following is used to check if two values are equal in Python?",
  answers: [
    { icon: <Image src={happy_chickfamily} alt="" width={212} height={212} className="w-full" />, name: "==" },
    { icon: <Image src={wrong_chick} alt="" width={212} height={212} className="w-full" />, name: "=" },
    { icon: <Image src={crying_cow} alt="" width={212} height={212} className="w-full" />, name: "!=" },
  ],
  correctAnswer: 0,
} as const;

const pythonLessonProblemC11 = {
  type: "WRITE",
  question: "Write Python code to check if 7 is greater than or equal to 5.",
  answerTiles: ["7", ">", "5", ">="],
  correctAnswer: [0, 3, 2]
} as const;

const pythonLessonProblemC12 = {
  type: "WRITE",
  question: "Write Python code to check if a number 'x' is less than 10 and 'y' is greater than 5.",
  answerTiles: ["x", "y", ">", "5", "<", "10", "and"],
  correctAnswer: [0, 4, 5, 6, 1, 2, 3 ]
} as const;
const pythonLessonProblemC13 = {
  type: "SELECT_1_OF_3",
  question: "Which of the following expressions will return False in Python?",
  answers: [
    { icon: <Image src={crying_cow2} alt="" width={212} height={212} className="w-full" />, name: "'True' == 'True'" },
    { icon: <Image src={cow_question} alt="" width={212} height={212} className="w-full" />, name: "5 == 3" },
    { icon: <Image src={cow_sleeping} alt="" width={212} height={212} className="w-full" />, name: "3 == 3" },
  ],
  correctAnswer: 1,
} as const;

const pythonLessonProblemC14 = {
  type: "WRITE",
  question: "Write Python code to check if a variable 'age' is between 18 and 25 (inclusive).",
  answerTiles: ["age >", "age", "<=", "25", "18", "and"],
  correctAnswer: [0,  4,  5, 1, 2, 3]
} as const;
const pythonLessonProblemC15 = {
  type: "SELECT_1_OF_3",
  question: "What is the result of the expression 'False or True' in Python?",
  answers: [
    { icon: <Image src={happy_chick4} alt="" width={212} height={212} className="w-full" />, name: "True" },
    { icon: <Image src={crying_chick4} alt="" width={212} height={212} className="w-full" />, name: "False" },
    { icon: <Image src={crying_cow2} alt="" width={212} height={212} className="w-full" />, name: "None" },
  ],
  correctAnswer: 0,
} as const;

const pythonLessonProblemC16 = {
  type: "WRITE",
  question: "Write Python code to check if a variable 'score' is less than or equal to 50 and greater than 30.",
  answerTiles: ["score <=", "score", ">", "30", "50", "and"],
  correctAnswer: [0, 4, 5, 1, 2, 3]
} as const;



const pythonLessonProblemD1 = {
  type: "SELECT_1_OF_3",
  question: "Which of the following is the correct syntax for creating a list in Python?",
  answers: [
    { icon: <Image src={crying_cow3} alt="" width={212} height={212}  className="w-full" />, name: "{1, 2, 3}" },
    { icon: <Image src={wrong_chick} alt="" width={212} height={212}  className="w-full" />, name: "(1, 2, 3)" },
    { icon: <Image src={happy_chick4} alt="" width={212} height={212}  className="w-full" />, name: "[1, 2, 3]" },
  ],
  correctAnswer: 2,
} as const;

const pythonLessonProblemD2 = {
  type: "SELECT_1_OF_3",
  question: "How can you access the second element of a list 'my_list'?",
  answers: [
    { icon: <Image src={crying_cow3} alt="" width={212} height={212}  className="w-full" />, name: "my_list[2]" },
    { icon: <Image src={sad_chick} alt="" width={212} height={212}  className="w-full" />, name: "my_list(2)" },
    { icon: <Image src={happy_twochicks} alt="" width={212} height={212}  className="w-full" />, name: "my_list[1]" },
  ],
  correctAnswer: 2,
} as const;
const pythonLessonProblemD3 = {
  type: "WRITE",
  question: "Write Python code to create a list containing the numbers 1, 2, and 3.",
  answerTiles: ["[","]", "1,", "3","2,","=","list"],
  correctAnswer: [6, 5, 0, 2, 4, 3, 1]
} as const;
const pythonLessonProblemD4 = {
  type: "WRITE",
  question: "Write Python code to append the value 'orange' to the list ['apple', 'banana'].",
  answerTiles: ["list", "'orange'", ")", ".append", "(",],
  correctAnswer: [0, 3, 4, 1, 2]
} as const;

const pythonLessonProblemD5 = {
  type: "SELECT_1_OF_3",
  question: "Which of the following is a valid tuple in Python?",
  answers: [
    { icon: <Image src={happy_chick3} alt="" width={212} height={212}  className="w-full" />, name: "(1, 2, 3)" },
    { icon: <Image src={chick_sleeping
    } alt="" width={212} height={212}  className="w-full" />, name: "[1, 2, 3]" },
    { icon: <Image src={crying_chick4} alt="" width={212} height={212}  className="w-full" />, name: "{1, 2, 3}" },
  ],
  correctAnswer: 0,
} as const;

const pythonLessonProblemD6 = {
  type: "SELECT_1_OF_3",
  question: "Which of the following is the correct way to define a dictionary in Python?",
  answers: [
    { icon: <Image src={happy_hen} alt="" width={212} height={212}  className="w-full" />, name: "{'key': 'value'}" },
    { icon: <Image src={crying_cow} alt="" width={212} height={212}  className="w-full" />, name: "['key', 'value']" },
    { icon: <Image src={crying_chick3} alt="" width={212} height={212}  className="w-full" />, name: "(key: 'value')" },
  ],
  correctAnswer: 0,
} as const;

const pythonLessonProblemD7 = {
  type: "SELECT_1_OF_3",
  question: "What is the result of accessing the second element in the tuple (10, 20, 30)?",
  answers: [
    { icon: <Image src={crying_chick2} alt="" width={212} height={212}  className="w-full" />, name: "10" },
    { icon: <Image src={happy_chick3} alt="" width={212} height={212}  className="w-full" />, name: "20" },
    { icon: <Image src={sleeping_chick} alt="" width={212} height={212}  className="w-full" />, name: "30" },
  ],
  correctAnswer: 1,
} as const;

const pythonLessonProblemD8 = {
  type: "WRITE",
  question: "Write Python code to add a key 'c' with value 15 to the dictionary {'a': 5, 'b': 10}.",
  answerTiles: ["dict", "]", "=", "15", "[", "'c'",],
  correctAnswer: [0, 4, 5, 1, 2, 3]
} as const;

const pythonLessonProblemD9 = {
  type: "SELECT_1_OF_3",
  question: "Which of the following is used to access values in a dictionary?",
  answers: [
    { icon: <Image src={happy_chick2} alt="" width={212} height={212} className="w-full" />, name: "dictionary['key']" },
    { icon: <Image src={crying_chick2} alt="" width={212} height={212} className="w-full" />, name: "dictionary{key}" },
    { icon: <Image src={wrong_chick} alt="" width={212} height={212} className="w-full" />, name: "dictionary.key" },
  ],
  correctAnswer: 0,
} as const;

const pythonLessonProblemD10 = {
  type: "WRITE",
  question: "Write Python code to remove the element 'banana' from the list ['apple', 'banana', 'orange'].",
  answerTiles: ["list", ".remove", "('banana')", "[", "]"],
  correctAnswer: [0, 1, 2]
} as const;
const pythonLessonProblemD11 = {
  type: "SELECT_1_OF_3",
  question: "What is the output of the code 'len([1, 2, 3])' in Python?",
  answers: [
    { icon: <Image src={chick_thumbsup} alt="" width={212} height={212} className="w-full" />, name: "3" },
    { icon: <Image src={crying_chick} alt="" width={212} height={212} className="w-full" />, name: "2" },
    { icon: <Image src={happy_chick2} alt="" width={212} height={212} className="w-full" />, name: "None" },
  ],
  correctAnswer: 0,
} as const;
const pythonLessonProblemD12 = {
  type: "WRITE",
  question: "Write Python code to create a tuple containing the elements 'apple', 'banana', and 'orange'.",
  answerTiles: ["(", ")", "apple,", "banana,", "orange"],
  correctAnswer: [0, 2, 3, 4, 1]
} as const;
const pythonLessonProblemD13 = {
  type: "SELECT_1_OF_3",
  question: "How do you define an empty dictionary in Python?",
  answers: [
    { icon: <Image src={chick_sleeping} alt="" width={212} height={212} className="w-full" />, name: "()" },
    { icon: <Image src={crying_cow} alt="" width={212} height={212} className="w-full" />, name: "[]" },
    { icon: <Image src={happy_hen} alt="" width={212} height={212} className="w-full" />, name: "{}" },
  ],
  correctAnswer: 2,
} as const;
const pythonLessonProblemD14 = {
  type: "WRITE",
  question: "Write Python code to access the value associated with the key 'b' in the dictionary {'a': 1, 'b': 2, 'c': 3}.",
  answerTiles: ["dict", "['b']", "('b')"],
  correctAnswer: [0, 1]
} as const;
const pythonLessonProblemD15 = {
  type: "SELECT_1_OF_3",
  question: "Which of the following is used to change the value of a key in a dictionary?",
  answers: [
    { icon: <Image src={crying_cow2} alt="" width={212} height={212} className="w-full" />, name: "dictionary.add('key', value)" },
    { icon: <Image src={happy_chick} alt="" width={212} height={212} className="w-full" />, name: "dictionary['key'] = value" },
    { icon: <Image src={wrong_chick} alt="" width={212} height={212} className="w-full" />, name: "dictionary.set('key', value)" },
  ],
  correctAnswer: 1,
} as const;

const pythonLessonProblemD16 = {
  type: "WRITE",
  question: "Write Python code to add the number `4` to the list `[1, 2, 3]`.",
  answerTiles: ["['1', '2', '3']", "('4')", ".append", ],
  correctAnswer: [0,2,1]
} as const;

const pythonLessonProblemE1 = {
  type: "WRITE",
  question: "Write an `if/else` statement to check if `x > 5` ",
  answerTiles: ["if", ">",":","x","5"],
  correctAnswer: [0, 3,1,4,2]
} as const;

const pythonLessonProblemE2 = {
  type: "SELECT_1_OF_3",
  question: "What is the output of the following code?\nif 3 > 2:\n\tprint('Yes')\nelse:\n\tprint('No')",
  answers: [
    { icon: <Image src={happy_hen} alt="" width={212} height={212}  className="w-full" />, name: "Yes" },
    { icon: <Image src={crying_cow3} alt="" width={212} height={212}  className="w-full" />, name: "No" },
    { icon: <Image src={crying_chick5} alt="" width={212} height={212}  className="w-full" />, name: "Error" },
  ],
  correctAnswer: 0,
} as const;

const pythonLessonProblemE3 = {
  type: "WRITE",
  question: "Write Python code to check if `x` is equal to 10. ",
  answerTiles: ["if", "x","10","==","=", ":"],
  correctAnswer: [0, 1, 3, 2, 5]
} as const;

const pythonLessonProblemE4 = {
  type: "WRITE",
  question: "Write Python code to check if the key 'apple' exists in the dictionary {'apple': 5, 'banana': 10}.",
  answerTiles: ["'apple'", "in", "dict", "key", "if"],
  correctAnswer: [4, 0, 1, 2]
} as const;

const pythonLessonProblemE5 = {
  type: "SELECT_1_OF_3",
  question: "What is the output of the following code?\nif 5 == 5:\n\tprint('True')\nelse:\n\tprint('False')",
  answers: [
    { icon: <Image src={happy_hen} alt="" width={212} height={212}  className="w-full" />, name: "True" },
    { icon: <Image src={crying_cow3} alt="" width={212} height={212}  className="w-full" />, name: "False" },
    { icon: <Image src={crying_chick5} alt="" width={212} height={212}  className="w-full" />, name: "Error" },
  ],
  correctAnswer: 0,
} as const;
const pythonLessonProblemE6 = {
  type: "WRITE",
  question: "Write Python code to check if `x` is less than 5 and y is greater than 0.",
  answerTiles: ["and", "y", ">", "if", "x", "<", "5", "0", ":"],
  correctAnswer: [ 3, 4, 5, 6, 0, 1, 2, 7, 8],
} as const;
const pythonLessonProblemE7 = {
  type: "SELECT_1_OF_3",
  question: "What will the following code print?\nif 10 > 5 and 5 > 3:\n\tprint('Both are true')\nelse:\n\tprint('One is false')",
  answers: [
    { icon: <Image src={happy_chick4} alt="" width={212} height={212}  className="w-full" />, name: "Both are true" },
    { icon: <Image src={crying_cow2} alt="" width={212} height={212}  className="w-full" />, name: "One is false" },
    { icon: <Image src={crying_chick5} alt="" width={212} height={212}  className="w-full" />, name: "Error" },
  ],
  correctAnswer: 0,
} as const;



const pythonLessonProblemE8 = {
  type: "WRITE",
  question: "Write the missing `if` statement to check if `x` is not equal to 0. ",
  answerTiles: ["if", "=","0","==","!", "x"],
  correctAnswer: [0, 5, 4, 1, 2]
} as const;

const pythonLessonProblemE9 = {
  type: "SELECT_1_OF_3",
  question: "Which of the following is the correct way to handle multiple conditions using `if/else`?",
  answers: [
    { icon: <Image src={happy_chick2} alt="" width={212} height={212}  className="w-full" />, name: "if x > 5 and x < 10:" },
    { icon: <Image src={crying_chick3} alt="" width={212} height={212}  className="w-full" />, name: "if x = 5 or x = 10:" },
    { icon: <Image src={wrong_chick} alt="" width={212} height={212}  className="w-full" />, name: "if x > 10 and x == 0:" },
  ],
  correctAnswer: 0,
} as const;

const pythonLessonProblemE10 = {
  type: "SELECT_1_OF_3",
  question: "What is the output of the following code?\nif 5 < 10:\n\tprint('Correct')\nelse:\n\tprint('Incorrect')",
  answers: [
    { icon: <Image src={happy_chick3} alt="" width={212} height={212}  className="w-full" />, name: "Correct" },
    { icon: <Image src={crying_chick2} alt="" width={212} height={212}  className="w-full" />, name: "Incorrect" },
    { icon: <Image src={sad_chick} alt="" width={212} height={212}  className="w-full" />, name: "Error" },
  ],
  correctAnswer: 0,
} as const;

const pythonLessonProblemE11 = {
  type: "SELECT_1_OF_3",
  question: "Which of the following statements checks if `x` is equal to 0 or `y` is greater than 10?",
  answers: [
    { icon: <Image src={happy_chick2} alt="" width={212} height={212}  className="w-full" />, name: "if x == 0 or y > 10:" },
    { icon: <Image src={crying_cow} alt="" width={212} height={212}  className="w-full" />, name: "if x = 0 and y = 10:" },
    { icon: <Image src={crying_chick5} alt="" width={212} height={212}  className="w-full" />, name: "if x == 0 and y > 10:" },
  ],
  correctAnswer: 0,
} as const;

const pythonLessonProblemE12 = {
  type: "WRITE",
  question: "Write the missing `if` statement to check if `x` is greater than 10. \nif:\n\tprint('High')\nelse:\n\tprint('Low')",
  answerTiles: ["x",">", ">=", "10"],
  correctAnswer: [0,1,3]
} as const;


const pythonLessonProblemF1 = {
  type: "SELECT_1_OF_3",
  question: "What is the correct syntax for a `for` loop that loops from 1 to 5?",
  answers: [
    { icon: <Image src={crying_cow3} alt="" width={212} height={212}  className="w-full" />, name: "for i in range(1, 5):" },
    { icon: <Image src={happy_twochicks} alt="" width={212} height={212}  className="w-full" />, name: "for i in range(1, 6):" },
    { icon: <Image src={crying_chick} alt="" width={212} height={212}  className="w-full" />, name: "for i in range(0, 5):" },
  ],
  correctAnswer: 1,
} as const;
const pythonLessonProblemF2 = {
  type: "WRITE",
  question: "Write a `for` loop from 1 to 7.",
  answerTiles: ["for", "in", "range", "(1, 7):", "i"],
  correctAnswer: [0,4, 1, 2, 3],
} as const;
const pythonLessonProblemF3 = {
  type: "SELECT_1_OF_3",
  question: "Which loop is used to iterate over a sequence such as a list or a string?",
  answers: [
    { icon: <Image src={happy_hen} alt="" width={212} height={212}  className="w-full" />, name: "For loop" },
    { icon: <Image src={crying_chick3} alt="" width={212} height={212}  className="w-full" />, name: "While loop" },
    { icon: <Image src={crying_cow3} alt="" width={212} height={212}  className="w-full" />, name: "Do-while loop" },
  ],
  correctAnswer: 0,
} as const;

const pythonLessonProblemF4 = {
  type: "SELECT_1_OF_3",
  question: "What is the output of the following code?\nfor i in range(1, 4):\n\tprint(i)",
  answers: [
    { icon: <Image src={crying_cow} alt="" width={212} height={212}  className="w-full" />, name: "0 1 2" },
    { icon: <Image src={happy_twochicks} alt="" width={212} height={212}  className="w-full" />, name: "1 2 3" },
    { icon: <Image src={crying_chick3} alt="" width={212} height={212}  className="w-full" />, name: "Error" },
  ],
  correctAnswer: 1,
} as const;
const pythonLessonProblemF5 = {
  type: "WRITE",
  question: "Write a `for` loop to iterate through the list `numbers = [2, 4, 6]`.",
  answerTiles: ["for", "in", "numbers", ":", "i"],
  correctAnswer: [0, 4, 1, 2, 3],
  
} as const;

const pythonLessonProblemF6 = {
  type: "SELECT_1_OF_3",
  question: "What will the following code output?\nfor i in range(2):\n\tprint(i)",
  answers: [
    { icon:<Image src={crying_chick2} alt="" width={212} height={212}  className="w-full" />, name: "0 1 2" },
    { icon: <Image src={crying_cow2} alt="" width={212} height={212}  className="w-full" />, name: "1 2" },
    { icon: <Image src={cow_twothumbs} alt="" width={212} height={212}  className="w-full" />, name: "0 1" },
  ],
  correctAnswer: 2,
} as const;




const pythonLessonProblemF7 = {
  type: "WRITE",
  question: "Write Python code using `range()` in a `for` loop from 1 to 3",
  answerTiles: [ "(", "1,", "4", "for i in range", "):", "3"],
  correctAnswer: [3, 0, 1, 2, 4]
} as const;


const pythonLessonProblemF8 = {
  type: "SELECT_1_OF_3",
  question: "What is the output of the following code?\n\nfor i in range(0, 5, 2):\n\tprint(i)",
  answers: [
    { icon: <Image src={happy_hen} alt="" width={212} height={212}  className="w-full" />, name: "0 2 4" },
    { icon: <Image src={crying_cow3} alt="" width={212} height={212}  className="w-full" />, name: "1 3 5" },
    { icon: <Image src={crying_chick5} alt="" width={212} height={212}  className="w-full" />, name: "0 1 2 3 4" },
  ],
  correctAnswer: 0,
} as const;
const pythonLessonProblemF9 = {
  type: "SELECT_1_OF_3",
  question: "What is the result of the following code?\n\nx = 0\nwhile x < 3:\n\tprint(x)\n\tx += 1",
  answers: [
    { icon: <Image src={happy_chick3} alt="" width={212} height={212}  className="w-full" />, name: "0 1 2" },
    { icon: <Image src={crying_chick5} alt="" width={212} height={212}  className="w-full" />, name: "1 2 3" },
    { icon: <Image src={crying_cow3} alt="" width={212} height={212}  className="w-full" />, name: "Error" },
  ],
  correctAnswer: 0,
} as const;


const pythonLessonProblemF10 = {
  type: "SELECT_1_OF_3",
  question: `What will the following code output?\nx = 0\n\twhile x < 3:\n\t\tprint(x)\n\t\tx += 1`,
  answers: [
    { icon: <Image src={crying_cow3} alt="" width={212} height={212}  className="w-full" />, name: "1 2 3" },
    { icon: <Image src={happy_twochicks} alt="" width={212} height={212}  className="w-full" />, name: "0 1 2" },
    { icon: <Image src={crying_chick4} alt="" width={212} height={212}  className="w-full" />, name: "0 1 2 3" },
  ],
  correctAnswer: 1,
} as const;

const pythonLessonProblemF11 = {
  type: "SELECT_1_OF_3",
  question: "What is the output of the following code?\nfor i in range(1, 3):\n\tfor j in range(1, 2):\n\t\tprint(i, j)",
  answers: [
    { icon: <Image src={sad_chick} alt="" width={212} height={212}  className="w-full" />, name: "Error" },
    { icon: <Image src={crying_cow3} alt="" width={212} height={212}  className="w-full" />, name: "1 1, 1 2" },
    { icon: <Image src={chick_flattered} alt="" width={212} height={212}  className="w-full" />, name: "1 1, 2 1" },
  ],
  correctAnswer: 2,
} as const;


const pythonLessonProblemF12 = {
  type: "WRITE",
  question: "Write Python code to loop 4 times using a `while` loop.",
  answerTiles: [ "while",":", "4", "i","<", "<="],
  correctAnswer: [0,3, 4, 2, 1]
} as const;

const pythonLessonProblemF13 = {
  type: "SELECT_1_OF_3",
  question: "Which statement do you use for the following? Repeat a condition while it is true.",
  answers: [
    { icon: <Image src={hen_thumbsup} alt="" width={212} height={212}  className="w-full" />, name: "While loop" },
    { icon: <Image src={crying_cow} alt="" width={212} height={212}  className="w-full" />, name: "If/Else" },
    { icon: <Image src={crying_cow2} alt="" width={212} height={212}  className="w-full" />, name: "For loop" },
  ],
  correctAnswer: 0,
} as const;


const pythonLessonProblemF14 = {
  type: "SELECT_1_OF_3",
  question: "What is the correct way to stop a loop prematurely in Python?",
  answers: [
    { icon: <Image src={happy_hen} alt="" width={212} height={212}  className="w-full" />, name: "break" },
    { icon: <Image src={crying_chick5} alt="" width={212} height={212}  className="w-full" />, name: "stop" },
    { icon: <Image src={crying_cow3} alt="" width={212} height={212}  className="w-full" />, name: "exit" },
  ],
  correctAnswer: 0,
} as const;


const pythonLessonProblemF15 = {
  type: "SELECT_1_OF_3",
  question: "What is the output of the following code?\n\nd = {'a': 1, 'b': 2, 'c': 3}\nfor key in d:\n\tprint(key, d[key])",
  answers: [
    { icon: <Image src={happy_chick4} alt="" width={212} height={212}  className="w-full" />, name: "a 1, b 2, c 3" },
    { icon: <Image src={crying_chick5} alt="" width={212} height={212}  className="w-full" />, name: "a, b, c" },
    { icon: <Image src={crying_cow3} alt="" width={212} height={212}  className="w-full" />, name: "1, 2, 3" },
  ],
  correctAnswer: 0,
} as const;
//happy_chick3

const pythonLessonProblemF16 = {
  type: "SELECT_1_OF_3",
  question: "What is the purpose of using `else` after a loop?",
  answers: [
    { icon: <Image src={happy_chick3} alt="" width={212} height={212}  className="w-full" />, name: "To execute code when the loop completes normally without breaking" },
    { icon: <Image src={crying_cow2} alt="" width={212} height={212}  className="w-full" />, name: "To execute code every time the loop runs" },
    { icon: <Image src={crying_chick5} alt="" width={212} height={212}  className="w-full" />, name: "To break the loop when a condition is met" },
  ],
  correctAnswer: 0,
} as const;






const pythonLessonProblemG1 = {
  type: "WRITE",
  question: "Write Python code to define a function `greet()` ",
  answerTiles: ["def", "()", ":", "greet"],
  correctAnswer: [0, 3, 1,2]
} as const;
const pythonLessonProblemG2 = {
  type: "SELECT_1_OF_3",
  question: "What will the following code print?\n\ndef greet():\n\tprint('Hi')\ngreet()",
  answers: [
    { icon: <Image src={cow_question} alt="" width={212} height={212}  className="w-full" />, name: "Error" },
    { icon: <Image src={laying_cow} alt="" width={212} height={212}  className="w-full" />, name: "Hello" },
    { icon: <Image src={cow_greeting} alt="" width={212} height={212}  className="w-full" />, name: "Hi" },
  ],
  correctAnswer: 2,
} as const;

const pythonLessonProblemG3 = {
  type: "WRITE",
  question: "Write Python code to create a lambda function that adds 2 to a number `x`.",
  answerTiles: [":","lambda x", "x", "2", "+"],
  correctAnswer: [1, 0,  2, 4, 3]
} as const;

const pythonLessonProblemG4 = {
  type: "SELECT_1_OF_3",
  question: "What will the following code return?\nadd_two = lambda x: x + 2\nadd_two(3)",
  answers: [
    { icon: <Image src={five_candles} alt="" width={212} height={212}  className="w-full" />, name: "5" },
    { icon: <Image src={crying_cow3} alt="" width={212} height={212}  className="w-full" />, name: "6" },
    { icon: <Image src={three_chicks} alt="" width={212} height={212}  className="w-full" />, name: "3" },
  ],
  correctAnswer: 0,
} as const;

const pythonLessonProblemG5 = {
  type: "SELECT_1_OF_3",
  question: "Which of the following is the correct way to define a function `add` that takes two arguments `a` and `b` ?",
  answers: [
    { icon:<Image src={sleeping_chick} alt="" width={212} height={212}  className="w-full" />, name: "function add(a, b):" },
    { icon: <Image src={cow_lightbulb} alt="" width={212} height={212}  className="w-full" />, name: "def add(a, b):" },
    { icon: <Image src={crying_chick} alt="" width={212} height={212}  className="w-full" />, name: "define add(a, b):" },
  ],
  correctAnswer: 1,
} as const;

const pythonLessonProblemG6 = {
  type: "SELECT_1_OF_3",
  question: "Which of the following correctly calls the function `greet()` defined as\ndef greet():\n\tprint('Hello')",
  answers: [
    { icon: <Image src={cow_greeting} alt="" width={212} height={212}  className="w-full" />, name: "greet()" },
    { icon: <Image src={sad_chick} alt="" width={212} height={212}  className="w-full" />, name: "call greet()" },
    { icon: <Image src={crying_chick5} alt="" width={212} height={212}  className="w-full" />, name: "greet" },
  ],
  correctAnswer: 0,
} as const;

const pythonLessonProblemG7 = {
  type: "SELECT_1_OF_3",
  question: "What will the following code return?\n\ndef square(x):\n\treturn x * x\nprint(square(4))",
  answers: [
    { icon: <Image src={crying_cow3} alt="" width={212} height={212}  className="w-full" />, name: "4" },
    { icon: <Image src={cow_greeting} alt="" width={212} height={212}  className="w-full" />, name: "16" },
    { icon: <Image src={crying_chick4} alt="" width={212} height={212}  className="w-full" />, name: "Error" },
  ],
  correctAnswer: 1,
} as const;

const pythonLessonProblemG8 = {
  type: "SELECT_1_OF_3",
  question: "Which of the following is the correct way to call a lambda function?\n add_two = lambda x: x + 2",
  answers: [
    { icon: <Image src={cow_question} alt="" width={212} height={212}  className="w-full" />, name: "add_two" },
    { icon: <Image src={crying_chick3} alt="" width={212} height={212}  className="w-full" />, name: "lambda add_two(3)" },
    { icon: <Image src={cow_dollars} alt="" width={212} height={212}  className="w-full" />, name: "add_two(3)" },
  ],
  correctAnswer: 2,
} as const;

const pythonLessonProblemG9 = {
  type: "SELECT_1_OF_3",
  question: "What will the following code print?\n\ndef greet():\n\t return'Hi'\ngreet()",
  answers: [
    { icon: <Image src={crying_chick} alt="" width={212} height={212}  className="w-full" />, name: "Hello" },
    { icon: <Image src={cow_twothumbs} alt="" width={212} height={212}  className="w-full" />, name: "None" },
    { icon: <Image src={cow_questioning} alt="" width={212} height={212}  className="w-full" />, name: "Error" },
  ],
  correctAnswer: 1,
} as const;

const pythonLessonProblemG10 = {
  type: "SELECT_1_OF_3",
  question: "What is the purpose of `return` in a function?",
  answers: [
    { icon: <Image src={crying_chick2} alt="" width={212} height={212}  className="w-full" />, name: "It ends the function" },
    { icon: <Image src={cow_lightbulb} alt="" width={212} height={212}  className="w-full" />, name: "It returns a value to the caller" },
    { icon: <Image src={chick_sleeping} alt="" width={212} height={212}  className="w-full" />, name: "It prints a value" },
  ],
  correctAnswer: 1,
} as const;
const pythonLessonProblemG11 = {
  type: "SELECT_1_OF_3",
  question: "What will the following code print?\n\ndef greet(name):\n\treturn 'Hello, ' + name\nprint(greet('Alice'))",
  answers: [
    { icon: <Image src={chick_flattered} alt="" width={212} height={212}  className="w-full" />, name: "Hello, Alice" },
    { icon: <Image src={crying_cow3} alt="" width={212} height={212}  className="w-full" />, name: "Error" },
    { icon: <Image src={cow_greeting} alt="" width={212} height={212}  className="w-full" />, name: "Hello, name" },
  ],
  correctAnswer: 0,
} as const;

const pythonLessonProblemG12 = {
  type: "SELECT_1_OF_3",
  question: "What does the following code do?\n\ndef multiply(x, y):\n\treturn x * y\nresult = multiply(3, 4)",
  answers: [
    { icon: <Image src={crying_chick5} alt="" width={212} height={212}  className="w-full" />, name: "Adds 3 and 4" },
    { icon: <Image src={sad_chick} alt="" width={212} height={212}  className="w-full" />, name: "Prints the result of 3 * 4" },
    { icon: <Image src={chick_flattered} alt="" width={212} height={212}  className="w-full" />, name: "Returns the product of 3 and 4" },
  ],
  correctAnswer: 2,
} as const;

const pythonLessonProblemG13 = {
  type: "SELECT_1_OF_3",
  question: "What is the result of the following code?\n\ndef multiply(x, y=2):\n\treturn x * y\nprint(multiply(5))",
  answers: [
    { icon: <Image src={happy_chickfamily} alt="" width={212} height={212}  className="w-full" />, name: "10" },
    { icon: <Image src={crying_chick5} alt="" width={212} height={212}  className="w-full" />, name: "Error" },
    { icon: <Image src={sad_chick} alt="" width={212} height={212}  className="w-full" />, name: "5" },
  ],
  correctAnswer: 0,
} as const;


const pythonLessonProblemG14 = {
  type: "WRITE",
  question: "Write Python code that returns the sum of `a` and `b` in a function defined as `add_numbers(a, b)`",
  answerTiles: ["a", "+","return", "b", "send"],
  correctAnswer: [2, 0, 1, 3]
} as const;

const pythonLessonProblemG15 = {
  type: "SELECT_1_OF_3",
  question: "What will the following code output?\n\ndef greet():\n\treturn 'Hello'\nprint(greet())",
  answers: [
    { icon: <Image src={crying_chick2} alt="" width={212} height={212} className="w-full" />, name: "Error" },
    { icon: <Image src={hen_thumbsup} alt="" width={212} height={212} className="w-full" />, name: "Hello" },
    { icon: <Image src={crying_cow2} alt="" width={212} height={212} className="w-full" />, name: "None" },
  ],
  correctAnswer: 1,
} as const;

const pythonLessonProblemG16 = {
  type: "WRITE",
  question: "Write Python code to define a function `multiply(a, b)` that will print the result of `a * b`.",
  answerTiles: ["def", "(a,", "b):", "multiply"],
  correctAnswer: [0, 3, 1, 2]
} as const;







const pythonLessonProblemI1 = {
  type: "SELECT_1_OF_3",
  question: "What is a class in Python?",
  answers: [
    { icon: <Image src={happy_chick3} alt="" width={212} height={212} className="w-full" />, name: "A blueprint for creating objects" },
    { icon: <Image src={hen_question} alt="" width={212} height={212} className="w-full" />, name: "A type of variable" },
    { icon: <Image src={sad_chick} alt="" width={212} height={212} className="w-full" />, name: "A way to store lists of data" },
  ],
  correctAnswer: 0,
} as const;

const pythonLessonProblemI2 = {
  type: "SELECT_1_OF_3",
  question: "Which of the following is an example of creating a class in Python?",
  answers: [
    { icon: <Image src={chick_sleeping} alt="" width={212} height={212} className="w-full" />, name: "Dog = {}:" },
    { icon: <Image src={hen_question} alt="" width={212} height={212} className="w-full" />, name: "function Dog():" },
    { icon: <Image src={chick_flattered} alt="" width={212} height={212} className="w-full" />, name: "class Dog:" },
  ],
  correctAnswer: 2,
} as const;


const pythonLessonProblemI3 = {
  type: "WRITE",
  question: "Write Python code to create a class `Car`",
  answerTiles: [":", "class", "Car", ";"],
  correctAnswer: [1, 2, 0]
} as const;
const pythonLessonProblemI4 = {
  type: "SELECT_1_OF_3",
  question: "What is an object in Python?",
  answers: [
    { icon: <Image src={happy_chick4} alt="" width={212} height={212} className="w-full" />, name: "An instance of a class" },
    { icon: <Image src={hen_question} alt="" width={212} height={212} className="w-full" />, name: "A type of function" },
    { icon: <Image src={crying_cow2} alt="" width={212} height={212} className="w-full" />, name: "A list of values" },
  ],
  correctAnswer: 0,
} as const;

const pythonLessonProblemI5 = {
  type: "WRITE",
  question: "Write Python code to create an object of the `Car` class",
  answerTiles: ["(",")","car", "=", " Car"],
  correctAnswer: [2, 3, 4, 0, 1]
} as const;

const pythonLessonProblemI6 = {
  type: "SELECT_1_OF_3",
  question: "What do you use the `__init__` method for in a Python class?",
  answers: [
    { icon: <Image src={happy_chickfamily} alt="" width={212} height={212} className="w-full" />, name: "To initialize the object's attributes" },
    { icon: <Image src={hen_question} alt="" width={212} height={212} className="w-full" />, name: "To define the class's behavior" },
    { icon: <Image src={sad_chick} alt="" width={212} height={212} className="w-full" />, name: "To run code every time an object is printed" },
  ],
  correctAnswer: 0,
} as const;

const pythonLessonProblemI7 = {
  type: "SELECT_1_OF_3",
  question: "What is the main purpose of using classes in Python?",
  answers: [
    { icon: <Image src={crying_chick2} alt="" width={212} height={212} className="w-full" />, name: "To store variables" },
    { icon: <Image src={cow_greeting} alt="" width={212} height={212} className="w-full" />, name: "To bundle data and functions together" },
    { icon: <Image src={sad_chick} alt="" width={212} height={212} className="w-full" />, name: "To organize loops" },
  ],
  correctAnswer: 1,
} as const;

const pythonLessonProblemI8 = {
  type: "SELECT_1_OF_3",
  question: "In Python, what does `self` refer to inside a class?",
  answers: [
    { icon: <Image src={chick_microphone} alt="" width={212} height={212} className="w-full" />, name: "The current object of the class" },
    { icon: <Image src={chick_sleeping} alt="" width={212} height={212} className="w-full" />, name: "A reference to all objects in the program" },
    { icon: <Image src={crying_chick5} alt="" width={212} height={212} className="w-full" />, name: "The class itself" },
  ],
  correctAnswer: 0,
} as const;



const pythonLessonProblemI9 = {
  type: "SELECT_1_OF_3",
  question: "What will the following code output?\nclass Cat:\n\tdef __init__(self, name):\n\t\tself.name = name\nc = Cat('Whiskers')\nprint(c.name)",
  answers: [
    { icon: <Image src={happy_chick} alt="" width={212} height={212} className="w-full" />, name: "Whiskers" },
    { icon: <Image src={crying_chick} alt="" width={212} height={212} className="w-full" />, name: "None" },
    { icon: <Image src={sad_chick} alt="" width={212} height={212} className="w-full" />, name: "Error" },
  ],
  correctAnswer: 0,
  
} as const;


const pythonLessonProblemI10 = {
  type: "WRITE",
  question: "Write an '__init__' method/constructor that accepts 'name' and 'age' parameters.",
  answerTiles: [ "def","__init__","self,","(","):", "name,","age"],
  correctAnswer: [0, 1, 3, 2, 5, 6, 4]
} as const;



const pythonLessonProblemI11 = {
  type: "WRITE",
  question: "Within an '__init__' method/constructor, assign the 'name' parameter being passed into it.",
  answerTiles: [ "self",".","=","Name","name"],
  correctAnswer: [0, 1, 3, 2, 4]
} as const;


const pythonLessonProblemI12 = {
  type: "SELECT_1_OF_3",
  question: "What will the following code output?\nclass Car:\n\tdef __init__(self, make, model):\n\t\tself.make = make\n\t\tself.model = model\nc = Car('Toyota', 'Corolla')\nprint(c.make)",
  answers: [
    { icon: <Image src={happy_chick2} alt="" width={212} height={212} className="w-full" />, name: "Toyota" },
    { icon: <Image src={crying_chick} alt="" width={212} height={212} className="w-full" />, name: "Corolla" },
    { icon: <Image src={sad_chick} alt="" width={212} height={212} className="w-full" />, name: "Error" },
  ],
  correctAnswer: 0,
} as const;

const pythonLessonProblemI13 = {
  type: "SELECT_1_OF_3",
  question: "What will the following code output?\nclass Employee:\n\tdef __init__(self, name, position):\n\t\tself.name = name\n\t\tself.position = position\ne = Employee('John', 'Manager')\nprint(e.position)",
  answers: [
    { icon: <Image src={sad_chick} alt="" width={212} height={212} className="w-full" />, name: "John" },
    { icon: <Image src={happy_chick3} alt="" width={212} height={212} className="w-full" />, name: "Manager" },
    { icon: <Image src={cow_sleeping} alt="" width={212} height={212} className="w-full" />, name: "Error" },
  ],
  correctAnswer: 1,
} as const;


const pythonLessonProblemI14 = {
  type: "WRITE",
  question: "Write Python code to call the `start` method on the object 'car'",
  answerTiles: ["(",")","start","car", "."],
  correctAnswer: [3,4,2,0,1]
} as const;
const pythonLessonProblemI15 = {
  type: "SELECT_1_OF_3",
  question: "What will the following code output?\nclass Person:\n\tdef __init__(self, name, age):\n\t\tself.name = name\n\t\tself.age = age\np = Person('Alice', 30)\nprint(p.age)",
  answers: [
    { icon: <Image src={cow_thinking} alt="" width={212} height={212} className="w-full" />, name: "Error" },
    { icon: <Image src={crying_chick} alt="" width={212} height={212} className="w-full" />, name: "Alice" },
    { icon: <Image src={happy_chick4} alt="" width={212} height={212} className="w-full" />, name: "30" },
  ],
  correctAnswer: 2,
} as const;

const pythonLessonProblemI16 = {
  type: "SELECT_1_OF_3",
  question: "What will the following code output?\nclass Animal:\n\tdef __init__(self, species):\n\t\tself.species = species\na = Animal('Lion')\nprint(a.species)",
  answers: [
    { icon: <Image src={happy_chick} alt="" width={212} height={212} className="w-full" />, name: "Lion" },
    { icon: <Image src={crying_chick} alt="" width={212} height={212} className="w-full" />, name: "None" },
    { icon: <Image src={sad_chick} alt="" width={212} height={212} className="w-full" />, name: "Error" },
  ],
  correctAnswer: 0,
} as const;

const pythonLessonProblemI17={
  type: "SELECT_1_OF_3",
  question: "What will the following code output?\nclass Animal:\n\tdef __init__(self, name):\n\t\tself.name = name\n\tdef speak(self):\n\t\treturn f'{self.name} makes a sound'\n\nanimal = Animal('Dog')\nprint(animal.speak())",
  answers: [
    { icon: <Image src={crying_chick2} alt="" width={212} height={212} className="w-full" />, name: "'Animal makes a sound'" },
    { icon: <Image src={hen_question} alt="" width={212} height={212} className="w-full" />, name: "'Dog barks'" },
    { icon: <Image src={happy_chick4} alt="" width={212} height={212} className="w-full" />, name: "'Dog makes a sound'" },
  ],
  correctAnswer: 2,
} as const;

const pythonLessonProblemI18 = {
  type: "SELECT_1_OF_3",
  question: "What is the purpose of the `self` keyword in Python classes?",
  answers: [
    { icon: <Image src={happy_chick4} alt="" width={212} height={212} className="w-full" />, name: "To refer to the instance of the class" },
    { icon: <Image src={sad_chick} alt="" width={212} height={212} className="w-full" />, name: "To refer to the class itself" },
    { icon: <Image src={crying_chick} alt="" width={212} height={212} className="w-full" />, name: "To call methods of other classes" },
  ],
  correctAnswer: 0,
} as const;

const pythonLessonProblemI19 = {
  type: "SELECT_1_OF_3",
  question: "What will the following code output?\nclass Dog:\n\tdef __init__(self, name):\n\t\tself.name = name\n\tdef speak(self):\n\t\treturn f'{self.name} barks'\n\ndog = Dog('Buddy')\nprint(dog.speak())",
  answers: [
    { icon: <Image src={happy_chick3} alt="" width={212} height={212} className="w-full" />, name: "Buddy barks" },
    { icon: <Image src={crying_chick4} alt="" width={212} height={212} className="w-full" />, name: "Error" },
    { icon: <Image src={chick_sleeping} alt="" width={212} height={212} className="w-full" />, name: "None" },
  ],
  correctAnswer: 0,
} as const;

const pythonLessonProblemI20 = {
  type: "SELECT_1_OF_3",
  question: "What is the output of the following code?\nclass Car:\n\tdef __init__(self, make, model):\n\t\tself.make = make\n\t\tself.model = model\ncar = Car('Ford', 'Mustang')\nprint(car.model)",
  answers: [
    { icon: <Image src={chick_flattered} alt="" width={212} height={212} className="w-full" />, name: "Mustang" },
    { icon: <Image src={crying_chick} alt="" width={212} height={212} className="w-full" />, name: "Ford" },
    { icon: <Image src={sad_chick} alt="" width={212} height={212} className="w-full" />, name: "Error" },
  ],
  correctAnswer: 0,
} as const;

const pythonLessonProblemI21 = {
  type: "WRITE",
  question: "Write Python code to add a method `drive` to the `Car` class that prints 'Driving!'",
  answerTiles: ["func","def", "drive", "(self):" ],
  correctAnswer: [ 1, 2, 3],
} as const;

const pythonLessonProblemI22 = {
  type: "SELECT_1_OF_3",
  question: "Which of the following is correct for creating a new object of a class?",
  answers: [
    { icon: <Image src={crying_chick} alt="" width={212} height={212} className="w-full" />, name: "object.create()" },
    { icon: <Image src={happy_chick} alt="" width={212} height={212} className="w-full" />, name: "object = ClassName()" },
    { icon: <Image src={crying_chick5} alt="" width={212} height={212} className="w-full" />, name: "object.new()" },
  ],
  correctAnswer: 1,
} as const;

const pythonLessonProblemI23 = {
  type: "SELECT_1_OF_3",
  question: "What will the following code output?\nclass Person:\n\tdef __init__(self, name):\n\t\tself.name = name\nperson = Person('John')\nprint(person.name)",
  answers: [
    { icon: <Image src={crying_chick3} alt="" width={212} height={212} className="w-full" />, name: "Error" },
    { icon: <Image src={crying_chick5} alt="" width={212} height={212} className="w-full" />, name: "None" },
    { icon: <Image src={hen_thumbsup} alt="" width={212} height={212} className="w-full" />, name: "John" },
  ],
  correctAnswer: 2,
} as const;

const pythonLessonProblemI24 = {
  type: "WRITE",
  question: "Write Python code to modify the `Dog` class to add a method `eat` that prints 'Eating food!'",
  answerTiles: ["def", "eat", "(self):", "self:"],
  correctAnswer: [0, 1, 2],
} as const;


const pythonLessonProblemJ1 = {
  type: "SELECT_1_OF_3",
  question: "What is inheritance in Python?",
  answers: [
    { icon: <Image src={happy_chick4} alt="" width={212} height={212} className="w-full" />, name: "A way to create a new class from an existing class" },
    { icon: <Image src={sad_chick} alt="" width={212} height={212} className="w-full" />, name: "A method to assign variables" },
    { icon: <Image src={crying_chick} alt="" width={212} height={212} className="w-full" />, name: "A function that combines two classes" },
  ],
  correctAnswer: 0,
} as const;

const pythonLessonProblemJ2 = {
  type: "SELECT_1_OF_3",
  question: "What does the `super()` function do in Python?",
  answers: [
    { icon: <Image src={happy_chick} alt="" width={212} height={212} className="w-full" />, name: "It allows access to methods from a parent class" },
    { icon: <Image src={crying_chick} alt="" width={212} height={212} className="w-full" />, name: "It creates a new instance of a class" },
    { icon: <Image src={sad_chick} alt="" width={212} height={212} className="w-full" />, name: "It deletes an object from memory" },
  ],
  correctAnswer: 0,
} as const;

const pythonLessonProblemJ3 = {
  type: "WRITE",
  question: "Write Python code to create a subclass `Dog` that inherits from `Animal`.",
  answerTiles: [":", "class", "Dog", "Animal","(",")"],
  correctAnswer: [1,2,4, 3,5,0 ],
} as const;

const pythonLessonProblemJ4 = {
  type: "SELECT_1_OF_3",
  question: "What will the following code output?\nclass Animal:\n\tdef __init__(self, species):\n\t\tself.species = species\nclass Dog(Animal):\n\tdef __init__(self, species, breed):\n\t\tsuper().__init__(species)\n\t\tself.breed = breed\nmy_dog = Dog('Canine', 'Bulldog')\nprint(my_dog.species)",
  answers: [
    { icon: <Image src={crying_chick4} alt="" width={212} height={212} className="w-full" />, name: "Bulldog" },
    { icon: <Image src={happy_chick2} alt="" width={212} height={212} className="w-full" />, name: "Canine" },
    { icon: <Image src={sad_chick} alt="" width={212} height={212} className="w-full" />, name: "Error" },
  ],
  correctAnswer: 1,
} as const;
const pythonLessonProblemJ5 = {
  type: "WRITE",
  question: "Write Python code to call the `__init__` method of the parent class inside the subclass `Dog`.",
  answerTiles: ["(",")", "super()",".","__init__" , "="],
  correctAnswer: [2, 3, 4, 0, 1],
} as const;

const pythonLessonProblemJ6 = {
  type: "SELECT_1_OF_3",
  question: "Which of the following correctly demonstrates method overriding in Python?",
  answers: [
    { icon: <Image src={crying_chick2} alt="" width={212} height={212} className="w-full" />, name: "override speak(): " },
    { icon: <Image src={crying_cow} alt="" width={212} height={212} className="w-full" />, name: "func speak(override): " },
    { icon: <Image src={chick_flattered} alt="" width={212} height={212} className="w-full" />, name: "def speak(self): " },
  ],
  correctAnswer: 2,
} as const;

const pythonLessonProblemJ7 = {
  type: "WRITE",
  question: "Write Python function declaration to override the `speak` behaior of the parent class in a `Dog` subclass.",
  answerTiles: ["def", "speak", "(self):", "self:"],
  correctAnswer: [0, 1, 2],
} as const;

const pythonLessonProblemJ8 = {
  type: "SELECT_1_OF_3",
  question: "What will the following code output?\nclass Animal:\n\tdef __init__(self, species):\n\t\tself.species = species\n\tdef speak(self):\n\t\treturn f'{self.species} makes a sound'\nclass Dog(Animal):\n\tdef speak(self):\n\t\treturn f'{self.species} barks'\nd = Dog('Dog')\nprint(d.speak())",
  answers: [
    { icon: <Image src={happy_chick3} alt="" width={212} height={212} className="w-full" />, name: "Dog barks" },
    { icon: <Image src={crying_chick2} alt="" width={212} height={212} className="w-full" />, name: "Dog makes a sound" },
    { icon: <Image src={sleeping_chick} alt="" width={212} height={212} className="w-full" />, name: "Error" },
  ],
  correctAnswer: 0,
} as const;

const pythonLessonProblemJ9 = {
  type: "WRITE",
  question: "Write Python code to override the `speak` method, a subclass `Cat` can 'meow'",
  answerTiles: ["def", "return", "'Meow'", "speak", "(self):"],
  correctAnswer: [0,3, 4, 1, 2],
} as const;

const pythonLessonProblemJ10 = {
  type: "SELECT_1_OF_3",
  question: "What will the following code output?\nclass Vehicle:\n\tdef __init__(self, make, model):\n\t\tself.make = make\n\t\tself.model = model\nclass Car(Vehicle):\n\tdef drive(self):\n\t\treturn f'Driving {self.make} {self.model}'\nmy_car = Car('Toyota', 'Camry')\nprint(my_car.drive())",
  answers: [
    { icon: <Image src={happy_chick3} alt="" width={212} height={212} className="w-full" />, name: "Driving Toyota Camry" },
    { icon: <Image src={crying_chick} alt="" width={212} height={212} className="w-full" />, name: "Error" },
    { icon: <Image src={chick_sleeping} alt="" width={212} height={212} className="w-full" />, name: "Toyota Camry" },
  ],
  correctAnswer: 0,
} as const;

const pythonLessonProblemJ11 = {
  type: "WRITE",
  question: "Write Python code to create a method `stop` for the `Car` class that prints 'Stopping the car!'",
  answerTiles: ["def", "print", "'Stopping the car!'", "stop", "(self):"],
  correctAnswer: [0,  3, 4, 1, 2],
} as const;

const pythonLessonProblemJ12 = {
  type: "SELECT_1_OF_3",
  question: "What will the following code output?\nclass Person:\n\tdef __init__(self, name, age):\n\t\tself.name = name\n\t\tself.age = age\nclass Employee(Person):\n\tdef __init__(self, name, age, job_title):\n\t\tsuper().__init__(name, age)\n\t\tself.job_title = job_title\nemployee = Employee('John', 30, 'Engineer')\nprint(employee.name, employee.age, employee.job_title)",
  answers: [
    { icon: <Image src={happy_chick2} alt="" width={212} height={212} className="w-full" />, name: "John 30 Engineer" },
    { icon: <Image src={sad_chick} alt="" width={212} height={212} className="w-full" />, name: "Error" },
    { icon: <Image src={crying_chick4} alt="" width={212} height={212} className="w-full" />, name: "John 30" },
  ],
  correctAnswer: 0,
} as const;

const pythonLessonProblemJ13 = {
  type: "SELECT_1_OF_3",
  question: "In Python, which method is called when a new object is created from a class?",
  answers: [
    { icon: <Image src={sad_chick} alt="" width={212} height={212} className="w-full" />, name: "__call__" },
    { icon: <Image src={crying_chick2} alt="" width={212} height={212} className="w-full" />, name: "__new__" },
    { icon: <Image src={happy_chick4} alt="" width={212} height={212} className="w-full" />, name: "__init__" },
  ],
  correctAnswer: 2,
} as const;

const pythonLessonProblemJ14 = {
  type: "SELECT_1_OF_3",
  question: "What is the purpose of method resolution order (MRO) in Python?",
  answers: [
    { icon: <Image src={happy_chick} alt="" width={212} height={212} className="w-full" />, name: "To determine the order in which methods are inherited" },
    { icon: <Image src={crying_chick4} alt="" width={212} height={212} className="w-full" />, name: "To prioritize class names" },
    { icon: <Image src={sad_chick} alt="" width={212} height={212} className="w-full" />, name: "To define the constructor of a class" },
  ],
  correctAnswer: 0,
} as const;

const pythonLessonProblemJ15 = {
  type: "WRITE",
  question: "Write Python code to print the method resolution order (MRO) for a class `Child` that inherits from classes `Parent1` and `Parent2`.",
  answerTiles: ["print", ".__mro__","Child"],
  correctAnswer: [0, 2, 1],
} as const;

const pythonLessonProblemJ16 = {
  type: "SELECT_1_OF_3",
  question: "Which function can be used to call a parent class method inside a subclass method?",
  answers: [
    { icon: <Image src={crying_chick2} alt="" width={212} height={212} className="w-full" />, name: "call()" },
    { icon: <Image src={happy_chick4} alt="" width={212} height={212} className="w-full" />, name: "super()" },
    { icon: <Image src={chick_flattered} alt="" width={212} height={212} className="w-full" />, name: "parent()" },
  ],
  correctAnswer: 1,
} as const;


const pythonLessonProblemK1 = {
  type: "SELECT_1_OF_3",
  question: "What is the purpose of the `pip` command in Python?",
  answers: [
    { icon: <Image src={happy_chick4} alt="" width={212} height={212} className="w-full" />, name: "To install, update, or uninstall Python packages" },
    { icon: <Image src={crying_chick2} alt="" width={212} height={212} className="w-full" />, name: "To run Python scripts" },
    { icon: <Image src={sad_chick} alt="" width={212} height={212} className="w-full" />, name: "To debug Python code" },
  ],
  correctAnswer: 0,
} as const;

const pythonLessonProblemK2 = {
  type: "WRITE",
  question: "Write a `pip` command to install the `requests` library.",
  answerTiles: ["pip", "requests", "download", "install"],
  correctAnswer: [0, 3, 1],
} as const;
const pythonLessonProblemK3 = {
  type: "SELECT_1_OF_3",
  question: "Which of the following is a valid regular expression in Python?",
  answers: [
    { icon: <Image src={cow_sleeping} alt="" width={212} height={212} className="w-full" />, name: "abc[123]}" },
    { icon: <Image src={happy_chick} alt="" width={212} height={212} className="w-full" />, name: "\\d{3}-\\d{2}-\\d{4}" },
    { icon: <Image src={sad_chick} alt="" width={212} height={212} className="w-full" />, name: "def*ghi" },
  ],
  correctAnswer: 1,
} as const;

const pythonLessonProblemK4 = {
  type: "WRITE",
  question: "Write Python code using `re` import to match an email address from the string 'Contact us at support@example.com'.",
  answerTiles: [ "(regex,", ".match", "re","'Contact us at support@example.com')"],
  correctAnswer: [2,1, 0, 3],
} as const;

const pythonLessonProblemK5 = {
  type: "SELECT_1_OF_3",
  question: "What does the `re.sub()` function do in Python?",
  answers: [
    { icon: <Image src={happy_chick2} alt="" width={212} height={212} className="w-full" />, name: "It replaces parts of a string that match a regex pattern" },
    { icon: <Image src={crying_chick2} alt="" width={212} height={212} className="w-full" />, name: "It splits a string based on a regex pattern" },
    { icon: <Image src={sad_chick} alt="" width={212} height={212} className="w-full" />, name: "It returns all matches of a regex pattern in a list" },
  ],
  correctAnswer: 0,
} as const;

const pythonLessonProblemK6 = {
  type: "SELECT_1_OF_3",
  question: "What is the purpose of the `__del__()` method in Python?",
  answers: [
    { icon: <Image src={happy_chick3} alt="" width={212} height={212} className="w-full" />, name: "It is called when an object is about to be destroyed" },
    { icon: <Image src={crying_chick2} alt="" width={212} height={212} className="w-full" />, name: "It initializes a new object" },
    { icon: <Image src={sleeping_chick} alt="" width={212} height={212} className="w-full" />, name: "It modifies the object’s attributes" },
  ],
  correctAnswer: 0,
} as const;

const pythonLessonProblemK7 = {
  type: "WRITE",
  question: "Write Python code to define a `__del__()` method in a class `Book` that prints 'Object deleted'.",
  answerTiles: [  "(self):", "print", "'Object deleted'", "def", "__del__"],
  correctAnswer: [3, 4, 0, 1, 2],
} as const;

const pythonLessonProblemK8 = {
  type: "SELECT_1_OF_3",
  question: "What does the `zip()` function do in Python?",
  answers: [
    { icon: <Image src={chick_flattered} alt="" width={212} height={212} className="w-full" />, name: "It pairs elements from two or more iterables" },
    { icon: <Image src={crying_chick2} alt="" width={212} height={212} className="w-full" />, name: "It sorts elements of an iterable" },
    { icon: <Image src={crying_cow} alt="" width={212} height={212} className="w-full" />, name: "It merges two lists" },
  ],
  correctAnswer: 0,
} as const;

const pythonLessonProblemK9 = {
  type: "WRITE",
  question: "Write Python code to zip two lists: `names = ['Alice', 'Bob', 'Charlie']` and `scores = [85, 90, 78]`.",
  answerTiles: [ " scores", ")","zip", "(", "names,"],
  correctAnswer: [ 2, 3, 4, 0, 1],
} as const;

const pythonLessonProblemK10 = {
  type: "SELECT_1_OF_3",
  question: "Which of the following is the correct syntax to define a lambda function in Python?",
  answers: [
    { icon: <Image src={crying_chick3} alt="" width={212} height={212} className="w-full" />, name: "function(x): x + 1" },
    { icon: <Image src={crying_chick2} alt="" width={212} height={212} className="w-full" />, name: "def lambda(x): x + 1" },
    { icon: <Image src={chick_microphone} alt="" width={212} height={212} className="w-full" />, name: "lambda x: x + 1" },
  ],
  correctAnswer: 2,
} as const;

const pythonLessonProblemK11 = {
  type: "WRITE",
  question: "Write Python code to define a lambda function that multiplies two numbers and call it with arguments 5 and 6.",
  answerTiles: [ "x,", "y", ":", "x * y", "multiply", "=", "lambda"],
  correctAnswer: [ 4, 5, 6, 0, 1, 2, 3],
} as const;

const pythonLessonProblemK12 = {
  type: "SELECT_1_OF_3",
  question: "What is the result of the following expression in Python:\n [i**2 for i in range(3)]",
  answers: [
    { icon: <Image src={cow_greeting} alt="" width={212} height={212} className="w-full" />, name: "[0, 1, 4]" },
    { icon: <Image src={crying_chick2} alt="" width={212} height={212} className="w-full" />, name: "[1, 4, 9]" },
    { icon: <Image src={sad_chick} alt="" width={212} height={212} className="w-full" />, name: "[0, 1, 2]" },
  ],
  correctAnswer: 0,
} as const;

const pythonLessonProblemK13 = {
  type: "SELECT_1_OF_3",
  question: "Which of the following is the correct way to install a package using pip?",
  answers: [
    { icon: <Image src={crying_chick} alt="" width={212} height={212} className="w-full" />, name: "install pip package_name" },
    { icon: <Image src={cow_lightbulb} alt="" width={212} height={212} className="w-full" />, name: "pip install package_name" },
    { icon: <Image src={sad_chick} alt="" width={212} height={212} className="w-full" />, name: "pip add package_name" },
  ],
  correctAnswer: 1,
} as const;
//cow_lightbulb
const pythonLessonProblemK14 = {
  type: "SELECT_1_OF_3",
  question: "What is the output of the following code?\n{x: x**2 for x in range(3)}",
  answers: [
    { icon: <Image src={cow_sleeping} alt="" width={212} height={212} className="w-full" />, name: "{1: 1, 2: 4, 3: 9}" },
    { icon: <Image src={cow_twothumbs} alt="" width={212} height={212} className="w-full" />, name: "{0: 0, 1: 1, 2: 4}" },
    { icon: <Image src={sad_chick} alt="" width={212} height={212} className="w-full" />, name: "{0: 1, 1: 2, 2: 3}" },
  ],
  correctAnswer: 1,
} as const;

const pythonLessonProblemK15 = {
  type: "SELECT_1_OF_3",
  question: "Which regular expression pattern matches one or more digits in Python?",
  answers: [
    { icon: <Image src={ happy_chickfamily} alt="" width={212} height={212} className="w-full" />, name: "\\d+" },
    { icon: <Image src={sleeping_chick} alt="" width={212} height={212} className="w-full" />, name: "[0-9]" },
    { icon: <Image src={crying_cow} alt="" width={212} height={212} className="w-full" />, name: "\\d" },
  ],
  correctAnswer: 0,
} as const;

const pythonLessonProblemK16 = {
  type: "SELECT_1_OF_3",
  question: "What is the output of the following Python code?\nbool('Hello')",
  answers: [
    { icon: <Image src={crying_cow2} alt="" width={212} height={212} className="w-full" />, name: "Error" },
    { icon: <Image src={crying_chick2} alt="" width={212} height={212} className="w-full" />, name: "False" },
    { icon: <Image src={happy_chick4} alt="" width={212} height={212} className="w-full" />, name: "True" },
  ],
  correctAnswer: 2,
} as const;


const javascriptLessonProblemA1 = {
  type: "SELECT_1_OF_3",
  question: "Which of these is a correct way to declare a variable in JavaScript?",
  answers: [
    { icon: <Image src={three_chicks} alt="" width={212} height={212} className="w-full" />, name: "chicks x 3" },
    { icon: <Image src={two_birds} alt="" width={212} height={212} className="w-full" />, name: "let birds = 2;" },
    { icon: <Image src={five_candles} alt="" width={212} height={212} className="w-full" />, name: "var candles : 5" },
  ],
  correctAnswer: 1,
} as const;

const javascriptLessonProblemA2 = {
  type: "SELECT_1_OF_3",
  question: "Which of the following is NOT a valid JavaScript variable name?",
  answers: [
    { icon: <Image src={happy_chickfamily} alt="" width={212} height={212} className="w-full" />, name: "chick_count" },
    { icon: <Image src={cow_twothumbs} alt="" width={212} height={212} className="w-full" />, name: "2thumbs" },
    { icon: <Image src={three_cows} alt="" width={212} height={212} className="w-full" />, name: "total_cows" },
  ],
  correctAnswer: 1,
} as const;

const javascriptLessonProblemA3 = {
  type: "WRITE",
  question: "Write the JavaScript code to print 'Hello, World!'",
  answerTiles: ["console.log", "(", "'Hello, World!'", ");"],
  correctAnswer: [0, 1, 2, 3],
} as const;

const javascriptLessonProblemA4 = {
  type: "WRITE",
  question: "Write the JavaScript code to print the phrase 'Goodbye!'",
  answerTiles: ["console.log", "(", "'Goodbye!'", ");"],
  correctAnswer: [0, 1, 2, 3],
} as const;

const javascriptLessonProblemA5 = {
  type: "SELECT_1_OF_3",
  question: "Which of these is a valid variable name in JavaScript?",
  answers: [
    { icon: <Image src={chick_microphone} alt="" width={212} height={212} className="w-full" />, name: "1_microphone" },
    { icon: <Image src={two_chicks} alt="" width={212} height={212} className="w-full" />, name: "chicks 2" },
    { icon: <Image src={chick_card} alt="" width={212} height={212} className="w-full" />, name: "my_card" },
  ],
  correctAnswer: 2,
} as const;

const javascriptLessonProblemA6 = {
  type: "SELECT_1_OF_3",
  question: "Which of the following is a correct way to declare a string variable in JavaScript?",
  answers: [
    { icon: <Image src={cow_2fingers} alt="" width={212} height={212} className="w-full" />, name: "fingers : '2'" },
    { icon: <Image src={chick_flattered} alt="" width={212} height={212} className="w-full" />, name: "let mood = 'flattered';" },
    { icon: <Image src={three_cows} alt="" width={212} height={212} className="w-full" />, name: "let cows = 3;" },
  ],
  correctAnswer: 1,
} as const;

const javascriptLessonProblemA7 = {
  type: "WRITE",
  question: "Write a comment in JavaScript that says 'This is a comment'.",
  answerTiles: ["//", "This is a comment"],
  correctAnswer: [0, 1],
} as const;

const javascriptLessonProblemA8 = {
  type: "SELECT_1_OF_3",
  question: "Which of the following is a correct way to declare a float (number) variable in JavaScript?",
  answers: [
    { icon: <Image src={happy_chickfamily} alt="" width={212} height={212} className="w-full" />, name: "let price = 3.5;" },
    { icon: <Image src={sad_chick} alt="" width={212} height={212} className="w-full" />, name: "let temperature = '25.3';" },
    { icon: <Image src={crying_cow} alt="" width={212} height={212} className="w-full" />, name: "let height = 5,5;" },
  ],
  correctAnswer: 0,
} as const;

const javascriptLessonProblemA9 = {
  type: "WRITE",
  question: "Write the JavaScript code to concatenate 'JavaScript' and 'rocks' into a single string and print it.",
  answerTiles: ["console.log", "'JavaScript'", "'rocks'", "+", "(", ");"],
  correctAnswer: [0, 4, 1, 3, 2, 5],
} as const;

const javascriptLessonProblemA10 = {
  type: "WRITE",
  question: "Assign the value 10 to the variable 'a'.",
  answerTiles: ["let", "a", "=", "10"],
  correctAnswer: [0, 1, 2, 3],
} as const;

const javascriptLessonProblemA11 = {
  type: "WRITE",
  question: "Write the JavaScript code to add a comment about the following line of code: 'let x = 10;'",
  answerTiles: ["//", "Assign", "10", "to x", "let x = 10;"],
  correctAnswer: [4, 0, 1, 2, 3],
} as const;

const javascriptLessonProblemA12 = {
  type: "WRITE",
  question: "Write the JavaScript code to concatenate 'Hello' and 'World' into one string and print it.",
  answerTiles: ["console.log", "('", "Hello'", "+",  "'World", "')"],
  correctAnswer: [0, 1, 2, 3, 4, 5],
} as const;

const javascriptLessonProblemA13 = {
  type: "WRITE",
  question: "Write a JavaScript statement to assign the values 1, 2, and 3 to the variables 'a', 'b', and 'c' respectively in one line.",
  answerTiles: ["let", "a", "=", "1,", "b", "=", "2,", "c", "=", "3;"],
  correctAnswer: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
} as const;

const javascriptLessonProblemA14 = {
  type: "WRITE",
  question: "Write the JavaScript code to print the result of adding 5 and 8.",
  answerTiles: ["console.log", "(5", "+", "8)"],
  correctAnswer: [0, 1, 2, 3],
} as const;

const javascriptLessonProblemA15 = {
  type: "WRITE",
  question: "Write JavaScript code to assign the values 'apple', 'banana', and 'cherry' to the variables 'x', 'y', and 'z' respectively in one line.",
  answerTiles: ["let", "x", "=", "'apple',", "y", "=", "'banana',", "z", "=", "'cherry';"],
  correctAnswer: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
} as const;

const javascriptLessonProblemA16 = {
  type: "SELECT_1_OF_3",
  question: "Which of the following is a valid data type in JavaScript?",
  answers: [
    { icon: <Image src={crying_chick} alt="" width={212} height={212} className="w-full" />, name: "decimal" },
    { icon: <Image src={happy_chick} alt="" width={212} height={212} className="w-full" />, name: "integer" },
    { icon: <Image src={crying_cow} alt="" width={212} height={212} className="w-full" />, name: "word" },
  ],
  correctAnswer: 1,
} as const;

const javascriptLessonProblemB1 = {
  type: "WRITE",
  question: "Write JavaScript code to add 7 and 3.",
  answerTiles: ["7", "3", "+", "-", "++"],
  correctAnswer: [0, 2, 1]
} as const;

const javascriptLessonProblemB2 = {
  type: "WRITE",
  question: "Write the JavaScript code to assign the value 20 to the variable 'a' and then subtract 5 from it.",
  answerTiles: ["let a", "-", "5;", "=", "20"],
  correctAnswer: [0, 3, 4, 1, 2],
} as const;

const javascriptLessonProblemB3 = {
  type: "WRITE",
  question: "Write JavaScript code to multiply 6 and 4.",
  answerTiles: ["6", "*", "4", "**"],
  correctAnswer: [0, 1, 2]
} as const;

const javascriptLessonProblemB4 = {
  type: "WRITE",
  question: "Write JavaScript code to divide 20 and 2.",
  answerTiles: ["20", "//", "2", "/"],
  correctAnswer: [0, 3, 2]
} as const;

const javascriptLessonProblemB5 = {
  type: "SELECT_1_OF_3",
  question: "Which operator is used to find the remainder in JavaScript?",
  answers: [
    { icon: <Image src={crying_chick} alt="" width={212} height={212}  className="w-full" />, name: "mod" },
    { icon: <Image src={sleeping_chick} alt="" width={212} height={212}  className="w-full" />, name: "/" },
    { icon:<Image src={chick_twothumbs} alt="" width={212} height={212}  className="w-full" />, name: "%" },
  ],
  correctAnswer: 2,
} as const;

const javascriptLessonProblemB6 = {
  type: "WRITE",
  question: "Write JavaScript code to subtract 5 from 10.",
  answerTiles: ["10", "--", "5", "-", "-*"],
  correctAnswer: [0, 3,2]
} as const;

const javascriptLessonProblemB7 = {
  type: "SELECT_1_OF_3",
  question: "What is the result of 5 + 3 * 2 in JavaScript?",
  answers: [
    { icon: <Image src={crying_chick2} alt="" width={212} height={212}  className="w-full" />, name: "16" },
    { icon: <Image src={cow_twothumbs} alt="" width={212} height={212}  className="w-full" />, name: "11" },
    { icon: <Image src={crying_chick5} alt="" width={212} height={212}  className="w-full" />, name: "13" },
  ],
  correctAnswer: 1,
} as const;

const javascriptLessonProblemB8 = {
  type: "SELECT_1_OF_3",
  question: "Which operator is used to perform exponentiation in JavaScript?",
  answers: [
    { icon: <Image src={crying_chick} alt="" width={212} height={212} className="w-full" />, name: "*" },
    { icon: <Image src={cow_sleeping} alt="" width={212} height={212} className="w-full" />, name: "**" },
    { icon: <Image src={three_cows} alt="" width={212} height={212} className="w-full" />, name: "^" },
  ],
  correctAnswer: 1,
} as const;

const javascriptLessonProblemB9 = {
  type: "SELECT_1_OF_3",
  question: "What is the result of -10 + 5 in JavaScript?",
  answers: [
    { icon: <Image src={laying_cow} alt="" width={212} height={212}  className="w-full" />, name: "-5" },
    { icon: <Image src={crying_chick3} alt="" width={212} height={212}  className="w-full" />, name: "5" },
    { icon:<Image src={crying_chick4} alt="" width={212} height={212}  className="w-full" />, name: "15" },
  ],
  correctAnswer: 0,
} as const;

const javascriptLessonProblemB10 = {
  type: "WRITE",
  question: "Write JavaScript code to subtract 12 from 25 and then multiply the result by 3.",
  answerTiles: ["25",  "*", "3", "-", "12", "**"],
  correctAnswer: [0, 3, 4, 1, 2]
} as const;

const javascriptLessonProblemB11 = {
  type: "WRITE",
  question: "Write JavaScript code to calculate 2 raised to the power of 3.",
  answerTiles: ["2", "**", "3", "^"],
  correctAnswer: [0, 1, 2]
} as const;

const javascriptLessonProblemB12 = {
  type: "SELECT_1_OF_3",
  question: "What is the result of 5 ** 2 in JavaScript?",
  answers: [
    { icon: <Image src={happy_chick2} alt="" width={212} height={212} className="w-full" />, name: "25" },
    { icon: <Image src={crying_chick} alt="" width={212} height={212} className="w-full" />, name: "10" },
    { icon: <Image src={sad_chick} alt="" width={212} height={212} className="w-full" />, name: "5" },
  ],
  correctAnswer: 0,
} as const;

const javascriptLessonProblemB13 = {
  type: "WRITE",
  question: "Write JavaScript code to assign the value 100 to the variable 'b' and then divide it by 4.",
  answerTiles: [ "=", "b","100", "//", "4", "/"],
  correctAnswer: [1,0, 2, 5, 4]
} as const;

const javascriptLessonProblemB14 = {
  type: "WRITE",
  question: "Write JavaScript code to convert the string '10' to an integer and store it in 'x'.",
  answerTiles: ["x", "parseInt", "('10')", "=", "10"],
  correctAnswer: [0, 3, 1, 2]
} as const;

const javascriptLessonProblemB15 = {
  type: "SELECT_1_OF_3",
  question: "What is the result of 8 % 3 in JavaScript?",
  answers: [
    { icon: <Image src={crying_cow2} alt="" width={212} height={212} className="w-full" />, name: "3" },
    { icon: <Image src={crying_chick3} alt="" width={212} height={212} className="w-full" />, name: "1" },
    { icon: <Image src={happy_chick2} alt="" width={212} height={212} className="w-full" />, name: "2" },
  ],
  correctAnswer: 2,
} as const;

const javascriptLessonProblemB16 = {
  type: "SELECT_1_OF_3",
  question: "What is the result of 10 // 3 in JavaScript?",
  answers: [
    { icon: <Image src={cow_sleeping} alt="" width={212} height={212}  className="w-full" />, name: "3.333" },
    { icon:<Image src={three_cows} alt="" width={212} height={212}  className="w-full" />, name: "3" },
    { icon:<Image src={cow_dollars} alt="" width={212} height={212}  className="w-full" />, name: "4" },
  ],
  correctAnswer: 1,
} as const;

const javascriptLessonProblemC1 = {
  type: "SELECT_1_OF_3",
  question: "Which of the following represents a Boolean value in JavaScript?",
  answers: [
    { icon:<Image src={chick_thumbsup} alt="" width={212} height={212}  className="w-full" />, name: "true" },
    { icon: <Image src={hen_thumbsup} alt="" width={212} height={212}  className="w-full" />, name: "'true'" },
    { icon: <Image src={cake} alt="" width={212} height={212}  className="w-full" />, name: "1" },
  ],
  correctAnswer: 0,
} as const;

const javascriptLessonProblemC2 = {
  type: "WRITE",
  question: "Write the JavaScript code to negate the Boolean value 'true'.",
  answerTiles: [ "true", "!", "false"],
  correctAnswer: [1, 0]
} as const;

const javascriptLessonProblemC3 = {
  type: "SELECT_1_OF_3",
  question: "Which of the following is the correct way to combine two Boolean conditions with 'and' in JavaScript?",
  answers: [
    { icon: <Image src={crying_cow2} alt="" width={212} height={212}  className="w-full" />, name: "condition1 and condition2" },
    { icon: <Image src={happy_chick2} alt="" width={212} height={212}  className="w-full" />, name: "condition1 && condition2" },
    { icon: <Image src={crying_cow3} alt="" width={212} height={212}  className="w-full" />, name: "condition1 + condition2" },
  ],
  correctAnswer: 1,
} as const;

const javascriptLessonProblemC4 = {
  type: "SELECT_1_OF_3",
  question: "Which of these expressions checks if a value is not equal to another in JavaScript?",
  answers: [
    { icon: <Image src={chick_flattered} alt="" width={212} height={212} className="w-full" />, name: "!=" },
    { icon: <Image src={sleeping_chick} alt="" width={212} height={212} className="w-full" />, name: "==" },
    { icon: <Image src={chick_question3} alt="" width={212} height={212} className="w-full" />, name: ">" },
  ],
  correctAnswer: 0,
} as const;

const javascriptLessonProblemC5 = {
  type: "SELECT_1_OF_3",
  question: "What is the output of the expression '9 == 9' in JavaScript?",
  answers: [
    { icon: <Image src={crying_cow3} alt="" width={212} height={212} className="w-full" />, name: "false" },
    { icon: <Image src={happy_chick3} alt="" width={212} height={212} className="w-full" />, name: "true" },
    { icon: <Image src={crying_cow} alt="" width={212} height={212} className="w-full" />, name: "None" },
  ],
  correctAnswer: 1,
} as const;

const javascriptLessonProblemC6 = {
  type: "SELECT_1_OF_3",
  question: "What is the result of 5 != 3 in JavaScript?",
  answers: [
    { icon: <Image src={happy_chick} alt="" width={212} height={212}  className="w-full" />, name: "true" },
    { icon: <Image src={wrong_chick} alt="" width={212} height={212}  className="w-full" />, name: "false" },
    { icon: <Image src={crying_cow} alt="" width={212} height={212}  className="w-full" />, name: "None" },
  ],
  correctAnswer: 0,
} as const;

const javascriptLessonProblemC7 = {
  type: "SELECT_1_OF_3",
  question: "What is the result of 3 < 5 in JavaScript?",
  answers: [
    { icon: <Image src={chick_sleeping} alt="" width={212} height={212}  className="w-full" />, name: "false" },
    { icon: <Image src={happy_chickfamily} alt="" width={212} height={212}  className="w-full" />, name: "true" },
    { icon: <Image src={sad_chick} alt="" width={212} height={212}  className="w-full" />, name: "None" },
  ],
  correctAnswer: 1,
} as const;

const javascriptLessonProblemC8 = {
  type: "WRITE",
  question: "Write JavaScript code to check if 5 is equal to 5.",
  answerTiles: ["5", "==", "5", "="],
  correctAnswer: [0, 1, 2]
} as const;

const javascriptLessonProblemC9 = {
  type: "WRITE",
  question: "Write JavaScript code to check if 3 is less than 5.",
  answerTiles: ["3", "=<", "<", "5"],
  correctAnswer: [0, 2, 3]
} as const;

const javascriptLessonProblemC10 = {
  type: "SELECT_1_OF_3",
  question: "Which of the following is used to check if two values are equal in JavaScript?",
  answers: [
    { icon: <Image src={happy_chickfamily} alt="" width={212} height={212} className="w-full" />, name: "==" },
    { icon: <Image src={wrong_chick} alt="" width={212} height={212} className="w-full" />, name: "=" },
    { icon: <Image src={crying_cow} alt="" width={212} height={212} className="w-full" />, name: "!=" },
  ],
  correctAnswer: 0,
} as const;

const javascriptLessonProblemC11 = {
  type: "WRITE",
  question: "Write JavaScript code to check if 7 is greater than or equal to 5.",
  answerTiles: ["7", ">", "5", ">="],
  correctAnswer: [0, 3, 2]
} as const;

const javascriptLessonProblemC12 = {
  type: "WRITE",
  question: "Write JavaScript code to check if a number 'x' is less than 10 and 'y' is greater than 5.",
  answerTiles: ["x", "y", ">", "5", "<", "10", "&&"],
  correctAnswer: [0, 4, 5, 6, 1, 2, 3 ]
} as const;

const javascriptLessonProblemC13 = {
  type: "SELECT_1_OF_3",
  question: "Which of the following expressions will return false in JavaScript?",
  answers: [
    { icon: <Image src={crying_cow2} alt="" width={212} height={212} className="w-full" />, name: "'true' == 'true'" },
    { icon: <Image src={cow_question} alt="" width={212} height={212} className="w-full" />, name: "5 == 3" },
    { icon: <Image src={cow_sleeping} alt="" width={212} height={212} className="w-full" />, name: "3 == 3" },
  ],
  correctAnswer: 1,
} as const;

const javascriptLessonProblemC14 = {
  type: "WRITE",
  question: "Write JavaScript code to check if a variable 'age' is between 18 and 25 (inclusive).",
  answerTiles: ["age >", "age", "<=", "25", "18", "&&"],
  correctAnswer: [0, 4, 5,  1, 2,  3]
} as const;

const javascriptLessonProblemC15 = {
  type: "SELECT_1_OF_3",
  question: "What is the result of the expression 'false || true' in JavaScript?",
  answers: [
    { icon: <Image src={happy_chick4} alt="" width={212} height={212} className="w-full" />, name: "true" },
    { icon: <Image src={crying_chick4} alt="" width={212} height={212} className="w-full" />, name: "false" },
    { icon: <Image src={crying_cow2} alt="" width={212} height={212} className="w-full" />, name: "None" },
  ],
  correctAnswer: 0,
} as const;

const javascriptLessonProblemC16 = {
  type: "WRITE",
  question: "Write JavaScript code to check if a variable 'score' is less than or equal to 50 and greater than 30.",
  answerTiles: ["score <=", "score", ">", "30", "50", "&&"],
  correctAnswer: [0, 4, 5, 1, 2, 3]
} as const;

const javascriptLessonProblemD1 = {
  type: "SELECT_1_OF_3",
  question: "Which of the following is the correct syntax for creating an array in JavaScript?",
  answers: [
    { icon: <Image src={crying_cow3} alt="" width={212} height={212} className="w-full" />, name: "{1, 2, 3}" },
    { icon: <Image src={wrong_chick} alt="" width={212} height={212} className="w-full" />, name: "(1, 2, 3)" },
    { icon: <Image src={happy_chick4} alt="" width={212} height={212} className="w-full" />, name: "[1, 2, 3]" },
  ],
  correctAnswer: 2,
} as const;

const javascriptLessonProblemD2 = {
  type: "SELECT_1_OF_3",
  question: "How can you access the second element of an array 'myArray' in JavaScript?",
  answers: [
    { icon: <Image src={crying_cow3} alt="" width={212} height={212} className="w-full" />, name: "myArray[2]" },
    { icon: <Image src={sad_chick} alt="" width={212} height={212} className="w-full" />, name: "myArray(2)" },
    { icon: <Image src={happy_twochicks} alt="" width={212} height={212} className="w-full" />, name: "myArray[1]" },
  ],
  correctAnswer: 2,
} as const;

const javascriptLessonProblemD3 = {
  type: "WRITE",
  question: "Write JavaScript code to create an array containing the numbers 1, 2, and 3.",
  answerTiles: ["[", "]", "1,", "3", "2,", "=", "let array"],
  correctAnswer: [6, 5, 0, 2, 4, 3, 1]
} as const;

const javascriptLessonProblemD4 = {
  type: "WRITE",
  question: "Write JavaScript code to add the value 'orange' to the array ['apple', 'banana'].",
  answerTiles: ["array", "'orange'", ")", ".push", "("],
  correctAnswer: [0, 3, 4, 1, 2]
} as const;

const javascriptLessonProblemD5 = {
  type: "SELECT_1_OF_3",
  question: "Which of the following is a valid array in JavaScript?",
  answers: [
    { icon: <Image src={crying_chick3} alt="" width={212} height={212} className="w-full" />, name: "(1, 2, 3)" },
    { icon: <Image src={happy_chick3} alt="" width={212} height={212} className="w-full" />, name: "[1, 2, 3]" },
    { icon: <Image src={crying_chick4} alt="" width={212} height={212} className="w-full" />, name: "{1, 2, 3}" },
  ],
  correctAnswer: 1,
} as const;

const javascriptLessonProblemD6 = {
  type: "SELECT_1_OF_3",
  question: "Which of the following is the correct way to define an object in JavaScript?",
  answers: [
    { icon: <Image src={happy_hen} alt="" width={212} height={212} className="w-full" />, name: "{'key': 'value'}" },
    { icon: <Image src={crying_cow} alt="" width={212} height={212} className="w-full" />, name: "['key', 'value']" },
    { icon: <Image src={crying_chick3} alt="" width={212} height={212} className="w-full" />, name: "(key: 'value')" },
  ],
  correctAnswer: 0,
} as const;

const javascriptLessonProblemD7 = {
  type: "SELECT_1_OF_3",
  question: "What is the result of accessing the second element in the array [10, 20, 30] in JavaScript?",
  answers: [
    { icon: <Image src={crying_chick2} alt="" width={212} height={212} className="w-full" />, name: "10" },
    { icon: <Image src={happy_chick3} alt="" width={212} height={212} className="w-full" />, name: "20" },
    { icon: <Image src={sleeping_chick} alt="" width={212} height={212} className="w-full" />, name: "30" },
  ],
  correctAnswer: 1,
} as const;

const javascriptLessonProblemD8 = {
  type: "WRITE",
  question: "Write JavaScript code to add a key 'c' with value 15 to the object {'a': 5, 'b': 10}.",
  answerTiles: ["obj", "]", "=", "15", "[", "'c'"],
  correctAnswer: [0, 4, 5, 1, 2, 3]
} as const;

const javascriptLessonProblemD9 = {
  type: "SELECT_1_OF_3",
  question: "Which of the following is used to access values in an object in JavaScript?",
  answers: [
    { icon: <Image src={happy_chick2} alt="" width={212} height={212} className="w-full" />, name: "obj['key']" },
    { icon: <Image src={crying_chick2} alt="" width={212} height={212} className="w-full" />, name: "obj{key}" },
    { icon: <Image src={wrong_chick} alt="" width={212} height={212} className="w-full" />, name: "obj(key)" },
  ],
  correctAnswer: 0,
} as const;

const javascriptLessonProblemD10 = {
  type: "WRITE",
  question: "Write JavaScript code to remove the element 'banana' from the array ['apple', 'banana', 'orange'].",
  answerTiles: ["array", ".splice", "('banana')", "[", "]"],
  correctAnswer: [0, 1, 2]
} as const;

const javascriptLessonProblemD11 = {
  type: "SELECT_1_OF_3",
  question: "What is the output of the code 'array.length' in JavaScript for the array [1, 2, 3]?",
  answers: [
    { icon: <Image src={chick_thumbsup} alt="" width={212} height={212} className="w-full" />, name: "3" },
    { icon: <Image src={crying_chick} alt="" width={212} height={212} className="w-full" />, name: "2" },
    { icon: <Image src={happy_chick2} alt="" width={212} height={212} className="w-full" />, name: "None" },
  ],
  correctAnswer: 0,
} as const;

const javascriptLessonProblemD12 = {
  type: "WRITE",
  question: "Write JavaScript code to create an array containing the elements 'apple', 'banana', and 'orange'.",
  answerTiles: ["[", "]", "'apple',", "'banana',", "'orange'"],
  correctAnswer: [0, 2, 3, 4, 1]
} as const;

const javascriptLessonProblemD13 = {
  type: "SELECT_1_OF_3",
  question: "How do you define an empty object in JavaScript?",
  answers: [
    { icon: <Image src={chick_sleeping} alt="" width={212} height={212} className="w-full" />, name: "()" },
    { icon: <Image src={crying_cow} alt="" width={212} height={212} className="w-full" />, name: "[]" },
    { icon: <Image src={happy_hen} alt="" width={212} height={212} className="w-full" />, name: "{}" },
  ],
  correctAnswer: 2,
} as const;

const javascriptLessonProblemD14 = {
  type: "WRITE",
  question: "Write JavaScript code to access the value associated with the key 'b' in the object {'a': 1, 'b': 2, 'c': 3}.",
  answerTiles: ["obj", "['b']", "('b')"],
  correctAnswer: [0, 1]
} as const;

const javascriptLessonProblemD15 = {
  type: "SELECT_1_OF_3",
  question: "Which of the following is used to change the value of a key in an object in JavaScript?",
  answers: [
    { icon: <Image src={crying_cow2} alt="" width={212} height={212} className="w-full" />, name: "obj.add('key', value)" },
    { icon: <Image src={happy_chick} alt="" width={212} height={212} className="w-full" />, name: "obj['key'] = value" },
    { icon: <Image src={wrong_chick} alt="" width={212} height={212} className="w-full" />, name: "obj.set('key', value)" },
  ],
  correctAnswer: 1,
} as const;

const javascriptLessonProblemD16 = {
  type: "WRITE",
  question: "Write JavaScript code to add the number `4` to the array [1, 2, 3].",
  answerTiles: ["[1, 2, 3]", ".push", "4"],
  correctAnswer: [0, 1, 2]
} as const;
const javascriptLessonProblemE1 = {
  type: "WRITE",
  question: "Write an `if/else` statement to check if `x > 5` ",
  answerTiles: ["if", ">", ":", "x", "5"],
  correctAnswer: [0, 3, 1, 4, 2]
} as const;

const javascriptLessonProblemE2 = {
  type: "SELECT_1_OF_3",
  question: "What is the output of the following code?\nif (3 > 2) {\n\tconsole.log('Yes');\n} else {\n\tconsole.log('No');\n}",
  answers: [
    { icon: <Image src={happy_hen} alt="" width={212} height={212} className="w-full" />, name: "Yes" },
    { icon: <Image src={crying_cow3} alt="" width={212} height={212} className="w-full" />, name: "No" },
    { icon: <Image src={crying_chick5} alt="" width={212} height={212} className="w-full" />, name: "Error" },
  ],
  correctAnswer: 0,
} as const;

const javascriptLessonProblemE3 = {
  type: "WRITE",
  question: "Write JavaScript code to check if `x` is equal to 10. ",
  answerTiles: ["if", "x", "10", "==", "=", ":"],
  correctAnswer: [0, 1, 3, 2, 5]
} as const;

const javascriptLessonProblemE4 = {
  type: "WRITE",
  question: "Write JavaScript code to check if the key 'apple' exists in the object `{'apple': 5, 'banana': 10}`.",
  answerTiles: ["'apple'", "in", "obj", "key", "if"],
  correctAnswer: [4, 0, 1, 2]
} as const;

const javascriptLessonProblemE5 = {
  type: "SELECT_1_OF_3",
  question: "What is the output of the following code?\nif (5 === 5) {\n\tconsole.log('True');\n} else {\n\tconsole.log('False');\n}",
  answers: [
    { icon: <Image src={happy_hen} alt="" width={212} height={212} className="w-full" />, name: "True" },
    { icon: <Image src={crying_cow3} alt="" width={212} height={212} className="w-full" />, name: "False" },
    { icon: <Image src={crying_chick5} alt="" width={212} height={212} className="w-full" />, name: "Error" },
  ],
  correctAnswer: 0,
} as const;

const javascriptLessonProblemE6 = {
  type: "WRITE",
  question: "Write JavaScript code to check if `x` is less than 5 and `y` is greater than 0.",
  answerTiles: ["&&", "y", ">", "if", "x", "<", "5", "0", ":"],
  correctAnswer: [3, 4, 5, 6, 0, 1, 2, 7, 8],
} as const;

const javascriptLessonProblemE7 = {
  type: "SELECT_1_OF_3",
  question: "What will the following code print?\nif (10 > 5 && 5 > 3) {\n\tconsole.log('Both are true');\n} else {\n\tconsole.log('One is false');\n}",
  answers: [
    { icon: <Image src={happy_chick4} alt="" width={212} height={212} className="w-full" />, name: "Both are true" },
    { icon: <Image src={crying_cow2} alt="" width={212} height={212} className="w-full" />, name: "One is false" },
    { icon: <Image src={crying_chick5} alt="" width={212} height={212} className="w-full" />, name: "Error" },
  ],
  correctAnswer: 0,
} as const;

const javascriptLessonProblemE8 = {
  type: "WRITE",
  question: "Write the missing `if` statement to check if `x` is not equal to 0. ",
  answerTiles: ["if", "=", "0", "==", "!", "x"],
  correctAnswer: [0, 5, 4, 1, 2]
} as const;

const javascriptLessonProblemE9 = {
  type: "SELECT_1_OF_3",
  question: "Which of the following is the correct way to handle multiple conditions using `if/else`?",
  answers: [
    { icon: <Image src={happy_chick2} alt="" width={212} height={212} className="w-full" />, name: "if (x > 5 && x < 10) {" },
    { icon: <Image src={crying_chick3} alt="" width={212} height={212} className="w-full" />, name: "if (x = 5 || x = 10) {" },
    { icon: <Image src={wrong_chick} alt="" width={212} height={212} className="w-full" />, name: "if (x > 10 && x === 0) {" },
  ],
  correctAnswer: 0,
} as const;

const javascriptLessonProblemE10 = {
  type: "SELECT_1_OF_3",
  question: "What is the output of the following code?\nif (5 < 10) {\n\tconsole.log('Correct');\n} else {\n\tconsole.log('Incorrect');\n}",
  answers: [
    { icon: <Image src={happy_chick3} alt="" width={212} height={212} className="w-full" />, name: "Correct" },
    { icon: <Image src={crying_chick2} alt="" width={212} height={212} className="w-full" />, name: "Incorrect" },
    { icon: <Image src={sad_chick} alt="" width={212} height={212} className="w-full" />, name: "Error" },
  ],
  correctAnswer: 0,
} as const;

const javascriptLessonProblemE11 = {
  type: "SELECT_1_OF_3",
  question: "Which of the following statements checks if `x` is equal to 0 or `y` is greater than 10?",
  answers: [
    { icon: <Image src={happy_chick2} alt="" width={212} height={212} className="w-full" />, name: "if (x === 0 || y > 10) {" },
    { icon: <Image src={crying_cow} alt="" width={212} height={212} className="w-full" />, name: "if (x = 0 && y = 10) {" },
    { icon: <Image src={crying_chick5} alt="" width={212} height={212} className="w-full" />, name: "if (x === 0 && y > 10) {" },
  ],
  correctAnswer: 0,
} as const;

const javascriptLessonProblemE12 = {
  type: "WRITE",
  question: "Write the missing `if` statement to check if `x` is greater than 10. \nif(x > 10) {\n\tconsole.log('High');\n} else {\n\tconsole.log('Low');\n}",
  answerTiles: ["x", ">", ">=", "10"],
  correctAnswer: [0, 1, 3]
} as const;

const javascriptLessonProblemF1 = {
  type: "SELECT_1_OF_3",
  question: "What is the correct syntax for a `for` loop that loops from 1 to 5?",
  answers: [
    { icon: <Image src={crying_cow3} alt="" width={212} height={212} className="w-full" />, name: "for (let i = 1; i < 5; i++) {}" },
    { icon: <Image src={happy_twochicks} alt="" width={212} height={212} className="w-full" />, name: "for (let i = 1; i <= 5; i++) {}" },
    { icon: <Image src={crying_chick} alt="" width={212} height={212} className="w-full" />, name: "for (let i = 0; i < 5; i++) {}" },
  ],
  correctAnswer: 1,
} as const;

const javascriptLessonProblemF2 = {
  type: "WRITE",
  question: "Write a `for` loop from 1 to 7.",
  answerTiles: ["for", "let", "i", "=", "1", "i", "<", "7", ";", "i++", "{", "console.log(i);", "}"],
  correctAnswer: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
} as const;

const javascriptLessonProblemF3 = {
  type: "SELECT_1_OF_3",
  question: "Which loop is used to iterate over a sequence such as a list or an array?",
  answers: [
    { icon: <Image src={happy_hen} alt="" width={212} height={212} className="w-full" />, name: "For loop" },
    { icon: <Image src={crying_chick3} alt="" width={212} height={212} className="w-full" />, name: "While loop" },
    { icon: <Image src={crying_cow3} alt="" width={212} height={212} className="w-full" />, name: "Do-while loop" },
  ],
  correctAnswer: 0,
} as const;

const javascriptLessonProblemF4 = {
  type: "SELECT_1_OF_3",
  question: "What is the output of the following code?\nfor (let i = 1; i < 4; i++) {\n\tconsole.log(i);\n}",
  answers: [
    { icon: <Image src={crying_cow} alt="" width={212} height={212} className="w-full" />, name: "0 1 2" },
    { icon: <Image src={happy_twochicks} alt="" width={212} height={212} className="w-full" />, name: "1 2 3" },
    { icon: <Image src={crying_chick3} alt="" width={212} height={212} className="w-full" />, name: "Error" },
  ],
  correctAnswer: 1,
} as const;

const javascriptLessonProblemF5 = {
  type: "WRITE",
  question: "Write a `for` loop to iterate through the array `numbers = [2, 4, 6]`.",
  answerTiles: ["for", "let", "i", "in", "numbers", "{", "console.log(i);", "}"],
  correctAnswer: [0, 1, 2, 3, 4, 5, 6, 7],
} as const;

const javascriptLessonProblemF6 = {
  type: "SELECT_1_OF_3",
  question: "What will the following code output?\nfor (let i = 0; i < 2; i++) {\n\tconsole.log(i);\n}",
  answers: [
    { icon: <Image src={crying_chick2} alt="" width={212} height={212} className="w-full" />, name: "0 1 2" },
    { icon: <Image src={crying_cow2} alt="" width={212} height={212} className="w-full" />, name: "1 2" },
    { icon: <Image src={cow_twothumbs} alt="" width={212} height={212} className="w-full" />, name: "0 1" },
  ],
  correctAnswer: 2,
} as const;

const javascriptLessonProblemF7 = {
  type: "WRITE",
  question: "Write JavaScript code using `for` and `range()` logic to loop from 1 to 3.",
  answerTiles: ["for", "let", "i", "=", "1", "i", "<", "4", "i++", "{", "console.log(i);", "}"],
  correctAnswer: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
} as const;

const javascriptLessonProblemF8 = {
  type: "SELECT_1_OF_3",
  question: "What is the output of the following code?\nfor (let i = 0; i < 5; i += 2) {\n\tconsole.log(i);\n}",
  answers: [
    { icon: <Image src={happy_hen} alt="" width={212} height={212} className="w-full" />, name: "0 2 4" },
    { icon: <Image src={crying_cow3} alt="" width={212} height={212} className="w-full" />, name: "1 3 5" },
    { icon: <Image src={crying_chick5} alt="" width={212} height={212} className="w-full" />, name: "0 1 2 3 4" },
  ],
  correctAnswer: 0,
} as const;

const javascriptLessonProblemF9 = {
  type: "SELECT_1_OF_3",
  question: "What is the result of the following code?\n\nlet x = 0;\nwhile (x < 3) {\n\tconsole.log(x);\n\tx++;\n}",
  answers: [
    { icon: <Image src={happy_chick3} alt="" width={212} height={212} className="w-full" />, name: "0 1 2" },
    { icon: <Image src={crying_chick5} alt="" width={212} height={212} className="w-full" />, name: "1 2 3" },
    { icon: <Image src={crying_cow3} alt="" width={212} height={212} className="w-full" />, name: "Error" },
  ],
  correctAnswer: 0,
} as const;

const javascriptLessonProblemF10 = {
  type: "SELECT_1_OF_3",
  question: "What will the following code output?\nlet x = 0;\nwhile (x < 3) {\n\tconsole.log(x);\n\tx++;\n}",
  answers: [
    { icon: <Image src={crying_cow3} alt="" width={212} height={212} className="w-full" />, name: "1 2 3" },
    { icon: <Image src={happy_twochicks} alt="" width={212} height={212} className="w-full" />, name: "0 1 2" },
    { icon: <Image src={crying_chick4} alt="" width={212} height={212} className="w-full" />, name: "0 1 2 3" },
  ],
  correctAnswer: 1,
} as const;

const javascriptLessonProblemF11 = {
  type: "SELECT_1_OF_3",
  question: "What is the output of the following code?\nfor (let i = 1; i < 3; i++) {\n\tfor (let j = 1; j < 2; j++) {\n\t\tconsole.log(i, j);\n\t}\n}",
  answers: [
    { icon: <Image src={sad_chick} alt="" width={212} height={212} className="w-full" />, name: "Error" },
    { icon: <Image src={crying_cow3} alt="" width={212} height={212} className="w-full" />, name: "1 1, 1 2" },
    { icon: <Image src={chick_flattered} alt="" width={212} height={212} className="w-full" />, name: "1 1, 2 1" },
  ],
  correctAnswer: 2,
} as const;

const javascriptLessonProblemF12 = {
  type: "WRITE",
  question: "Write JavaScript code to loop 4 times using a `while` loop.",
  answerTiles: ["while", "(i < 4)", "{", "console.log(i);", "i++", "}"],
  correctAnswer: [0, 3, 4, 1, 2],
} as const;

const javascriptLessonProblemF13 = {
  type: "SELECT_1_OF_3",
  question: "Which statement do you use for the following? Repeat a condition while it is true.",
  answers: [
    { icon: <Image src={hen_thumbsup} alt="" width={212} height={212} className="w-full" />, name: "While loop" },
    { icon: <Image src={crying_cow} alt="" width={212} height={212} className="w-full" />, name: "If/Else" },
    { icon: <Image src={crying_cow2} alt="" width={212} height={212} className="w-full" />, name: "For loop" },
  ],
  correctAnswer: 0,
} as const;

const javascriptLessonProblemF14 = {
  type: "SELECT_1_OF_3",
  question: "What is the correct way to stop a loop prematurely in JavaScript?",
  answers: [
    { icon: <Image src={happy_hen} alt="" width={212} height={212} className="w-full" />, name: "break" },
    { icon: <Image src={crying_chick5} alt="" width={212} height={212} className="w-full" />, name: "stop" },
    { icon: <Image src={crying_cow3} alt="" width={212} height={212} className="w-full" />, name: "exit" },
  ],
  correctAnswer: 0,
} as const;

const javascriptLessonProblemF15 = {
  type: "SELECT_1_OF_3",
  question: "What is the output of the following code?\n\nconst d = {a: 1, b: 2, c: 3};\nfor (let key in d) {\n\tconsole.log(key, d[key]);\n}",
  answers: [
    { icon: <Image src={happy_chick4} alt="" width={212} height={212} className="w-full" />, name: "a 1, b 2, c 3" },
    { icon: <Image src={crying_chick5} alt="" width={212} height={212} className="w-full" />, name: "a, b, c" },
    { icon: <Image src={crying_cow3} alt="" width={212} height={212} className="w-full" />, name: "1, 2, 3" },
  ],
  correctAnswer: 0,
} as const;

const javascriptLessonProblemF16 = {
  type: "SELECT_1_OF_3",
  question: "What is the purpose of using `else` after a loop?",
  answers: [
    { icon: <Image src={happy_chick3} alt="" width={212} height={212} className="w-full" />, name: "To execute code when the loop completes normally without breaking" },
    { icon: <Image src={crying_cow2} alt="" width={212} height={212} className="w-full" />, name: "To execute code every time the loop runs" },
    { icon: <Image src={crying_chick5} alt="" width={212} height={212} className="w-full" />, name: "To break the loop when a condition is met" },
  ],
  correctAnswer: 0,
} as const;
const javascriptLessonProblemG1 = {
  type: "WRITE",
  question: "Write JavaScript code to define a function `greet()`",
  answerTiles: ["function", "greet", "()", "{", "console.log('Hello');", "}"],
  correctAnswer: [0, 1, 2, 3, 4, 5],
} as const;

const javascriptLessonProblemG2 = {
  type: "SELECT_1_OF_3",
  question: "What will the following code print?\n\nfunction greet() {\n\tconsole.log('Hi');\n}\ngreet();",
  answers: [
    { icon: <Image src={cow_question} alt="" width={212} height={212} className="w-full" />, name: "Error" },
    { icon: <Image src={laying_cow} alt="" width={212} height={212} className="w-full" />, name: "Hello" },
    { icon: <Image src={cow_greeting} alt="" width={212} height={212} className="w-full" />, name: "Hi" },
  ],
  correctAnswer: 2,
} as const;

const javascriptLessonProblemG3 = {
  type: "WRITE",
  question: "Write JavaScript code to create a lambda function that adds 2 to a number `x`.",
  answerTiles: ["let", "addTwo", "=", "(x) =>", "x", "+", "2"],
  correctAnswer: [0, 1, 2, 3, 4, 5],
} as const;

const javascriptLessonProblemG4 = {
  type: "SELECT_1_OF_3",
  question: "What will the following code return?\n\nlet addTwo = (x) => x + 2;\naddTwo(3);",
  answers: [
    { icon: <Image src={five_candles} alt="" width={212} height={212} className="w-full" />, name: "5" },
    { icon: <Image src={crying_cow3} alt="" width={212} height={212} className="w-full" />, name: "6" },
    { icon: <Image src={three_chicks} alt="" width={212} height={212} className="w-full" />, name: "3" },
  ],
  correctAnswer: 0,
} as const;

const javascriptLessonProblemG5 = {
  type: "SELECT_1_OF_3",
  question: "Which of the following is the correct way to define a function `add` that takes two arguments `a` and `b`?",
  answers: [
    { icon: <Image src={sleeping_chick} alt="" width={212} height={212} className="w-full" />, name: "function add(a, b) {}" },
    { icon: <Image src={cow_lightbulb} alt="" width={212} height={212} className="w-full" />, name: "function add(a, b):" },
    { icon: <Image src={crying_chick} alt="" width={212} height={212} className="w-full" />, name: "define add(a, b) {}" },
  ],
  correctAnswer: 0,
} as const;

const javascriptLessonProblemG6 = {
  type: "SELECT_1_OF_3",
  question: "Which of the following correctly calls the function `greet()` defined as:\n\nfunction greet() {\n\tconsole.log('Hello');\n}",
  answers: [
    { icon: <Image src={cow_greeting} alt="" width={212} height={212} className="w-full" />, name: "greet()" },
    { icon: <Image src={sad_chick} alt="" width={212} height={212} className="w-full" />, name: "call greet()" },
    { icon: <Image src={crying_chick5} alt="" width={212} height={212} className="w-full" />, name: "greet" },
  ],
  correctAnswer: 0,
} as const;

const javascriptLessonProblemG7 = {
  type: "SELECT_1_OF_3",
  question: "What will the following code return?\n\nfunction square(x) {\n\treturn x * x;\n}\nconsole.log(square(4));",
  answers: [
    { icon: <Image src={crying_cow3} alt="" width={212} height={212} className="w-full" />, name: "4" },
    { icon: <Image src={cow_greeting} alt="" width={212} height={212} className="w-full" />, name: "16" },
    { icon: <Image src={crying_chick4} alt="" width={212} height={212} className="w-full" />, name: "Error" },
  ],
  correctAnswer: 1,
} as const;

const javascriptLessonProblemG8 = {
  type: "SELECT_1_OF_3",
  question: "Which of the following is the correct way to call a lambda function?\n\nlet addTwo = (x) => x + 2;",
  answers: [
    { icon: <Image src={cow_question} alt="" width={212} height={212} className="w-full" />, name: "addTwo" },
    { icon: <Image src={crying_chick3} alt="" width={212} height={212} className="w-full" />, name: "lambda addTwo(3)" },
    { icon: <Image src={cow_dollars} alt="" width={212} height={212} className="w-full" />, name: "addTwo(3)" },
  ],
  correctAnswer: 2,
} as const;

const javascriptLessonProblemG9 = {
  type: "SELECT_1_OF_3",
  question: "What will the following code print?\n\nfunction greet() {\n\treturn 'Hi';\n}\nconsole.log(greet());",
  answers: [
    { icon: <Image src={crying_chick} alt="" width={212} height={212} className="w-full" />, name: "Hello" },
    { icon: <Image src={cow_twothumbs} alt="" width={212} height={212} className="w-full" />, name: "None" },
    { icon: <Image src={cow_questioning} alt="" width={212} height={212} className="w-full" />, name: "Error" },
  ],
  correctAnswer: 1,
} as const;

const javascriptLessonProblemG10 = {
  type: "SELECT_1_OF_3",
  question: "What is the purpose of `return` in a function?",
  answers: [
    { icon: <Image src={crying_chick2} alt="" width={212} height={212} className="w-full" />, name: "It ends the function" },
    { icon: <Image src={cow_lightbulb} alt="" width={212} height={212} className="w-full" />, name: "It returns a value to the caller" },
    { icon: <Image src={chick_sleeping} alt="" width={212} height={212} className="w-full" />, name: "It prints a value" },
  ],
  correctAnswer: 1,
} as const;

const javascriptLessonProblemG11 = {
  type: "SELECT_1_OF_3",
  question: "What will the following code print?\n\nfunction greet(name) {\n\treturn 'Hello, ' + name;\n}\nconsole.log(greet('Alice'));",
  answers: [
    { icon: <Image src={chick_flattered} alt="" width={212} height={212} className="w-full" />, name: "Hello, Alice" },
    { icon: <Image src={crying_cow3} alt="" width={212} height={212} className="w-full" />, name: "Error" },
    { icon: <Image src={cow_greeting} alt="" width={212} height={212} className="w-full" />, name: "Hello, name" },
  ],
  correctAnswer: 0,
} as const;

const javascriptLessonProblemG12 = {
  type: "SELECT_1_OF_3",
  question: "What does the following code do?\n\nfunction multiply(x, y) {\n\treturn x * y;\n}\nlet result = multiply(3, 4);",
  answers: [
    { icon: <Image src={crying_chick5} alt="" width={212} height={212} className="w-full" />, name: "Adds 3 and 4" },
    { icon: <Image src={sad_chick} alt="" width={212} height={212} className="w-full" />, name: "Prints the result of 3 * 4" },
    { icon: <Image src={chick_flattered} alt="" width={212} height={212} className="w-full" />, name: "Returns the product of 3 and 4" },
  ],
  correctAnswer: 2,
} as const;

const javascriptLessonProblemG13 = {
  type: "SELECT_1_OF_3",
  question: "What is the result of the following code?\n\nfunction multiply(x, y = 2) {\n\treturn x * y;\n}\nconsole.log(multiply(5));",
  answers: [
    { icon: <Image src={happy_chickfamily} alt="" width={212} height={212} className="w-full" />, name: "10" },
    { icon: <Image src={crying_chick5} alt="" width={212} height={212} className="w-full" />, name: "Error" },
    { icon: <Image src={sad_chick} alt="" width={212} height={212} className="w-full" />, name: "5" },
  ],
  correctAnswer: 0,
} as const;

const javascriptLessonProblemG14 = {
  type: "WRITE",
  question: "Write JavaScript code that returns the sum of `a` and `b` in a function defined as `addNumbers(a, b)`",
  answerTiles: ["function", "addNumbers", "(", "a", "+", "b", ")", "{", "return", ";", "}"],
  correctAnswer: [0, 1, 2, 3, 4, 5, 6, 7, 8],
} as const;

const javascriptLessonProblemG15 = {
  type: "SELECT_1_OF_3",
  question: "What will the following code output?\n\nfunction greet() {\n\treturn 'Hello';\n}\nconsole.log(greet());",
  answers: [
    { icon: <Image src={crying_chick2} alt="" width={212} height={212} className="w-full" />, name: "Error" },
    { icon: <Image src={hen_thumbsup} alt="" width={212} height={212} className="w-full" />, name: "Hello" },
    { icon: <Image src={crying_cow2} alt="" width={212} height={212} className="w-full" />, name: "None" },
  ],
  correctAnswer: 1,
} as const;

const javascriptLessonProblemG16 = {
  type: "WRITE",
  question: "Write JavaScript code to define a function `multiply(a, b)` that will print the result of `a * b`.",
  answerTiles: ["function", "multiply", "(", "a", ",", "b", ")", "{", "console.log(a * b);", "}"],
  correctAnswer: [0, 1, 2, 3, 4, 5, 6, 7, 8],
} as const;
const javascriptLessonProblemI1 = {
  type: "SELECT_1_OF_3",
  question: "What is a class in JavaScript?",
  answers: [
    { icon: <Image src={happy_chick3} alt="" width={212} height={212} className="w-full" />, name: "A blueprint for creating objects" },
    { icon: <Image src={hen_question} alt="" width={212} height={212} className="w-full" />, name: "A type of variable" },
    { icon: <Image src={sad_chick} alt="" width={212} height={212} className="w-full" />, name: "A way to store lists of data" },
  ],
  correctAnswer: 0,
} as const;

const javascriptLessonProblemI2 = {
  type: "SELECT_1_OF_3",
  question: "Which of the following is an example of creating a class in JavaScript?",
  answers: [
    { icon: <Image src={chick_sleeping} alt="" width={212} height={212} className="w-full" />, name: "Dog = {};" },
    { icon: <Image src={hen_question} alt="" width={212} height={212} className="w-full" />, name: "function Dog() {}" },
    { icon: <Image src={chick_flattered} alt="" width={212} height={212} className="w-full" />, name: "class Dog {}" },
  ],
  correctAnswer: 2,
} as const;

const javascriptLessonProblemI3 = {
  type: "WRITE",
  question: "Write JavaScript code to create a class `Car`",
  answerTiles: [":", "class", "Car", "{", "}"],
  correctAnswer: [1, 2, 0, 3, 4]
} as const;

const javascriptLessonProblemI4 = {
  type: "SELECT_1_OF_3",
  question: "What is an object in JavaScript?",
  answers: [
    { icon: <Image src={happy_chick4} alt="" width={212} height={212} className="w-full" />, name: "An instance of a class" },
    { icon: <Image src={hen_question} alt="" width={212} height={212} className="w-full" />, name: "A type of function" },
    { icon: <Image src={crying_cow2} alt="" width={212} height={212} className="w-full" />, name: "A list of values" },
  ],
  correctAnswer: 0,
} as const;

const javascriptLessonProblemI5 = {
  type: "WRITE",
  question: "Write JavaScript code to create an object of the `Car` class",
  answerTiles: ["new", "Car", "car", "=", "()"],
  correctAnswer: [2, 3, 1, 0, 4]
} as const;

const javascriptLessonProblemI6 = {
  type: "SELECT_1_OF_3",
  question: "What do you use the `constructor` method for in a JavaScript class?",
  answers: [
    { icon: <Image src={happy_chickfamily} alt="" width={212} height={212} className="w-full" />, name: "To initialize the object's properties" },
    { icon: <Image src={hen_question} alt="" width={212} height={212} className="w-full" />, name: "To define the class's behavior" },
    { icon: <Image src={sad_chick} alt="" width={212} height={212} className="w-full" />, name: "To run code every time an object is printed" },
  ],
  correctAnswer: 0,
} as const;

const javascriptLessonProblemI7 = {
  type: "SELECT_1_OF_3",
  question: "What is the main purpose of using classes in JavaScript?",
  answers: [
    { icon: <Image src={crying_chick2} alt="" width={212} height={212} className="w-full" />, name: "To store variables" },
    { icon: <Image src={cow_greeting} alt="" width={212} height={212} className="w-full" />, name: "To bundle data and functions together" },
    { icon: <Image src={sad_chick} alt="" width={212} height={212} className="w-full" />, name: "To organize loops" },
  ],
  correctAnswer: 1,
} as const;

const javascriptLessonProblemI8 = {
  type: "SELECT_1_OF_3",
  question: "In JavaScript, what does `this` refer to inside a class?",
  answers: [
    { icon: <Image src={chick_microphone} alt="" width={212} height={212} className="w-full" />, name: "The current object of the class" },
    { icon: <Image src={chick_sleeping} alt="" width={212} height={212} className="w-full" />, name: "A reference to all objects in the program" },
    { icon: <Image src={crying_chick5} alt="" width={212} height={212} className="w-full" />, name: "The class itself" },
  ],
  correctAnswer: 0,
} as const;

const javascriptLessonProblemI9 = {
  type: "SELECT_1_OF_3",
  question: "What will the following code output?\nclass Cat {\n\tconstructor(name) {\n\t\tthis.name = name;\n\t}\nc = new Cat('Whiskers');\nconsole.log(c.name);",
  answers: [
    { icon: <Image src={happy_chick} alt="" width={212} height={212} className="w-full" />, name: "Whiskers" },
    { icon: <Image src={crying_chick} alt="" width={212} height={212} className="w-full" />, name: "None" },
    { icon: <Image src={sad_chick} alt="" width={212} height={212} className="w-full" />, name: "Error" },
  ],
  correctAnswer: 0,
} as const;

const javascriptLessonProblemI10 = {
  type: "WRITE",
  question: "Write a constructor method that accepts 'name' and 'age' parameters.",
  answerTiles: ["constructor", "(name,", "age)", "{", "this.name", "=", "name;", "this.age", "=", "age;}",],
  correctAnswer: [0, 1, 2, 3, 4, 5, 6, 7, 8]
} as const;

const javascriptLessonProblemI11 = {
  type: "WRITE",
  question: "Within a constructor method, assign the 'name' parameter to `this.name`.",
  answerTiles: ["this.", "name", "=", "name;"],
  correctAnswer: [0, 1, 2, 3]
} as const;

const javascriptLessonProblemI12 = {
  type: "SELECT_1_OF_3",
  question: "What will the following code output?\nclass Car {\n\tconstructor(make, model) {\n\t\tthis.make = make;\n\t\tthis.model = model;\n}\nlet c = new Car('Toyota', 'Corolla');\nconsole.log(c.make);",
  answers: [
    { icon: <Image src={happy_chick2} alt="" width={212} height={212} className="w-full" />, name: "Toyota" },
    { icon: <Image src={crying_chick} alt="" width={212} height={212} className="w-full" />, name: "Corolla" },
    { icon: <Image src={sad_chick} alt="" width={212} height={212} className="w-full" />, name: "Error" },
  ],
  correctAnswer: 0,
} as const;

const javascriptLessonProblemI13 = {
  type: "SELECT_1_OF_3",
  question: "What will the following code output?\nclass Employee {\n\tconstructor(name, position) {\n\t\tthis.name = name;\n\t\tthis.position = position;\n}\nlet e = new Employee('John', 'Manager');\nconsole.log(e.position);",
  answers: [
    { icon: <Image src={sad_chick} alt="" width={212} height={212} className="w-full" />, name: "John" },
    { icon: <Image src={happy_chick3} alt="" width={212} height={212} className="w-full" />, name: "Manager" },
    { icon: <Image src={cow_sleeping} alt="" width={212} height={212} className="w-full" />, name: "Error" },
  ],
  correctAnswer: 1,
} as const;

const javascriptLessonProblemI14 = {
  type: "WRITE",
  question: "Write JavaScript code to call the `start` method on the object 'car'",
  answerTiles: ["car.", "start", "()"],
  correctAnswer: [0, 2, 1]
} as const;
const javascriptLessonProblemI15 = {
  type: "SELECT_1_OF_3",
  question: "What will the following code output?\nclass Person {\n\tconstructor(name, age) {\n\t\tthis.name = name;\n\t\tthis.age = age;\n}\np = new Person('Alice', 30);\nconsole.log(p.age);",
  answers: [
    { icon: <Image src={cow_thinking} alt="" width={212} height={212} className="w-full" />, name: "Error" },
    { icon: <Image src={crying_chick} alt="" width={212} height={212} className="w-full" />, name: "Alice" },
    { icon: <Image src={happy_chick4} alt="" width={212} height={212} className="w-full" />, name: "30" },
  ],
  correctAnswer: 2,
} as const;

const javascriptLessonProblemI16 = {
  type: "SELECT_1_OF_3",
  question: "What will the following code output?\nclass Animal {\n\tconstructor(species) {\n\t\tthis.species = species;\n}\na = new Animal('Lion');\nconsole.log(a.species);",
  answers: [
    { icon: <Image src={happy_chick} alt="" width={212} height={212} className="w-full" />, name: "Lion" },
    { icon: <Image src={crying_chick} alt="" width={212} height={212} className="w-full" />, name: "None" },
    { icon: <Image src={sad_chick} alt="" width={212} height={212} className="w-full" />, name: "Error" },
  ],
  correctAnswer: 0,
} as const;

const javascriptLessonProblemI17 = {
  type: "SELECT_1_OF_3",
  question: "What will the following code output?\nclass Animal {\n\tconstructor(name) {\n\t\tthis.name = name;\n\t}\nspeak() {\n\t\treturn `${this.name} makes a sound`;\n}\n\nlet animal = new Animal('Dog');\nconsole.log(animal.speak());",
  answers: [
    { icon: <Image src={crying_chick2} alt="" width={212} height={212} className="w-full" />, name: "'Animal makes a sound'" },
    { icon: <Image src={hen_question} alt="" width={212} height={212} className="w-full" />, name: "'Dog barks'" },
    { icon: <Image src={happy_chick4} alt="" width={212} height={212} className="w-full" />, name: "'Dog makes a sound'" },
  ],
  correctAnswer: 2,
} as const;

const javascriptLessonProblemI18 = {
  type: "SELECT_1_OF_3",
  question: "What is the purpose of the `self` keyword in JavaScript classes?",
  answers: [
    { icon: <Image src={happy_chick4} alt="" width={212} height={212} className="w-full" />, name: "To refer to the instance of the class" },
    { icon: <Image src={sad_chick} alt="" width={212} height={212} className="w-full" />, name: "To refer to the class itself" },
    { icon: <Image src={crying_chick} alt="" width={212} height={212} className="w-full" />, name: "To call methods of other classes" },
  ],
  correctAnswer: 0,
} as const;

const javascriptLessonProblemI19 = {
  type: "SELECT_1_OF_3",
  question: "What will the following code output?\nclass Dog {\n\tconstructor(name) {\n\t\tthis.name = name;\n\t}\nspeak() {\n\t\treturn `${this.name} barks`;\n}\n\ndog = new Dog('Buddy');\nconsole.log(dog.speak());",
  answers: [
    { icon: <Image src={happy_chick3} alt="" width={212} height={212} className="w-full" />, name: "Buddy barks" },
    { icon: <Image src={crying_chick4} alt="" width={212} height={212} className="w-full" />, name: "Error" },
    { icon: <Image src={chick_sleeping} alt="" width={212} height={212} className="w-full" />, name: "None" },
  ],
  correctAnswer: 0,
} as const;

const javascriptLessonProblemI20 = {
  type: "SELECT_1_OF_3",
  question: "What is the output of the following code?\nclass Car {\n\tconstructor(make, model) {\n\t\tthis.make = make;\n\t\tthis.model = model;\n}\ncar = new Car('Ford', 'Mustang');\nconsole.log(car.model);",
  answers: [
    { icon: <Image src={chick_flattered} alt="" width={212} height={212} className="w-full" />, name: "Mustang" },
    { icon: <Image src={crying_chick} alt="" width={212} height={212} className="w-full" />, name: "Ford" },
    { icon: <Image src={sad_chick} alt="" width={212} height={212} className="w-full" />, name: "Error" },
  ],
  correctAnswer: 0,
} as const;

const javascriptLessonProblemI21 = {
  type: "WRITE",
  question: "Write JavaScript code to add a method `drive` to the `Car` class that prints 'Driving!'",
  answerTiles: ["drive", "function", "(self) {", "console.log('Driving!');", "}"],
  correctAnswer: [0, 1, 2, 3, 4],
} as const;

const javascriptLessonProblemI22 = {
  type: "SELECT_1_OF_3",
  question: "Which of the following is correct for creating a new object of a class?",
  answers: [
    { icon: <Image src={crying_chick} alt="" width={212} height={212} className="w-full" />, name: "object.create()" },
    { icon: <Image src={happy_chick} alt="" width={212} height={212} className="w-full" />, name: "object = new ClassName()" },
    { icon: <Image src={crying_chick5} alt="" width={212} height={212} className="w-full" />, name: "object.new()" },
  ],
  correctAnswer: 1,
} as const;

const javascriptLessonProblemI23 = {
  type: "SELECT_1_OF_3",
  question: "What will the following code output?\nclass Person {\n\tconstructor(name) {\n\t\tthis.name = name;\n}\nperson = new Person('John');\nconsole.log(person.name);",
  answers: [
    { icon: <Image src={crying_chick3} alt="" width={212} height={212} className="w-full" />, name: "Error" },
    { icon: <Image src={crying_chick5} alt="" width={212} height={212} className="w-full" />, name: "None" },
    { icon: <Image src={hen_thumbsup} alt="" width={212} height={212} className="w-full" />, name: "John" },
  ],
  correctAnswer: 2,
} as const;

const javascriptLessonProblemI24 = {
  type: "WRITE",
  question: "Write JavaScript code to modify the `Dog` class to add a method `eat` that prints 'Eating food!'",
  answerTiles: ["eat", "function", "(self) {", "console.log('Eating food!');", "}"],
  correctAnswer: [0, 1, 2, 3, 4],
} as const;

const javascriptLessonProblemJ1 = {
  type: "SELECT_1_OF_3",
  question: "What is inheritance in JavaScript?",
  answers: [
    { icon: <Image src={happy_chick4} alt="" width={212} height={212} className="w-full" />, name: "A way to create a new class from an existing class" },
    { icon: <Image src={sad_chick} alt="" width={212} height={212} className="w-full" />, name: "A method to assign variables" },
    { icon: <Image src={crying_chick} alt="" width={212} height={212} className="w-full" />, name: "A function that combines two classes" },
  ],
  correctAnswer: 0,
};

const javascriptLessonProblemJ2 = {
  type: "SELECT_1_OF_3",
  question: "What does the `super()` function do in JavaScript?",
  answers: [
    { icon: <Image src={happy_chick} alt="" width={212} height={212} className="w-full" />, name: "It allows access to methods from a parent class" },
    { icon: <Image src={crying_chick} alt="" width={212} height={212} className="w-full" />, name: "It creates a new instance of a class" },
    { icon: <Image src={sad_chick} alt="" width={212} height={212} className="w-full" />, name: "It deletes an object from memory" },
  ],
  correctAnswer: 0,
};

const javascriptLessonProblemJ3 = {
  type: "WRITE",
  question: "Write JavaScript code to create a subclass `Dog` that inherits from `Animal`.",
  answerTiles: ["class", "Dog", "extends", "Animal", "{", "}"],
  correctAnswer: [0, 1, 2, 3, 4, 5],
};

const javascriptLessonProblemJ4 = {
  type: "SELECT_1_OF_3",
  question: "What will the following code output?\nclass Animal {\n\tconstructor(species) {\n\t\tthis.species = species; }\n}\nclass Dog extends Animal {\n\tconstructor(species, breed) {\n\t\tsuper(species);\n\t\tthis.breed = breed; }\n}\nconst my_dog = new Dog('Canine', 'Bulldog');\nconsole.log(my_dog.species);",
  answers: [
    { icon: <Image src={crying_chick4} alt="" width={212} height={212} className="w-full" />, name: "Bulldog" },
    { icon: <Image src={happy_chick2} alt="" width={212} height={212} className="w-full" />, name: "Canine" },
    { icon: <Image src={sad_chick} alt="" width={212} height={212} className="w-full" />, name: "Error" },
  ],
  correctAnswer: 1,
};

const javascriptLessonProblemJ5 = {
  type: "WRITE",
  question: "Write JavaScript code to call the parent class constructor inside the subclass `Dog`.",
  answerTiles: ["super()", "(", ")", ";"],
  correctAnswer: [0, 1, 2, 3],
};

const javascriptLessonProblemJ6 = {
  type: "SELECT_1_OF_3",
  question: "Which of the following correctly demonstrates method overriding in JavaScript?",
  answers: [
    { icon: <Image src={crying_chick2} alt="" width={212} height={212} className="w-full" />, name: "override speak() {}" },
    { icon: <Image src={crying_cow} alt="" width={212} height={212} className="w-full" />, name: "function speak(override) {}" },
    { icon: <Image src={chick_flattered} alt="" width={212} height={212} className="w-full" />, name: "speak() {}" },
  ],
  correctAnswer: 2,
};

const javascriptLessonProblemJ7 = {
  type: "WRITE",
  question: "Write JavaScript function declaration to override the `speak` behavior of the parent class in a `Dog` subclass.",
  answerTiles: ["speak", "() {", "return", "'Woof!'", "}"],
  correctAnswer: [0, 1, 2, 3],
};

const javascriptLessonProblemJ8 = {
  type: "SELECT_1_OF_3",
  question: "What will the following code output?\nclass Animal {\n\tconstructor(species) {\n\t\tthis.species = species; }\n\t speak() {\n\t\treturn `${this.species} makes a sound`; }\n}\nclass Dog extends Animal {\n\t speak() {\n\t\treturn `${this.species} barks`; }\n}\nconst my_dog = new Dog('Dog');\nconsole.log(my_dog.speak());",
  answers: [
    { icon: <Image src={happy_chick3} alt="" width={212} height={212} className="w-full" />, name: "Dog barks" },
    { icon: <Image src={crying_chick2} alt="" width={212} height={212} className="w-full" />, name: "Dog makes a sound" },
    { icon: <Image src={sleeping_chick} alt="" width={212} height={212} className="w-full" />, name: "Error" },
  ],
  correctAnswer: 0,
};

const javascriptLessonProblemJ9 = {
  type: "WRITE",
  question: "Write JavaScript code to override the `speak` method, a subclass `Cat` can 'meow'.",
  answerTiles: ["speak", "() {", "return", "'Meow!'", "}"],
  correctAnswer: [0, 1, 2, 3],
};

const javascriptLessonProblemJ10 = {
  type: "SELECT_1_OF_3",
  question: "What will the following code output?\nclass Vehicle {\n\tconstructor(make, model) {\n\t\tthis.make = make;\n\t\tthis.model = model; }\n}\nclass Car extends Vehicle {\n\t drive() {\n\t\treturn `Driving ${this.make} ${this.model}`; }\n}\nconst my_car = new Car('Toyota', 'Camry');\nconsole.log(my_car.drive());",
  answers: [
    { icon: <Image src={happy_chick3} alt="" width={212} height={212} className="w-full" />, name: "Driving Toyota Camry" },
    { icon: <Image src={crying_chick} alt="" width={212} height={212} className="w-full" />, name: "Error" },
    { icon: <Image src={chick_sleeping} alt="" width={212} height={212} className="w-full" />, name: "Toyota Camry" },
  ],
  correctAnswer: 0,
};

const javascriptLessonProblemJ11 = {
  type: "WRITE",
  question: "Write JavaScript code to create a method `stop` for the `Car` class that prints 'Stopping the car!'",
  answerTiles: ["stop", "() {", "console.log", "'Stopping the car!'", "}"],
  correctAnswer: [0, 1, 2, 3, 4],
};

const javascriptLessonProblemJ12 = {
  type: "SELECT_1_OF_3",
  question: "What will the following code output?\nclass Person {\n\tconstructor(name, age) {\n\t\tthis.name = name;\n\t\tthis.age = age; }\n}\nclass Employee extends Person {\n\tconstructor(name, age, job_title) {\n\t\tsuper(name, age);\n\t\tthis.job_title = job_title; }\n}\nconst employee = new Employee('John', 30, 'Engineer');\nconsole.log(employee.name, employee.age, employee.job_title);",
  answers: [
    { icon: <Image src={happy_chick2} alt="" width={212} height={212} className="w-full" />, name: "John 30 Engineer" },
    { icon: <Image src={sad_chick} alt="" width={212} height={212} className="w-full" />, name: "Error" },
    { icon: <Image src={crying_chick4} alt="" width={212} height={212} className="w-full" />, name: "John 30" },
  ],
  correctAnswer: 0,
};

const javascriptLessonProblemJ13 = {
  type: "SELECT_1_OF_3",
  question: "In JavaScript, which method is called when a new object is created from a class?",
  answers: [
    { icon: <Image src={sad_chick} alt="" width={212} height={212} className="w-full" />, name: "constructor" },
    { icon: <Image src={crying_chick2} alt="" width={212} height={212} className="w-full" />, name: "new" },
    { icon: <Image src={happy_chick4} alt="" width={212} height={212} className="w-full" />, name: "init" },
  ],
  correctAnswer: 0,
};

const javascriptLessonProblemJ14 = {
  type: "SELECT_1_OF_3",
  question: "What is the purpose of method resolution order (MRO) in JavaScript?",
  answers: [
    { icon: <Image src={happy_chick} alt="" width={212} height={212} className="w-full" />, name: "To determine the order in which methods are inherited" },
    { icon: <Image src={crying_chick4} alt="" width={212} height={212} className="w-full" />, name: "To prioritize class names" },
    { icon: <Image src={sad_chick} alt="" width={212} height={212} className="w-full" />, name: "To define the constructor of a class" },
  ],
  correctAnswer: 0,
};

const javascriptLessonProblemJ15 = {
  type: "WRITE",
  question: "Write JavaScript code to print the method resolution order (MRO) for a class `Child` that inherits from classes `Parent1` and `Parent2`.",
  answerTiles: ["console.log", "Child", ".__proto__"],
  correctAnswer: [0, 1, 2],
};

const javascriptLessonProblemJ16 = {
  type: "SELECT_1_OF_3",
  question: "Which function can be used to call a parent class method inside a subclass method?",
  answers: [
    { icon: <Image src={crying_chick2} alt="" width={212} height={212} className="w-full" />, name: "call()" },
    { icon: <Image src={happy_chick4} alt="" width={212} height={212} className="w-full" />, name: "super()" },
    { icon: <Image src={chick_flattered} alt="" width={212} height={212} className="w-full" />, name: "parent()" },
  ],
  correctAnswer: 1,
};

const javascriptLessonProblemK1 = {
  type: "SELECT_1_OF_3",
  question: "What is the purpose of the `npm` command in JavaScript?",
  answers: [
    { icon: <Image src={happy_chick4} alt="" width={212} height={212} className="w-full" />, name: "To install, update, or uninstall JavaScript packages" },
    { icon: <Image src={crying_chick2} alt="" width={212} height={212} className="w-full" />, name: "To run JavaScript scripts" },
    { icon: <Image src={sad_chick} alt="" width={212} height={212} className="w-full" />, name: "To debug JavaScript code" },
  ],
  correctAnswer: 0,
};

const javascriptLessonProblemK2 = {
  type: "WRITE",
  question: "Write an `npm` command to install the `axios` library.",
  answerTiles: ["npm", "install", "axios"],
  correctAnswer: [0, 1, 2],
};

const javascriptLessonProblemK3 = {
  type: "SELECT_1_OF_3",
  question: "Which of the following is a valid regular expression in JavaScript?",
  answers: [
    { icon: <Image src={cow_sleeping} alt="" width={212} height={212} className="w-full" />, name: "abc[123]}" },
    { icon: <Image src={happy_chick} alt="" width={212} height={212} className="w-full" />, name: "\\d{3}-\\d{2}-\\d{4}" },
    { icon: <Image src={sad_chick} alt="" width={212} height={212} className="w-full" />, name: "def*ghi" },
  ],
  correctAnswer: 1,
};

const javascriptLessonProblemK4 = {
  type: "WRITE",
  question: "Write JavaScript code using `RegExp` to match an email address from the string 'Contact us at support@example.com'.",
  answerTiles: ["const", "regex", " = ", "/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}/", ".exec", "'Contact us at support@example.com'"],
  correctAnswer: [0, 1, 2, 3, 4, 5],
};

const javascriptLessonProblemK5 = {
  type: "SELECT_1_OF_3",
  question: "What does the `replace()` function do in JavaScript?",
  answers: [
    { icon: <Image src={happy_chick2} alt="" width={212} height={212} className="w-full" />, name: "It replaces parts of a string that match a regex pattern" },
    { icon: <Image src={crying_chick2} alt="" width={212} height={212} className="w-full" />, name: "It splits a string based on a regex pattern" },
    { icon: <Image src={sad_chick} alt="" width={212} height={212} className="w-full" />, name: "It returns all matches of a regex pattern in an array" },
  ],
  correctAnswer: 0,
};

const javascriptLessonProblemK6 = {
  type: "SELECT_1_OF_3",
  question: "What is the purpose of the `finalize()` method in JavaScript?",
  answers: [
    { icon: <Image src={happy_chick3} alt="" width={212} height={212} className="w-full" />, name: "It is called when an object is about to be garbage collected" },
    { icon: <Image src={crying_chick2} alt="" width={212} height={212} className="w-full" />, name: "It initializes a new object" },
    { icon: <Image src={sleeping_chick} alt="" width={212} height={212} className="w-full" />, name: "It modifies the object’s attributes" },
  ],
  correctAnswer: 0,
};

const javascriptLessonProblemK7 = {
  type: "WRITE",
  question: "Write JavaScript code to define a `finalize()` method in a class `Book` that logs 'Object deleted'.",
  answerTiles: ["finalize", "() {", "console.log", "'Object deleted'", "}"],
  correctAnswer: [0, 1, 2, 3, 4],
};

const javascriptLessonProblemK8 = {
  type: "SELECT_1_OF_3",
  question: "What does the `map()` function do in JavaScript?",
  answers: [
    { icon: <Image src={chick_flattered} alt="" width={212} height={212} className="w-full" />, name: "It applies a function to each element in an array" },
    { icon: <Image src={crying_chick2} alt="" width={212} height={212} className="w-full" />, name: "It filters elements of an array" },
    { icon: <Image src={crying_cow} alt="" width={212} height={212} className="w-full" />, name: "It merges two arrays" },
  ],
  correctAnswer: 0,
};

const javascriptLessonProblemK9 = {
  type: "WRITE",
  question: "Write JavaScript code to `map` two arrays: `names = ['Alice', 'Bob', 'Charlie']` and `scores = [85, 90, 78]`.",
  answerTiles: ["names", ".map", "(name, index) => ", "`Name: ${name}, Score: ${scores[index]}`"],
  correctAnswer: [0, 1, 2, 3],
};

const javascriptLessonProblemK10 = {
  type: "SELECT_1_OF_3",
  question: "Which of the following is the correct syntax to define a lambda function in JavaScript?",
  answers: [
    { icon: <Image src={crying_chick3} alt="" width={212} height={212} className="w-full" />, name: "function(x) { return x + 1; }" },
    { icon: <Image src={crying_chick2} alt="" width={212} height={212} className="w-full" />, name: "function lambda(x) { return x + 1; }" },
    { icon: <Image src={chick_microphone} alt="" width={212} height={212} className="w-full" />, name: "(x) => x + 1" },
  ],
  correctAnswer: 2,
};

const javascriptLessonProblemK11 = {
  type: "WRITE",
  question: "Write JavaScript code to define a lambda function that multiplies two numbers and call it with arguments 5 and 6.",
  answerTiles: ["multiply", "=", "(x, y) =>", "x * y", "(5, 6)"],
  correctAnswer: [0, 1, 2, 3, 4],
};

const javascriptLessonProblemK12 = {
  type: "SELECT_1_OF_3",
  question: "What is the result of the following expression in JavaScript:\n [i**2 for i in [0, 1, 2]]",
  answers: [
    { icon: <Image src={cow_greeting} alt="" width={212} height={212} className="w-full" />, name: "[0, 1, 4]" },
    { icon: <Image src={crying_chick2} alt="" width={212} height={212} className="w-full" />, name: "[1, 4, 9]" },
    { icon: <Image src={sad_chick} alt="" width={212} height={212} className="w-full" />, name: "[0, 1, 2]" },
  ],
  correctAnswer: 0,
};

const javascriptLessonProblemK13 = {
  type: "SELECT_1_OF_3",
  question: "Which of the following is the correct way to install a package using npm?",
  answers: [
    { icon: <Image src={crying_chick} alt="" width={212} height={212} className="w-full" />, name: "install npm package_name" },
    { icon: <Image src={cow_lightbulb} alt="" width={212} height={212} className="w-full" />, name: "npm install package_name" },
    { icon: <Image src={sad_chick} alt="" width={212} height={212} className="w-full" />, name: "npm add package_name" },
  ],
  correctAnswer: 1,
};

const javascriptLessonProblemK14 = {
  type: "SELECT_1_OF_3",
  question: "What is the output of the following code?\n{0: 0, 1: 1, 2: 4}.map(x => x**2)",
  answers: [
    { icon: <Image src={cow_sleeping} alt="" width={212} height={212} className="w-full" />, name: "{1: 1, 2: 4, 3: 9}" },
    { icon: <Image src={cow_twothumbs} alt="" width={212} height={212} className="w-full" />, name: "{0: 0, 1: 1, 2: 4}" },
    { icon: <Image src={sad_chick} alt="" width={212} height={212} className="w-full" />, name: "{0: 1, 1: 2, 2: 3}" },
  ],
  correctAnswer: 1,
};

const javascriptLessonProblemK15 = {
  type: "SELECT_1_OF_3",
  question: "Which regular expression pattern matches one or more digits in JavaScript?",
  answers: [
    { icon: <Image src={happy_chickfamily} alt="" width={212} height={212} className="w-full" />, name: "\\d+" },
    { icon: <Image src={sleeping_chick} alt="" width={212} height={212} className="w-full" />, name: "[0-9]" },
    { icon: <Image src={crying_cow} alt="" width={212} height={212} className="w-full" />, name: "\\d" },
  ],
  correctAnswer: 0,
};

const javascriptLessonProblemK16 = {
  type: "SELECT_1_OF_3",
  question: "What is the output of the following JavaScript code?\nBoolean('Hello')",
  answers: [
    { icon: <Image src={crying_cow2} alt="" width={212} height={212} className="w-full" />, name: "Error" },
    { icon: <Image src={crying_chick2} alt="" width={212} height={212} className="w-full" />, name: "False" },
    { icon: <Image src={happy_chick4} alt="" width={212} height={212} className="w-full" />, name: "True" },
  ],
  correctAnswer: 2,
};

const csharpLessonProblemA1 = {
  type: "SELECT_1_OF_3",
  question: "Which of these is a correct way to declare a variable in C#?",
  answers: [
    { icon: <Image src={three_chicks} alt="" width={212} height={212} className="w-full" />, name: "int chicks = 3;" },
    { icon: <Image src={two_birds} alt="" width={212} height={212} className="w-full" />, name: "int birds == 2;" },
    { icon: <Image src={five_candles} alt="" width={212} height={212} className="w-full" />, name: "candles : int = 5;" },
  ],
  correctAnswer: 0,
} as const;

const csharpLessonProblemA2 = {
  type: "SELECT_1_OF_3",
  question: "Which of the following is NOT a valid C# variable name?",
  answers: [
    { icon: <Image src={happy_chickfamily} alt="" width={212} height={212} className="w-full" />, name: "chickCount" },
    { icon: <Image src={cow_twothumbs} alt="" width={212} height={212} className="w-full" />, name: "2thumbs" },
    { icon: <Image src={three_cows} alt="" width={212} height={212} className="w-full" />, name: "totalCows" },
  ],
  correctAnswer: 1,
} as const;

const csharpLessonProblemA3 = {
  type: "WRITE",
  question: "Write the C# code to print 'Hello, World!'",
  answerTiles: ["Console.WriteLine", "(", "\"Hello, World!\"", ")", ";"],
  correctAnswer: [0, 1, 2, 3, 4],
} as const;

const csharpLessonProblemA4 = {
  type: "WRITE",
  question: "Write the C# code to print the phrase 'Goodbye!'",
  answerTiles: ["Console.WriteLine", "(", "\"Goodbye!\"", ")", ";"],
  correctAnswer: [0, 1, 2, 3, 4],
} as const;

const csharpLessonProblemA5 = {
  type: "SELECT_1_OF_3",
  question: "Which of these is a valid variable name in C#?",
  answers: [
    { icon: <Image src={chick_microphone} alt="" width={212} height={212} className="w-full" />, name: "1Microphone" },
    { icon: <Image src={two_chicks} alt="" width={212} height={212} className="w-full" />, name: "chicks 2" },
    { icon: <Image src={chick_card} alt="" width={212} height={212} className="w-full" />, name: "myCard" },
  ],
  correctAnswer: 2,
} as const;

const csharpLessonProblemA6 = {
  type: "SELECT_1_OF_3",
  question: "Which of the following is a correct way to declare a string variable in C#?",
  answers: [
    { icon: <Image src={cow_2fingers} alt="" width={212} height={212} className="w-full" />, name: "string fingers : \"2\";" },
    { icon: <Image src={chick_flattered} alt="" width={212} height={212} className="w-full" />, name: "string mood = \"flattered\";" },
    { icon: <Image src={three_cows} alt="" width={212} height={212} className="w-full" />, name: "string cows = 3;" },
  ],
  correctAnswer: 1,
} as const;

const csharpLessonProblemA7 = {
  type: "WRITE",
  question: "Write a comment in C# that says 'This is a comment'.",
  answerTiles: ["//", "This", "is", "a", "comment"],
  correctAnswer: [0, 1, 2, 3, 4],
} as const;

const csharpLessonProblemA8 = {
  type: "SELECT_1_OF_3",
  question: "Which of the following is a correct way to declare a float variable in C#?",
  answers: [
    { icon: <Image src={happy_chickfamily} alt="" width={212} height={212} className="w-full" />, name: "float price = 3.5f;" },
    { icon: <Image src={sad_chick} alt="" width={212} height={212} className="w-full" />, name: "float temperature = \"25.3\";" },
    { icon: <Image src={crying_cow} alt="" width={212} height={212} className="w-full" />, name: "float height = 5,5;" },
  ],
  correctAnswer: 0,
} as const;

const csharpLessonProblemA9 = {
  type: "WRITE",
  question: "Write the C# code to concatenate 'Python' and 'rocks' into a single string and print it.",
  answerTiles: ["Console.WriteLine", "(", "\"Python\"", " + ", "\"rocks\"", ")", ";"],
  correctAnswer: [0, 1, 2, 3, 4, 5, 6],
} as const;

const csharpLessonProblemA10 = {
  type: "WRITE",
  question: "Assign the value 10 to the variable 'a'.",
  answerTiles: ["int", "a", "=", "10", ";"],
  correctAnswer: [0, 1, 2, 3, 4],
} as const;

const csharpLessonProblemA11 = {
  type: "WRITE",
  question: "Write the C# code to add a comment about the following line of code: 'int x = 10;'.",
  answerTiles: ["//", "Assign", "10", "to x", "int x = 10;"],
  correctAnswer: [4, 0, 1, 2, 3],
} as const;

const csharpLessonProblemA12 = {
  type: "WRITE",
  question: "Write the C# code to concatenate 'Hello' and 'World' into one string and print it.",
  answerTiles: ["Console.WriteLine", "(", "\"Hello\"", " + ", "\"World\"", ")", ";"],
  correctAnswer: [0, 1, 2, 3, 4, 5, 6],
} as const;

const csharpLessonProblemA13 = {
  type: "WRITE",
  question: "Write a C# statement to assign the values 1, 2, and 3 to the variables 'a', 'b', and 'c' respectively in one line.",
  answerTiles: ["=", "a,", "3", "c", "1,", "b,", "2,", "=="],
  correctAnswer: [1, 5, 3, 0, 4, 6, 2],
} as const;

const csharpLessonProblemA14 = {
  type: "WRITE",
  question: "Write the C# code to print the result of adding 5 and 8.",
  answerTiles: ["Console.WriteLine", "5", "+", "(", "8", ")"],
  correctAnswer: [0, 3, 1, 2, 4, 5],
} as const;

const csharpLessonProblemA15 = {
  type: "WRITE",
  question: "Write C# code to assign the values 'apple', 'banana', and 'cherry' to the variables 'x', 'y', and 'z' respectively in one line.",
  answerTiles: ["x,", "y,", "apple,", "banana,", "cherry", "z", "="],
  correctAnswer: [0, 1, 5, 6, 2, 3, 4],
} as const;

const csharpLessonProblemA16 = {
  type: "SELECT_1_OF_3",
  question: "Which of the following is a valid data type in C#?",
  answers: [
    { icon: <Image src={crying_chick} alt="" width={212} height={212} className="w-full" />, name: "decimal" },
    { icon: <Image src={happy_chick} alt="" width={212} height={212} className="w-full" />, name: "int" },
    { icon: <Image src={crying_cow} alt="" width={212} height={212} className="w-full" />, name: "word" },
  ],
  correctAnswer: 1,
} as const;

const csharpLessonProblemB1 = {
  type: "WRITE",
  question: "Write C# code to add 7 and 3.",
  answerTiles: ["7", "3", "+", "-", "++"],
  correctAnswer: [0, 2, 1],
} as const;

const csharpLessonProblemB2 = {
  type: "WRITE",
  question: "Write the C# code to assign the value 20 to the variable 'a' and then subtract 5 from it.",
  answerTiles: ["a", "-", "5", "=", "20"],
  correctAnswer: [0, 3, 4, 1, 2],
} as const;

const csharpLessonProblemB3 = {
  type: "WRITE",
  question: "Write C# code to multiply 6 and 4.",
  answerTiles: ["6", "*", "4", "**"],
  correctAnswer: [0, 1, 2],
} as const;

const csharpLessonProblemB4 = {
  type: "WRITE",
  question: "Write C# code to divide 20 by 2.",
  answerTiles: ["20", "//", "2", "/"],
  correctAnswer: [0, 3, 2],
} as const;

const csharpLessonProblemB5 = {
  type: "SELECT_1_OF_3",
  question: "Which operator is used to find the remainder in C#?",
  answers: [
    { icon: <Image src={crying_chick} alt="" width={212} height={212} className="w-full" />, name: "mod" },
    { icon: <Image src={sleeping_chick} alt="" width={212} height={212} className="w-full" />, name: "/" },
    { icon: <Image src={chick_twothumbs} alt="" width={212} height={212} className="w-full" />, name: "%" },
  ],
  correctAnswer: 2,
} as const;

const csharpLessonProblemB6 = {
  type: "WRITE",
  question: "Write C# code to subtract 5 from 10.",
  answerTiles: ["10", "--", "5", "-", "-*"],
  correctAnswer: [0, 3, 2],
} as const;

const csharpLessonProblemB7 = {
  type: "SELECT_1_OF_3",
  question: "What is the result of 5 + 3 * 2 in C#?",
  answers: [
    { icon: <Image src={crying_chick2} alt="" width={212} height={212} className="w-full" />, name: "16" },
    { icon: <Image src={cow_twothumbs} alt="" width={212} height={212} className="w-full" />, name: "11" },
    { icon: <Image src={crying_chick5} alt="" width={212} height={212} className="w-full" />, name: "13" },
  ],
  correctAnswer: 1,
} as const;

const csharpLessonProblemB8 = {
  type: "SELECT_1_OF_3",
  question: "Which operator is used to perform exponentiation in C#?",
  answers: [
    { icon: <Image src={crying_chick} alt="" width={212} height={212} className="w-full" />, name: "*" },
    { icon: <Image src={cow_sleeping} alt="" width={212} height={212} className="w-full" />, name: "Math.Pow" },
    { icon: <Image src={three_cows} alt="" width={212} height={212} className="w-full" />, name: "^" },
  ],
  correctAnswer: 1,
} as const;

const csharpLessonProblemB9 = {
  type: "SELECT_1_OF_3",
  question: "What is the result of -10 + 5 in C#?",
  answers: [
    { icon: <Image src={laying_cow} alt="" width={212} height={212} className="w-full" />, name: "-5" },
    { icon: <Image src={crying_chick3} alt="" width={212} height={212} className="w-full" />, name: "5" },
    { icon: <Image src={crying_chick4} alt="" width={212} height={212} className="w-full" />, name: "15" },
  ],
  correctAnswer: 0,
} as const;

const csharpLessonProblemB10 = {
  type: "WRITE",
  question: "Write C# code to subtract 12 from 25 and then multiply the result by 3.",
  answerTiles: ["25", "*", "3", "-", "12"],
  correctAnswer: [0, 3, 4, 1, 2],
} as const;

const csharpLessonProblemB11 = {
  type: "WRITE",
  question: "Write C# code to calculate 2 raised to the power of 3.",
  answerTiles: ["Math.Pow", "(", "2", ",", "3", ")"],
  correctAnswer: [0, 1, 2, 3, 4, 5],
} as const;

const csharpLessonProblemB12 = {
  type: "SELECT_1_OF_3",
  question: "What is the result of Math.Pow(5, 2) in C#?",
  answers: [
    { icon: <Image src={happy_chick2} alt="" width={212} height={212} className="w-full" />, name: "25" },
    { icon: <Image src={crying_chick} alt="" width={212} height={212} className="w-full" />, name: "10" },
    { icon: <Image src={sad_chick} alt="" width={212} height={212} className="w-full" />, name: "5" },
  ],
  correctAnswer: 0,
} as const;

const csharpLessonProblemB13 = {
  type: "WRITE",
  question: "Write C# code to assign the value 100 to the variable 'b' and then divide it by 4.",
  answerTiles: ["b", "=", "100", "/", "4", ";"],
  correctAnswer: [0, 1, 2, 3, 4, 5],
} as const;

const csharpLessonProblemB14 = {
  type: "WRITE",
  question: "Write C# code to convert the string \"10\" to an integer and store it in 'x'.",
  answerTiles: ["x", "=", "int.Parse", "(", "\"10\"", ")", ";"],
  correctAnswer: [0, 1, 2, 3, 4, 5, 6],
} as const;

const csharpLessonProblemB15 = {
  type: "SELECT_1_OF_3",
  question: "What is the result of 8 % 3 in C#?",
  answers: [
    { icon: <Image src={crying_cow2} alt="" width={212} height={212} className="w-full" />, name: "3" },
    { icon: <Image src={crying_chick3} alt="" width={212} height={212} className="w-full" />, name: "1" },
    { icon: <Image src={happy_chick2} alt="" width={212} height={212} className="w-full" />, name: "2" },
  ],
  correctAnswer: 2,
} as const;

const csharpLessonProblemB16 = {
  type: "SELECT_1_OF_3",
  question: "What is the result of 10 / 3 in C# when using integer division?",
  answers: [
    { icon: <Image src={cow_sleeping} alt="" width={212} height={212} className="w-full" />, name: "3.333" },
    { icon: <Image src={three_cows} alt="" width={212} height={212} className="w-full" />, name: "3" },
    { icon: <Image src={cow_dollars} alt="" width={212} height={212} className="w-full" />, name: "4" },
  ],
  correctAnswer: 1,
} as const;

const csharpLessonProblemC1 = {
  type: "SELECT_1_OF_3",
  question: "Which of the following represents a Boolean value in C#?",
  answers: [
    { icon: <Image src={chick_thumbsup} alt="" width={212} height={212} className="w-full" />, name: "true" },
    { icon: <Image src={hen_thumbsup} alt="" width={212} height={212} className="w-full" />, name: "\"True\"" },
    { icon: <Image src={cake} alt="" width={212} height={212} className="w-full" />, name: "1" },
  ],
  correctAnswer: 0,
} as const;

const csharpLessonProblemC2 = {
  type: "WRITE",
  question: "Write C# code to negate the Boolean value 'true'.",
  answerTiles: ["!", "true"],
  correctAnswer: [0, 1],
} as const;

const csharpLessonProblemC3 = {
  type: "SELECT_1_OF_3",
  question: "Which of the following is the correct way to combine two Boolean conditions with 'and' in C#?",
  answers: [
    { icon: <Image src={crying_cow2} alt="" width={212} height={212} className="w-full" />, name: "condition1 && condition2" },
    { icon: <Image src={happy_chick2} alt="" width={212} height={212} className="w-full" />, name: "condition1 and condition2" },
    { icon: <Image src={crying_cow3} alt="" width={212} height={212} className="w-full" />, name: "condition1 + condition2" },
  ],
  correctAnswer: 0,
} as const;

const csharpLessonProblemC4 = {
  type: "SELECT_1_OF_3",
  question: "Which of these expressions checks if a value is not equal to another in C#?",
  answers: [
    { icon: <Image src={chick_flattered} alt="" width={212} height={212} className="w-full" />, name: "!=" },
    { icon: <Image src={sleeping_chick} alt="" width={212} height={212} className="w-full" />, name: "==" },
    { icon: <Image src={chick_question3} alt="" width={212} height={212} className="w-full" />, name: ">" },
  ],
  correctAnswer: 0,
} as const;

const csharpLessonProblemC5 = {
  type: "SELECT_1_OF_3",
  question: "What is the output of the expression '9 == 9' in C#?",
  answers: [
    { icon: <Image src={crying_cow3} alt="" width={212} height={212} className="w-full" />, name: "False" },
    { icon: <Image src={happy_chick3} alt="" width={212} height={212} className="w-full" />, name: "True" },
    { icon: <Image src={crying_cow} alt="" width={212} height={212} className="w-full" />, name: "None" },
  ],
  correctAnswer: 1,
} as const;

const csharpLessonProblemC6 = {
  type: "SELECT_1_OF_3",
  question: "What is the result of 5 != 3 in C#?",
  answers: [
    { icon: <Image src={happy_chick} alt="" width={212} height={212}  className="w-full" />, name: "True" },
    { icon: <Image src={wrong_chick} alt="" width={212} height={212}  className="w-full" />, name: "False" },
    { icon: <Image src={crying_cow} alt="" width={212} height={212}  className="w-full" />, name: "None" },
  ],
  correctAnswer: 0,
} as const;

const csharpLessonProblemC7 = {
  type: "SELECT_1_OF_3",
  question: "What is the result of 3 < 5 in C#?",
  answers: [
    { icon: <Image src={chick_sleeping} alt="" width={212} height={212}  className="w-full" />, name: "False" },
    { icon: <Image src={happy_chickfamily} alt="" width={212} height={212}  className="w-full" />, name: "True" },
    { icon: <Image src={sad_chick} alt="" width={212} height={212}  className="w-full" />, name: "None" },
  ],
  correctAnswer: 1,
} as const;

const csharpLessonProblemC8 = {
  type: "WRITE",
  question: "Write C# code to check if 5 is equal to 5.",
  answerTiles: ["5", "==", "5", "="],
  correctAnswer: [0, 1, 2],
} as const;

const csharpLessonProblemC9 = {
  type: "WRITE",
  question: "Write C# code to check if 3 is less than 5.",
  answerTiles: ["3", "<=", "<", "5"],
  correctAnswer: [0, 2, 3],
} as const;

const csharpLessonProblemC10 = {
  type: "SELECT_1_OF_3",
  question: "Which of the following is used to check if two values are equal in C#?",
  answers: [
    { icon: <Image src={happy_chickfamily} alt="" width={212} height={212} className="w-full" />, name: "==" },
    { icon: <Image src={wrong_chick} alt="" width={212} height={212} className="w-full" />, name: "=" },
    { icon: <Image src={crying_cow} alt="" width={212} height={212} className="w-full" />, name: "!=" },
  ],
  correctAnswer: 0,
} as const;

const csharpLessonProblemC11 = {
  type: "WRITE",
  question: "Write C# code to check if 7 is greater than or equal to 5.",
  answerTiles: ["7", ">", "5", ">="],
  correctAnswer: [0, 3, 2],
} as const;

const csharpLessonProblemC12 = {
  type: "WRITE",
  question: "Write C# code to check if a number 'x' is less than 10 and 'y' is greater than 5.",
  answerTiles: ["x", "y", ">", "5", "<", "10", "&&"],
  correctAnswer: [0, 4, 5, 6, 1, 2, 3],
} as const;

const csharpLessonProblemC13 = {
  type: "SELECT_1_OF_3",
  question: "Which of the following expressions will return False in C#?",
  answers: [
    { icon: <Image src={crying_cow2} alt="" width={212} height={212} className="w-full" />, name: "\"True\" == \"True\"" },
    { icon: <Image src={cow_question} alt="" width={212} height={212} className="w-full" />, name: "5 == 3" },
    { icon: <Image src={cow_sleeping} alt="" width={212} height={212} className="w-full" />, name: "3 == 3" },
  ],
  correctAnswer: 1,
} as const;

const csharpLessonProblemC14 = {
  type: "WRITE",
  question: "Write C# code to check if a variable 'age' is between 18 and 25 (inclusive).",
  answerTiles: ["age >=", "age", "<=", "25", "18", "&&"],
  correctAnswer: [0, 4, 5, 1, 2, 3],
} as const;

const csharpLessonProblemC15 = {
  type: "SELECT_1_OF_3",
  question: "What is the result of the expression 'false || true' in C#?",
  answers: [
    { icon: <Image src={happy_chick4} alt="" width={212} height={212} className="w-full" />, name: "True" },
    { icon: <Image src={crying_chick4} alt="" width={212} height={212} className="w-full" />, name: "False" },
    { icon: <Image src={crying_cow2} alt="" width={212} height={212} className="w-full" />, name: "None" },
  ],
  correctAnswer: 0,
} as const;

const csharpLessonProblemC16 = {
  type: "WRITE",
  question: "Write C# code to check if a variable 'score' is less than or equal to 50 and greater than 30.",
  answerTiles: ["score <=", "score", ">", "30", "50", "&&"],
  correctAnswer: [0, 4, 5, 1, 2, 3],
} as const;

const csharpLessonProblemD1 = {
  type: "SELECT_1_OF_3",
  question: "Which of the following is the correct syntax for creating an array in C#?",
  answers: [
    { icon: <Image src={crying_cow3} alt="" width={212} height={212} className="w-full" />, name: "{1, 2, 3}" },
    { icon: <Image src={wrong_chick} alt="" width={212} height={212} className="w-full" />, name: "(1, 2, 3)" },
    { icon: <Image src={happy_chick4} alt="" width={212} height={212} className="w-full" />, name: "new int[] {1, 2, 3}" },
  ],
  correctAnswer: 2,
} as const;

const csharpLessonProblemD2 = {
  type: "SELECT_1_OF_3",
  question: "How can you access the second element of an array 'myArray' in C#?",
  answers: [
    { icon: <Image src={crying_cow3} alt="" width={212} height={212} className="w-full" />, name: "myArray[2]" },
    { icon: <Image src={sad_chick} alt="" width={212} height={212} className="w-full" />, name: "myArray(2)" },
    { icon: <Image src={happy_twochicks} alt="" width={212} height={212} className="w-full" />, name: "myArray[1]" },
  ],
  correctAnswer: 2,
} as const;

const csharpLessonProblemD3 = {
  type: "WRITE",
  question: "Write C# code to create an array containing the numbers 1, 2, and 3.",
  answerTiles: ["new", "int[]", "{", "}", "1,", "2,", "3"],
  correctAnswer: [0, 1, 2, 4, 5, 6, 3],
} as const;

const csharpLessonProblemD4 = {
  type: "WRITE",
  question: "Write C# code to add the value 'orange' to the list ['apple', 'banana'].",
  answerTiles: ["list", ".Add", "(", "'orange'", ")"],
  correctAnswer: [0, 1, 2, 3, 4],
} as const;

const csharpLessonProblemD5 = {
  type: "SELECT_1_OF_3",
  question: "Which of the following is a valid tuple in C#?",
  answers: [
    { icon: <Image src={happy_chick3} alt="" width={212} height={212} className="w-full" />, name: "(1, 2, 3)" },
    { icon: <Image src={chick_sleeping} alt="" width={212} height={212} className="w-full" />, name: "[1, 2, 3]" },
    { icon: <Image src={crying_chick4} alt="" width={212} height={212} className="w-full" />, name: "{1, 2, 3}" },
  ],
  correctAnswer: 0,
} as const;

const csharpLessonProblemD6 = {
  type: "SELECT_1_OF_3",
  question: "Which of the following is the correct way to define a dictionary in C#?",
  answers: [
    { icon: <Image src={happy_hen} alt="" width={212} height={212} className="w-full" />, name: "new Dictionary<string, string> { {\"key\", \"value\"} }" },
    { icon: <Image src={crying_cow} alt="" width={212} height={212} className="w-full" />, name: "[\"key\", \"value\"]" },
    { icon: <Image src={crying_chick3} alt="" width={212} height={212} className="w-full" />, name: "(\"key\", \"value\")" },
  ],
  correctAnswer: 0,
} as const;

const csharpLessonProblemD7 = {
  type: "SELECT_1_OF_3",
  question: "What is the result of accessing the second element in the tuple (10, 20, 30) in C#?",
  answers: [
    { icon: <Image src={crying_chick2} alt="" width={212} height={212} className="w-full" />, name: "10" },
    { icon: <Image src={happy_chick3} alt="" width={212} height={212} className="w-full" />, name: "20" },
    { icon: <Image src={sleeping_chick} alt="" width={212} height={212} className="w-full" />, name: "30" },
  ],
  correctAnswer: 1,
} as const;

const csharpLessonProblemD8 = {
  type: "WRITE",
  question: "Write C# code to add a key 'c' with value 15 to the dictionary {'a': 5, 'b': 10}.",
  answerTiles: ["dictionary", ".Add", "(", "'c'", ",", "15", ")"],
  correctAnswer: [0, 1, 2, 3, 4, 5, 6],
} as const;

const csharpLessonProblemD9 = {
  type: "SELECT_1_OF_3",
  question: "Which of the following is used to access values in a dictionary in C#?",
  answers: [
    { icon: <Image src={happy_chick2} alt="" width={212} height={212} className="w-full" />, name: "dictionary[\"key\"]" },
    { icon: <Image src={crying_chick2} alt="" width={212} height={212} className="w-full" />, name: "dictionary{key}" },
    { icon: <Image src={wrong_chick} alt="" width={212} height={212} className="w-full" />, name: "dictionary.key" },
  ],
  correctAnswer: 0,
} as const;

const csharpLessonProblemD10 = {
  type: "WRITE",
  question: "Write C# code to remove the element 'banana' from the list ['apple', 'banana', 'orange'].",
  answerTiles: ["list", ".Remove", "(", "'banana'", ")"],
  correctAnswer: [0, 1, 2, 3, 4],
} as const;

const csharpLessonProblemD11 = {
  type: "SELECT_1_OF_3",
  question: "What is the output of the code 'new int[] {1, 2, 3}.Length' in C#?",
  answers: [
    { icon: <Image src={chick_thumbsup} alt="" width={212} height={212} className="w-full" />, name: "3" },
    { icon: <Image src={crying_chick} alt="" width={212} height={212} className="w-full" />, name: "2" },
    { icon: <Image src={happy_chick2} alt="" width={212} height={212} className="w-full" />, name: "None" },
  ],
  correctAnswer: 0,
} as const;

const csharpLessonProblemD12 = {
  type: "WRITE",
  question: "Write C# code to create a tuple containing the elements 'apple', 'banana', and 'orange'.",
  answerTiles: ["(", ")", "\"apple\",", "\"banana\",", "\"orange\""],
  correctAnswer: [0, 2, 3, 4, 1],
} as const;

const csharpLessonProblemD13 = {
  type: "SELECT_1_OF_3",
  question: "How do you define an empty dictionary in C#?",
  answers: [
    { icon: <Image src={chick_sleeping} alt="" width={212} height={212} className="w-full" />, name: "()" },
    { icon: <Image src={crying_cow} alt="" width={212} height={212} className="w-full" />, name: "[]" },
    { icon: <Image src={happy_hen} alt="" width={212} height={212} className="w-full" />, name: "new Dictionary<string, string>()" },
  ],
  correctAnswer: 2,
} as const;

const csharpLessonProblemD14 = {
  type: "WRITE",
  question: "Write C# code to access the value associated with the key 'b' in the dictionary {'a': 1, 'b': 2, 'c': 3}.",
  answerTiles: ["dictionary", "[\"b\"]"],
  correctAnswer: [0, 1],
} as const;

const csharpLessonProblemD15 = {
  type: "SELECT_1_OF_3",
  question: "Which of the following is used to change the value of a key in a dictionary in C#?",
  answers: [
    { icon: <Image src={crying_cow2} alt="" width={212} height={212} className="w-full" />, name: "dictionary.Add(\"key\", value)" },
    { icon: <Image src={happy_chick} alt="" width={212} height={212} className="w-full" />, name: "dictionary[\"key\"] = value" },
    { icon: <Image src={wrong_chick} alt="" width={212} height={212} className="w-full" />, name: "dictionary.set(\"key\", value)" },
  ],
  correctAnswer: 1,
} as const;

const csharpLessonProblemD16 = {
  type: "WRITE",
  question: "Write C# code to add the number 4 to the list [1, 2, 3].",
  answerTiles: ["list", ".Add", "(4)"],
  correctAnswer: [0, 1, 2],
} as const;

const csharpLessonProblemE1 = {
  type: "WRITE",
  question: "Write an `if/else` statement to check if `x > 5` in C#.",
  answerTiles: ["if", "(", "x", ">", "5", ")", "{", "}"],
  correctAnswer: [0, 1, 2, 3, 4, 5, 6, 7],
} as const;

const csharpLessonProblemE2 = {
  type: "SELECT_1_OF_3",
  question: "What is the output of the following code?\nif (3 > 2)\n{\n\tConsole.WriteLine(\"Yes\");\n}\nelse\n{\n\tConsole.WriteLine(\"No\");\n}",
  answers: [
    { icon: <Image src={happy_hen} alt="" width={212} height={212} className="w-full" />, name: "Yes" },
    { icon: <Image src={crying_cow3} alt="" width={212} height={212} className="w-full" />, name: "No" },
    { icon: <Image src={crying_chick5} alt="" width={212} height={212} className="w-full" />, name: "Error" },
  ],
  correctAnswer: 0,
} as const;

const csharpLessonProblemE3 = {
  type: "WRITE",
  question: "Write C# code to check if `x` is equal to 10.",
  answerTiles: ["if", "(", "x", "==", "10", ")", "{", "}"],
  correctAnswer: [0, 1, 2, 3, 4, 5, 6, 7],
} as const;

const csharpLessonProblemE4 = {
  type: "WRITE",
  question: "Write C# code to check if the key 'apple' exists in the dictionary `var dict = new Dictionary<string, int>{{\"apple\", 5}, {\"banana\", 10}};`.",
  answerTiles: ["if", "dict.ContainsKey", "(", "\"apple\"", ")"],
  correctAnswer: [0, 1, 2, 3, 4],
} as const;

const csharpLessonProblemE5 = {
  type: "SELECT_1_OF_3",
  question: "What is the output of the following code?\nif (5 == 5)\n{\n\tConsole.WriteLine(\"True\");\n}\nelse\n{\n\tConsole.WriteLine(\"False\");\n}",
  answers: [
    { icon: <Image src={happy_hen} alt="" width={212} height={212} className="w-full" />, name: "True" },
    { icon: <Image src={crying_cow3} alt="" width={212} height={212} className="w-full" />, name: "False" },
    { icon: <Image src={crying_chick5} alt="" width={212} height={212} className="w-full" />, name: "Error" },
  ],
  correctAnswer: 0,
} as const;

const csharpLessonProblemE6 = {
  type: "WRITE",
  question: "Write C# code to check if `x` is less than 5 and `y` is greater than 0.",
  answerTiles: ["if", "(", "x", "<", "5", "&&", "y", ">", "0", ")"],
  correctAnswer: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
} as const;

const csharpLessonProblemE7 = {
  type: "SELECT_1_OF_3",
  question: "What will the following code print?\nif (10 > 5 && 5 > 3)\n{\n\tConsole.WriteLine(\"Both are true\");\n}\nelse\n{\n\tConsole.WriteLine(\"One is false\");\n}",
  answers: [
    { icon: <Image src={happy_chick4} alt="" width={212} height={212} className="w-full" />, name: "Both are true" },
    { icon: <Image src={crying_cow2} alt="" width={212} height={212} className="w-full" />, name: "One is false" },
    { icon: <Image src={crying_chick5} alt="" width={212} height={212} className="w-full" />, name: "Error" },
  ],
  correctAnswer: 0,
} as const;

const csharpLessonProblemE8 = {
  type: "WRITE",
  question: "Write the missing `if` statement to check if `x` is not equal to 0.",
  answerTiles: ["if", "(", "x", "!=", "0", ")"],
  correctAnswer: [0, 1, 2, 3, 4, 5],
} as const;

const csharpLessonProblemE9 = {
  type: "SELECT_1_OF_3",
  question: "Which of the following is the correct way to handle multiple conditions using `if/else` in C#?",
  answers: [
    { icon: <Image src={happy_chick2} alt="" width={212} height={212} className="w-full" />, name: "if (x > 5 && x < 10)" },
    { icon: <Image src={crying_chick3} alt="" width={212} height={212} className="w-full" />, name: "if (x = 5 || x = 10)" },
    { icon: <Image src={wrong_chick} alt="" width={212} height={212} className="w-full" />, name: "if (x > 10 && x == 0)" },
  ],
  correctAnswer: 0,
} as const;

const csharpLessonProblemE10 = {
  type: "SELECT_1_OF_3",
  question: "What is the output of the following code?\nif (5 < 10)\n{\n\tConsole.WriteLine(\"Correct\");\n}\nelse\n{\n\tConsole.WriteLine(\"Incorrect\");\n}",
  answers: [
    { icon: <Image src={happy_chick3} alt="" width={212} height={212} className="w-full" />, name: "Correct" },
    { icon: <Image src={crying_chick2} alt="" width={212} height={212} className="w-full" />, name: "Incorrect" },
    { icon: <Image src={sad_chick} alt="" width={212} height={212} className="w-full" />, name: "Error" },
  ],
  correctAnswer: 0,
} as const;

const csharpLessonProblemE11 = {
  type: "SELECT_1_OF_3",
  question: "Which of the following statements checks if `x` is equal to 0 or `y` is greater than 10 in C#?",
  answers: [
    { icon: <Image src={happy_chick2} alt="" width={212} height={212} className="w-full" />, name: "if (x == 0 || y > 10)" },
    { icon: <Image src={crying_cow} alt="" width={212} height={212} className="w-full" />, name: "if (x = 0 && y = 10)" },
    { icon: <Image src={crying_chick5} alt="" width={212} height={212} className="w-full" />, name: "if (x == 0 && y > 10)" },
  ],
  correctAnswer: 0,
} as const;

const csharpLessonProblemE12 = {
  type: "WRITE",
  question: "Write the missing `if` statement to check if `x` is greater than 10.\nif (INSERT_HERE)\n{\n\tConsole.WriteLine(\"High\");\n}\nelse\n{\n\tConsole.WriteLine(\"Low\");\n}",
  answerTiles: ["x", ">", ">=", "10"],
  correctAnswer: [0, 1, 3],
} as const;

const csharpLessonProblemF1 = {
  type: "SELECT_1_OF_3",
  question: "What is the correct syntax for a `for` loop that iterates from 1 to 5 in C#?",
  answers: [
    { icon: <Image src={crying_cow3} alt="" width={212} height={212} className="w-full" />, name: "for (int i = 1; i < 5; i++)" },
    { icon: <Image src={happy_twochicks} alt="" width={212} height={212} className="w-full" />, name: "for (int i = 1; i <= 5; i++)" },
    { icon: <Image src={crying_chick} alt="" width={212} height={212} className="w-full" />, name: "for (int i = 0; i < 5; i++)" },
  ],
  correctAnswer: 1,
} as const;

const csharpLessonProblemF2 = {
  type: "WRITE",
  question: "Write a `for` loop that iterates from 1 to 7 in C#.",
  answerTiles: ["for", "(int", "i", "= 1;", "i <= 7;", "i++", "{", "}"],
  correctAnswer: [0, 1, 2, 3, 4, 5, 6, 7],
} as const;

const csharpLessonProblemF3 = {
  type: "SELECT_1_OF_3",
  question: "Which loop is used to iterate over a sequence such as an array or a collection in C#?",
  answers: [
    { icon: <Image src={happy_hen} alt="" width={212} height={212} className="w-full" />, name: "For loop" },
    { icon: <Image src={crying_chick3} alt="" width={212} height={212} className="w-full" />, name: "While loop" },
    { icon: <Image src={crying_cow3} alt="" width={212} height={212} className="w-full" />, name: "Do-while loop" },
  ],
  correctAnswer: 0,
} as const;

const csharpLessonProblemF4 = {
  type: "SELECT_1_OF_3",
  question: "What is the output of the following code?\nfor (int i = 1; i < 4; i++)\n{\n\tConsole.WriteLine(i);\n}",
  answers: [
    { icon: <Image src={crying_cow} alt="" width={212} height={212} className="w-full" />, name: "0 1 2" },
    { icon: <Image src={happy_twochicks} alt="" width={212} height={212} className="w-full" />, name: "1 2 3" },
    { icon: <Image src={crying_chick3} alt="" width={212} height={212} className="w-full" />, name: "Error" },
  ],
  correctAnswer: 1,
} as const;

const csharpLessonProblemF5 = {
  type: "WRITE",
  question: "Write a `foreach` loop to iterate through the array `int[] numbers = {2, 4, 6}` in C#.",
  answerTiles: ["foreach", "(int", "num", "in", "numbers)", "{", "}"],
  correctAnswer: [0, 1, 2, 3, 4, 5, 6],
} as const;

const csharpLessonProblemF6 = {
  type: "SELECT_1_OF_3",
  question: "What will the following code output?\nfor (int i = 0; i < 2; i++)\n{\n\tConsole.WriteLine(i);\n}",
  answers: [
    { icon: <Image src={crying_chick2} alt="" width={212} height={212} className="w-full" />, name: "0 1 2" },
    { icon: <Image src={crying_cow2} alt="" width={212} height={212} className="w-full" />, name: "1 2" },
    { icon: <Image src={cow_twothumbs} alt="" width={212} height={212} className="w-full" />, name: "0 1" },
  ],
  correctAnswer: 2,
} as const;

const csharpLessonProblemF7 = {
  type: "WRITE",
  question: "Write a `for` loop that iterates from 1 to 3 in C#.",
  answerTiles: ["for", "(int", "i", "= 1;", "i < 4;", "i++)", "{", "}"],
  correctAnswer: [0, 1, 2, 3, 4, 5, 6, 7],
} as const;

const csharpLessonProblemF8 = {
  type: "SELECT_1_OF_3",
  question: "What is the output of the following code?\nfor (int i = 0; i < 5; i += 2)\n{\n\tConsole.WriteLine(i);\n}",
  answers: [
    { icon: <Image src={happy_hen} alt="" width={212} height={212} className="w-full" />, name: "0 2 4" },
    { icon: <Image src={crying_cow3} alt="" width={212} height={212} className="w-full" />, name: "1 3 5" },
    { icon: <Image src={crying_chick5} alt="" width={212} height={212} className="w-full" />, name: "0 1 2 3 4" },
  ],
  correctAnswer: 0,
} as const;

const csharpLessonProblemF9 = {
  type: "SELECT_1_OF_3",
  question: "What is the result of the following code?\nint x = 0;\nwhile (x < 3)\n{\n\tConsole.WriteLine(x);\n\tx++;\n}",
  answers: [
    { icon: <Image src={happy_chick3} alt="" width={212} height={212} className="w-full" />, name: "0 1 2" },
    { icon: <Image src={crying_chick5} alt="" width={212} height={212} className="w-full" />, name: "1 2 3" },
    { icon: <Image src={crying_cow3} alt="" width={212} height={212} className="w-full" />, name: "Error" },
  ],
  correctAnswer: 0,
} as const;

const csharpLessonProblemF10 = {
  type: "SELECT_1_OF_3",
  question: "What is the output of the following code?\nint x = 0;\nwhile (x < 3)\n{\n\tConsole.WriteLine(x);\n\tx++;\n}",
  answers: [
    { icon: <Image src={crying_cow3} alt="" width={212} height={212} className="w-full" />, name: "1 2 3" },
    { icon: <Image src={happy_twochicks} alt="" width={212} height={212} className="w-full" />, name: "0 1 2" },
    { icon: <Image src={crying_chick4} alt="" width={212} height={212} className="w-full" />, name: "0 1 2 3" },
  ],
  correctAnswer: 1,
} as const;

const csharpLessonProblemF11 = {
  type: "SELECT_1_OF_3",
  question: "What is the output of the following code?\nfor (int i = 1; i < 3; i++)\n{\n\tfor (int j = 1; j < 2; j++)\n\t{\n\t\tConsole.WriteLine(i + \" \" + j);\n\t}\n}",
  answers: [
    { icon: <Image src={sad_chick} alt="" width={212} height={212} className="w-full" />, name: "Error" },
    { icon: <Image src={crying_cow3} alt="" width={212} height={212} className="w-full" />, name: "1 1, 1 2" },
    { icon: <Image src={chick_flattered} alt="" width={212} height={212} className="w-full" />, name: "1 1, 2 1" },
  ],
  correctAnswer: 2,
} as const;

const csharpLessonProblemF12 = {
  type: "WRITE",
  question: "Write C# code to loop 4 times using a `while` loop.",
  answerTiles: ["while", "(", "i", "<", "4", ")", "{", "}"],
  correctAnswer: [0, 1, 2, 3, 4, 5, 6, 7],
} as const;

const csharpLessonProblemF13 = {
  type: "SELECT_1_OF_3",
  question: "Which statement do you use to repeat a condition while it is true in C#?",
  answers: [
    { icon: <Image src={hen_thumbsup} alt="" width={212} height={212} className="w-full" />, name: "While loop" },
    { icon: <Image src={crying_cow} alt="" width={212} height={212} className="w-full" />, name: "If/Else" },
    { icon: <Image src={crying_cow2} alt="" width={212} height={212} className="w-full" />, name: "For loop" },
  ],
  correctAnswer: 0,
} as const;

const csharpLessonProblemF14 = {
  type: "SELECT_1_OF_3",
  question: "What is the correct way to stop a loop prematurely in C#?",
  answers: [
    { icon: <Image src={happy_hen} alt="" width={212} height={212} className="w-full" />, name: "break" },
    { icon: <Image src={crying_chick5} alt="" width={212} height={212} className="w-full" />, name: "stop" },
    { icon: <Image src={crying_cow3} alt="" width={212} height={212} className="w-full" />, name: "exit" },
  ],
  correctAnswer: 0,
} as const;

const csharpLessonProblemF15 = {
  type: "SELECT_1_OF_3",
  question: "What is the output of the following code?\nDictionary<string, int> d = new Dictionary<string, int> { {\"a\", 1}, {\"b\", 2}, {\"c\", 3} };\nforeach (var key in d.Keys)\n{\n\tConsole.WriteLine(key + \" \" + d[key]);\n}",
  answers: [
    { icon: <Image src={happy_chick4} alt="" width={212} height={212} className="w-full" />, name: "a 1, b 2, c 3" },
    { icon: <Image src={crying_chick5} alt="" width={212} height={212} className="w-full" />, name: "a, b, c" },
    { icon: <Image src={crying_cow3} alt="" width={212} height={212} className="w-full" />, name: "1, 2, 3" },
  ],
  correctAnswer: 0,
} as const;

const csharpLessonProblemF16 = {
  type: "SELECT_1_OF_3",
  question: "What is the purpose of using `else` after a loop in C#?",
  answers: [
    { icon: <Image src={happy_chick3} alt="" width={212} height={212} className="w-full" />, name: "To execute code when the loop completes normally without breaking" },
    { icon: <Image src={crying_cow2} alt="" width={212} height={212} className="w-full" />, name: "To execute code every time the loop runs" },
    { icon: <Image src={crying_chick5} alt="" width={212} height={212} className="w-full" />, name: "To break the loop when a condition is met" },
  ],
  correctAnswer: 0,
} as const;

const csharpLessonProblemG1 = {
  type: "WRITE",
  question: "Write C# code to define a method `Greet()`.",
  answerTiles: ["void", "Greet", "()", "{", "}"],
  correctAnswer: [0, 1, 2, 3, 4],
} as const;

const csharpLessonProblemG2 = {
  type: "SELECT_1_OF_3",
  question: "What will the following code output?\nvoid Greet()\n{\n\tConsole.WriteLine(\"Hi\");\n}\nGreet();",
  answers: [
    { icon: <Image src={cow_question} alt="" width={212} height={212} className="w-full" />, name: "Error" },
    { icon: <Image src={laying_cow} alt="" width={212} height={212} className="w-full" />, name: "Hello" },
    { icon: <Image src={cow_greeting} alt="" width={212} height={212} className="w-full" />, name: "Hi" },
  ],
  correctAnswer: 2,
} as const;

const csharpLessonProblemG3 = {
  type: "WRITE",
  question: "Write a lambda expression in C# that adds 2 to a number `x`.",
  answerTiles: ["=>", "(x)", "x", "2", "+"],
  correctAnswer: [1, 0, 2, 4, 3],
} as const;

const csharpLessonProblemG4 = {
  type: "SELECT_1_OF_3",
  question: "What will the following code return?\nFunc<int, int> addTwo = x => x + 2;\nConsole.WriteLine(addTwo(3));",
  answers: [
    { icon: <Image src={five_candles} alt="" width={212} height={212} className="w-full" />, name: "5" },
    { icon: <Image src={crying_cow3} alt="" width={212} height={212} className="w-full" />, name: "6" },
    { icon: <Image src={three_chicks} alt="" width={212} height={212} className="w-full" />, name: "3" },
  ],
  correctAnswer: 0,
} as const;

const csharpLessonProblemG5 = {
  type: "SELECT_1_OF_3",
  question: "Which of the following is the correct way to define a method `Add` that takes two parameters `a` and `b` in C#?",
  answers: [
    { icon: <Image src={sleeping_chick} alt="" width={212} height={212} className="w-full" />, name: "function Add(int a, int b)" },
    { icon: <Image src={cow_lightbulb} alt="" width={212} height={212} className="w-full" />, name: "void Add(int a, int b)" },
    { icon: <Image src={crying_chick} alt="" width={212} height={212} className="w-full" />, name: "define Add(int a, int b)" },
  ],
  correctAnswer: 1,
} as const;

const csharpLessonProblemG6 = {
  type: "SELECT_1_OF_3",
  question: "Which of the following correctly calls the method `Greet()` defined as\nvoid Greet()\n{\n\tConsole.WriteLine(\"Hello\");\n}",
  answers: [
    { icon: <Image src={cow_greeting} alt="" width={212} height={212} className="w-full" />, name: "Greet();" },
    { icon: <Image src={sad_chick} alt="" width={212} height={212} className="w-full" />, name: "call Greet();" },
    { icon: <Image src={crying_chick5} alt="" width={212} height={212} className="w-full" />, name: "Greet" },
  ],
  correctAnswer: 0,
} as const;

const csharpLessonProblemG7 = {
  type: "SELECT_1_OF_3",
  question: "What will the following code return?\nint Square(int x)\n{\n\treturn x * x;\n}\nConsole.WriteLine(Square(4));",
  answers: [
    { icon: <Image src={crying_cow3} alt="" width={212} height={212} className="w-full" />, name: "4" },
    { icon: <Image src={cow_greeting} alt="" width={212} height={212} className="w-full" />, name: "16" },
    { icon: <Image src={crying_chick4} alt="" width={212} height={212} className="w-full" />, name: "Error" },
  ],
  correctAnswer: 1,
} as const;

const csharpLessonProblemG8 = {
  type: "SELECT_1_OF_3",
  question: "Which of the following is the correct way to call a lambda function?\nFunc<int, int> addTwo = x => x + 2;",
  answers: [
    { icon: <Image src={cow_question} alt="" width={212} height={212} className="w-full" />, name: "addTwo" },
    { icon: <Image src={crying_chick3} alt="" width={212} height={212} className="w-full" />, name: "lambda addTwo(3)" },
    { icon: <Image src={cow_dollars} alt="" width={212} height={212} className="w-full" />, name: "addTwo(3)" },
  ],
  correctAnswer: 2,
} as const;

const csharpLessonProblemG9 = {
  type: "SELECT_1_OF_3",
  question: "What will the following code print?\nstring Greet()\n{\n\treturn \"Hi\";\n}\nGreet();",
  answers: [
    { icon: <Image src={crying_chick} alt="" width={212} height={212} className="w-full" />, name: "Hello" },
    { icon: <Image src={cow_twothumbs} alt="" width={212} height={212} className="w-full" />, name: "None" },
    { icon: <Image src={cow_questioning} alt="" width={212} height={212} className="w-full" />, name: "Error" },
  ],
  correctAnswer: 1,
} as const;

const csharpLessonProblemG10 = {
  type: "SELECT_1_OF_3",
  question: "What is the purpose of `return` in a method in C#?",
  answers: [
    { icon: <Image src={crying_chick2} alt="" width={212} height={212} className="w-full" />, name: "It ends the method" },
    { icon: <Image src={cow_lightbulb} alt="" width={212} height={212} className="w-full" />, name: "It returns a value to the caller" },
    { icon: <Image src={chick_sleeping} alt="" width={212} height={212} className="w-full" />, name: "It prints a value" },
  ],
  correctAnswer: 1,
} as const;

const csharpLessonProblemG11 = {
  type: "SELECT_1_OF_3",
  question: "What will the following code print?\n\nstring Greet(string name)\n{\n\treturn \"Hello, \" + name;\n}\nConsole.WriteLine(Greet(\"Alice\"));",
  answers: [
    { icon: <Image src={chick_flattered} alt="" width={212} height={212} className="w-full" />, name: "Hello, Alice" },
    { icon: <Image src={crying_cow3} alt="" width={212} height={212} className="w-full" />, name: "Error" },
    { icon: <Image src={cow_greeting} alt="" width={212} height={212} className="w-full" />, name: "Hello, name" },
  ],
  correctAnswer: 0,
} as const;

const csharpLessonProblemG12 = {
  type: "SELECT_1_OF_3",
  question: "What does the following code do?\n\nint Multiply(int x, int y)\n{\n\treturn x * y;\n}\nint result = Multiply(3, 4);",
  answers: [
    { icon: <Image src={crying_chick5} alt="" width={212} height={212} className="w-full" />, name: "Adds 3 and 4" },
    { icon: <Image src={sad_chick} alt="" width={212} height={212} className="w-full" />, name: "Prints the result of 3 * 4" },
    { icon: <Image src={chick_flattered} alt="" width={212} height={212} className="w-full" />, name: "Returns the product of 3 and 4" },
  ],
  correctAnswer: 2,
} as const;

const csharpLessonProblemG13 = {
  type: "SELECT_1_OF_3",
  question: "What is the result of the following code?\n\nint Multiply(int x, int y = 2)\n{\n\treturn x * y;\n}\nConsole.WriteLine(Multiply(5));",
  answers: [
    { icon: <Image src={happy_chickfamily} alt="" width={212} height={212} className="w-full" />, name: "10" },
    { icon: <Image src={crying_chick5} alt="" width={212} height={212} className="w-full" />, name: "Error" },
    { icon: <Image src={sad_chick} alt="" width={212} height={212} className="w-full" />, name: "5" },
  ],
  correctAnswer: 0,
} as const;

const csharpLessonProblemG14 = {
  type: "WRITE",
  question: "Write C# code that returns the sum of `a` and `b` in a method defined as `AddNumbers(int a, int b)`.",
  answerTiles: ["a", "+", "return", "b", ";"],
  correctAnswer: [2, 0, 1, 3, 4],
} as const;

const csharpLessonProblemG15 = {
  type: "SELECT_1_OF_3",
  question: "What will the following code output?\n\nstring Greet()\n{\n\treturn \"Hello\";\n}\nConsole.WriteLine(Greet());",
  answers: [
    { icon: <Image src={crying_chick2} alt="" width={212} height={212} className="w-full" />, name: "Error" },
    { icon: <Image src={hen_thumbsup} alt="" width={212} height={212} className="w-full" />, name: "Hello" },
    { icon: <Image src={crying_cow2} alt="" width={212} height={212} className="w-full" />, name: "None" },
  ],
  correctAnswer: 1,
} as const;

const csharpLessonProblemG16 = {
  type: "WRITE",
  question: "Write C# code to define a method `Multiply(int a, int b)` that will print the result of `a * b`.",
  answerTiles: ["void", "Multiply", "(int a,", "int b)", "{", "Console.WriteLine(a * b);", "}"],
  correctAnswer: [0, 1, 2, 3, 4, 5, 6],
} as const;

const csharpLessonProblemI1 = {
  type: "SELECT_1_OF_3",
  question: "What is a class in C#?",
  answers: [
    { icon: <Image src={happy_chick3} alt="" width={212} height={212} className="w-full" />, name: "A blueprint for creating objects" },
    { icon: <Image src={hen_question} alt="" width={212} height={212} className="w-full" />, name: "A type of variable" },
    { icon: <Image src={sad_chick} alt="" width={212} height={212} className="w-full" />, name: "A way to store lists of data" },
  ],
  correctAnswer: 0,
} as const;

const csharpLessonProblemI2 = {
  type: "SELECT_1_OF_3",
  question: "Which of the following is an example of creating a class in C#?",
  answers: [
    { icon: <Image src={chick_sleeping} alt="" width={212} height={212} className="w-full" />, name: "Dog = {};" },
    { icon: <Image src={hen_question} alt="" width={212} height={212} className="w-full" />, name: "function Dog() { }" },
    { icon: <Image src={chick_flattered} alt="" width={212} height={212} className="w-full" />, name: "class Dog { }" },
  ],
  correctAnswer: 2,
} as const;

const csharpLessonProblemI3 = {
  type: "WRITE",
  question: "Write C# code to create a class `Car`.",
  answerTiles: ["class", "Car", "{", "}"],
  correctAnswer: [0, 1, 2, 3],
} as const;

const csharpLessonProblemI4 = {
  type: "SELECT_1_OF_3",
  question: "What is an object in C#?",
  answers: [
    { icon: <Image src={happy_chick4} alt="" width={212} height={212} className="w-full" />, name: "An instance of a class" },
    { icon: <Image src={hen_question} alt="" width={212} height={212} className="w-full" />, name: "A type of function" },
    { icon: <Image src={crying_cow2} alt="" width={212} height={212} className="w-full" />, name: "A list of values" },
  ],
  correctAnswer: 0,
} as const;

const csharpLessonProblemI5 = {
  type: "WRITE",
  question: "Write C# code to create an object of the `Car` class.",
  answerTiles: ["Car", "car", "=", "new", "Car();"],
  correctAnswer: [0, 1, 2, 3, 4],
} as const;

const csharpLessonProblemI6 = {
  type: "SELECT_1_OF_3",
  question: "What is the purpose of the constructor in a C# class?",
  answers: [
    { icon: <Image src={happy_chickfamily} alt="" width={212} height={212} className="w-full" />, name: "To initialize the object's attributes" },
    { icon: <Image src={hen_question} alt="" width={212} height={212} className="w-full" />, name: "To define the class's behavior" },
    { icon: <Image src={sad_chick} alt="" width={212} height={212} className="w-full" />, name: "To run code every time an object is printed" },
  ],
  correctAnswer: 0,
} as const;

const csharpLessonProblemI7 = {
  type: "SELECT_1_OF_3",
  question: "What is the main purpose of using classes in C#?",
  answers: [
    { icon: <Image src={crying_chick2} alt="" width={212} height={212} className="w-full" />, name: "To store variables" },
    { icon: <Image src={cow_greeting} alt="" width={212} height={212} className="w-full" />, name: "To bundle data and methods together" },
    { icon: <Image src={sad_chick} alt="" width={212} height={212} className="w-full" />, name: "To organize loops" },
  ],
  correctAnswer: 1,
} as const;

const csharpLessonProblemI8 = {
  type: "SELECT_1_OF_3",
  question: "In C#, what does the `this` keyword refer to inside a class?",
  answers: [
    { icon: <Image src={chick_microphone} alt="" width={212} height={212} className="w-full" />, name: "The current object of the class" },
    { icon: <Image src={chick_sleeping} alt="" width={212} height={212} className="w-full" />, name: "A reference to all objects in the program" },
    { icon: <Image src={crying_chick5} alt="" width={212} height={212} className="w-full" />, name: "The class itself" },
  ],
  correctAnswer: 0,
} as const;

const csharpLessonProblemI9 = {
  type: "SELECT_1_OF_3",
  question: "What will the following code output?\n\nclass Cat\n{\n\tpublic string Name;\n\tpublic Cat(string name) { Name = name; }\n}\nCat c = new Cat(\"Whiskers\");\nConsole.WriteLine(c.Name);",
  answers: [
    { icon: <Image src={happy_chick} alt="" width={212} height={212} className="w-full" />, name: "Whiskers" },
    { icon: <Image src={crying_chick} alt="" width={212} height={212} className="w-full" />, name: "None" },
    { icon: <Image src={sad_chick} alt="" width={212} height={212} className="w-full" />, name: "Error" },
  ],
  correctAnswer: 0,
} as const;

const csharpLessonProblemI10 = {
  type: "WRITE",
  question: "Write a constructor for the class that accepts `name` and `age` parameters.",
  answerTiles: ["public", "(", "string name,", "int age", ")", "{", "}"],
  correctAnswer: [0, 1, 2, 3, 4, 5, 6],
} as const;

const csharpLessonProblemI11 = {
  type: "WRITE",
  question: "Within a constructor, assign the 'name' parameter to the 'Name' field of the class.",
  answerTiles: ["this", ".", "=", "Name", "name", ";"],
  correctAnswer: [0, 1, 3, 2, 4, 5],
} as const;

const csharpLessonProblemI12 = {
  type: "SELECT_1_OF_3",
  question: "What will the following code output?\n\nclass Car\n{\n\tpublic string Make;\n\tpublic string Model;\n\tpublic Car(string make, string model) { Make = make; Model = model; }\n}\nCar c = new Car(\"Toyota\", \"Corolla\");\nConsole.WriteLine(c.Make);",
  answers: [
    { icon: <Image src={happy_chick2} alt="" width={212} height={212} className="w-full" />, name: "Toyota" },
    { icon: <Image src={crying_chick} alt="" width={212} height={212} className="w-full" />, name: "Corolla" },
    { icon: <Image src={sad_chick} alt="" width={212} height={212} className="w-full" />, name: "Error" },
  ],
  correctAnswer: 0,
} as const;

const csharpLessonProblemI13 = {
  type: "SELECT_1_OF_3",
  question: "What will the following code output?\n\nclass Employee\n{\n\tpublic string Name;\n\tpublic string Position;\n\tpublic Employee(string name, string position) { Name = name; Position = position; }\n}\nEmployee e = new Employee(\"John\", \"Manager\");\nConsole.WriteLine(e.Position);",
  answers: [
    { icon: <Image src={sad_chick} alt="" width={212} height={212} className="w-full" />, name: "John" },
    { icon: <Image src={happy_chick3} alt="" width={212} height={212} className="w-full" />, name: "Manager" },
    { icon: <Image src={cow_sleeping} alt="" width={212} height={212} className="w-full" />, name: "Error" },
  ],
  correctAnswer: 1,
} as const;

const csharpLessonProblemI14 = {
  type: "WRITE",
  question: "Write C# code to call the `Start` method on the object 'car'.",
  answerTiles: ["car", ".", "Start", "(", ")"],
  correctAnswer: [0, 1, 2, 3, 4],
} as const;

const csharpLessonProblemI15 = {
  type: "SELECT_1_OF_3",
  question: "What will the following code output?\n\nclass Person\n{\n\tpublic string Name;\n\tpublic int Age;\n\tpublic Person(string name, int age) { Name = name; Age = age; }\n}\nPerson p = new Person(\"Alice\", 30);\nConsole.WriteLine(p.Age);",
  answers: [
    { icon: <Image src={cow_thinking} alt="" width={212} height={212} className="w-full" />, name: "Error" },
    { icon: <Image src={crying_chick} alt="" width={212} height={212} className="w-full" />, name: "Alice" },
    { icon: <Image src={happy_chick4} alt="" width={212} height={212} className="w-full" />, name: "30" },
  ],
  correctAnswer: 2,
} as const;

const csharpLessonProblemI16 = {
  type: "SELECT_1_OF_3",
  question: "What will the following code output?\n\nclass Animal\n{\n\tpublic string Species;\n\tpublic Animal(string species) { Species = species; }\n}\nAnimal a = new Animal(\"Lion\");\nConsole.WriteLine(a.Species);",
  answers: [
    { icon: <Image src={happy_chick} alt="" width={212} height={212} className="w-full" />, name: "Lion" },
    { icon: <Image src={crying_chick} alt="" width={212} height={212} className="w-full" />, name: "None" },
    { icon: <Image src={sad_chick} alt="" width={212} height={212} className="w-full" />, name: "Error" },
  ],
  correctAnswer: 0,
} as const;

const csharpLessonProblemI17 = {
  type: "SELECT_1_OF_3",
  question: "What will the following code output?\n\nclass Animal\n{\n\tpublic string Name;\n\tpublic Animal(string name) { Name = name; }\n\tpublic string Speak() { return Name + \" makes a sound\"; }\n}\nAnimal animal = new Animal(\"Dog\");\nConsole.WriteLine(animal.Speak());",
  answers: [
    { icon: <Image src={crying_chick2} alt="" width={212} height={212} className="w-full" />, name: "\"Animal makes a sound\"" },
    { icon: <Image src={hen_question} alt="" width={212} height={212} className="w-full" />, name: "\"Dog barks\"" },
    { icon: <Image src={happy_chick4} alt="" width={212} height={212} className="w-full" />, name: "\"Dog makes a sound\"" },
  ],
  correctAnswer: 2,
} as const;

const csharpLessonProblemI18 = {
  type: "SELECT_1_OF_3",
  question: "What is the purpose of the `this` keyword in C# classes?",
  answers: [
    { icon: <Image src={happy_chick4} alt="" width={212} height={212} className="w-full" />, name: "To refer to the instance of the class" },
    { icon: <Image src={sad_chick} alt="" width={212} height={212} className="w-full" />, name: "To refer to the class itself" },
    { icon: <Image src={crying_chick} alt="" width={212} height={212} className="w-full" />, name: "To call methods of other classes" },
  ],
  correctAnswer: 0,
} as const;

const csharpLessonProblemI19 = {
  type: "SELECT_1_OF_3",
  question: "What will the following code output?\n\nclass Dog\n{\n\tpublic string Name;\n\tpublic Dog(string name) { Name = name; }\n\tpublic string Speak() { return Name + \" barks\"; }\n}\nDog dog = new Dog(\"Buddy\");\nConsole.WriteLine(dog.Speak());",
  answers: [
    { icon: <Image src={happy_chick3} alt="" width={212} height={212} className="w-full" />, name: "Buddy barks" },
    { icon: <Image src={crying_chick4} alt="" width={212} height={212} className="w-full" />, name: "Error" },
    { icon: <Image src={chick_sleeping} alt="" width={212} height={212} className="w-full" />, name: "None" },
  ],
  correctAnswer: 0,
} as const;

const csharpLessonProblemI20 = {
  type: "SELECT_1_OF_3",
  question: "What is the output of the following code?\n\nclass Car\n{\n\tpublic string Make;\n\tpublic string Model;\n\tpublic Car(string make, string model) { Make = make; Model = model; }\n}\nCar car = new Car(\"Ford\", \"Mustang\");\nConsole.WriteLine(car.Model);",
  answers: [
    { icon: <Image src={chick_flattered} alt="" width={212} height={212} className="w-full" />, name: "Mustang" },
    { icon: <Image src={crying_chick} alt="" width={212} height={212} className="w-full" />, name: "Ford" },
    { icon: <Image src={sad_chick} alt="" width={212} height={212} className="w-full" />, name: "Error" },
  ],
  correctAnswer: 0,
} as const;

const csharpLessonProblemI21 = {
  type: "WRITE",
  question: "Write C# code to add a method `Drive` to the `Car` class that prints 'Driving!'",
  answerTiles: ["public", "void", "Drive", "()", "{", "Console.WriteLine(\"Driving!\");", "}"],
  correctAnswer: [0, 1, 2, 3, 4, 5, 6],
} as const;

const csharpLessonProblemI22 = {
  type: "SELECT_1_OF_3",
  question: "Which of the following is correct for creating a new object of a class?",
  answers: [
    { icon: <Image src={crying_chick} alt="" width={212} height={212} className="w-full" />, name: "object.create()" },
    { icon: <Image src={happy_chick} alt="" width={212} height={212} className="w-full" />, name: "ClassName object = new ClassName();" },
    { icon: <Image src={crying_chick5} alt="" width={212} height={212} className="w-full" />, name: "object.new()" },
  ],
  correctAnswer: 1,
} as const;

const csharpLessonProblemI23 = {
  type: "SELECT_1_OF_3",
  question: "What will the following code output?\n\nclass Person\n{\n\tpublic string Name;\n\tpublic Person(string name) { Name = name; }\n}\nPerson person = new Person(\"John\");\nConsole.WriteLine(person.Name);",
  answers: [
    { icon: <Image src={crying_chick3} alt="" width={212} height={212} className="w-full" />, name: "Error" },
    { icon: <Image src={crying_chick5} alt="" width={212} height={212} className="w-full" />, name: "None" },
    { icon: <Image src={hen_thumbsup} alt="" width={212} height={212} className="w-full" />, name: "John" },
  ],
  correctAnswer: 2,
} as const;

const csharpLessonProblemI24 = {
  type: "WRITE",
  question: "Write C# code to modify the `Dog` class to add a method `Eat` that prints 'Eating food!'",
  answerTiles: ["public", "void", "Eat", "()", "{", "Console.WriteLine(\"Eating food!\");", "}"],
  correctAnswer: [0, 1, 2, 3, 4, 5, 6],
} as const;

const csharpLessonProblemJ1 = {
  type: "SELECT_1_OF_3",
  question: "What is inheritance in C#?",
  answers: [
    { icon: <Image src={happy_chick4} alt="" width={212} height={212} className="w-full" />, name: "A way to create a new class from an existing class" },
    { icon: <Image src={sad_chick} alt="" width={212} height={212} className="w-full" />, name: "A method to assign variables" },
    { icon: <Image src={crying_chick} alt="" width={212} height={212} className="w-full" />, name: "A function that combines two classes" },
  ],
  correctAnswer: 0,
} as const;

const csharpLessonProblemJ2 = {
  type: "SELECT_1_OF_3",
  question: "What does the `base` keyword do in C#?",
  answers: [
    { icon: <Image src={happy_chick} alt="" width={212} height={212} className="w-full" />, name: "It allows access to methods from a parent class" },
    { icon: <Image src={crying_chick} alt="" width={212} height={212} className="w-full" />, name: "It creates a new instance of a class" },
    { icon: <Image src={sad_chick} alt="" width={212} height={212} className="w-full" />, name: "It deletes an object from memory" },
  ],
  correctAnswer: 0,
} as const;

const csharpLessonProblemJ3 = {
  type: "WRITE",
  question: "Write C# code to create a subclass `Dog` that inherits from `Animal`.",
  answerTiles: ["class", "Dog", ":", "Animal", "{", "}"],
  correctAnswer: [0, 1, 2, 3, 4, 5],
} as const;

const csharpLessonProblemJ4 = {
  type: "SELECT_1_OF_3",
  question: "What will the following code output?\n\nclass Animal\n{\n\tpublic string Species;\n\tpublic Animal(string species) { Species = species; }\n}\n\nclass Dog : Animal\n{\n\tpublic string Breed;\n\tpublic Dog(string species, string breed) : base(species) { Breed = breed; }\n}\nDog myDog = new Dog(\"Canine\", \"Bulldog\");\nConsole.WriteLine(myDog.Species);",
  answers: [
    { icon: <Image src={crying_chick4} alt="" width={212} height={212} className="w-full" />, name: "Bulldog" },
    { icon: <Image src={happy_chick2} alt="" width={212} height={212} className="w-full" />, name: "Canine" },
    { icon: <Image src={sad_chick} alt="" width={212} height={212} className="w-full" />, name: "Error" },
  ],
  correctAnswer: 1,
} as const;

const csharpLessonProblemJ5 = {
  type: "WRITE",
  question: "Write C# code to call the `base` constructor of the parent class inside the subclass `Dog`.",
  answerTiles: ["base(", ")", "{", ":", "Animal"],
  correctAnswer: [3, 4, 0, 1, 2],
} as const;

const csharpLessonProblemJ6 = {
  type: "SELECT_1_OF_3",
  question: "Which of the following correctly demonstrates method overriding in C#?",
  answers: [
    { icon: <Image src={crying_chick2} alt="" width={212} height={212} className="w-full" />, name: "override speak();" },
    { icon: <Image src={crying_cow} alt="" width={212} height={212} className="w-full" />, name: "func speak(override);" },
    { icon: <Image src={chick_flattered} alt="" width={212} height={212} className="w-full" />, name: "public override string Speak()" },
  ],
  correctAnswer: 2,
} as const;

const csharpLessonProblemJ7 = {
  type: "WRITE",
  question: "Write C# method declaration to override the `Speak` behavior of the parent class in a `Dog` subclass.",
  answerTiles: ["public", "override", "string", "Speak()", "{", "}"],
  correctAnswer: [0, 1, 2, 3, 4, 5],
} as const;

const csharpLessonProblemJ8 = {
  type: "SELECT_1_OF_3",
  question: "What will the following code output?\n\nclass Animal\n{\n\tpublic string Species;\n\tpublic Animal(string species) { Species = species; }\n\tpublic virtual string Speak() { return Species + \" makes a sound\"; }\n}\n\nclass Dog : Animal\n{\n\tpublic Dog(string species) : base(species) {}\n\tpublic override string Speak() { return Species + \" barks\"; }\n}\nDog d = new Dog(\"Dog\");\nConsole.WriteLine(d.Speak());",
  answers: [
    { icon: <Image src={happy_chick3} alt="" width={212} height={212} className="w-full" />, name: "Dog barks" },
    { icon: <Image src={crying_chick2} alt="" width={212} height={212} className="w-full" />, name: "Dog makes a sound" },
    { icon: <Image src={sleeping_chick} alt="" width={212} height={212} className="w-full" />, name: "Error" },
  ],
  correctAnswer: 0,
} as const;

const csharpLessonProblemJ9 = {
  type: "WRITE",
  question: "Write C# code to override the `Speak` method so a subclass `Cat` can say 'Meow'.",
  answerTiles: ["public", "override", "string", "Speak()", "{ return", "\"Meow\";", "}"],
  correctAnswer: [0, 1, 2, 3, 4, 5, 6],
} as const;

const csharpLessonProblemJ10 = {
  type: "SELECT_1_OF_3",
  question: "What will the following code output?\n\nclass Vehicle\n{\n\tpublic string Make;\n\tpublic string Model;\n\tpublic Vehicle(string make, string model) { Make = make; Model = model; }\n}\n\nclass Car : Vehicle\n{\n\tpublic Car(string make, string model) : base(make, model) {}\n\tpublic string Drive() { return $\"Driving {Make} {Model}\"; }\n}\nCar myCar = new Car(\"Toyota\", \"Camry\");\nConsole.WriteLine(myCar.Drive());",
  answers: [
    { icon: <Image src={happy_chick3} alt="" width={212} height={212} className="w-full" />, name: "Driving Toyota Camry" },
    { icon: <Image src={crying_chick} alt="" width={212} height={212} className="w-full" />, name: "Error" },
    { icon: <Image src={chick_sleeping} alt="" width={212} height={212} className="w-full" />, name: "Toyota Camry" },
  ],
  correctAnswer: 0,
} as const;

const csharpLessonProblemJ11 = {
  type: "WRITE",
  question: "Write C# code to create a method `Stop` for the `Car` class that prints 'Stopping the car!'",
  answerTiles: ["public", "void", "Stop", "Console.WriteLine", "(\"Stopping the car!\");", "{}"],
  correctAnswer: [0, 1, 2, 5, 3, 4],
} as const;

const csharpLessonProblemJ12 = {
  type: "SELECT_1_OF_3",
  question: "What will the following code output?\n\nclass Person\n{\n\tpublic string Name;\n\tpublic int Age;\n\tpublic Person(string name, int age) { Name = name; Age = age; }\n}\n\nclass Employee : Person\n{\n\tpublic string JobTitle;\n\tpublic Employee(string name, int age, string jobTitle) : base(name, age) { JobTitle = jobTitle; }\n}\n\nEmployee employee = new Employee(\"John\", 30, \"Engineer\");\nConsole.WriteLine($\"{employee.Name} {employee.Age} {employee.JobTitle}\");",
  answers: [
    { icon: <Image src={happy_chick2} alt="" width={212} height={212} className="w-full" />, name: "John 30 Engineer" },
    { icon: <Image src={sad_chick} alt="" width={212} height={212} className="w-full" />, name: "Error" },
    { icon: <Image src={crying_chick4} alt="" width={212} height={212} className="w-full" />, name: "John 30" },
  ],
  correctAnswer: 0,
} as const;

const csharpLessonProblemJ13 = {
  type: "SELECT_1_OF_3",
  question: "In C#, which method is called when a new object is created from a class?",
  answers: [
    { icon: <Image src={sad_chick} alt="" width={212} height={212} className="w-full" />, name: "Dispose()" },
    { icon: <Image src={crying_chick2} alt="" width={212} height={212} className="w-full" />, name: "Create()" },
    { icon: <Image src={happy_chick4} alt="" width={212} height={212} className="w-full" />, name: "Constructor" },
  ],
  correctAnswer: 2,
} as const;

const csharpLessonProblemJ14 = {
  type: "SELECT_1_OF_3",
  question: "What is the purpose of method resolution order (MRO) in C#?",
  answers: [
    { icon: <Image src={happy_chick} alt="" width={212} height={212} className="w-full" />, name: "To determine the order in which methods are inherited" },
    { icon: <Image src={crying_chick4} alt="" width={212} height={212} className="w-full" />, name: "To prioritize class names" },
    { icon: <Image src={sad_chick} alt="" width={212} height={212} className="w-full" />, name: "To define the constructor of a class" },
  ],
  correctAnswer: 0,
} as const;

const csharpLessonProblemJ15 = {
  type: "WRITE",
  question: "Write C# code to display the type hierarchy of a class `Child` that inherits from `Parent1` and `Parent2`.",
  answerTiles: ["typeof", "(Child)", ".BaseType"],
  correctAnswer: [0, 1, 2],
} as const;

const csharpLessonProblemJ16 = {
  type: "SELECT_1_OF_3",
  question: "Which keyword can be used to call a parent class method inside a subclass method?",
  answers: [
    { icon: <Image src={crying_chick2} alt="" width={212} height={212} className="w-full" />, name: "base()" },
    { icon: <Image src={happy_chick4} alt="" width={212} height={212} className="w-full" />, name: "super()" },
    { icon: <Image src={chick_flattered} alt="" width={212} height={212} className="w-full" />, name: "parent()" },
  ],
  correctAnswer: 0,
} as const;

const csharpLessonProblemK1 = {
  type: "SELECT_1_OF_3",
  question: "What is the purpose of the NuGet command in C#?",
  answers: [
    { icon: <Image src={happy_chick4} alt="" width={212} height={212} className="w-full" />, name: "To install, update, or uninstall .NET packages" },
    { icon: <Image src={crying_chick2} alt="" width={212} height={212} className="w-full" />, name: "To run C# scripts" },
    { icon: <Image src={sad_chick} alt="" width={212} height={212} className="w-full" />, name: "To debug C# code" },
  ],
  correctAnswer: 0,
} as const;

const csharpLessonProblemK2 = {
  type: "WRITE",
  question: "Write a NuGet command to install the `Newtonsoft.Json` package.",
  answerTiles: ["nuget", "install", "Newtonsoft.Json", "-Source"],
  correctAnswer: [0, 1, 2],
} as const;

const csharpLessonProblemK3 = {
  type: "SELECT_1_OF_3",
  question: "Which of the following is a valid regular expression in C#?",
  answers: [
    { icon: <Image src={cow_sleeping} alt="" width={212} height={212} className="w-full" />, name: "abc[123]}" },
    { icon: <Image src={happy_chick} alt="" width={212} height={212} className="w-full" />, name: "\\d{3}-\\d{2}-\\d{4}" },
    { icon: <Image src={sad_chick} alt="" width={212} height={212} className="w-full" />, name: "def*ghi" },
  ],
  correctAnswer: 1,
} as const;

const csharpLessonProblemK4 = {
  type: "WRITE",
  question: "Write C# code using `Regex` to match an email address from the string 'Contact us at support@example.com'.",
  answerTiles: ["Regex", ".Match", "(pattern,", "'Contact us at support@example.com')"],
  correctAnswer: [0, 1, 2, 3],
} as const;

const csharpLessonProblemK5 = {
  type: "SELECT_1_OF_3",
  question: "What does the `Regex.Replace()` method do in C#?",
  answers: [
    { icon: <Image src={happy_chick2} alt="" width={212} height={212} className="w-full" />, name: "It replaces parts of a string that match a regex pattern" },
    { icon: <Image src={crying_chick2} alt="" width={212} height={212} className="w-full" />, name: "It splits a string based on a regex pattern" },
    { icon: <Image src={sad_chick} alt="" width={212} height={212} className="w-full" />, name: "It returns all matches of a regex pattern in a list" },
  ],
  correctAnswer: 0,
} as const;

const csharpLessonProblemK6 = {
  type: "SELECT_1_OF_3",
  question: "What is the purpose of a destructor in C#?",
  answers: [
    { icon: <Image src={happy_chick3} alt="" width={212} height={212} className="w-full" />, name: "It is called when an object is about to be destroyed" },
    { icon: <Image src={crying_chick2} alt="" width={212} height={212} className="w-full" />, name: "It initializes a new object" },
    { icon: <Image src={sleeping_chick} alt="" width={212} height={212} className="w-full" />, name: "It modifies the object’s attributes" },
  ],
  correctAnswer: 0,
} as const;

const csharpLessonProblemK7 = {
  type: "WRITE",
  question: "Write C# code to define a destructor in a class `Book` that prints 'Object deleted'.",
  answerTiles: ["~Book", "()", "{", "Console.WriteLine", "(\"Object deleted\");", "}"],
  correctAnswer: [0, 1, 2, 3, 4, 5],
} as const;

const csharpLessonProblemK8 = {
  type: "SELECT_1_OF_3",
  question: "What does the `Zip()` method do in C#?",
  answers: [
    { icon: <Image src={chick_flattered} alt="" width={212} height={212} className="w-full" />, name: "It pairs elements from two or more collections" },
    { icon: <Image src={crying_chick2} alt="" width={212} height={212} className="w-full" />, name: "It sorts elements of a collection" },
    { icon: <Image src={crying_cow} alt="" width={212} height={212} className="w-full" />, name: "It merges two lists" },
  ],
  correctAnswer: 0,
} as const;

const csharpLessonProblemK9 = {
  type: "WRITE",
  question: "Write C# code to zip two lists: `names = new List<string> { \"Alice\", \"Bob\", \"Charlie\" };` and `scores = new List<int> { 85, 90, 78 };`.",
  answerTiles: ["names.Zip", "(scores", ",", "(name, score)", "=>"],
  correctAnswer: [0, 1, 2, 3, 4],
} as const;

const csharpLessonProblemK10 = {
  type: "SELECT_1_OF_3",
  question: "Which of the following is the correct syntax to define a lambda expression in C#?",
  answers: [
    { icon: <Image src={crying_chick3} alt="" width={212} height={212} className="w-full" />, name: "function(x) => x + 1" },
    { icon: <Image src={crying_chick2} alt="" width={212} height={212} className="w-full" />, name: "lambda x => x + 1" },
    { icon: <Image src={chick_microphone} alt="" width={212} height={212} className="w-full" />, name: "(x) => x + 1" },
  ],
  correctAnswer: 2,
} as const;

const csharpLessonProblemK11 = {
  type: "WRITE",
  question: "Write C# code to define a lambda expression that multiplies two numbers and call it with arguments 5 and 6.",
  answerTiles: ["(x,", "y)", "=>", "x * y", "multiply", "="],
  correctAnswer: [4, 5, 0, 1, 2, 3],
} as const;

const csharpLessonProblemK12 = {
  type: "SELECT_1_OF_3",
  question: "What is the result of the following expression in C#:\n`Enumerable.Range(0, 3).Select(i => i * i)`?",
  answers: [
    { icon: <Image src={cow_greeting} alt="" width={212} height={212} className="w-full" />, name: "[0, 1, 4]" },
    { icon: <Image src={crying_chick2} alt="" width={212} height={212} className="w-full" />, name: "[1, 4, 9]" },
    { icon: <Image src={sad_chick} alt="" width={212} height={212} className="w-full" />, name: "[0, 1, 2]" },
  ],
  correctAnswer: 0,
} as const;

const csharpLessonProblemK13 = {
  type: "SELECT_1_OF_3",
  question: "Which of the following is the correct way to install a NuGet package in C#?",
  answers: [
    { icon: <Image src={crying_chick} alt="" width={212} height={212} className="w-full" />, name: "install nuget package_name" },
    { icon: <Image src={cow_lightbulb} alt="" width={212} height={212} className="w-full" />, name: "dotnet add package package_name" },
    { icon: <Image src={sad_chick} alt="" width={212} height={212} className="w-full" />, name: "nuget install package_name" },
  ],
  correctAnswer: 1,
} as const;

const csharpLessonProblemK14 = {
  type: "SELECT_1_OF_3",
  question: "What is the output of the following code?\n`Enumerable.Range(0, 3).ToDictionary(x => x, x => x * x);`",
  answers: [
    { icon: <Image src={cow_sleeping} alt="" width={212} height={212} className="w-full" />, name: "{1: 1, 2: 4, 3: 9}" },
    { icon: <Image src={cow_twothumbs} alt="" width={212} height={212} className="w-full" />, name: "{0: 0, 1: 1, 2: 4}" },
    { icon: <Image src={sad_chick} alt="" width={212} height={212} className="w-full" />, name: "{0: 1, 1: 2, 2: 3}" },
  ],
  correctAnswer: 1,
} as const;

const csharpLessonProblemK15 = {
  type: "SELECT_1_OF_3",
  question: "Which regular expression pattern matches one or more digits in C#?",
  answers: [
    { icon: <Image src={happy_chickfamily} alt="" width={212} height={212} className="w-full" />, name: "\\d+" },
    { icon: <Image src={sleeping_chick} alt="" width={212} height={212} className="w-full" />, name: "[0-9]+" },
    { icon: <Image src={crying_cow} alt="" width={212} height={212} className="w-full" />, name: "\\d" },
  ],
  correctAnswer: 0,
} as const;

const csharpLessonProblemK16 = {
  type: "SELECT_1_OF_3",
  question: "What is the output of the following C# code?\n`bool result = !string.IsNullOrEmpty(\"Hello\");`",
  answers: [
    { icon: <Image src={crying_cow2} alt="" width={212} height={212} className="w-full" />, name: "Error" },
    { icon: <Image src={crying_chick2} alt="" width={212} height={212} className="w-full" />, name: "False" },
    { icon: <Image src={happy_chick4} alt="" width={212} height={212} className="w-full" />, name: "True" },
  ],
  correctAnswer: 2,
} as const;

const getJavaScriptLessonProblems = (lessonsCompleted: number) => {
  const javascriptLessonProblems = [
    javascriptLessonProblemA1, javascriptLessonProblemA2, javascriptLessonProblemA3, javascriptLessonProblemA4, javascriptLessonProblemA5, javascriptLessonProblemA6, javascriptLessonProblemA7, javascriptLessonProblemA8, javascriptLessonProblemA9, javascriptLessonProblemA10, javascriptLessonProblemA11, javascriptLessonProblemA12, javascriptLessonProblemA13, javascriptLessonProblemA14, javascriptLessonProblemA15, javascriptLessonProblemA16,
    javascriptLessonProblemB1, javascriptLessonProblemB2, javascriptLessonProblemB3, javascriptLessonProblemB4, javascriptLessonProblemB5, javascriptLessonProblemB6, javascriptLessonProblemB7, javascriptLessonProblemB8, javascriptLessonProblemB9, javascriptLessonProblemB10, javascriptLessonProblemB11, javascriptLessonProblemB12, javascriptLessonProblemB13, javascriptLessonProblemB14, javascriptLessonProblemB15, javascriptLessonProblemB16,
    javascriptLessonProblemC1, javascriptLessonProblemC2, javascriptLessonProblemC3, javascriptLessonProblemC4, javascriptLessonProblemC5, javascriptLessonProblemC6, javascriptLessonProblemC7, javascriptLessonProblemC8, javascriptLessonProblemC9, javascriptLessonProblemC10, javascriptLessonProblemC11, javascriptLessonProblemC12, javascriptLessonProblemC13, javascriptLessonProblemC14, javascriptLessonProblemC15, javascriptLessonProblemC16,
    javascriptLessonProblemD1, javascriptLessonProblemD2, javascriptLessonProblemD3, javascriptLessonProblemD4, javascriptLessonProblemD5, javascriptLessonProblemD6, javascriptLessonProblemD7, javascriptLessonProblemD8, javascriptLessonProblemD9, javascriptLessonProblemD10, javascriptLessonProblemD11, javascriptLessonProblemD12, javascriptLessonProblemD13, javascriptLessonProblemD14, javascriptLessonProblemD15, javascriptLessonProblemD16,
    javascriptLessonProblemE1, javascriptLessonProblemE2, javascriptLessonProblemE3, javascriptLessonProblemE4, javascriptLessonProblemE5, javascriptLessonProblemE6, javascriptLessonProblemE7, javascriptLessonProblemE8, javascriptLessonProblemE9, javascriptLessonProblemE10, javascriptLessonProblemE11, javascriptLessonProblemE12,
    javascriptLessonProblemF1, javascriptLessonProblemF2, javascriptLessonProblemF3, javascriptLessonProblemF4, javascriptLessonProblemF5, javascriptLessonProblemF6, javascriptLessonProblemF7, javascriptLessonProblemF8, javascriptLessonProblemF9, javascriptLessonProblemF10, javascriptLessonProblemF11, javascriptLessonProblemF12, javascriptLessonProblemF13, javascriptLessonProblemF14, javascriptLessonProblemF15, javascriptLessonProblemF16,
    javascriptLessonProblemG1, javascriptLessonProblemG2, javascriptLessonProblemG3, javascriptLessonProblemG4, javascriptLessonProblemG5, javascriptLessonProblemG6, javascriptLessonProblemG7, javascriptLessonProblemG8, javascriptLessonProblemG9, javascriptLessonProblemG10, javascriptLessonProblemG11, javascriptLessonProblemG12, javascriptLessonProblemG13, javascriptLessonProblemG14, javascriptLessonProblemG15, javascriptLessonProblemG16,
    // review 1
    javascriptLessonProblemA1, javascriptLessonProblemA2, javascriptLessonProblemA3, javascriptLessonProblemA4, javascriptLessonProblemB1, javascriptLessonProblemB2, javascriptLessonProblemB3, javascriptLessonProblemB4, javascriptLessonProblemC1, javascriptLessonProblemC2, javascriptLessonProblemC3, javascriptLessonProblemC4, javascriptLessonProblemD1, javascriptLessonProblemD2, javascriptLessonProblemE2, javascriptLessonProblemE3, javascriptLessonProblemF1, javascriptLessonProblemF2, javascriptLessonProblemF3, javascriptLessonProblemF4, javascriptLessonProblemG1, javascriptLessonProblemG2, javascriptLessonProblemG3, javascriptLessonProblemG4, javascriptLessonProblemG1, javascriptLessonProblemG2,
    javascriptLessonProblemI1, javascriptLessonProblemI2, javascriptLessonProblemI3, javascriptLessonProblemI4, javascriptLessonProblemI5, javascriptLessonProblemI6, javascriptLessonProblemI7, javascriptLessonProblemI8, javascriptLessonProblemI9, javascriptLessonProblemI10, javascriptLessonProblemI11, javascriptLessonProblemI12, javascriptLessonProblemI13, javascriptLessonProblemI14, javascriptLessonProblemI15, javascriptLessonProblemI16, javascriptLessonProblemI17, javascriptLessonProblemI18, javascriptLessonProblemI19, javascriptLessonProblemI20, javascriptLessonProblemI21, javascriptLessonProblemI22, javascriptLessonProblemI23, javascriptLessonProblemI24,
    javascriptLessonProblemJ1, javascriptLessonProblemJ2, javascriptLessonProblemJ3, javascriptLessonProblemJ4, javascriptLessonProblemJ5, javascriptLessonProblemJ6, javascriptLessonProblemJ7, javascriptLessonProblemJ8, javascriptLessonProblemJ9, javascriptLessonProblemJ10, javascriptLessonProblemJ11, javascriptLessonProblemJ12, javascriptLessonProblemJ13, javascriptLessonProblemJ14, javascriptLessonProblemJ15, javascriptLessonProblemJ16,
    javascriptLessonProblemK1, javascriptLessonProblemK2, javascriptLessonProblemK3, javascriptLessonProblemK4, javascriptLessonProblemK5, javascriptLessonProblemK6, javascriptLessonProblemK7, javascriptLessonProblemK8, javascriptLessonProblemK9, javascriptLessonProblemK10, javascriptLessonProblemK11, javascriptLessonProblemK12, javascriptLessonProblemK13, javascriptLessonProblemK14, javascriptLessonProblemK15, javascriptLessonProblemK16,
    // review 2
    javascriptLessonProblemA1, javascriptLessonProblemB1, javascriptLessonProblemC1, javascriptLessonProblemD1, javascriptLessonProblemE1, javascriptLessonProblemF1, javascriptLessonProblemG1, javascriptLessonProblemI1, javascriptLessonProblemJ1, javascriptLessonProblemA6, javascriptLessonProblemB6, javascriptLessonProblemC7, javascriptLessonProblemD6, javascriptLessonProblemE6, javascriptLessonProblemF6, javascriptLessonProblemG6, javascriptLessonProblemI6, javascriptLessonProblemJ6, javascriptLessonProblemK6,
    // extras
    javascriptLessonProblemA1, javascriptLessonProblemB1, javascriptLessonProblemC1, javascriptLessonProblemD1, javascriptLessonProblemE1, javascriptLessonProblemF1, javascriptLessonProblemG1, javascriptLessonProblemI1, javascriptLessonProblemJ1, javascriptLessonProblemA6, javascriptLessonProblemB6, javascriptLessonProblemC7, javascriptLessonProblemD6, javascriptLessonProblemE6, javascriptLessonProblemF6, javascriptLessonProblemG6, javascriptLessonProblemI6, javascriptLessonProblemJ6, javascriptLessonProblemK6
  ];
  
  

  const n = lessonsCompleted * 2;

  return javascriptLessonProblems.slice(n);
};

const getCsLessonProblems = (lessonsCompleted: number) => {
  const csharpLessonProblems = [
    csharpLessonProblemA1, csharpLessonProblemA2, csharpLessonProblemA3, csharpLessonProblemA4, csharpLessonProblemA5, csharpLessonProblemA6, csharpLessonProblemA7, csharpLessonProblemA8, csharpLessonProblemA9, csharpLessonProblemA10, csharpLessonProblemA11, csharpLessonProblemA12, csharpLessonProblemA13, csharpLessonProblemA14, csharpLessonProblemA15, csharpLessonProblemA16,
    csharpLessonProblemB1, csharpLessonProblemB2, csharpLessonProblemB3, csharpLessonProblemB4, csharpLessonProblemB5, csharpLessonProblemB6, csharpLessonProblemB7, csharpLessonProblemB8, csharpLessonProblemB9, csharpLessonProblemB10, csharpLessonProblemB11, csharpLessonProblemB12, csharpLessonProblemB13, csharpLessonProblemB14, csharpLessonProblemB15, csharpLessonProblemB16,
    csharpLessonProblemC1, csharpLessonProblemC2, csharpLessonProblemC3, csharpLessonProblemC4, csharpLessonProblemC5, csharpLessonProblemC6, csharpLessonProblemC7, csharpLessonProblemC8, csharpLessonProblemC9, csharpLessonProblemC10, csharpLessonProblemC11, csharpLessonProblemC12, csharpLessonProblemC13, csharpLessonProblemC14, csharpLessonProblemC15, csharpLessonProblemC16,
    csharpLessonProblemD1, csharpLessonProblemD2, csharpLessonProblemD3, csharpLessonProblemD4, csharpLessonProblemD5, csharpLessonProblemD6, csharpLessonProblemD7, csharpLessonProblemD8, csharpLessonProblemD9, csharpLessonProblemD10, csharpLessonProblemD11, csharpLessonProblemD12, csharpLessonProblemD13, csharpLessonProblemD14, csharpLessonProblemD15, csharpLessonProblemD16,
    csharpLessonProblemE1, csharpLessonProblemE2, csharpLessonProblemE3, csharpLessonProblemE4, csharpLessonProblemE5, csharpLessonProblemE6, csharpLessonProblemE7, csharpLessonProblemE8, csharpLessonProblemE9, csharpLessonProblemE10, csharpLessonProblemE11, csharpLessonProblemE12,
    csharpLessonProblemF1, csharpLessonProblemF2, csharpLessonProblemF3, csharpLessonProblemF4, csharpLessonProblemF5, csharpLessonProblemF6, csharpLessonProblemF7, csharpLessonProblemF8, csharpLessonProblemF9, csharpLessonProblemF10, csharpLessonProblemF11, csharpLessonProblemF12, csharpLessonProblemF13, csharpLessonProblemF14, csharpLessonProblemF15, csharpLessonProblemF16,
    csharpLessonProblemG1, csharpLessonProblemG2, csharpLessonProblemG3, csharpLessonProblemG4, csharpLessonProblemG5, csharpLessonProblemG6, csharpLessonProblemG7, csharpLessonProblemG8, csharpLessonProblemG9, csharpLessonProblemG10, csharpLessonProblemG11, csharpLessonProblemG12, csharpLessonProblemG13, csharpLessonProblemG14, csharpLessonProblemG15, csharpLessonProblemG16,
    // review 1
    csharpLessonProblemA1, csharpLessonProblemA2, csharpLessonProblemA3, csharpLessonProblemA4, csharpLessonProblemB1, csharpLessonProblemB2, csharpLessonProblemB3, csharpLessonProblemB4, csharpLessonProblemC1, csharpLessonProblemC2, csharpLessonProblemC3, csharpLessonProblemC4, csharpLessonProblemD1, csharpLessonProblemD2, csharpLessonProblemE2, csharpLessonProblemE3, csharpLessonProblemF1, csharpLessonProblemF2, csharpLessonProblemF3, csharpLessonProblemF4, csharpLessonProblemG1, csharpLessonProblemG2, csharpLessonProblemG3, csharpLessonProblemG4,
    csharpLessonProblemI1, csharpLessonProblemI2, csharpLessonProblemI3, csharpLessonProblemI4, csharpLessonProblemI5, csharpLessonProblemI6, csharpLessonProblemI7, csharpLessonProblemI8, csharpLessonProblemI9, csharpLessonProblemI10, csharpLessonProblemI11, csharpLessonProblemI12, csharpLessonProblemI13, csharpLessonProblemI14, csharpLessonProblemI15, csharpLessonProblemI16, csharpLessonProblemI17, csharpLessonProblemI18, csharpLessonProblemI19, csharpLessonProblemI20, csharpLessonProblemI21, csharpLessonProblemI22, csharpLessonProblemI23, csharpLessonProblemI24,
    csharpLessonProblemJ1, csharpLessonProblemJ2, csharpLessonProblemJ3, csharpLessonProblemJ4, csharpLessonProblemJ5, csharpLessonProblemJ6, csharpLessonProblemJ7, csharpLessonProblemJ8, csharpLessonProblemJ9, csharpLessonProblemJ10, csharpLessonProblemJ11, csharpLessonProblemJ12, csharpLessonProblemJ13, csharpLessonProblemJ14, csharpLessonProblemJ15, csharpLessonProblemJ16,
    csharpLessonProblemK1, csharpLessonProblemK2, csharpLessonProblemK3, csharpLessonProblemK4, csharpLessonProblemK5, csharpLessonProblemK6, csharpLessonProblemK7, csharpLessonProblemK8, csharpLessonProblemK9, csharpLessonProblemK10, csharpLessonProblemK11, csharpLessonProblemK12, csharpLessonProblemK13, csharpLessonProblemK14, csharpLessonProblemK15, csharpLessonProblemK16,
    // review 2
    csharpLessonProblemA1, csharpLessonProblemB1, csharpLessonProblemC1, csharpLessonProblemD1, csharpLessonProblemE1, csharpLessonProblemF1, csharpLessonProblemG1, csharpLessonProblemI1, csharpLessonProblemJ1, csharpLessonProblemA6, csharpLessonProblemB6, csharpLessonProblemC7, csharpLessonProblemD6, csharpLessonProblemE6, csharpLessonProblemF6, csharpLessonProblemG6, csharpLessonProblemI6, csharpLessonProblemJ6, csharpLessonProblemK6,
    // extras
    csharpLessonProblemA1, csharpLessonProblemB1, csharpLessonProblemC1, csharpLessonProblemD1, csharpLessonProblemE1, csharpLessonProblemF1, csharpLessonProblemG1, csharpLessonProblemI1, csharpLessonProblemJ1, csharpLessonProblemA6, csharpLessonProblemB6, csharpLessonProblemC7, csharpLessonProblemD6, csharpLessonProblemE6, csharpLessonProblemF6, csharpLessonProblemG6, csharpLessonProblemI6, csharpLessonProblemJ6, csharpLessonProblemK6,
  ];

  const n = lessonsCompleted * 2;

  return csharpLessonProblems.slice(n);
};

const getPythonLessonProblems = (lessonsCompleted: number) => {
  // Define the full set of Python problems
  const pythonLessonProblems = [

    pythonLessonProblemA1, pythonLessonProblemA2, pythonLessonProblemA3, pythonLessonProblemA4, pythonLessonProblemA5, pythonLessonProblemA6, pythonLessonProblemA7, pythonLessonProblemA8, pythonLessonProblemA9, pythonLessonProblemA10, pythonLessonProblemA11, pythonLessonProblemA12, pythonLessonProblemA13, pythonLessonProblemA14, pythonLessonProblemA15, pythonLessonProblemA16,
    pythonLessonProblemB1, pythonLessonProblemB2, pythonLessonProblemB3, pythonLessonProblemB4, pythonLessonProblemB5, pythonLessonProblemB6, pythonLessonProblemB7, pythonLessonProblemB8, pythonLessonProblemB9, pythonLessonProblemB10, pythonLessonProblemB11, pythonLessonProblemB12, pythonLessonProblemB13, pythonLessonProblemB14, pythonLessonProblemB15, pythonLessonProblemB16,
    pythonLessonProblemC1, pythonLessonProblemC2, pythonLessonProblemC3, pythonLessonProblemC4, pythonLessonProblemC5, pythonLessonProblemC6, pythonLessonProblemC7, pythonLessonProblemC8, pythonLessonProblemC9, pythonLessonProblemC10, pythonLessonProblemC11, pythonLessonProblemC12, pythonLessonProblemC13, pythonLessonProblemC14, pythonLessonProblemC15, pythonLessonProblemC16,
    pythonLessonProblemD1, pythonLessonProblemD2, pythonLessonProblemD3, pythonLessonProblemD4, pythonLessonProblemD5, pythonLessonProblemD6, pythonLessonProblemD7, pythonLessonProblemD8, pythonLessonProblemD9, pythonLessonProblemD10, pythonLessonProblemD11, pythonLessonProblemD12, pythonLessonProblemD13, pythonLessonProblemD14, pythonLessonProblemD15, pythonLessonProblemD16,
    pythonLessonProblemE1, pythonLessonProblemE2, pythonLessonProblemE3, pythonLessonProblemE4, pythonLessonProblemE5, pythonLessonProblemE6, pythonLessonProblemE7, pythonLessonProblemE8, pythonLessonProblemE9, pythonLessonProblemE10, pythonLessonProblemE11, pythonLessonProblemE12,
    pythonLessonProblemF1, pythonLessonProblemF2, pythonLessonProblemF3, pythonLessonProblemF4, pythonLessonProblemF5, pythonLessonProblemF6, pythonLessonProblemF7, pythonLessonProblemF8, pythonLessonProblemF9, pythonLessonProblemF10, pythonLessonProblemF11, pythonLessonProblemF12, pythonLessonProblemF13, pythonLessonProblemF14, pythonLessonProblemF15, pythonLessonProblemF16,
    pythonLessonProblemG1, pythonLessonProblemG2, pythonLessonProblemG3, pythonLessonProblemG4, pythonLessonProblemG5, pythonLessonProblemG6, pythonLessonProblemG7, pythonLessonProblemG8, pythonLessonProblemG9, pythonLessonProblemG10, pythonLessonProblemG11, pythonLessonProblemG12, pythonLessonProblemG13, pythonLessonProblemG14, pythonLessonProblemG15, pythonLessonProblemG16,
    //review 1
    pythonLessonProblemA1, pythonLessonProblemA2, pythonLessonProblemA3, pythonLessonProblemA4,pythonLessonProblemB1, pythonLessonProblemB2,pythonLessonProblemB3, pythonLessonProblemB4,pythonLessonProblemC1, pythonLessonProblemC2, pythonLessonProblemC3, pythonLessonProblemC4,pythonLessonProblemD1, pythonLessonProblemD2,pythonLessonProblemE2, pythonLessonProblemE3,pythonLessonProblemF1, pythonLessonProblemF2, pythonLessonProblemF3, pythonLessonProblemF4, pythonLessonProblemG1, pythonLessonProblemG2, pythonLessonProblemG3, pythonLessonProblemG4,pythonLessonProblemG1, pythonLessonProblemG2,
    pythonLessonProblemI1, pythonLessonProblemI2, pythonLessonProblemI3, pythonLessonProblemI4, pythonLessonProblemI5, pythonLessonProblemI6, pythonLessonProblemI7, pythonLessonProblemI8, pythonLessonProblemI9, pythonLessonProblemI10, pythonLessonProblemI11, pythonLessonProblemI12, pythonLessonProblemI13, pythonLessonProblemI14, pythonLessonProblemI15, pythonLessonProblemI16,pythonLessonProblemI17, pythonLessonProblemI18, pythonLessonProblemI19, pythonLessonProblemI20, pythonLessonProblemI21, pythonLessonProblemI22,pythonLessonProblemI23,  pythonLessonProblemI24,
    pythonLessonProblemJ1, pythonLessonProblemJ2, pythonLessonProblemJ3, pythonLessonProblemJ4, pythonLessonProblemJ5, pythonLessonProblemJ6, pythonLessonProblemJ7, pythonLessonProblemJ8, pythonLessonProblemJ9, pythonLessonProblemJ10, pythonLessonProblemJ11, pythonLessonProblemJ12, pythonLessonProblemJ13, pythonLessonProblemJ14, pythonLessonProblemJ15, pythonLessonProblemJ16,
    pythonLessonProblemK1, pythonLessonProblemK2, pythonLessonProblemK3, pythonLessonProblemK4, pythonLessonProblemK5, pythonLessonProblemK6, pythonLessonProblemK7, pythonLessonProblemK8, pythonLessonProblemK9, pythonLessonProblemK10, pythonLessonProblemK11, pythonLessonProblemK12, pythonLessonProblemK13, pythonLessonProblemK14, pythonLessonProblemK15, pythonLessonProblemK16,
    //review 2
    pythonLessonProblemA1, pythonLessonProblemB1, pythonLessonProblemC1, pythonLessonProblemD1, pythonLessonProblemE1, pythonLessonProblemF1, pythonLessonProblemG1, pythonLessonProblemI1, pythonLessonProblemJ1, pythonLessonProblemA6, pythonLessonProblemB6, pythonLessonProblemC7, pythonLessonProblemD6, pythonLessonProblemE6, pythonLessonProblemF6, pythonLessonProblemG6,pythonLessonProblemI6, pythonLessonProblemJ6, pythonLessonProblemK6,
    //extras
    pythonLessonProblemA1, pythonLessonProblemB1, pythonLessonProblemC1, pythonLessonProblemD1, pythonLessonProblemE1, pythonLessonProblemF1, pythonLessonProblemG1, pythonLessonProblemI1, pythonLessonProblemJ1, pythonLessonProblemA6, pythonLessonProblemB6, pythonLessonProblemC7, pythonLessonProblemD6, pythonLessonProblemE6, pythonLessonProblemF6, pythonLessonProblemG6,pythonLessonProblemI6, pythonLessonProblemJ6, pythonLessonProblemK6

  ];
  

  const n = lessonsCompleted * 2;

  return pythonLessonProblems.slice(n);
};


const numbersEqual = (a: readonly number[], b: readonly number[]): boolean => {
  return a.length === b.length && a.every((_, i) => a[i] === b[i]);
};

const formatTime = (timeMs: number): string => {
  const seconds = Math.floor(timeMs / 1000) % 60;
  const minutes = Math.floor(timeMs / 1000 / 60) % 60;
  const hours = Math.floor(timeMs / 1000 / 60 / 60);
  if (hours === 0)
    return [minutes, seconds]
      .map((x) => x.toString().padStart(2, "0"))
      .join(":");
  return [hours, minutes, seconds]
    .map((x) => x.toString().padStart(2, "0"))
    .join(":");
};

const Lesson: NextPage = () => {
  const router = useRouter();
  const soundEffects = useBoundStore((x) => x.soundEffects);
  const playSound = useSound(soundEffects);

  // Define lesson sets here before use
  const lessonProblems = [
    // Your language lesson problems go here, as before
    lessonProblem1, lessonProblem2,
  ];


  // Check lesson type dynamically
  const lessonsCompleted = useBoundStore((x)=> x.lessonsCompleted);
  const lessonType = router.query["lessonType"];

  const lessonSet = (() => {
    switch (lessonType) {
      case "Python":
        return getPythonLessonProblems(lessonsCompleted);
      case "JavaScript":
        return getJavaScriptLessonProblems(lessonsCompleted);
      case "C":
        return getCsLessonProblems(lessonsCompleted);
      default:
        return lessonProblems;  // Default lesson problems if no valid language is selected
    }
  })();

  const [lessonProblem, setLessonProblem] = useState(0); // Start at the first question
  const [correctAnswerCount, setCorrectAnswerCount] = useState(0);
  const [incorrectAnswerCount, setIncorrectAnswerCount] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<null | number>(null);
  const [correctAnswerShown, setCorrectAnswerShown] = useState(false);
  const [quitMessageShown, setQuitMessageShown] = useState(false);

  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);

  const startTime = useRef(Date.now());
  const endTime = useRef(startTime.current + 1000 * 60 * 3 + 1000 * 33);

  const [questionResults, setQuestionResults] = useState<QuestionResult[]>([]);
  const [reviewLessonShown, setReviewLessonShown] = useState(false);

  const problem = lessonSet[lessonProblem] ?? lessonProblem1; // Default to first problem if not defined

  const totalCorrectAnswersNeeded = 2;

  const [isStartingLesson, setIsStartingLesson] = useState(true);
  const hearts =
    "fast-forward" in router.query &&
    !isNaN(Number(router.query["fast-forward"]))
      ? 3 - incorrectAnswerCount
      : null;

  const { correctAnswer } = problem;
  const isAnswerCorrect = Array.isArray(correctAnswer)
    ? numbersEqual(selectedAnswers, correctAnswer)
    : selectedAnswer === correctAnswer;

  const onCheckAnswer = () => {
    setCorrectAnswerShown(true);
    if (isAnswerCorrect) {
      setCorrectAnswerCount((x) => x + 1);
      playSound("/sounds/yay.mp3");
    } else {
      setIncorrectAnswerCount((x) => x + 1);
      playSound("/sounds/wrongclick.mp3");
    }
    setQuestionResults((questionResults) => [
      ...questionResults,
      {
        question: problem.question,
        yourResponse:
          problem.type === "SELECT_1_OF_3"
            ? problem.answers[selectedAnswer ?? 0]?.name ?? ""
            : selectedAnswers.map((i) => problem.answerTiles[i]).join(" "),
        correctResponse:
          problem.type === "SELECT_1_OF_3"
            ? problem.answers[problem.correctAnswer].name
            : problem.correctAnswer
                .map((i) => problem.answerTiles[i])
                .join(" "),
      },
    ]);
  };

  const onFinish = () => {
    playSound("/sounds/click.mp3");
    setSelectedAnswer(null);
    setSelectedAnswers([]);
    setCorrectAnswerShown(false);
  
    // Increment by 1, ensuring it doesn't loop back
    setLessonProblem((prevLessonProblem) => {
      const nextProblem = prevLessonProblem + 1;
      if (nextProblem < lessonSet.length) {
        return nextProblem;
      } else {
        return prevLessonProblem;  // Stay on the last problem if already at the end
      }
    });
  
    endTime.current = Date.now();
  };
  
  

  const onSkip = () => {
    playSound("/sounds/click.mp3");
    setSelectedAnswer(null);
    setCorrectAnswerShown(true);
  };

  const unitNumber = Number(router.query["fast-forward"]);

  if (hearts !== null && hearts < 0 && !correctAnswerShown) {
    return (
      <LessonFastForwardEndFail
        unitNumber={unitNumber}
        reviewLessonShown={reviewLessonShown}
        setReviewLessonShown={setReviewLessonShown}
        questionResults={questionResults}
      />
    );
  }

  if (
    hearts !== null &&
    hearts >= 0 &&
    !correctAnswerShown &&
    correctAnswerCount >= totalCorrectAnswersNeeded
  ) {
    return (
      <LessonFastForwardEndPass
        unitNumber={unitNumber}
        reviewLessonShown={reviewLessonShown}
        setReviewLessonShown={setReviewLessonShown}
        questionResults={questionResults}
      />
    );
  }

  if (hearts !== null && isStartingLesson) {
    return (
      <LessonFastForwardStart
        unitNumber={unitNumber}
        setIsStartingLesson={setIsStartingLesson}
      />
    );
  }

  if (correctAnswerCount >= totalCorrectAnswersNeeded && !correctAnswerShown) {
    return (
      <LessonComplete
        correctAnswerCount={correctAnswerCount}
        incorrectAnswerCount={incorrectAnswerCount}
        startTime={startTime}
        endTime={endTime}
        reviewLessonShown={reviewLessonShown}
        setReviewLessonShown={setReviewLessonShown}
        questionResults={questionResults}
      />
    );
  }

  switch (problem.type) {
    case "SELECT_1_OF_3": {
      return (
        <ProblemSelect1Of3
          problem={problem}
          correctAnswerCount={correctAnswerCount}
          totalCorrectAnswersNeeded={totalCorrectAnswersNeeded}
          selectedAnswer={selectedAnswer}
          setSelectedAnswer={setSelectedAnswer}
          quitMessageShown={quitMessageShown}
          correctAnswerShown={correctAnswerShown}
          setQuitMessageShown={setQuitMessageShown}
          isAnswerCorrect={isAnswerCorrect}
          onCheckAnswer={onCheckAnswer}
          onFinish={onFinish}
          onSkip={onSkip}
          hearts={hearts}
        />
      );
    }

    case "WRITE": {
      return (
        <ProblemWriteInEnglish
          problem={problem}
          correctAnswerCount={correctAnswerCount}
          totalCorrectAnswersNeeded={totalCorrectAnswersNeeded}
          selectedAnswers={selectedAnswers}
          setSelectedAnswers={setSelectedAnswers}
          quitMessageShown={quitMessageShown}
          correctAnswerShown={correctAnswerShown}
          setQuitMessageShown={setQuitMessageShown}
          isAnswerCorrect={isAnswerCorrect}
          onCheckAnswer={onCheckAnswer}
          onFinish={onFinish}
          onSkip={onSkip}
          hearts={hearts}
        />
      );
    }
  }
};

export default Lesson;

const ProgressBar = ({
  correctAnswerCount,
  totalCorrectAnswersNeeded,
  setQuitMessageShown,
  hearts,
}: {
  correctAnswerCount: number;
  totalCorrectAnswersNeeded: number;
  setQuitMessageShown: (isShown: boolean) => void;
  hearts: null | number;
}) => {
  return (
    <header className="flex items-center gap-4">
      {correctAnswerCount === 0 ? (
        <Link href="/learn" className="text-gray-400">
          <CloseSvg />
          <span className="sr-only">Exit lesson</span>
        </Link>
      ) : (
        <button
          className="text-gray-400"
          onClick={() => setQuitMessageShown(true)}
        >
          <CloseSvg />
          <span className="sr-only">Exit lesson</span>
        </button>
      )}
      <div
        className="h-4 grow rounded-full bg-gray-200"
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={1}
        aria-valuenow={correctAnswerCount / totalCorrectAnswersNeeded}
      >
        <div
          className={
            "h-full rounded-full bg-[#CC5742] transition-all duration-700 " +
            (correctAnswerCount > 0 ? "px-2 pt-1 " : "")
          }
          style={{
            width: `${(correctAnswerCount / totalCorrectAnswersNeeded) * 100}%`,
          }}
        >
          <div className="h-[5px] w-full rounded-full bg-[#CC5742]"></div>
        </div>
      </div>
      {hearts !== null &&
        [1, 2, 3].map((heart) => {
          if (heart <= hearts) {
            return <LessonTopBarHeart key={heart} />;
          }
          return <LessonTopBarEmptyHeart key={heart} />;
        })}
    </header>
  );
};

const QuitMessage = ({
  quitMessageShown,
  setQuitMessageShown,
}: {
  quitMessageShown: boolean;
  setQuitMessageShown: (isShown: boolean) => void;
}) => {
  return (
    <>
      <div
        className={
          quitMessageShown
            ? "fixed bottom-0 left-0 right-0 top-0 z-30 bg-black bg-opacity-60 transition-all duration-300"
            : "pointer-events-none fixed bottom-0 left-0 right-0 top-0 z-30 bg-black bg-opacity-0 transition-all duration-300"
        }
        onClick={() => setQuitMessageShown(false)}
        aria-label="Close quit message"
        role="button"
      ></div>

      <article
        className={
          quitMessageShown
            ? "fixed bottom-0 left-0 right-0 z-40 flex flex-col gap-4 bg-white px-5 py-12 text-center transition-all duration-300 sm:flex-row"
            : "fixed -bottom-96 left-0 right-0 z-40 flex flex-col bg-white px-5 py-12 text-center transition-all duration-300 sm:flex-row"
        }
        aria-hidden={!quitMessageShown}
      >
        <div className="flex grow flex-col gap-4">
          <h2 className="text-lg font-bold sm:text-2xl">
            Are you sure you want to quit?
          </h2>
          <p className="text-gray-500 sm:text-lg">
            All progress for this lesson will be lost.
          </p>
        </div>
        <div className="flex grow flex-col items-center justify-center gap-4 sm:flex-row-reverse">
          <Link
            className="flex w-full items-center justify-center rounded-2xl border-b-4 border-blue-500 bg-blue-400 py-3 font-bold uppercase text-white transition hover:brightness-105 sm:w-48"
            href="/learn"
          >
            Quit
          </Link>
          <button
            className="w-full rounded-2xl py-3 font-bold uppercase text-blue-400 transition hover:brightness-90 sm:w-48 sm:border-2 sm:border-b-4 sm:border-gray-300 sm:text-gray-400 sm:hover:bg-gray-100"
            onClick={() => setQuitMessageShown(false)}
          >
            Stay
          </button>
        </div>
      </article>
    </>
  );
};

const CheckAnswer = ({
  isAnswerSelected,
  isAnswerCorrect,
  correctAnswerShown,
  correctAnswer,
  onCheckAnswer,
  onFinish,
  onSkip,
}: {
  isAnswerSelected: boolean;
  isAnswerCorrect: boolean;
  correctAnswerShown: boolean;
  correctAnswer: string;
  onCheckAnswer: () => void;
  onFinish: () => void;
  onSkip: () => void;
}) => {
  return (
    <>
      <section className="border-gray-200 sm:border-t-2 sm:p-10">
        <div className="mx-auto flex max-w-5xl sm:justify-between">
          <button
            className="hidden rounded-2xl border-2 border-b-4 border-gray-200 bg-white p-3 font-bold uppercase text-gray-400 transition hover:border-gray-300 hover:bg-gray-200 sm:block sm:min-w-[150px] sm:max-w-fit"
            onClick={onSkip}
          >
            Skip
          </button>
          {!isAnswerSelected ? (
            <button
              className="grow rounded-2xl bg-gray-200 p-3 font-bold uppercase text-gray-400 sm:min-w-[150px] sm:max-w-fit sm:grow-0"
              disabled
            >
              Check
            </button>
          ) : (
            <button
              onClick={onCheckAnswer}
              className="grow rounded-2xl border-b-4 border-[#CC5742] bg-[#CC5742] p-3 font-bold uppercase text-white sm:min-w-[150px] sm:max-w-fit sm:grow-0"
            >
              Check
            </button>
          )}
        </div>
      </section>

      <div
        className={
          correctAnswerShown
            ? isAnswerCorrect
              ? "fixed bottom-0 left-0 right-0 bg-yellow-100 font-bold text-[#CC5742] transition-all"
              : "fixed bottom-0 left-0 right-0 bg-red-100 font-bold text-red-500 transition-all"
            : "fixed -bottom-52 left-0 right-0"
        }
      >
        <div className="flex max-w-5xl flex-col gap-4 p-5 sm:mx-auto sm:flex-row sm:items-center sm:justify-between sm:p-10 sm:py-14">
          <>
            {isAnswerCorrect ? (
              <div className="mb-2 flex flex-col gap-5 sm:flex-row sm:items-center">
                <div className="hidden rounded-full bg-white p-5 text-[#CC5742] sm:block">
                  <DoneSvg />
                </div>
                <div className="text-2xl">Good job!</div>
              </div>
            ) : (
              <div className="mb-2 flex flex-col gap-5 sm:flex-row sm:items-center">
                <div className="hidden rounded-full bg-white p-5 text-red-500 sm:block">
                  <BigCloseSvg />
                </div>
                <div className="flex flex-col gap-2">
                  <div className="text-2xl">Correct solution:</div>{" "}
                  <div className="text-sm font-normal">{correctAnswer}</div>
                </div>
              </div>
            )}
          </>
          <button
            onClick={onFinish}
            className={
              isAnswerCorrect
                ? "w-full rounded-2xl border-b-4 border-[#df5742] bg-[#CC5742] p-3 font-bold uppercase text-white transition hover:brightness-105 sm:min-w-[150px] sm:max-w-fit"
                : "w-full rounded-2xl border-b-4 border-red-600 bg-red-500 p-3 font-bold uppercase text-white transition hover:brightness-105 sm:min-w-[150px] sm:max-w-fit"
            }
          >
            Continue
          </button>
        </div>
      </div>
    </>
  );
};

const ProblemSelect1Of3 = ({
  problem,
  correctAnswerCount,
  totalCorrectAnswersNeeded,
  selectedAnswer,
  setSelectedAnswer,
  quitMessageShown,
  correctAnswerShown,
  setQuitMessageShown,
  isAnswerCorrect,
  onCheckAnswer,
  onFinish,
  onSkip,
  hearts,
}: {
  problem: typeof lessonProblem1;
  correctAnswerCount: number;
  totalCorrectAnswersNeeded: number;
  selectedAnswer: number | null;
  setSelectedAnswer: React.Dispatch<React.SetStateAction<number | null>>;
  correctAnswerShown: boolean;
  quitMessageShown: boolean;
  setQuitMessageShown: React.Dispatch<React.SetStateAction<boolean>>;
  isAnswerCorrect: boolean;
  onCheckAnswer: () => void;
  onFinish: () => void;
  onSkip: () => void;
  hearts: number | null;
}) => {

  const { question, answers, correctAnswer } = problem;

  return (
    <div className="flex min-h-screen flex-col gap-5 px-4 py-5 sm:px-0 sm:py-0">
      <div className="flex grow flex-col items-center gap-5">
        <div className="w-full max-w-5xl sm:mt-8 sm:px-5">
          <ProgressBar
            correctAnswerCount={correctAnswerCount}
            totalCorrectAnswersNeeded={totalCorrectAnswersNeeded}
            setQuitMessageShown={setQuitMessageShown}
            hearts={hearts}
          />
        </div>
        <section className="flex max-w-2xl grow flex-col gap-5 self-center sm:items-center sm:justify-center sm:gap-24 sm:px-5">
          <h1 className="self-start text-2xl font-bold sm:text-3xl">
            {/* Render the question: ensure the first line is not formatted as code */}
            {question.split("\n").map((line, index) => {
              // Replace tab characters with 4 spaces for consistent indentation
              const formattedLine = line.replace(/\t/g, "    "); // Replace tabs with 4 spaces
  
              // If it's the first line (the question part), render as plain text
              if (index === 0) {
                return <p key={index} className="text-lg">{formattedLine}</p>;
              }
  
              // Check if the line contains any non-whitespace code (match any non-empty line)
              const isCodeLine = /\S/.test(formattedLine.trim()); // Matches any non-whitespace line
  
              // Render code lines with <pre> tag for proper formatting
              return isCodeLine ? (
                <pre
                  key={index}
                  className="bg-[#CC5742] text-white p-1 whitespace-pre-wrap break-words w-full text-sm leading-snug "
                  >
                  {formattedLine}
                </pre>
              ) : (
                // Otherwise render it as a regular paragraph (for any extra text)
                <p key={index} className="text-lg">{formattedLine}</p>
              );
            })}
          </h1>
          <div
            className="grid grid-cols-2 gap-2 sm:grid-cols-3"
            role="radiogroup"
          >
            {answers.map((answer, i) => {
              return (
                <div
                  key={i}
                  className={
                    i === selectedAnswer
                      ? "cursor-pointer rounded-xl border-2 border-b-4 border-blue-300 bg-blue-100 p-4 text-blue-400"
                      : "cursor-pointer rounded-xl border-2 border-b-4 border-gray-200 p-4 hover:bg-gray-100"
                  }
                  role="radio"
                  aria-checked={i === selectedAnswer}
                  tabIndex={0}
                  onClick={() => setSelectedAnswer(i)}
                >
                  {answer.icon}
                  <h2 className="text-center">{answer.name}</h2>
                </div>
              );
            })}
          </div>
        </section>
      </div>

  




      <CheckAnswer
        correctAnswer={answers[correctAnswer].name}
        correctAnswerShown={correctAnswerShown}
        isAnswerCorrect={isAnswerCorrect}
        isAnswerSelected={selectedAnswer !== null}
        onCheckAnswer={onCheckAnswer}
        onFinish={onFinish}
        onSkip={onSkip}
      />

      <QuitMessage
        quitMessageShown={quitMessageShown}
        setQuitMessageShown={setQuitMessageShown}
      />
    </div>
  );
};

const ProblemWriteInEnglish = ({
  problem,
  correctAnswerCount,
  totalCorrectAnswersNeeded,
  selectedAnswers,
  setSelectedAnswers,
  quitMessageShown,
  correctAnswerShown,
  setQuitMessageShown,
  isAnswerCorrect,
  onCheckAnswer,
  onFinish,
  onSkip,
  hearts,
}: {
  problem: typeof lessonProblem2;
  correctAnswerCount: number;
  totalCorrectAnswersNeeded: number;
  selectedAnswers: number[];
  setSelectedAnswers: React.Dispatch<React.SetStateAction<number[]>>;
  correctAnswerShown: boolean;
  quitMessageShown: boolean;
  setQuitMessageShown: React.Dispatch<React.SetStateAction<boolean>>;
  isAnswerCorrect: boolean;
  onCheckAnswer: () => void;
  onFinish: () => void;
  onSkip: () => void;
  hearts: number | null;
}) => {
  const { question, correctAnswer, answerTiles } = problem;
  const images = [cow_lightbulb, cow_question, cow_questioning, cow_thinking, chick_question, chick_question2, chick_question3, chick_question4, chick_thinking, hen_question];

  // Randomly pick an image
  const imagePng = images[Math.floor(Math.random() * images.length)];

  return (
    <div className="flex min-h-screen flex-col gap-5 px-4 py-5 sm:px-0 sm:py-0">
      <div className="flex grow flex-col items-center gap-5">
        <div className="w-full max-w-5xl sm:mt-8 sm:px-5">
          <ProgressBar
            correctAnswerCount={correctAnswerCount}
            totalCorrectAnswersNeeded={totalCorrectAnswersNeeded}
            setQuitMessageShown={setQuitMessageShown}
            hearts={hearts}
          />
        </div>
        <section className="flex max-w-2xl grow flex-col gap-5 self-center sm:items-center sm:justify-center sm:gap-24">
          <h1 className="mb-2 text-2xl font-bold sm:text-3xl">
            Write the code:
          </h1>

          <div className="w-full">
            <div className="flex items-center gap-2 px-2">
              <Image src={imagePng} alt="" width={92} height={115} />
              <div className="relative ml-2 w-fit rounded-2xl border-2 border-gray-200 p-4">
                {question}
                <div
                  className="absolute h-4 w-4 rotate-45 border-b-2 border-l-2 border-gray-200 bg-white"
                  style={{
                    top: "calc(50% - 8px)",
                    left: "-10px",
                  }}
                ></div>
              </div>
            </div>

            <div className="flex min-h-[60px] flex-wrap gap-1 border-b-2 border-t-2 border-gray-200 py-1">
              {selectedAnswers.map((i) => {
                return (
                  <button
                    key={i}
                    className="rounded-2xl border-2 border-b-4 border-gray-200 p-2 text-gray-700"
                    onClick={() => {
                      setSelectedAnswers((selectedAnswers) => {
                        return selectedAnswers.filter((x) => x !== i);
                      });
                    }}
                  >
                    {answerTiles[i]}
                  </button>
                );
              })}
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-1">
            {answerTiles.map((answerTile, i) => {
              return (
                <button
                  key={i}
                  className={
                    selectedAnswers.includes(i)
                      ? "rounded-2xl border-2 border-b-4 border-gray-200 bg-gray-200 p-2 text-gray-200"
                      : "rounded-2xl border-2 border-b-4 border-gray-200 p-2 text-gray-700"
                  }
                  disabled={selectedAnswers.includes(i)}
                  onClick={() =>
                    setSelectedAnswers((selectedAnswers) => {
                      if (selectedAnswers.includes(i)) {
                        return selectedAnswers;
                      }
                      return [...selectedAnswers, i];
                    })
                  }
                >
                  {answerTile}
                </button>
              );
            })}
          </div>
        </section>
      </div>

      <CheckAnswer
        correctAnswer={correctAnswer.map((i) => answerTiles[i]).join(" ")}
        correctAnswerShown={correctAnswerShown}
        isAnswerCorrect={isAnswerCorrect}
        isAnswerSelected={selectedAnswers.length > 0}
        onCheckAnswer={onCheckAnswer}
        onFinish={onFinish}
        onSkip={onSkip}
      />

      <QuitMessage
        quitMessageShown={quitMessageShown}
        setQuitMessageShown={setQuitMessageShown}
      />
    </div>
  );
};

const LessonComplete = ({
  correctAnswerCount,
  incorrectAnswerCount,
  startTime,
  endTime,
  reviewLessonShown,
  setReviewLessonShown,
  questionResults,
}: {
  correctAnswerCount: number;
  incorrectAnswerCount: number;
  startTime: React.MutableRefObject<number>;
  endTime: React.MutableRefObject<number>;
  reviewLessonShown: boolean;
  setReviewLessonShown: React.Dispatch<React.SetStateAction<boolean>>;
  questionResults: QuestionResult[];
}) => {
  const router = useRouter();
  const isPractice = "practice" in router.query;
  const soundEffects = useBoundStore((x) => x.soundEffects);
  const playSound = useSound(soundEffects);

  const increaseXp = useBoundStore((x) => x.increaseXp);
  const addToday = useBoundStore((x) => x.addToday);
  const increaseLingots = useBoundStore((x) => x.increaseLingots);
  const increaseLessonsCompleted = useBoundStore(
    (x) => x.increaseLessonsCompleted,
  );
  const { incrementLessons } = useProgress();
  return (
    <div className="flex min-h-screen flex-col gap-5 px-4 py-5 sm:px-0 sm:py-0">
      <div className="flex grow flex-col items-center justify-center gap-8 font-bold">
        <h1 className="text-center text-3xl text-yellow-400">
          Lesson Complete!
        </h1>
        <div className="flex flex-wrap justify-center gap-5">
          <div className="min-w-[110px] rounded-xl border-2 border-yellow-400 bg-yellow-400">
            <h2 className="py-1 text-center text-white">Total XP</h2>
            <div className="flex justify-center rounded-xl bg-white py-4 text-yellow-400">
              {correctAnswerCount}
            </div>
          </div>
          <div className="min-w-[110px] rounded-xl border-2 border-blue-400 bg-blue-400">
            <h2 className="py-1 text-center text-white">Committed</h2>
            <div className="flex justify-center rounded-xl bg-white py-4 text-blue-400">
              {formatTime(endTime.current - startTime.current)}
            </div>
          </div>
          <div className="min-w-[110px] rounded-xl border-2 border-[#CC5742] bg-[#CC5742]">
            <h2 className="py-1 text-center text-white">Amazing</h2>
            <div className="flex justify-center rounded-xl bg-white py-4 text-[#CC5742]">
              {Math.round(
                (correctAnswerCount /
                  (correctAnswerCount + incorrectAnswerCount)) *
                  100,
              )}
              %
            </div>
          </div>
        </div>
      </div>
      <section className="border-gray-200 sm:border-t-2 sm:p-10">
        <div className="mx-auto flex max-w-5xl sm:justify-between">
          <button
            className="hidden rounded-2xl border-2 border-b-4 border-gray-200 bg-white p-3 font-bold uppercase text-gray-400 transition hover:border-gray-300 hover:bg-gray-200 sm:block sm:min-w-[150px] sm:max-w-fit"
            onClick={() => {
              setReviewLessonShown(true);
              playSound("/sounds/click.mp3");
            }}
          >
            Review lesson
          </button>
          <Link
            className={
              "flex w-full items-center justify-center rounded-2xl border-b-4 border-[#CC5742] bg-[#CC5742] p-3 font-bold uppercase text-white transition hover:brightness-105 sm:min-w-[150px] sm:max-w-fit"
            }
            href="/learn"
            onClick={() => {
              playSound("/sounds/lessonfinish.mp3");
              increaseXp(correctAnswerCount);
              addToday();
              increaseLingots(isPractice ? 0 : 1);
              if (!isPractice) {
                increaseLessonsCompleted();
                incrementLessons();
              }
            }}
          >
            Continue
          </Link>
        </div>
      </section>
      <ReviewLesson
        reviewLessonShown={reviewLessonShown}
        setReviewLessonShown={setReviewLessonShown}
        questionResults={questionResults}
      />
    </div>
  );
};

type QuestionResult = {
  question: string;
  yourResponse: string;
  correctResponse: string;
};

const ReviewLesson = ({
  reviewLessonShown,
  setReviewLessonShown,
  questionResults,
}: {
  reviewLessonShown: boolean;
  setReviewLessonShown: React.Dispatch<React.SetStateAction<boolean>>;
  questionResults: QuestionResult[];
}) => {
  const [selectedQuestionResult, setSelectedQuestionResult] =
    useState<null | QuestionResult>(null);
  return (
    <div
      className={[
        "fixed inset-0 flex items-center justify-center p-5 transition duration-300",
        reviewLessonShown ? "" : "pointer-events-none opacity-0",
      ].join(" ")}
    >
      <div
        className={[
          "absolute inset-0 bg-black",
          reviewLessonShown ? "opacity-75" : "pointer-events-none opacity-0",
        ].join(" ")}
        onClick={() => setReviewLessonShown(false)}
      ></div>
      <div className="relative flex w-full max-w-4xl flex-col gap-5 rounded-2xl border-2 border-gray-200 bg-white p-8">
        <button
          className="absolute -right-5 -top-5 rounded-full border-2 border-gray-200 bg-gray-100 p-1 text-gray-400 hover:brightness-90"
          onClick={() => setReviewLessonShown(false)}
        >
          <BigCloseSvg className="h-8 w-8" />
          <span className="sr-only">Close</span>
        </button>
        <h2 className="text-center text-3xl">Check out your scorecard!</h2>
        <p className="text-center text-xl text-gray-400">
          Click the tiles below to reveal the solutions
        </p>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {questionResults.map((questionResult, i) => {
            return (
              <button
                key={i}
                className={[
                  "relative flex flex-col items-stretch gap-3 rounded-xl p-5 text-left",
                  questionResult.yourResponse === questionResult.correctResponse
                    ? "bg-yellow-100 text-yellow-600"
                    : "bg-red-100 text-red-500",
                ].join(" ")}
                onClick={() =>
                  setSelectedQuestionResult((selectedQuestionResult) =>
                    selectedQuestionResult === questionResult
                      ? null
                      : questionResult,
                  )
                }
              >
                <div className="flex justify-between gap-2">
                  <h3 className="font-bold">{questionResult.question}</h3>
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white">
                    {questionResult.yourResponse ===
                    questionResult.correctResponse ? (
                      <DoneSvg className="h-5 w-5" />
                    ) : (
                      <BigCloseSvg className="h-5 w-5" />
                    )}
                  </div>
                </div>
                <div>{questionResult.yourResponse}</div>
                {selectedQuestionResult === questionResult && (
                  <div className="absolute left-1 right-1 top-20 z-10 rounded-2xl border-2 border-gray-200 bg-white p-3 text-sm tracking-tighter">
                    <div
                      className="absolute -top-2 h-3 w-3 rotate-45 border-l-2 border-t-2 border-gray-200 bg-white"
                      style={{ left: "calc(50% - 6px)" }}
                    ></div>
                    <div className="font-bold uppercase text-gray-400">
                      Your response:
                    </div>
                    <div className="mb-3 text-gray-700">
                      {questionResult.yourResponse}
                    </div>
                    <div className="font-bold uppercase text-gray-400">
                      Correct response:
                    </div>
                    <div className="text-gray-700">
                      {questionResult.correctResponse}
                    </div>
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const LessonFastForwardStart = ({
  unitNumber,
  setIsStartingLesson,
}: {
  unitNumber: number;
  setIsStartingLesson: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const getImageSrc = () => {
    if (unitNumber === 2) return "/icons/forward.png"; // Example for unit-specific logic
    if (unitNumber === 3) return "/icons/forward2.png";
    return "/icons/forward.png";
  };
  return (
    <div className="flex min-h-screen flex-col px-5 py-8 text-center">
      <div className="flex grow flex-col items-center justify-center gap-5">
        <img
          src={getImageSrc()}
          alt="Fast forward time"
          className="w-70 h-40"
        />
        <h1 className="text-lg font-bold">
          Want to jump to Unit {unitNumber}?
        </h1>
        <p className="text-sm text-gray-400">
          {`Pass the test to jump ahead. We won't make it easy for you though.`}
        </p>
      </div>
      <div className="flex flex-col gap-5"></div>
      <section className="border-gray-200 sm:border-t-2 sm:p-10">
        <div className="mx-auto flex max-w-5xl flex-col-reverse items-center gap-5 sm:flex-row sm:justify-between">
          <Link
            href="/learn"
            className="font-bold uppercase text-blue-400 transition hover:brightness-110"
          >
            Maybe later
          </Link>
          <button
            className="w-full rounded-2xl border-b-4 border-blue-500 bg-blue-400 p-3 font-bold uppercase text-white transition hover:brightness-110 sm:min-w-[150px] sm:max-w-fit"
            onClick={() => setIsStartingLesson(false)}
          >
            {`Let's go`}
          </button>
        </div>
      </section>
    </div>
  );
};

const LessonFastForwardEndFail = ({
  unitNumber,
  reviewLessonShown,
  setReviewLessonShown,
  questionResults,
}: {
  unitNumber: number;
  reviewLessonShown: boolean;
  setReviewLessonShown: React.Dispatch<React.SetStateAction<boolean>>;
  questionResults: QuestionResult[];
}) => {
  return (
    <div className="flex min-h-screen flex-col px-5 py-8 text-center">
      <div className="flex grow flex-col items-center justify-center gap-5">
        <LessonFastForwardEndFailSvg />
        <h1 className="text-2xl font-bold">
          {`You didn't unlock Unit ${unitNumber}`}
        </h1>
        <p className="text-lg text-gray-500">
          {`Don't worry! Practice makes perfect.`}
        </p>
      </div>
      <section className="border-gray-200 sm:border-t-2 sm:p-10">
        <div className="mx-auto flex max-w-5xl sm:justify-between">
          <button
            className="hidden rounded-2xl border-2 border-b-4 border-gray-200 bg-white p-3 font-bold uppercase text-gray-400 transition hover:border-gray-300 hover:bg-gray-200 sm:block sm:min-w-[150px] sm:max-w-fit"
            onClick={() => setReviewLessonShown(true)}
          >
            Review lesson
          </button>
          <Link
            className="flex w-full items-center justify-center rounded-2xl border-b-4 border-[#CC5742] bg-[#CC5742] p-3 font-bold uppercase text-white transition hover:brightness-105 sm:min-w-[150px] sm:max-w-fit"
            href="/learn"
          >
            Continue
          </Link>
        </div>
      </section>
      <ReviewLesson
        reviewLessonShown={reviewLessonShown}
        setReviewLessonShown={setReviewLessonShown}
        questionResults={questionResults}
      />
    </div>
  );
};

const LessonFastForwardEndPass = ({
  unitNumber,
  reviewLessonShown,
  setReviewLessonShown,
  questionResults,
}: {
  unitNumber: number;
  reviewLessonShown: boolean;
  setReviewLessonShown: React.Dispatch<React.SetStateAction<boolean>>;
  questionResults: QuestionResult[];
}) => {
  const jumpToUnit = useBoundStore((x) => x.jumpToUnit);
  const { completeUnit, useFastForward } = useProgress();
  return (
    <div className="flex min-h-screen flex-col px-5 py-8 text-center">
      <div className="flex grow flex-col items-center justify-center gap-5">
        <img
          src="/icons/fast-success.png"
          alt="Fast Success"
          className="w-70 h-52" // Example dimensions
        />
        <h1 className="text-2xl font-bold">You unlocked Unit {unitNumber}!</h1>
        <p className="text-lg text-gray-500">
          Way to go! You’re making great strides!
        </p>
      </div>
      <section className="border-gray-200 sm:border-t-2 sm:p-10">
        <div className="mx-auto flex max-w-5xl sm:justify-between">
          <button
            className="hidden rounded-2xl border-2 border-b-4 border-gray-200 bg-white p-3 font-bold uppercase text-gray-400 transition hover:border-gray-300 hover:bg-gray-200 sm:block sm:min-w-[150px] sm:max-w-fit"
            onClick={() => setReviewLessonShown(true)}
          >
            Review lesson
          </button>
          <Link
            className="flex w-full items-center justify-center rounded-2xl border-b-4 border-[#CC5742] bg-[#CC5742] p-3 font-bold uppercase text-white transition hover:brightness-105 sm:min-w-[150px] sm:max-w-fit"
            href="/learn"
            onClick={() => {
              jumpToUnit(unitNumber);
              useFastForward();
              completeUnit();
            }}
          >
            Continue
          </Link>
        </div>
      </section>
      <ReviewLesson
        reviewLessonShown={reviewLessonShown}
        setReviewLessonShown={setReviewLessonShown}
        questionResults={questionResults}
      />
    </div>
  );
};
