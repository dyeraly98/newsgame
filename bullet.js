function bullet(){
     
   this.y = 400;
   
   this.x = x;
         
   this.move=function(){
     this.y = this.y - 5;
   }
   
   this.drawBullet=function(){
      fill(255,0,0);
      ellipse(this.x,this.y,10,10);
   }
}