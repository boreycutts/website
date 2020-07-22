import { objects }  from './objects/objects.js';
import { player } from './objects/player.js';

const ARROW_KEYS = [ 87, 38, 83, 40, 65, 37, 68, 39 ];
const FIRE_KEY = 32;

const cvs = document.getElementById('game-canvas');

cvs.width = window.innerWidth;
cvs.height = window.innerHeight;

const ctx = cvs.getContext('2d');
const canvasColor = '#3a3a3a';
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
        player.stop(event.keyCode);
    } else if(event.keyCode === FIRE_KEY) {
        objects.bullets.stopFire();
    }
});

function update() {
    for(const i in objects) {
        objects[i].update();
    }
}

function draw() {
    ctx.fillStyle = canvasColor;
    ctx.fillRect(0, 0, cvs.width, cvs.height);

    for(const i in objects) {
        objects[i].draw(ctx);
    }
}

export function loop() {
    update();
    draw();
    frames++;
    requestAnimationFrame(loop);
}