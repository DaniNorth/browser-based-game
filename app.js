
// Logic for moving the bucket left and right, but does not include scoring logic
document.addEventListener('DOMContentLoaded', () => {
    const bucket = document.getElementById('bucket');
    const gameInterface = document.getElementById('game-interface');
    const bucketWidth = bucket.clientWidth;
    
    let bucketPos = gameInterface.clientWidth / 2 - bucketWidth / 2;
    bucket.style.left = bucketPos + 'px';
    
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

//falling object loop logic goes here

//collision logic goes here

//score logic goes here

//win/lose logic goes here

//instruction logic goes here



//-----------Next Steps goes here ------------//

//falling deadly-object logic here 

//falling object loop goes here

// dealy-object collision logic goes here

