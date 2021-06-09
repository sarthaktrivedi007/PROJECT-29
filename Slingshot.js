class Slingshot{
    constructor(firstBody, secondBody){
        var options = {
            bodyA: firstBody,
            pointB: secondBody,
            stiffness: 0.04,
            length: 20
        }        
        this.pointB = secondBody
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }  

    display(){        
        if(this.sling.bodyA ){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            
            strokeWeight(4);
            fill("red");
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }

    fly(){
        this.sling.bodyA = null;
    }

    
    
}