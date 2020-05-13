import WebComponent from '/components/webComponent.js';

export default class ExperienceCard extends WebComponent {

    toggleCard() {
        const container = super.root.querySelector('#container');
        const content = super.root.querySelector('#content');

        container.className = container.className === 'experience__container--closed' ? 
        'experience__container--open' : 'experience__container--closed';

        content.className = content.className === 'experience__content--hidden' ? 
        'experience__content' : 'experience__content--hidden';
    }
}