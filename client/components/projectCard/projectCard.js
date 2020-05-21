import WebComponent from '/components/webComponent.js';

export default class ProjectCard extends WebComponent {
    expandCard() {
        if(this.classList.contains('project__container--closed')) {
            this.classList.remove('project__container--closed');
            this.classList.add('project__container--open');
            
            const content = Array.from(super.root.getElementsByClassName('project__content--closed'))[0];
            content.classList.remove('project__content--closed');
            content.classList.add('project__content--open');

            setTimeout(() => { this.scrollIntoView({ inline: 'center', block: 'center', behavior: 'smooth' }) }, 500);
        } else {
            this.classList.remove('project__container--open');
            this.classList.add('project__container--closed');

            const content = Array.from(super.root.getElementsByClassName('project__content--open'))[0];
            content.classList.remove('project__content--open');
            content.classList.add('project__content--closed');
        }
    }
}