class SlingShot{
    constructor(bodyA, pointB){

        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);

    }

    fly()
    {
        this.sling.bodyA = null;
    }

    display()
    {
        if(this.sling.bodyA)
        {
        push();
        var posBodyA = this.sling.bodyA.position;
        var posPointB = this.pointB;

        strokeWeight(7);
        stroke(81, 224, 183);
        line(posBodyA.x, posBodyA.y, posPointB.x, posPointB.y);
        pop();
        }
    }
    
}