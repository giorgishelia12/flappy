

const obstacleArray = [];

let score = 0;

class Obstacle {
    constructor(gamespeed){
        this.top = (Math.random() * canvas.height/3) + canvas.height/5; //ზედა მილი
        this.bottom = (Math.random() * canvas.height/3) + canvas.height/5; //ქვედა მილი
        this.x = canvas.width; 
        this.width = 20; // მილი ის სიგანე
        this.color = 'green'; // მილი ფერი 
        this.gamespeed =gamespeed; // თამაშის სისწრაფე
        this.counted = false;
        
    }
    draw(ctx){
        ctx.fillStyle=this.color;
        ctx.fillRect(this.x, 0, this.width, this.top ); // ზედა მილი
        ctx.fillRect(this.x, canvas.height - this.bottom, this.width, this.bottom) // ქვედა მილი

    }
    update(ctx,  ){
        this.x -= this.gamespeed;

        this.draw(ctx, );
    }
}
//მილების დახატვა და განახლება
function handleObstacle(frame, gamespeed, ctx, canvas, bird, score ){
    if(frame%100 === 0){
        obstacleArray.unshift(new Obstacle(gamespeed, canvas, score));
    }
    for(let i = 0; i < obstacleArray.length; i++){
        obstacleArray[i].update(ctx, bird, score);
    }
    if(obstacleArray.length > 20 ){
        obstacleArray.pop(obstacleArray[0])
    }
}

export {Obstacle, handleObstacle, obstacleArray}