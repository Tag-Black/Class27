class Chain{


constructor(a, b)
{
    var options={
        bodyA: a, 
        bodyB: b,
        stiffness: 0.2,
        length: 201
    }

    this.body = Matter.Constraint.create(options);
    World.add(world, this.body);

}

display()
{
    var posA=this.body.bodyA.position;
    var posB=this.body.bodyB.position;
    push()
    strokeWeight(3);
    line(posA.x, posA.y, posB.x, posB.y);
    pop()   
}


}