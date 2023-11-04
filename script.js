/*Add your JavaScript here*/
var javaScore = 0; //store java score//
var pythonScore = 0; //store python score//
var questionCount = 0 ; //store the number of answers clicked on//

//store the HTML elements using the DOM//
var result = document.getElementById("result");

var answer = document.getElementById("answer");

var restart = document.getElementById("restart");

var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");

var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");

var q5a1 = document.getElementById("q5a1");
var q5a2 = document.getElementById("q5a2");

//listen for click on answer buttons and call functions if clicked//
restart.addEventListener("click", restartButton);

answer.addEventListener("click", display);

//q1//
q1a1.addEventListener("click", java);
q1a1.addEventListener("click", () => q1a2.disabled=true);

q1a2.addEventListener("click", python);
q1a2.addEventListener("click", () => q1a1.disabled=true);

//q2//
q2a1.addEventListener("click", java);
q2a1.addEventListener("click", () => q2a2.disabled=true);

q2a2.addEventListener("click", python);
q2a2.addEventListener("click", () => q2a1.disabled=true);

//q3//
q3a1.addEventListener("click", python);
q3a1.addEventListener("click", () => q3a2.disabled=true);

q3a2.addEventListener("click", java);
q3a2.addEventListener("click", () => q3a1.disabled=true);

//q4//
q4a1.addEventListener("click", java);
q4a1.addEventListener("click", () => q4a2.disabled=true);

q4a2.addEventListener("click", python);
q4a2.addEventListener("click", () => q4a1.disabled=true);

//q5//
q5a1.addEventListener("click", java);
q5a1.addEventListener("click", () => q5a2.disabled=true);

q5a2.addEventListener("click", python);
q5a2.addEventListener("click", () => q5a1.disabled=true);


//track java score and question count//
function java() {
  javaScore += 1;
  questionCount += 1;

  console.log("questionCount=" + questionCount + " javaScore=" + javaScore);

  //conditional statement//
  if(questionCount == 5){
  console.log("The quiz is done!");

    //insert function to update quiz//
    updateResult();
  }
}

//track tropical score and question count//
function python() {
  pythonScore += 1;
  questionCount += 1;

  console.log("questionCount=" + questionCount + " pythonScore=" + pythonScore);
  
//conditional statement//
  if(questionCount == 5){
  console.log("The quiz is done!");
    
    //insert function to update quiz//
    updateResult();
  }
}

//answer button for end of quiz//

//update quiz result function//
function updateResult(){
    if (javaScore >= 3){
      //result
      result.innerHTML = "You are...";
    console.log("You are more like Java!");
    } else if (pythonScore >= 3){
      //result
      result.innerHTML = "You are...";
    console.log("You more like Python!");
    }
}

function display(){ if (javaScore >= 3){
      //result
      result.innerHTML = "You are more like Java!";
    console.log("You are more like Java!");
    } else if (pythonScore >= 3){
      //result
      result.innerHTML = "You are more like Python!";
    console.log("You are more like Python!");
    }
                  }
  
//restart button function//
function restartButton() {
  document.getElementById("result").innerHTML="You are..."
  javaScore=0;
  pythonScore=0;
  questionCount=0;
  console.log("questionCount=" + questionCount);
  console.log("javaScore=" + javaScore);
  console.log("pythoncore=" + pythonScore);

  //enable disabled buttons//
  document.getElementById("q1a1").disabled = false;
  document.getElementById("q1a2").disabled = false;
  document.getElementById("q2a1").disabled = false;
  document.getElementById("q2a2").disabled = false;
  document.getElementById("q3a1").disabled = false;
  document.getElementById("q3a2").disabled = false;
  document.getElementById("q4a1").disabled = false;
  document.getElementById("q4a2").disabled = false;
  document.getElementById("q5a1").disabled = false;
  document.getElementById("q5a2").disabled = false;
}
