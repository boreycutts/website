import { defineComponents } from '/components/webComponent.js';
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
})

console.clear();