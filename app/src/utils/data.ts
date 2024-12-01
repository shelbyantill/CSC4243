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