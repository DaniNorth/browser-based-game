/*
// Logic for moving the bucket left and right, but does not include scoring logic
document.addEventListener('DOMContentLoaded', () => {
    const bucket = document.getElementById('bucket');
    const gameInterface = document.getElementById('game-interface');
    const bucketWidth = bucket.clientWidth;
    
    let bucketPos = gameInterface.clientWidth / 2 - bucketWidth / 2;
    bucket.style.left = bucketPos + 'px';
    
    let fallingLoopStarted = false;

    //moves the bucket left and right by 5pxs 
    document.addEventListener('keydown', (event) => {
      if (event.key === 'ArrowLeft') {
        bucketPos = Math.max(0, bucketPos - 5); // 5px movement but never off the interface
        bucket.style.left = bucketPos + 'px';
      } else if (event.key === 'ArrowRight') {
        bucketPos = Math.min(gameInterface.clientWidth - bucketWidth, bucketPos + 5);// 5px movement but within the interface
        bucket.style.left = bucketPos + 'px';
      }
    });
  });

//falling object logic goes here

function startFallingLoop() {
  const fallingObject = document.getElementById('falling-object');
  let fallingSpeed = 2;
  let fallingPosition = 0;

  fallingObject.style.display = 'block';
  fallingObject.style.top = fallingPosition + 'px';

  const fallInterval = setInterval(() => {
    fallingPosition += fallingSpeed;
    fallingObject.style.top = fallingPosition + 'px';

    if (fallingPosition >= gameInterface.clientHeight * 0.95) {
      fallingObject.style.display = 'none';
      clearInterval(fallInterval);
    }
  }, 20);
}

document.addEventListener('keydown', (event) => {
  // Start the falling loop on the first key press
  if (!fallingLoopStarted) {
    startFallingLoop();
    fallingLoopStarted = true;
  }

*/
document.addEventListener('DOMContentLoaded', () => {
  // --- Bucket Logic ---
  const bucket = document.getElementById('bucket');
  const gameInterface = document.getElementById('game-interface');
  const bucketWidth = bucket.clientWidth;
  
  // Center the bucket on the interface adjust height in style.css
  let bucketPos = gameInterface.clientWidth / 2 - bucketWidth / 2;
  bucket.style.left = bucketPos + 'px';
  
  let fallingLoopStarted = false; //delay falling object start

  // Moves the bucket left and right when arrows are pressed 
  document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') {
      //checks to ensure the input is within the bounds of the interface
      if (bucketPos > 0) {
        bucketPos = bucketPos - 5;
      }
      bucket.style.left = bucketPos + 'px';
      //move the bucket right and ensures the input is within the bounds of the interface
    } else if (event.key === 'ArrowRight') {
      if (bucketPos < gameInterface.clientWidth - bucketWidth) {
        bucketPos = bucketPos + 5;
      }
      bucket.style.left = bucketPos + 'px';
    }
  });

  // --- Falling Object Logic ---
  function startFallingLoop() {
    const fallingObject = document.getElementById('falling-object');
    let fallingSpeed = 2; // test at 2 but readjust later after all componets are done
    let fallingPosition = 0; // Start falling at the top of the interface
  
    // Make sure the falling object is visible and set its initial position
    fallingObject.style.display = 'block';
    fallingObject.style.top = fallingPosition + 'px';
  
    //make the ball look likes it's moving
    function animate() {
      fallingPosition += fallingSpeed;
      fallingObject.style.top = fallingPosition + 'px';
  
      // show the object until it is almost at the same axis as the bottom of the bucket
      if (fallingPosition < gameInterface.clientHeight * 0.89) {
        requestAnimationFrame(animate);
      } else {
        // Otherwise, hide the object when it passes the bottom of the bucket
        fallingObject.style.display = 'none';
      }
    }
  
    requestAnimationFrame(animate);
  }
  // Start the falling loop on any key input but may change to button click
  document.addEventListener('keydown', (event) => {
    if (!fallingLoopStarted) {
      startFallingLoop();
      fallingLoopStarted = true;
    }
  });
});

//collision logic goes here

//score logic goes here

//win/lose logic goes here

//instruction logic goes here



//-----------Next Steps goes here ------------//

//falling deadly-object logic here 
const deadlyObject = document.getElementById('deadly-object');

//falling object loop goes here

// dealy-object collision logic goes here

