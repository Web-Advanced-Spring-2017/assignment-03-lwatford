//socket ref to the library
var socket;

var angle = 0;
var rectHeight=1000;
var diff=5;
var conLen;
var r,g,b;


function setup() {
  // var myCanvas =   
  createCanvas(windowWidth, windowHeight);
  // myCanvas.parent('canvas-container');
  // createCanvas(1800, 1000);
  background(255);
  noStroke();
  rectMode(CENTER);
  r = random(255);
  g = random(255);
  b = random(255);

  /*** SOCKET SETUP ***/
  socket = io.connect(); // can also have 127.0.0.1 instead of localhost
  
  socket.on('open', function(data) {
    console.log(data.hello);
    console.log('Hi the connection was establsihed!');
      socket.send("hello server");
  });

   socket.on('getConnection', handleData);
}

function draw() {



  noStroke();
  fill(92, 178, 157);

   // rect(150, 0, 1, rectHeight);

  background(255);
  blendMode(MULTIPLY);

  push();
  
  translate(width/2, height/2);

newDrawing();
  // mousePressed();

  pop();

  blendMode(NORMAL);

  angle = angle + 0.0001;

  if(rectHeight > 1000 || rectHeight < 180){
    diff*=-1;
  }

  // rectHeight = rectHeight+diff;

  // if(mousePressed == true) {
  //   fill(92, 178, 157);
  // }else{
  //   fill(255);
  // }
  // rect(150, 0, 1, rectHeight)
}



  // socket.on('newLine', function (data) {   //sever sent newLine data
  //   console.log('GOT A NEWLINE: ',data);
  //   //do something
  // });

  // socket.on('newDrawing', function (data) {   //sever sent newDrawing data
  //   console.log('GOT A NEWDRAWING: ',data);
  //   //do something
  // });
// }

function newDrawing() { 
// 
for (var i = 0; i < parseInt(conLen); i++) {
//   noStroke();
fill(random(255), random(255), random(255));
  rotate(degrees(angle));
  rect(150, 0, random(10), rectHeight); 
  rect(150, 0, random(10), rectHeight); 
  console.log('yo yo yo');
  // angle = angle + 1;
}
};

function handleData(data) {
console.log(data);
conLen = data.connectionLength;
console.log('connection length is ' + conLen);
};

function mousePressed() {
  // console.log('mousePressed: ' + rectHeight.x + ', ' + rectHeight.y);
var data = "cat";

  // var data = { "x": rectHeight, "y": rectHeight
  //   //i know my propblem is the data for the line to make
  //   // rect(150, mouseX, 1, mouseY); //i think my data is rong b/c its not dependent on the mouse the shape is the same
  // };

  // console.log(data)
  console.log("pressed from website");

  socket.emit('theMouseWasPressed', data);
  newDrawing();
  // prevent default
  return false;

};

