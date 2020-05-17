import WebComponent from '/components/webComponent.js';

export default class ExperienceCard extends WebComponent {
    toggleCard() {
        const container = super.root.querySelector('#container');
        const content = super.root.querySelector('#content');

        if(container.classList.contains('experience__container--closed')) {
            container.classList.remove('experience__container--closed');
            container.classList.add('experience__container--open');

            content.classList.remove('experience__content--hidden');
            content.classList.add('experience__content');
        } else {
            container.classList.remove('experience__container--open');
            container.classList.add('experience__container--closed');

            content.classList.remove('experience__content');
            content.classList.add('experience__content--hidden');
        }
    }
}