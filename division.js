class Divison{
    constructor(x){
        var options = {
            'isStatic': true
        }

        this.body = Bodies.rectangle(x,640,10,300,options);
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        noStroke();
        fill("white");
        rect(pos.x, 650, 10, 300);
    }
}