import { objects }  from './objects/objects.js';

const ARROW_KEYS = [ 87, 38, 83, 40, 65, 37, 68, 39 ];
const FIRE_KEY = 32;
const CANVAS_COLOR = '#3a3a3a';
const DEFAULT_FPS = 120;

const cvs = document.getElementById('game-canvas');
cvs.width = window.innerWidth;
cvs.height = window.innerHeight;
const ctx = cvs.getContext('2d');

ctx.strokeStyle = "#ffffff";
ctx.lineWidth = 2;
ctx.lineCap = "round";

let frames = 0;
let fpsInterval, startTime, now, then, elapsed;
let gameOver = false;

window.addEventListener('keydown', (event) => {
    if(ARROW_KEYS.includes(event.keyCode)) {
        objects.player.move(event.keyCode);
    } else if(event.keyCode === FIRE_KEY) {
        objects.bullets.startFire();
    }
})

window.addEventListener('keyup', (event) => {
    if(ARROW_KEYS.includes(event.keyCode)) {
        objects.player.stop(event.keyCode);
    } else if(event.keyCode === FIRE_KEY) {
        objects.bullets.stopFire();
    }
});

function updateObjects() {
    for(const i in objects) {
        if(typeof objects[i].update === 'function') {
            objects[i].update();
        }
    }
}

function drawObjects() {
    for(const i in objects) {
        if(typeof objects[i].draw === 'function') {
            objects[i].draw(ctx);
        }
    }
}

function clearCanvas() {
    ctx.fillStyle = CANVAS_COLOR;
    ctx.fillRect(0, 0, cvs.width, cvs.height);
}

function collisionDetection() {
    const bullets = objects.bullets.active;
    const enemies = objects.enemies.active;
    const playerPoints = [
        { position: { x: objects.player.position.x, y: objects.player.position.y } },
        { position: { x: objects.player.position.x + objects.player.width, y: objects.player.position.y + objects.player.height/2 } },
        { position: { x: objects.player.position.x, y: objects.player.position.y + objects.player.height } }
    ];

    for(let i = 0; i < playerPoints.length; i++) {
        const player = playerPoints[i];
        for(let j = 0; j < enemies.length; j++) {
            const enemy = enemies[j];
            if(player.position.x >= enemy.position.x && player.position.x <= enemy.position.x + enemy.width) {
                if(player.position.y >= enemy.position.y - enemy.height && player.position.y <= enemy.position.y) {
                    gameOver = true;
                    break;
                }
            }
        }
    }

    for(let i = 0; i < bullets.length; i++) {
        const bullet = bullets[i];
        for(let j = 0; j < enemies.length; j++) {
            const enemy = enemies[j];

            if(bullet.position.x >= enemy.position.x && bullet.position.x <= enemy.position.x + enemy.width) {
                if(bullet.position.y >= enemy.position.y - enemy.height && bullet.position.y <= enemy.position.y) {
                    bullets.splice(i, 1);
                    enemies.splice(j, 1);
                    i--;
                    j--;
                }
            }
        }
    }
}

function update() {
    updateObjects();
    objects.bullets.playerInfo = {
        position: objects.player.position,
        width: objects.player.width,
        height: objects.player.height
    };
    objects.enemies.playerInfo = { position: objects.player.position };
    collisionDetection();
}

function draw() {
    if(!gameOver) {
        clearCanvas();
    }
    drawObjects();
}

function animate() {
    requestAnimationFrame(animate);

    now = Date.now();
    elapsed = now - then;

    if (elapsed > fpsInterval) {
        then = now - (elapsed % fpsInterval);
        update();
        draw();
        frames++;
    }
}

export function startGame(fps) {
    fps = fps ? fps : DEFAULT_FPS;
    fpsInterval = 1000 / fps;
    then = Date.now();
    startTime = then;
    animate();
}