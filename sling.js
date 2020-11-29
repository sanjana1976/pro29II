class Sling{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 5
        }
       // this.sling1= loadImage("sprites/sling1.png");
        //this.sling2= loadImage("sprites/sling2.png");
        //this.sling3= loadImage("sprites/sling3.png");

        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        if(this.sling.bodyA){
       // image(this.sling1,200,20);
      //  image(this.sling2,170,20);
       
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(7);
            stroke(48,22,8);


         
            line(pointA.x,pointA.y,pointB.x,pointB.y);

           // image(this.sling3,pointA.x+25,pointA.y-10,15,30);
        }

        
           // line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
}






 