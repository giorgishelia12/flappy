import Bird from './Bird.js'
import {handleObstacle, obstacleArray} from './obstacle.js'

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth - 100;
canvas.height = window.innerHeight - 100;

let spacePressed = false;
let frame = 0;
let gamespeed = 2;
let angle = 0;

const bird = new Bird();

function animate(){
    ctx.clearRect(0,0, canvas.width, canvas.height);
    bird.update(spacePressed, frame, angle);
    bird.draw(ctx);

    if(handleCollisions()) return

    handleObstacle(frame, gamespeed, ctx)
    requestAnimationFrame(animate);
    frame++;
    angle += 0.12
}
animate();

window.addEventListener('keydown', (e) =>{
    if(e.code === 'Space') spacePressed = true;
})

window.addEventListener('keyup', (e) =>{
    if(e.code === 'Space') spacePressed = false;
})

function handleCollisions(){
    for(let i=0; i<obstacleArray.length; i++){
        if(bird.x < obstacleArray[i].x + obstacleArray[i].width && 
            bird.x + bird.width > obstacleArray[i].x &&
            ((bird.y < 0 + obstacleArray[i].top && bird.y + bird.height > 0) ||
            (bird.y > canvas.height - obstacleArray[i].bottom &&
             bird.y + bird.height < canvas.height))
            ){
                ctx.font = '25px Georgia';
                ctx.fillStyle = 'black';
                ctx.fillText('Game Over', 160, canvas.height/2 -10)

                return true;
            }
    }
}