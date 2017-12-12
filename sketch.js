var victim1;
var victim2;
var victim3;
var victim4;
var victim5;
var victim6;
var victim7;
var victim8;

var victim9;
var victim10;
var victim11;
var victim12;

var img;

var x=320;
var y=400;

var b = [];
var m;
var t=300;
var i = 0;
var i2 = 0;
var j = 0;

var time1=10000;


var victim1hit= false;
var victim2hit= false;
var victim3hit= false;
var victim4hit= false;
var victim5hit= false;
var victim6hit= false;
var victim7hit= false;
var victim8hit= false;

var victim9hit= false;
var victim10hit= false;
var victim11hit= false;
var victim12hit= false;


 
function setup() {
  createCanvas(640,429);

  
 img = loadImage('street.jpg');
  
  victim1 = new Victim("east",1,color(0));
  victim2 = new Victim("west",2,color(0));
  victim3 = new Victim("east",2,color(0));
  victim4 = new Victim("west",1,color(0));
  victim5 = new Victim("east",3,color(0));
  victim6 = new Victim("west",3,color(0));
  victim7 = new Victim("east",1,color(0));
  victim8 = new Victim("west",2,color(0));
  
  
  victim9 = new Victim("east",5,color(255));
  victim10 = new Victim("west",5,color(255));
  victim11 = new Victim("east",6,color(255));
  victim12 = new Victim("west",6,color(255));
  
 /* for(i = 0; i<30; i++){
    b[i] = new bullet();
  } */
}

function draw() {
   
  background(img, 0,0);
  noStroke;

 fill (255,255,255);
   textSize(15);
   text("Move with left and right arrow keys.", 10, 40);
   text("Shoot by clicking mouse.", 10,65);
  

  if(t < height) {
    t--;
  }
  
  
  //player 
  
  fill(0,0,255);
  rect(x,y,30,30); 
  
  if(keyIsDown(LEFT_ARROW)){
    if(x-5 >= 0)
      x -= 5;
    else
      x = 0
    
  }
  if(keyIsDown(RIGHT_ARROW)){
    if(x+5 < 640 - 30)
      x += 5;
    else
      x = 640 - 30
  }
  
  //bullet collide with victim
  if (!victim1hit){
    for(i = 0; i < b.length; i++){
     
      victim1hit = collideRectCircle(victim1.x,victim1.y,10,15,b[i].x,b[i].y,10);
      }
 }
  else {
 
   fill (47,191,69);
   textSize(18);
   text("Victim: 55 year old black man, unarmed", 90, 300);
   text("Court decision: You are acquited!", 90, 325);
    }
  if (!victim2hit){
    for(i = 0; i < b.length; i++){
      
      victim2hit = collideRectCircle(victim2.x,victim2.y,10,15,b[i].x,b[i].y,10);
      }
 }
else {
 
   fill (47,191,69);
   textSize(18);
   text("Victim: 27 year old black man, unarmed", 10, 350);
   text("Court decision: You are acquited!", 10, 375);
  }

    
 if (!victim3hit){
   for(i = 0; i < b.length; i++){
     
      victim3hit = collideRectCircle(victim3.x,victim3.y,10,15,b[i].x,b[i].y,10);
      }
   }
 else {
 
   fill (47,191,69);
   textSize(18);
   text("Victim: 44 year old black woman, unarmed", 50, 100);
   text("Court decision: You are acquited!", 50, 125);
  }
 
    
  if (!victim4hit){
    for(i = 0; i < b.length; i++){
   
      victim4hit = collideRectCircle(victim4.x,victim4.y,10,15,b[i].x,b[i].y,10);
      }
  }
 
else {
 
   fill (47,191,69);
   textSize(18);
   text("Victim: 31 year old black man, unarmed", 40, 200);
   text("Court decision: You are acquited!", 40, 225);
  }
 
    
  if (!victim5hit){
    for(i = 0; i < b.length; i++){

      victim5hit = collideRectCircle(victim5.x,victim5.y,10,15,b[i].x,b[i].y,10);
      }
  }
 
else {
 
   fill (47,191,69);
   textSize(18);
   text("Victim: 50 year old black woman, unarmed", 70, 400);
   text("Court decision: You are acquited!", 70, 425);
  
 
    }
  if (!victim6hit){
    for(i = 0; i < b.length; i++){
  
      victim6hit = collideRectCircle(victim6.x,victim6.y,10,15,b[i].x,b[i].y,10);
      }
    }
 else {
 
   fill (47,191,69);
   textSize(18);
   text("Victim: 23 year old black man, unarmed", 50, 325);
   text("Court decision: You are acquited!", 50, 350);
  }
 
    
  if (!victim7hit){
    for(i = 0; i < b.length; i++){
     
      victim7hit = collideRectCircle(victim7.x,victim7.y,10,15,b[i].x,b[i].y,10);
      }
    }
  else {
 
   fill (47,191,69);
   textSize(18);
   text("Victim: 35 year old black man, unarmed", 30, 50);
   text("Court decision: You are acquited!", 30, 75);
  }
 
    
  if (!victim8hit){
    for(i = 0; i < b.length; i++){
 
      victim8hit = collideRectCircle(victim8.x,victim8.y,10,15,b[i].x,b[i].y,10);
      }
  }
 
 else {
 
   fill (47,191,69);
   textSize(18);
   text("Victim: 58 year old black man, unarmed", 90, 50);
   text("Court decision: You are acquited!", 90, 75);
  }
 
    
  if (!victim9hit){
    for(i = 0; i < b.length; i++){

      victim9hit = collideRectCircle(victim9.x,victim9.y,10,15,b[i].x,b[i].y,10);
      }
  }
 
 else {
 
   fill (255,0,0);
   textSize(18);
   text("Victim: 35 year old white man, unarmed", 300, 130);
   text("Media: How dare you! #AllLivesMatter", 300, 155);
  }
 
    
  if (!victim10hit){
    for(i = 0; i < b.length; i++){
     
      victim10hit = collideRectCircle(victim10.x,victim10.y,10,15,b[i].x,b[i].y,10);
      }
  }
 
else {
 
   fill (255,0,0);
   textSize(18);
   text("Victim: 42 year old white man, armed", 200, 300);
   text("Media: How dare you! #AllLivesMatter", 200, 325);
  }
 
    
  if (!victim11hit){
    for(i = 0; i < b.length; i++){
     
      victim11hit = collideRectCircle(victim11.x,victim11.y,10,15,b[i].x,b[i].y,10);
      }
  }
else {
 
   fill (255,0,0);
   textSize(18);
   text("Victim: 30 year old white man, armed", 30, 400);
   text("Media: How dare you! #AllLivesMatter", 30, 425);
  }
 
    
  if (!victim12hit){
    for(i = 0; i < b.length; i++){
  
      victim12hit = collideRectCircle(victim12.x,victim12.y,10,15,b[i].x,b[i].y,10);
      }} else
        {
 
   fill (255,0,0);
   textSize(18);
   text("Victim: 27 year old white man, unarmed", 70, 240);
   text("Media: How dare you! #AllLivesMatter", 70, 265);
  }
    

   
   
  for(i = 0; i < b.length;i++){
    b[i].drawBullet();
    b[i].move();
  }   
  
 //victims

  victim1.move();
  victim1.drawVictim();
  
  victim2.move();
  victim2.drawVictim();
  
  victim3.move();
  victim3.drawVictim();  
  
  victim4.move();
  victim4.drawVictim();
  
  victim5.move();
  victim5.drawVictim();
  
  victim6.move();
  victim6.drawVictim();
  
  victim7.move();
  victim7.drawVictim();
  
  victim8.move();
  victim8.drawVictim();
  
  
  victim9.move();
  victim9.drawVictim();
  
  victim10.move();
  victim10.drawVictim();
  
  victim11.move();
  victim11.drawVictim();
  
  victim12.move();
  victim12.drawVictim();
    
}

function mousePressed()
{
  append(b,new bullet());
}


