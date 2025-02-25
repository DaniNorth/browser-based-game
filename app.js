document.addEventListener('DOMContentLoaded', () => {
  let fallingLoopStarted = false; //delay falling object start

  // --- Bucket Logic ---
  const bucket = document.getElementById('bucket');
  const gameInterface = document.getElementById('game-interface');
  const bucketWidth = bucket.clientWidth;
  
  // Center the bucket on the interface adjust height in style.css
  setTimeout(() => {
    const bucketWidth = bucket.clientWidth;
    let bucketPos = gameInterface.clientWidth / 2 - bucketWidth / 2;
    bucket.style.left = bucketPos + 'px';

  // Moves the bucket left and right when arrows are pressed 
  //checks to ensure the input is within the bounds of the interface
    document.addEventListener('keydown', (event) => {
      if (event.key === 'ArrowLeft' && bucketPos > 0) {
        bucketPos -= 10;
      } else if (event.key === 'ArrowRight' && bucketPos < gameInterface.clientWidth - bucketWidth) {
        bucketPos += 10;
      }
        bucket.style.left = bucketPos + 'px';
    });
  }, 100); //delay to fix load issue recommended by chatgpt

  // --- Falling Object Logic ---
    function animateFallingObject(object) {
      const maxYAxis = gameInterface.clientHeight * 0.89; // show the object until it is almost at the same axis as the bottom of the bucket
      let fallingSpeed = 2; // test at 2 but readjust later after all componets are done
      let fallingPosition = 0; // Start falling at the top of the interface
    
      function fall() {
        fallingPosition += fallingSpeed;
        object.style.top = fallingPosition + 'px';

        console.log (fallingPosition)
        if (fallingPosition < maxYAxis) {
            requestAnimationFrame(fall);
        } else {
            object.remove();
        }
    }
    requestAnimationFrame(fall);
  }
      
    function spawnMoreObjects() {
        if (!fallingLoopStarted) return;
        const newObject = document.createElement('div');
        newObject.classList.add('falling-object'); // Apply the same CSS class to all spawned objects
      
        // new object styles
        newObject.style.position = 'absolute';
        newObject.style.width = '5px';
        newObject.style.height = '5px';
        newObject.style.borderRadius = '50%';
        newObject.style.backgroundColor = 'green';

        // Random Xaxis on the game interface
        const maxXAxis = gameInterface.clientWidth - 10;
        newObject.style.left = Math.floor(Math.random() * maxXAxis) + 'px';
        newObject.style.top = '0px'; // Start at the top
      
        gameInterface.appendChild(newObject);
        animateFallingObject(newObject); // Start falling animation
      
        // Schedule next object spawn with random delay using 1000-4000ms used chatgpt to help me set this up
        const nextDelay = Math.random() * 3000 + 1000;
        setTimeout(spawnMoreObjects, nextDelay);
      }
    //
    function startFallingLoop() {
      if (!fallingLoopStarted) {
          fallingLoopStarted = true;
          spawnMoreObjects();
      }
  }

  // Start the loop when any key is pressed
  document.addEventListener('keydown', startFallingLoop);
});
//collision logic goes here
/* enemies.forEach((enemy, eIndex) => {
  if (projectile.checkCollision(enemy)) {
      // Remove both the enemy and the projectile
      enemies.splice(eIndex, 1);
      projectiles.splice(pIndex, 1);
*/

//score logic goes here

//win/lose logic goes here

//instruction logic goes here



//-----------Next Steps goes here ------------//

//falling deadly-object logic here 
const deadlyObject = document.getElementById('deadly-object');

//falling object loop goes here

// dealy-object collision logic goes here

