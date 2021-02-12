// let x = 0;
// let y = 0;
let randomXSt = 300;//= random(0,width);
let randomYSt = 300;//= random(0,height);
let randomXEn = 300;//= random(0,width);
let randomYEn = 300;//= random(0,height);

let start = false;

function setup() {
    // createCanvas가 그 첫 선언문입니다. 
    createCanvas(windowWidth, windowHeight);
    stroke(255); // 선색을 흰색(255)으로 지정
    frameRate(10);
}
function draw(){
    background(0);
    line(randomXSt,randomYSt,randomXEn,randomYEn)
    if(start === false){
        randomXSt += random(-50,50);
        randomYSt += random(-50,50);
        start = true;
    }else if(start === true){
        randomXEn += random(-50,50);
        randomYEn += random(-50,50);
        start = false;
    }

    
}




//////////////////////랜덤 라인////////////////////////
// let y = 100;

// // setup()함수 속 선언문은 프로그램 시작시 한번 실행됩니다.
// function setup() {
//   // createCanvas가 그 첫 선언문입니다. 
//   createCanvas(720, 400);
//   stroke(255); // 선색을 흰색(255)으로 지정
//   frameRate(100);
// }
// // draw() 함수 속 선언문들은 프로그램이 멈출 때까지 계속해서 실행됩니다.
// // 각 선언문은 위에서 아래 방향으로 순차적으로 실행되며,
// // 마지막 선언문 실행을 마친 뒤에는 상단의 첫 선언문으로 되돌아갑니다.
// function draw() {
//   background(0); // 배경색을 검정색(0)으로 지정
// //   y = y + random(-3,2);
  
//   for(let i = 0, z = 0; i < 2000; i++){
//     line(0, height, width, y-z+random(2,-2));
//     z+=2;
   
//   }

// }




// function setup() {
//     // 캔버스 크기를 너비 720픽셀, 높이 720픽셀로 설정
//     createCanvas(720, 400);
//   }
  
//   function draw() {
//     // 배경색을 검정색(0)으로 지정, noFill()로 면채우기 기능 해제
//     background(0);
//     noFill();
      
//     // point()의 괄호 안 두 인수로 좌표값 지정
//     // 첫번째 인수는 x값을, 두번째 인수는 y값 의미
//     stroke(255);
//     point(width * 0.5, height * 0.5);
//     point(width * 0.5, height * 0.25);
  
//     // 좌표를 활용해 점 뿐 아니라 모든 도형을 그릴 수 있습니다.
//     // 각 함수별 괄호에 적힌 매개변수들은 각기 다른 목적을 위해 사용됩니다.
//     // 예를들어 line()함수에 쓰인 처음 두 매개변수들은 각각 첫번째 그리고 두번째 끝점을 지정합니다.
//     stroke(0, 153, 255);
//     line(0, height * 0.33, width, height * 0.33);
  
//     // rect()함수의 처음 두 매개변수는 상단 모서리의 좌표값을 의미하고,
//     // 그 다음 두 매개변수는 너비와 높이를 지정합니다.
//     stroke(255, 153, 0);
//     rect(width * 0.25, height * 0.1, width * 0.5, height * 0.8);
//   }






/////////////////////////////그림자/////////////////////
/// let x = 100;
// let y = 100;

// function setup() {
//         createCanvas(windowWidth, windowHeight)

//     drawingContext.shadowOffsetX = 5;
//     drawingContext.shadowOffsetY = -5;
//     drawingContext.shadowBlur = 10;
//     drawingContext.shadowColor = "black";
//     background(200);
//     ellipse(width/2, height/2, 50, 50);
//   }
  


// function draw() {
//   fill(255);
//   ellipse(mouseX,mouseY,50,50);
// }
// const s = ( p ) => {

//     let x = 100; 
//     let y = 100;
  
//     p.setup = function() {
//       p.createCanvas(700, 410);
//     };
  
//     p.draw = function() {
//       p.background(0);
//       p.fill(255);
//       p.rect(x,y,50,50);
//     };
//   };
  
//   let myp5 = new p5(s);




///////////////////////////이미지 커서에 올리기//////////////
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
///////////////////////////이미지 커서에 올리기//////////////






// let x = 0;
// let y = 0;
// function setup() {
//     createCanvas(windowWidth, windowHeight-3);
//     stroke('purple'); 
//     strokeWeight(10);
//     point(30, 20);
//     fill(123,234,190,100);
//     rect(300,300,50);
//   }

//   function draw() {
//     background('lightblue')
//     circle(mouseX+random(-10,10),mouseY+random(-10,10),random(10));
//     // x=x+1;
//     // strokeWeight(random(10,20));
//     // if(x > 300){
//     //     x = 50;
//     //     y = 100;
        
//     // }
//   }



//////////////////////////////////////////////////

// let x = 0;

// function setup() {
//   createCanvas(600, 400);
//   line(15, 25, 70, 10);
// }

// function draw() {
//   ellipse(x, height/2, 20, 20);
//   x = x +1;
// }

/////////////////////////////////////////////////////


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
