
export default class Bird{
    constructor(){
        this.x = 150;
        this.y = 200;
        this.vy = 0;

        this.width = 30;
        this.height = 30;

        this.weight = 1;
        this.frameX = 0;
    }

    update(spacePressed, frame, angle){
        const curve = Math.sin(angle) * 20
        const padding = this.height *3;
        // console.log(curve, " ", padding, " ", this.y, " ", canvas.height);

        if(this.y + padding + curve > canvas.height){

            this.y = canvas.height - padding - curve; 
            this.vy = 0;
        } else if(this.y < 0){
            this.y = 0;
            this.vy = 0;
        }else{
            this.vy += this.weight;
            this.vy *= 0.9;
            this.y += this.vy;
        }

        if(spacePressed){
            this.flap(frame);
        }
    }

    draw(ctx){
        ctx.fillStyle = 'red';
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }

    flap(frame){
        this.vy -= 2;
    }

}