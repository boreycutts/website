import WebComponent from '/components/webComponent.js';

export default class SkillCard extends WebComponent {
    expandContainer() {
        console.log((window.innerWidth - 100) % 110);
        if((window.innerWidth - 100) % 110 < 48 && (window.innerWidth - 100) % 110 > 0) {
            const container = document.getElementById('skills-container');
            container.style.width = 'calc(100% + 50px)';
        }
    }
    
    collapseContainer() {
        const container = document.getElementById('skills-container');
        container.style.width = '100%';
    }
}