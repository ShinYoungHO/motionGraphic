let button = 0;

function setup() {
    let canvas = createCanvas(700, 700); 
    canvas.parent('paintingArea');

    let pen = document.getElementById('pen');
    let penButton = createButton('pen');
    penButton.size(200,50);
    penButton.parent(pen);
    penButton.mousePressed(drawPen);
    background(255);

    let del = document.getElementById('eraseAll');
    let delButton = createButton('eraseAll');
    delButton.size(200,50);
    delButton.parent(del);
    delButton.mousePressed(toWhite);
    background(255);

    let bubble = document.getElementById('bubble');
    let bubbleButton = createButton('bubble');
    bubbleButton.size(200,50);
    bubbleButton.parent(bubble);
    bubbleButton.mousePressed(drawBubble);
    background(255);

    let eraser = document.getElementById('eraser');
    let eraserButton = createButton('eraser');
    eraserButton.size(200,50);
    eraserButton.parent(eraser);
    eraserButton.mousePressed(ereser);
    background(255); 
    frameRate(100);

    let color = document.getElementById('color');
    let colorButton = createButton('color');
    colorButton.size(200,50);
    colorButton.parent(color);
    colorButton.mousePressed(colorPick);
    background(255); 
    frameRate(100);
}

function drawBubble(){
    button='bubble';
 }
 function ereser(){    
    button='eraser'
 }
 function drawPen(){
    button='pen'
 }
 function colorPick(){
    button='color'
 }
 function viewSelectedColor(){
    button='color'
 }
function draw() {
    // let a = color(100,255,255);
    // let colorView = document.getElementById('colorView');
    // let colorBackground = createButton('SelectedColor');
    // colorBackground.size(200,50);
    // colorBackground.parent(colorView);
    // colorBackground.style('background-color',a );
    // colorBackground.mousePressed(viewSelectedColor);


    if(button === 'bubble'){
        if(mouseIsPressed){
            circle(mouseX+random(-10,10),mouseY+random(-10,10),random(10));
        }
    }
    if(button === 'eraser'){
        if(mouseIsPressed){
            circle(mouseX, mouseY, 20);
            noStroke();
            // cursor(WAIT,20,20)
        } 
    }
    if(button === 'pen'){
        if(mouseIsPressed){
            line(pmouseX, pmouseY, mouseX, mouseY)
        }
    }
    // if(button === 'color'){
    //     if(mouseIsPressed){
    //         line(pmouseX, pmouseY, mouseX, mouseY)
    //     }
    // }
 }


 function toWhite(){
     background(255)
 }
 
