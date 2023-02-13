function setup(){
  createCanvas(800,700);
  background(32);
  stroke(200);
  fill(200);
}

function draw(){
  drawTree();

  if(frameCount % 10 == 5)drawFog(); 
}


function drawFog(){
  push();
  fill(32, 16);
  noStroke();
  rect(0,0,width,height);
  pop();
}

function drawTree(){
    let bLen = random(150,200);
    let bAng = -PI*0.5;

    push();
    translate(random(width), height*1.8);
    branch(bLen, bAng); 
    pop();
}

function branch(len, theta){
  push();
  rotate(theta); 
  stroke(255);
  strokeWeight(sqrt(len)*0.05);

  fill(255,0,0,random(95,100));
  rect(0,0, len, len);
  
  fill(255,255,10,random(95,100));
  rect(10,10, len/1.3, len/1.3);
  
  fill(0,0,255,random(90,100));
  rect(20,20, len/1.6, len/1.6);
  
   fill(255,0,0,random(90,100));
  rect(30,30, len/1.9, len/1.9);
  
    fill(255,255,10,random(90,100));
  rect(40,40, len/2.2, len/2.2);
  
  fill(0,0,255,random(95,100));
  rect(50,50, len/2.5, len/2.5);
  
     fill(255,0,0,random(95,100));
  rect(60,60, len/2.8, len/2.8);
  
    fill(255,255,10,random(95,100));
  rect(70,70, len/3.1, len/3.1);
  
  fill(0,0,255,random(95,100));
  rect(80,80, len/3.4, len/3.4);
  
  
  translate(len,0);

  if(len > 4.0){ 
    let newAng = random(PI*0.1); 
    let newLen = len * random(0.4,0.8);
    branch(len * random(0.4,0.9), - newAng); 
    branch(len * random(0.4,0.9), newAng);   
  }
  pop();
}