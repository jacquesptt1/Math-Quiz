var ques1Num1 = Math.floor(Math.random() * 20);
var ques1Num2 = Math.floor(Math.random() * 20);
var ques1Ans = ques1Num1 + ques1Num2;

var ques2Num1 = Math.floor(Math.random() * 20);
var ques2Num2 = Math.floor(Math.random() * 20);
var ques2Ans = ques2Num1 - ques2Num2;

var ques3Num1 = Math.floor(Math.random() * 20);
var ques3Num2 = Math.floor(Math.random() * 20);
var ques3Ans = ques3Num1 / ques3Num2;

var ques4Num1 = Math.floor(Math.random() * 20);
var ques4Num2 = Math.floor(Math.random() * 20);
var ques4Ans = ques4Num1 *  ques4Num2;

var ques5Num1 = Math.floor(Math.random() * 20);
var ques5Num2 = Math.floor(Math.random() * 20);
var ques5Ans = ques5Num1 + ques5Num2;

var correctAnswers = 0;
  correctAnswers++;
var questionID = 0;
    questionID++;


// begins the quiz and starts the first question
function beginQuiz() {
           questionId.innerHTML = "Question ID:" + questionID++;
           whitespace.innerHTML = "";
           equationQuestion.innerHTML = ques1Num1 + " " + "+" + " " + ques1Num2 + " " + "=" + " " + "<input type=text id=inputQ1 />" + "             " + "<button onclick=questionQ2()>Get New Question</button>";
           submitRow.innerHTML = "<button onclick=submitQ1()>Submit</button>";
       }

      // submit function to calculate equations
       function submitQ1() {
           var q1UserAnswer = inputQ1.value;
           showAnswer.innerHTML = q1UserAnswer;
           if (q1UserAnswer == ques1Ans) {
               correctAnswers++;
               rightOrWrong.innerHTML = "Correct";
           }
           else {
               rightOrWrong.innerHTML = "Incorrect";
           }
       }

       function questionQ2() {
           questionId.innerHTML = questionID++;
           whitespace.innerHTML = "";
           equationQuestion.innerHTML = ques2Num1 + " " + "-" + " " + ques2Num2 + " " + "=" + " " + "<input type=text id=inputQ2 />" + "             " + "<button onclick=questionQ3()>Get New Question</button>";
           submitRow.innerHTML = "<button onclick=submitQ2()>Submit</button>";
       }

       function submitQ2() {
           var q2UserAnswer = inputQ2.value;
           showAnswer.innerHTML = q2UserAnswer;
           if (q2UserAnswer == ques2Ans) {
               correctAnswers++;
               rightOrWrong.innerHTML = "Correct";
           }
           else {
               rightOrWrong.innerHTML = "Incorrect";
           }
       }


       function questionQ3() {
           questionId.innerHTML = questionID++;
           whitespace.innerHTML = "";
           equationQuestion.innerHTML = ques3Num1 + " " + "/" + " " + ques3Num2 + " " + "=" + " " + "<input type=text id=inputQ3 />" + "             " + "<button onclick=questionQ4()>Get New Question</button>";
           submitRow.innerHTML = "<button onclick=submitQ3()>Submit</button>";
       }

       function submitQ3() {
           var q3UserAnswer = inputQ3.value;
           showAnswer.innerHTML = q3UserAnswer;
           if (q3UserAnswer == ques3Ans) {
               correctAnswers++;
               rightOrWrong.innerHTML = "Correct";
           }
           else {
               rightOrWrong.innerHTML = "Incorrect";
           }
       }

       function questionQ4() {
           questionId.innerHTML = questionID++;
           whitespace.innerHTML = "";
           equationQuestion.innerHTML = ques4Num1 + " " + "x" + " " + ques4Num2 + " " + "=" + " " + "<input type=text id=inputQ4 />" + "             " + "<button onclick=questionQ5()>Get New Question</button>";
           submitRow.innerHTML = "<button onclick=submitQ4()>Submit</button>";
       }

       function submitQ4() {
           var q4UserAnswer = inputQ4.value;
           showAnswer.innerHTML = q4UserAnswer;
           if (q4UserAnswer == ques4Ans) {
               correctAnswers++;
               rightOrWrong.innerHTML = "Correct";
           }
           else {
               rightOrWrong.innerHTML = "Incorrect";
           }
       }


       function questionQ5() {
           questionId.innerHTML = questionID++;
           equationQuestion.innerHTML = ques5Num1 + " " + "+" + " " + ques5Num2 + " " + "=" + " " + "<input type=text id=inputQ5 />";
           submitRow.innerHTML = "<button onclick=submitQ5()>Submit</button>";
       }

       function submitQ5() {
           var q5UserAnswer = inputQ5.value;
           showAnswer.innerHTML = q5UserAnswer;
           if (q5UserAnswer == ques5Ans) {
               correctAnswers++;
               rightOrWrong.innerHTML = "Correct";
               endOfQuiz.innerHTML = "<button onclick=endQuiz()>End of Quiz</button>";
           }
           else {
               rightOrWrong.innerHTML = "Incorrect";
               endOfQuiz.innerHTML = "<button onclick=endQuiz()>End of Quiz</button>";
           }
       }
// function to deal with end of quiz results
       function endQuiz() {
           equationQuestion.innerHTML = "End of Quiz";
           submitRow.innerHTML = "You scored " + (correctAnswers - 1) + " out of 5";
           rightOrWrong.innerHTML = "Thanks for taking this quiz.";
           showAnswer.innerHTML = "";
           endOfQuiz.innerHTML = "<button onclick=repeatQuiz()>Repeat</button>";
       }
// if user decides to repeat the quiz
       function repeatQuiz() {
           location.reload();
       }
