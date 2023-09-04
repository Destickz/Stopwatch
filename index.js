//it hide the pause, resume and reset buttons from the HTML flow when the web page is displayed in browser.
document.getElementById("pause-btn").style.display = "none";
document.getElementById("resume-btn").style.display = "none";
document.getElementById("reset-btn").style.display = "none";

//it initially store milliseconds, seconds, minutes and hours and set their values to zeros to be reuse later.
let milliseconds = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;

//these variables are used to track, pause and resume the setInterval function.
let intervalId
let isPaused = false;

//whenever the start button is clicked, these block of codes get executed.
(document.getElementById("start-btn")).addEventListener("click", function startBtn () {
 
  //it set an interval (i.e duration) at which the code inside it get executed repeatedly, which is set at 1 millisecond in this case.
  intervalId = setInterval(() => {
    
    //these call the sec, min and hour functions.
    sec ();
    min ();
    hour ();
    //milliseconds get incremented if the condition is true, if its not true then milliseconds equals to zero.
    if (milliseconds < 1000) {
      milliseconds+=10;
    } else {
      milliseconds = 0;
    }

    //it defines what get displayed in the milliseconds-display if the conditions stated are true and if it is not true then "else" get displayed.
    if (milliseconds < 10) {
      document.getElementById("milliseconds-display").textContent = `0${milliseconds}`;
     } else if (milliseconds == 1000) {
      document.getElementById("milliseconds-display").textContent = `000`;
     } else {
      document.getElementById("milliseconds-display").textContent = milliseconds;
     }
  
    }, 10);   

//it allows the pause and reset buttons to appear and hides start button in the HTML flow when the start button is clicked.
document.getElementById("pause-btn").style.display = "block";
document.getElementById("reset-btn").style.display = "block";
document.getElementById("start-btn").style.display = "none";
} );


//it defines what get displayed in the seconds-display if the conditions stated are met.
function sec () {
  if (milliseconds == 1000 ) {
      milliseconds = 0;
      seconds++;
      if (seconds < 10) {
        document.getElementById("seconds-display").textContent = `0${seconds}`;
       } else {
        document.getElementById("seconds-display").textContent = seconds;
       }
     }
  }
  
//it defines what get displayed in the minutes-display if the conditions stated are met.
function min () {
if (seconds == 60 ) {
    seconds = 0;
    minutes++;
    document.getElementById("seconds-display").textContent = "00";
    if (minutes < 10) {
      document.getElementById("minutes-display").textContent = `0${minutes}`;
     } else {
      document.getElementById("minutes-display").textContent = minutes;
     }
   }
}

//it defines what get displayed in the hours-play if the conditions stated are met.
function hour () {
  if (minutes == 60 ) {
      minutes = 0;
      hours++;
      document.getElementById("minutes-display").textContent = "00";
      if (minutes < 10) {
        document.getElementById("hours-display").textContent = `0${hours}`;
       } else {
        document.getElementById("hours-display").textContent = hours;
       }
     }
  }
  

//whenever the pause button is clicked, these block of codes get executed.
(document.getElementById("pause-btn")).addEventListener("click", function pauseBtn () {

//this clears the setInterval function and set the isPause variable "true" here for the time to gets paused
clearInterval(intervalId);
isPaused = true;

//it allows the resume button to appear and hides pause button in the HTML flow when the pause button is clicked.
document.getElementById("resume-btn").style.display = "block";
document.getElementById("pause-btn").style.display = "none";
});


//whenever the resume button is clicked, these block of codes get executed.
(document.getElementById("resume-btn")).addEventListener("click", function resumeBtn () {

//this means that if the isPause variable is "false" then it will return these block of codes.
if (isPaused == false) return;

//it set an interval (i.e duration) at which the code inside it get executed repeatedly, which is set at 1 millisecond.
intervalId = setInterval(() => {
  
  //these call the sec, min and hour functions.
  sec();
  min ();
  hour ();
  
  //milliseconds get incremented if the condition is true, if its not true then milliseconds equals to zero.
  if (milliseconds < 1000) {
    milliseconds+=10;
  } else {
    milliseconds = 0;
  }

  //it defines what get displayed in the milliseconds-section if the condition stated is true. if its not true then "else" get displayed.
  if (milliseconds < 10) {
    document.getElementById("milliseconds-display").textContent = `0${milliseconds}`;
   } else if (milliseconds == 1000) {
    document.getElementById("milliseconds-display").textContent = `000`;
   } else {
    document.getElementById("milliseconds-display").textContent = milliseconds;
   }

  }, 10);  

//the isPaused variable is set "false" here for the time to resume from where it stops.
isPaused = false;

//it hides the resume button and allows the pause button to appears in the HTML flow when the resume button is clicked.
document.getElementById("resume-btn").style.display = "none";
document.getElementById("pause-btn").style.display = "block";
});


//whenever the reset button is clicked, these block of codes get executed.
(document.getElementById("reset-btn")).addEventListener("click", function resetBtn() {
  
//these define what get displayed in the milliseconds-display, seconds-display, minutes-display and hours-display.
document.getElementById("milliseconds-display").textContent = "000";
document.getElementById("seconds-display").textContent = "00";
document.getElementById("minutes-display").textContent = "00";
document.getElementById("hours-display").textContent = "00";

//this clears the setInterval function and set the isPause variable "true" here for the time reset.
clearInterval(intervalId);
isPaused = true;

 //milliseconds, seconds, minutes and hours are set to zero (so this means that their values is reset back to zeros).
 milliseconds = 0;
 seconds = 0;
 minutes = 0;
 hours = 0;

//then these allow the start button to appears and hide the pause, resume and reset buttons in the HTML flow when the reset button is clicked.
document.getElementById("start-btn").style.display = "block";
document.getElementById("pause-btn").style.display = "none";
document.getElementById("resume-btn").style.display = "none";
document.getElementById("reset-btn").style.display = "none";

});

