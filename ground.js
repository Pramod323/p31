class Ground{
    constructor(x,y){
        var options = {
            'isStatic': true
        }

        this.body = Bodies.rectangle(x,y,480,20,options);
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        noStroke();
        fill("white");
        rect(pos.x, pos.y, 480, 20);
    }
}