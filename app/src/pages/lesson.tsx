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
  correctAnswer: [0, 3, 4, 5,  1, 2]
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


const pythonLessonProblemH1 = {
  type: "WRITE",
  question: "Write the Python code to concatenate 'Hello' and 'World' into one string and print it.",
  answerTiles: [")", "print", "+", "'World'", "(", "'Hello'"],
  correctAnswer: [1, 4, 5, 2, 3, 0]
  
  
}as const;

const pythonLessonProblemH2 = {
  type: "WRITE",
    question: "Write a comment in Python that says 'This is a comment'.",
    answerTiles: ["is", "a", "comment", "This", "#"],
    correctAnswer: [ 4, 3, 0, 1, 2]
  
   
}as const;
const pythonLessonProblemH3 = {
  type: "WRITE",
  question: "Write the Python code to concatenate 'Python' and 'rocks' into a single string and print it.",
  answerTiles: ["print", "'Python'", "'rocks'", ")", "+","("],
  correctAnswer: [0, 5, 1,4, 2, 3],
}as const;

const pythonLessonProblemH4 = {
  type: "SELECT_1_OF_3",
question: "What is the result of 5 + 3 * 2 in Python?",
answers: [
  { icon: <Image src={crying_chick2} alt="" width={212} height={212}  className="w-full" />, name: "16" },
  { icon: <Image src={cow_twothumbs} alt="" width={212} height={212}  className="w-full" />, name: "11" },
  { icon: <Image src={crying_chick5} alt="" width={212} height={212}  className="w-full" />, name: "13" },
],
correctAnswer: 1,


}as const;
const pythonLessonProblemH5 = {
  type: "SELECT_1_OF_3",
  question: "What is the result of 8 % 3 in Python?",
  answers: [
    { icon: <Image src={crying_cow2} alt="" width={212} height={212} className="w-full" />, name: "3" },
    { icon: <Image src={crying_chick3} alt="" width={212} height={212} className="w-full" />, name: "1" },
    { icon: <Image src={happy_chick2} alt="" width={212} height={212} className="w-full" />, name: "2" },
  ],
  correctAnswer: 2,
  
 
}as const;

const pythonLessonProblemH6 = {
  type: "WRITE",
  question: "Write Python code to assign the value 100 to the variable 'b' and then divide it by 4.",
  answerTiles: [ "=", "b","100", "//", "4", "/"],
  correctAnswer: [1,0, 2, 5, 4]
}as const;
const pythonLessonProblemH7 = {
  type: "SELECT_1_OF_3",
  question: "Which of these expressions checks if a value is not equal to another in Python?",
  answers: [
    { icon: <Image src={chick_flattered} alt="" width={212} height={212} className="w-full" />, name: "!=" },
    { icon: <Image src={sleeping_chick} alt="" width={212} height={212} className="w-full" />, name: "==" },
    { icon: <Image src={chick_question3} alt="" width={212} height={212} className="w-full" />, name: ">" },
  ],
  correctAnswer: 0,
}as const;

const pythonLessonProblemH8 = {
  type: "WRITE",
  question: "Write Python code to check if a number 'x' is less than 10 and 'y' is greater than 5.",
  answerTiles: ["x", "y", ">", "5", "<", "10", "and"],
  correctAnswer: [0, 4, 5, 6, 1, 2, 3 ]
}as const;
const pythonLessonProblemH9 = {

  type: "WRITE",
  question: "Write Python code to check if 5 is equal to 5.",
  answerTiles: ["5", "==", "5", "="],
  correctAnswer: [0, 1, 2]
}as const;

const pythonLessonProblemH10 = {
  type: "SELECT_1_OF_3",
question: "Which of the following is the correct syntax for creating a list in Python?",
answers: [
  { icon: <Image src={crying_cow3} alt="" width={212} height={212}  className="w-full" />, name: "{1, 2, 3}" },
  { icon: <Image src={wrong_chick} alt="" width={212} height={212}  className="w-full" />, name: "(1, 2, 3)" },
  { icon: <Image src={happy_chick4} alt="" width={212} height={212}  className="w-full" />, name: "[1, 2, 3]" },
],
correctAnswer: 2,


}as const;
const pythonLessonProblemH11 = {
  type: "SELECT_1_OF_3",
question: "Which of the following is a valid tuple in Python?",
answers: [
  { icon: <Image src={happy_chick3} alt="" width={212} height={212}  className="w-full" />, name: "(1, 2, 3)" },
  { icon: <Image src={chick_sleeping
  } alt="" width={212} height={212}  className="w-full" />, name: "[1, 2, 3]" },
  { icon: <Image src={crying_chick4} alt="" width={212} height={212}  className="w-full" />, name: "{1, 2, 3}" },
],
correctAnswer: 0,
}as const;

const pythonLessonProblemH12 = {
  type: "SELECT_1_OF_3",
question: "What will the following code print?\nif 10 > 5 and 5 > 3:\n\tprint('Both are true')\nelse:\n\tprint('One is false')",
answers: [
  { icon: <Image src={happy_chick4} alt="" width={212} height={212}  className="w-full" />, name: "Both are true" },
  { icon: <Image src={crying_cow2} alt="" width={212} height={212}  className="w-full" />, name: "One is false" },
  { icon: <Image src={crying_chick5} alt="" width={212} height={212}  className="w-full" />, name: "Error" },
],
correctAnswer: 0,


}as const;
const pythonLessonProblemH13 = {
  type: "WRITE",
  question: "Write the missing `if` statement to check if `x` is not equal to 0. ",
  answerTiles: ["if", "=","0","==","!", "x"],
  correctAnswer: [0, 5, 4, 1, 2]
}as const;

const pythonLessonProblemH14 = {
  type: "SELECT_1_OF_3",
  question: "What is the output of the following code?\nfor i in range(1, 4):\n\tprint(i)",
  answers: [
    { icon: <Image src={crying_cow} alt="" width={212} height={212}  className="w-full" />, name: "0 1 2" },
    { icon: <Image src={happy_twochicks} alt="" width={212} height={212}  className="w-full" />, name: "1 2 3" },
    { icon: <Image src={crying_chick3} alt="" width={212} height={212}  className="w-full" />, name: "Error" },
  ],
  correctAnswer: 1,
  

}as const;
const pythonLessonProblemH15 = {
  type: "SELECT_1_OF_3",
  question: "What will the following code print?\n\ndef greet():\n\tprint('Hi')\ngreet()",
  answers: [
    { icon: <Image src={cow_question} alt="" width={212} height={212}  className="w-full" />, name: "Error" },
    { icon: <Image src={laying_cow} alt="" width={212} height={212}  className="w-full" />, name: "Hello" },
    { icon: <Image src={cow_greeting} alt="" width={212} height={212}  className="w-full" />, name: "Hi" },
  ],
  correctAnswer: 2,
}as const;

const pythonLessonProblemH16 = {
  type: "SELECT_1_OF_3",
  question: "What does the following code do?\n\ndef multiply(x, y):\n\treturn x * y\nresult = multiply(3, 4)",
  answers: [
    { icon: <Image src={crying_chick5} alt="" width={212} height={212}  className="w-full" />, name: "Adds 3 and 4" },
    { icon: <Image src={sad_chick} alt="" width={212} height={212}  className="w-full" />, name: "Prints the result of 3 * 4" },
    { icon: <Image src={chick_flattered} alt="" width={212} height={212}  className="w-full" />, name: "Returns the product of 3 and 4" },
  ],
  correctAnswer: 2,
}as const;






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
    { icon: <Image src={happy_chick} alt="" width={212} height={212} className="w-full" />, name: "Toyota" },
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








const getJavaScriptLessonProblems = (lessonsCompleted: number) => {};
const getCsLessonProblems = (lessonsCompleted: number) => {};

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
    pythonLessonProblemH1, pythonLessonProblemH2, pythonLessonProblemH3, pythonLessonProblemH4, pythonLessonProblemH5, pythonLessonProblemH6, pythonLessonProblemH7, pythonLessonProblemH8, pythonLessonProblemH9, pythonLessonProblemH10, pythonLessonProblemH11, pythonLessonProblemH12, pythonLessonProblemH13, pythonLessonProblemH14, pythonLessonProblemH15, pythonLessonProblemH16

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
      case "C#":
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
    } else {
      setIncorrectAnswerCount((x) => x + 1);
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

  const increaseXp = useBoundStore((x) => x.increaseXp);
  const addToday = useBoundStore((x) => x.addToday);
  const increaseLingots = useBoundStore((x) => x.increaseLingots);
  const increaseLessonsCompleted = useBoundStore(
    (x) => x.increaseLessonsCompleted,
  );
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
            onClick={() => setReviewLessonShown(true)}
          >
            Review lesson
          </button>
          <Link
            className={
              "flex w-full items-center justify-center rounded-2xl border-b-4 border-[#CC5742] bg-[#CC5742] p-3 font-bold uppercase text-white transition hover:brightness-105 sm:min-w-[150px] sm:max-w-fit"
            }
            href="/learn"
            onClick={() => {
              increaseXp(correctAnswerCount);
              addToday();
              increaseLingots(isPractice ? 0 : 1);
              if (!isPractice) {
                increaseLessonsCompleted();
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
  return (
    <div className="flex min-h-screen flex-col px-5 py-8 text-center">
      <div className="flex grow flex-col items-center justify-center gap-5">
        <LessonFastForwardStartSvg />
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
  return (
    <div className="flex min-h-screen flex-col px-5 py-8 text-center">
      <div className="flex grow flex-col items-center justify-center gap-5">
        <LessonFastForwardEndPassSvg />
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
            onClick={() => jumpToUnit(unitNumber)}
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
