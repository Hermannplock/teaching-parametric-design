const sketchHeight = 400;
const sketchWidth = 400;


function setup() {
  createCanvas(sketchWidth, sketchHeight,);

}



function draw(){
 noLoop();
 background(255);
 fill (240);
 

 
 for (let i= 70; i <= 340; i += 60 ){
   let circleRadius = 60 + i * 0.18
   circle (70, i, circleRadius);
  }
   
  for (let i= 70; i <= 340; i += 60 ){
    let circleRadius = 60 + i * 0.18 
    circle (330, i, circleRadius);
   
  }

  for (let i= 90; i <= 340; i += 60 ){
    let circleRadius = 125 - i * 0.18
    rotate 
    circle (200, i, circleRadius);

    save ('circles.png')
  }
} 



