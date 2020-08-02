import { defineComponents } from '/components/webComponent.js';
import { startGame } from '../game/game.js';

const components = [
    'header',
    'experienceCard',
    'projectCard',
    'sectionAbout',
    'sectionExperience',
    'sectionProjects',
    'sectionSkills',
    'skillCard',
];
defineComponents(components);

document.getElementsByTagName('main')[0].addEventListener('scroll', (event) => {
    const viewHeight = event.target.clientHeight;
    const offset = 500;
    const elements = Array.from(document.getElementsByClassName('animation--scroll-fade-out'));
    for(const e in elements) {
        const element = elements[e];
        const bounding = element.getBoundingClientRect();
        const offset = window.innerHeight * 0.5;
        if(bounding.y <= offset) {
            element.classList.remove('animation--scroll-fade-out');
            element.classList.add('animation--scroll-fade-in');
        }
    }
});

let konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
let konamiCount = [...konamiCode];

addEventListener('keydown', event => {
    if(event.keyCode === konamiCount[0]) {
        if(konamiCount.length > 1) {
            konamiCount.splice(0, 1);
        } else {
            const cvs = document.getElementById('game-canvas');
            cvs.classList.remove('game__hidden');
            cvs.classList.add('game');
            window.addEventListener("keydown", function(e) {
                if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
                    e.preventDefault();
                }
            }, false);
            startGame(60);
        }
    } else {
        konamiCount = [...konamiCode];
        if(event.keyCode === konamiCount[0]) {
            konamiCount.splice(0, 1);
        }
    }
});

const cvs = document.getElementById('game-canvas');
            cvs.classList.remove('game__hidden');
            cvs.classList.add('game');
            window.addEventListener("keydown", function(e) {
                if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
                    e.preventDefault();
                }
            }, false);
            startGame(60);
