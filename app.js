document.addEventListener('DOMContentLoaded', () => {
  let fallingLoopStarted = false; //delay falling object start
  let gamePaused = false; 
  const fallingObjects = [];//array for spawned objects
  const winningScore = 10; //winning conditional score
  
// --- Page Setup ---
  const themeButton = document.getElementById('theme-change');
  const body = document.body;
  const video = document.getElementById('background-video');

//Video changes with the theme
  themeButton.addEventListener('click', () => {
    body.classList.toggle('darkmode');

    const isDarkMode = body.classList.contains('darkmode');
    const videoChoice = isDarkMode ? '/assets/ship ocean.mp4': '/assets/sunset ocean.mp4';
    
    video.setAttribute('src', videoChoice);
    video.load();
  });

// --- Game Interface Setup ---
  const instructionsButton = document.getElementById('instructions');
  const instructionsPopup = document.getElementById('instructions-window');
  const closeInstructionsButton = document.getElementById('close-instructions');

  const gameInterface = document.getElementById('game-interface');
  let score = 0; // starting score and lives counters
  let lives = 3;
  const startButton = document.getElementById('start'); //changed from any keys to a click since logic flowed better  
  
  //score and lives display
  const scoreDisplay = document.getElementById('score');
  scoreDisplay.innerText = 'Score: 0';
  const livesDisplay = document.getElementById('lives');
  livesDisplay.innerText = 'Lives: 3';
  
  //How to play pop-up window that pauses game
  instructionsButton.addEventListener('click', () => {
    instructionsPopup.style.display = 'flex';
    pauseGame();
  });
  
  //close how to window and resume game
  closeInstructionsButton.addEventListener('click', () => {
    instructionsPopup.style.display = 'none';
    resumeGame();
  });
  
  function pauseGame() {
    if (fallingLoopStarted) {
        gamePaused = true;
    }
  }

  function resumeGame() {
    if (gamePaused) {
        gamePaused = false;
        requestAnimationFrame(animateFallingObjects);
    }
  }

// --- Bucket Logic ---
  const bucket = document.getElementById('bucket');
  let bucketPosition = gameInterface.clientWidth / 2 - 20;  // Center the bucket on the interface for the starting position, style can be updated in css
  bucket.style.left = bucketPosition + 'px';

  // Moves the bucket left and right when arrows are pressed and checks to ensure the input is within the bounds of the interface
  document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft' && bucketPosition > 0) {
      bucketPosition -= 15;
    } else if (event.key === 'ArrowRight' && bucketPosition < gameInterface.clientWidth - 46) {
      bucketPosition += 15;
    }
    bucket.style.left = bucketPosition + 'px';
  });

// --- Falling Object Logic ---

function createFallingObject() {
  let newObject = document.createElement('div');
  newObject.classList.add('falling-object');
  newObject.style.top = '0px';
  newObject.style.left = Math.random() * (gameInterface.clientWidth - 5) + 'px'; // Ensure falling objects appear randomly across the interface

  gameInterface.appendChild(newObject);
  fallingObjects.push({ element: newObject, position: 0, speed: 2 });
}

function animateFallingObjects() {
  if (!fallingLoopStarted || gamePaused) return; // Stop updating if the game ends

  for (let i = 0; i < fallingObjects.length; i++) {
    let obj = fallingObjects[i];
    obj.position += obj.speed;
    obj.element.style.top = obj.position + 'px';
    
    // Check if object touches the bucket and add to score counter or subtract from lives
    if (obj.position >= gameInterface.clientHeight * 0.81) {
      if (
        obj.element.offsetLeft >= bucketPosition &&
        obj.element.offsetLeft <= bucketPosition + bucket.clientWidth + 2
        ) {
        score++; //scoring logic
        scoreDisplay.innerText = 'Score: ' + score;
        //check score to see if win is satisfied then pass messaging to endGame pop-up
        if (score >= winningScore) {
          endGame("You win! Congratulations!", "Game Won!");
        }
      } else {
        lives--; //lives deduction logic
        livesDisplay.innerText = 'Lives: ' + lives;
        //check score to see if loss is satisfied then pass messaging to endGame pop-up
        if (lives <= 0) {
          endGame("You lost! Try again.", "Game Over!");
        }
      }
        //logic for removing fallen objects
        gameInterface.removeChild(obj.element);
        fallingObjects.splice(i, 1);
        i--; 
      }
    }
    requestAnimationFrame(animateFallingObjects);
  }
      
  function spawnMoreObjects() {
    if (!fallingLoopStarted) return; // Stop spawning objects if the game ends
    setTimeout(() => {
      createFallingObject();
      spawnMoreObjects();
    }, Math.random() * 4000 + 1000); // falls randomly between 1 second and 5 seconds
  }

    //
  function startFallingLoop() {
    if (!fallingLoopStarted) {
      fallingLoopStarted = true;
      startButton.style.display = 'none';
      spawnMoreObjects();
      animateFallingObjects();
    }
  }

//--- Win/Lose End game logic ---
  
  //Win/lose message pop-up
  function endGame(message, title) {
    fallingLoopStarted = false; // Stop the game loop
    document.getElementById("game-over-message").innerText = message;
    document.getElementById("game-over-title").innerText = title;
    document.getElementById("game-over-pop-up").style.display = "flex";
    }
  
  //restart button logic after win/lose pop-up
  document.getElementById("restart").addEventListener("click", function() {
    location.reload();
  });

  //update from keydown to click for simpler logic
  startButton.addEventListener('click', startFallingLoop);
});
