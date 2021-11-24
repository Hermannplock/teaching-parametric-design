const sketchHeight = 400;
const sketchWidth = 400;


function setup() {
  createCanvas(sketchWidth, sketchHeight, SVG);
  angleMode(DEGREES);
}



function draw(){
 noLoop();
 background("white");
 fill ("white");
 stroke ("red");

 for (let i= 120; i <= 340; i += 5 ){
   let rectSize = 10 + i * 0.18
   rect (i ,10 ,rectSize);
   rotate(20);
  }
  for (let i= 120; i <= 340; i += 5 ){
    let rectSize = 10 + i * 0.18
    rect (i ,10 ,rectSize);
    rotate(20);

  save('rectangles')

  } 
 
}


