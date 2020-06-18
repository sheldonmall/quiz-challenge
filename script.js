// This is the array of objects that contains my quiz questions.
var questions = [
  {
    question: "This is the capital of Chile.",
    choices: ["Cusco", "Bogota", "Santiago", "Chilliwack"],
    answer: "Santiago"
  },
  {
    question: "This is the country where one would find river Thames.",
    choices: ["Russia", "Uzbekistan", "France", "UK"],
    answer: "UK"
  },
  {
    question: "This is the longest river in the world.",
    choices: ["Mississippi", "Nile", "Ganges", "Fraser"],
    answer: "Nile"
  },
  {
    question: "This is the hottest continent on Earth.",
    choices: ["Africa", "Australia", "South America", "India"],
    answer: "Africa"
  },
  {
    question: "This is the smallest country in the world.",
    choices: ["Georgia", "Vatican City", "Zambia", "Namibia"],
    answer: "Vatican City"
  },
  {
    question: "In 1796, Edward Jenner introduced the vaccine for this disease.",
    choices: ["Malaria", "Smallpox", "AIDS", "Arthritis"],
    answer: "Smallpox"
  },
  // More questions can be added here.
];
var qCtr=0;
// Function to start the quiz
function fnStartQuiz()
{   
  // Display question 
  var varQues=document.getElementById("ques-para");        
  varQues.innerHTML=questions[qCtr].question;    
  varQues.style.fontSize="35px";
  for(var cCtr=0;cCtr<4;cCtr++)
  { 
    // Display choices for each question
    var choiceBtn=$("<button>");
    choiceBtn.addClass("choice-button");
    choiceBtn.attr("class", "btn-info");
    choiceBtn.attr("ques-choices", questions[qCtr].choices[cCtr]);
    choiceBtn.text(questions[qCtr].choices[cCtr]);
    $("#choice-para").append(choiceBtn);        
  }
  $(".choice-button").click(fnClick()); 
} // fnStartQuiz() ends here  

//Accept clicked choice and follow logic
function fnClick()
{      
  var choiceSelected=$(".choice-button").text();
  if(choiceSelected!==questions[qCtr].answer)
  {
    // secondsLeft-=15;
  }       
  if(qCtr<questions.length)
  {
    qCtr++;
  }
  // else
  // {
  //   return;
  // }  
}
  
// Timer code function starts here
function setTime() 
{
  var timeEl = document.querySelector(".timer");
  var questionTime=15
  var secondsLeft = questionTime*questions.length;
  
  var timerInterval = setInterval(function() 
  {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left for the quiz to end.";
    if(secondsLeft === 0) 
    {
      clearInterval(timerInterval);
      timeEl.textContent = "Time is up!";
    }
  }, 1000);
  fnStartQuiz();
} // timer fn ends here



