function Victim(navigation,speed,color){
   this.speedVictim=speed;
   if (navigation == "west"){
      this.directionX=-1} else if (navigation == "east") {
         this.directionX=1
         
      }
  this.speedVictim=this.speedVictim*this.directionX;    
   this.y=random(30,340);
   this.colorVictim=color;
   this.x=width/2;
         
   this.move=function(){
      this.x=this.x+this.speedVictim;
      if (this.x>width+10){
         this.x=-5;
      }
      if (this.x<-10){
         this.x=width+5;
      }
   }
   
   this.drawVictim=function(){
      fill(this.colorVictim);
      rect(this.x,this.y,15,15);
      noStroke;
   }
}
