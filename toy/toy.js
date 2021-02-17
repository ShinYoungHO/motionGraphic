//   let myp5 = new p5(s);




// /////////////////////////이미지 커서에 올리기//////////////
// function setup() {
//     createCanvas(windowWidth, windowHeight-3)
    
//   }
  
//   function plane(img) {
//     image(img, 100, 100);
//   }

// function draw(){
//     loadImage('message_smooth.png', plane);
//     function plane(img) {
//         image(img, mouseX, mouseY);
//     }
    
// }
// function mousePressed(){
//     background(random(250),random(250),random(250))
// }
// /////////////////////////이미지 커서에 올리기//////////////






let x = 0;
let y = 0;
function setup() {
    createCanvas(windowWidth, windowHeight-3);
    stroke('purple'); 
    strokeWeight(10);
    point(30, 20);
    fill(123,234,190,100);
    rect(300,300,50);
  }

  function draw() {
    background('lightblue')
    circle(mouseX+random(-10,10),mouseY+random(-10,10),random(10));
    // x=x+1;
    // strokeWeight(random(10,20));
    // if(x > 300){
    //     x = 50;
    //     y = 100;
        
    // }
  }



// ////////////////////////////////////////////////

// let x = 0;

// function setup() {
//   createCanvas(600, 400);
//   line(15, 25, 70, 10);
// }

// function draw() {
//   ellipse(x, height/2, 20, 20);
//   x = x +1;
// }

// ///////////////////////////////////////////////////


// function setup() {
//     createCanvas(windowWidth, windowHeight-3);
// }

// function draw() {
//     background(10, 50,10,1);
//     fill('magenta');
//     // ellipse(width / 2, height / 2, accelerationX);
//     line(pmouseX,pmouseY,mouseX,mouseY)    

    
// }
// function mousePressed(){
    
//     background(random(250),random(250),random(250))
// }

// if(mouseIsPressed){
// }
// function setup(){
//     createCanvas(windowWidth, windowHeight-3);


// }


// function draw() {
//     fill(0);
  
//     if (mouseIsPressed) {
//       ellipse(50, 50, 50, 50);
//     } else {
//       rect(25, 25, 50, 50);
//     }
  
//     print(mouseIsPressed);
//   }

