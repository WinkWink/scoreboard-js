// home and guess score html variables
let home = document.getElementById("home");
let guest = document.getElementById("guest");

// timer html variables
let min = document.getElementById("min");
let sec = document.getElementById("seconds");
let milliSec = document.getElementById("milliseconds");

let homePoints = 0;
let guestPoints = 0;

let jsMin = 0;
let jsSec = 0;
let jsMilli = 0;

// selects all buttons for a universal click event
let btnArray = document.querySelectorAll("button");

// sets the inside of the html content
home.textContent = homePoints.toString().padStart(2, '0');
guest.textContent = guestPoints.toString().padStart(2, '0');

min.textContent = jsMin.toString().padStart(2, '0'); 
sec.textContent = jsSec.toString().padStart(2, '0');
milliSec.textContent = jsMilli.toString().padStart(2, '0');

// add point to board
document.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    if(e.target.className === "homePoints"){
        switch (e.target.id) {
            case 'home-one':
              homePoints += 1;
              console.log(homePoints);
              break;
            case 'home-two':
                homePoints += 2;
              break;
            case 'home-three':
                homePoints += 3;
              break;
          }
          home.textContent = homePoints.toString().padStart(2, '0');

    } else if(e.target.className === "guestPoints"){
        switch (e.target.id) {
            case 'guest-one':
                guestPoints += 1;
              break;
            case 'guest-two':
                guestPoints += 2;
              break;
            case 'guest-three':
                guestPoints += 3;
              break;
          }
          guest.textContent = guestPoints.toString().padStart(2, '0');
    } else if(e.target.id === "setTimer"){
      var setTime = prompt("How much time would you like on the clock in minutes?");

      function setTimeSettings(x){
        if(x > 60) {
          alert('please enter a number 60 or less');
        }

        setTime = parseInt(setTime);
        min.textContent = setTime.toString().padStart(2, '0'); 
        document.getElementById("setTimer").style.display = "none";

        let startingTime = setTime * 60;
        let isPaused = false;

        var myTimer = setInterval(updateCountDown,1000);
        
        function updateCountDown(){
          if(!isPaused){
            const setMinutes = Math.floor(startingTime / 60);
            const setSeconds = startingTime % 60;
  
            min.textContent = setMinutes.toString().padStart(2, '0'); 
            sec.textContent = setSeconds.toString().padStart(2, '0');
  
            startingTime--;
  
            if (setMinutes == 0 && setSeconds == 0){
              clearInterval(myTimer);
              document.getElementById("pauseTimer").style.display = "none";
              document.getElementById("setTimer").style.display = "block";
  
            }
          }
        }

        function play(){
          isPaused = false;
          document.getElementById("pauseTimer").style.display = "block";
          document.getElementById("startTimer").style.display = "none";
        }

        function pause(){
          isPaused = true;
          document.getElementById("startTimer").style.display = "block";
          document.getElementById("pauseTimer").style.display = "none";
        }

        function stop(){
          clearInterval(myTimer);
      }

        document.getElementById("pauseTimer").style.display = "block";

        document.getElementById("clearScore").addEventListener("click", stop);
        document.getElementById("pauseTimer").addEventListener("click", pause);
        document.getElementById("startTimer").addEventListener("click", play);

      }

      setTimeSettings(setTime);
    }else if(e.target.id === "clearScore"){
        document.getElementById("pauseTimer").style.display = "none";
        document.getElementById("startTimer").style.display = "none";
        document.getElementById("setTimer").style.display = "block";

        let clear = 0;
        guest.textContent = clear.toString().padStart(2, '0');
        home.textContent = clear.toString().padStart(2, '0');
        min.textContent = clear.toString().padStart(2, '0'); 
        sec.textContent = clear.toString().padStart(2, '0');
        milliSec.textContent = clear.toString().padStart(2, '0');

        homePoints = 0;
        guestPoints = 0;
        jsMin = 0;
        jsSec = 0;
        jsMilli = 0;

        stopTimer();
    }
  }
});

