class Snow {
    constructor(x,y){
        var options = {
            'friction': 0.1,
            'isStatic': false
        }
        this.body = Bodies.circle(x,y,5,options);
       // this.image = loadImage("snow5.webp");
        World.add(world,this.body);
    }

    update(){
        if(this.body.position.y > height){
            Matter.Body.setPosition(this.body,{x:random(0,600),y:random(0,750)});
            
        }
    }

    display(){
        var pos =this.body.position;
        ellipseMode(RADIUS);
        fill("white");
        ellipse(this.body.position.x,this.body.position.y,5,5);


    }
}