/*Add your JavaScript here*/

var ereadScore=0;// Store eread score
var preadScore=0;// Store pread score

var questionCount=0;// Score the number of answers clicked on
var result= document.getElementById("result")

var q1a1= document.getElementById ("q1a1");
var q1a2= document.getElementById ("q1a2");

var q2a1= document.getElementById ("q2a1");
var q2a2= document.getElementById ("q2a2");

var q3a1= document.getElementById ("q3a1");
var q3a2= document.getElementById ("q3a2");

var result= document.getElementById("result");

q1a1.addEventListener("click", eread);
q1a2.addEventListener("click", pread);

q2a1.addEventListener("click", eread);
q2a2.addEventListener("click", pread);

q3a1.addEventListener("click", eread);
q3a2.addEventListener("click", pread);

restart.addEventListener("click", restartQuiz);

function eread (){
 ereadScore +=1;
 questionCount +=1;
 console.log("questionCount = " + questionCount + "ereadScore" + ereadScore);
  
if(questionCount ==3) {console.log("The quiz is finished!")
updateResult();
  if (ereadScore >=2){
  console.log("You are a Electronic Reader!");
}
else if (preadScore >=2){
  console.log("You are a Physical reader!")
}
}}

function pread (){
 preadScore +=1;
 questionCount +=1;
console.log("questionCount = " + questionCount + "preadScore" + preadScore);
  
 if(questionCount ==3) 
 {console.log("The quiz is finished!")
  updateResult();
  if (ereadScore >=2){
  console.log("You are a Electronic Reader!");
}
else if (preadScore >=2){
  console.log("You are a Physical reader!");
}
}}

function updateResult(){
  if (ereadScore >=2){
    result.innerHTML = "You are a Electronic reader!";
    console.log("You are a Electronic Reader!");
  } else if (preadScore >=2){
    result.innerHTML = "You are a Physical reader!";
  console.log("You are a Physical reader!");
}  
}

function restartQuiz(){
  result.innerHTML = "Your result is ...";
  ereadScore = 0;
  preadScore = 0;
  questionCount = 0;
}
