class Plinko{
    constructor(x,y){
        var options = {
            'friction': 0,
            'restitution': 1,
            'isStatic': true
        }

        this.body = Matter.Bodies.circle(x,y,10,options);
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        ellipseMode(RADIUS);
        noStroke();
        fill("white");
        ellipse(0,0,10,10);
        pop();
    }
}