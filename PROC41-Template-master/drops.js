class Drops{
    constructor(x,y){
        var options={
            'restitution':0.5,
            'friction':0.5,
            'density':1
        }
        this.body=Bodies.circle(x,y,0.2,options);
        World.add(world,this.body);
    }

    display(){
        var pos= this.body.position;
        ellipse(pos.y,pos.y,0.2)
    }
}