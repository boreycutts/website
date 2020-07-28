import { objects }  from './objects/objects.js';

const ARROW_KEYS = [ 87, 38, 83, 40, 65, 37, 68, 39 ];
const FIRE_KEY = 32;
const CANVAS_COLOR = '#3a3a3a';

const cvs = document.getElementById('game-canvas');
cvs.width = window.innerWidth;
cvs.height = window.innerHeight;
const ctx = cvs.getContext('2d');

ctx.strokeStyle = "#ffffff";
ctx.lineWidth = 2;
ctx.lineCap = "round";

let frames = 0;

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

function update() {
    updateObjects();
    objects.bullets.playerInfo = {
        position: objects.player.position,
        width: objects.player.width,
        height: objects.player.height
    };
}

function draw() {
    ctx.fillStyle = CANVAS_COLOR;
    ctx.fillRect(0, 0, cvs.width, cvs.height);

    drawObjects();
}

export function gameloop() {
    update();
    draw();
    frames++;
    requestAnimationFrame(gameloop);
}