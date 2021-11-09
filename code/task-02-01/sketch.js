const sketchHeight = 400;
const sketchWidth = 400;


function setup() {
  createCanvas(sketchWidth, sketchHeight);
  angleMode(DEGREES);
}



function draw(){
 noLoop();
 background(240);
 fill (240);
 
 for (let i= 120; i <= 340; i += 5 ){
   let rectSize = 10 + i * 0.18
   rect (i ,10 ,rectSize);
   rotate(20);
  }
  for (let i= 120; i <= 340; i += 5 ){
    let rectSize = 10 + i * 0.18
    rect (i ,10 ,rectSize);
    rotate(20);

  

  } 
 
}
