export default class WebComponent extends HTMLElement {
    constructor() {
        super();
    }

    async connectedCallback() {
        fetch('/components/experienceCard/experienceCard.html')
            .then(result => {
                result.text()
                    .then(innerHTML => {
                        let newHTML = innerHTML;
                        const experssions = innerHTML.match(/{([^}]+)}/g);
                        
                        for(const e in experssions) {
                            const key = experssions[e].replace(/[{}]/g, "");
                            newHTML = newHTML.replace(/{([^}]+)}/, this.getAttribute(key));
                        }

                        this.innerHTML = newHTML;

                        let elements = this.getElementsByTagName('*');
                        for(const e in elements) {
                            if(elements[e].onclick) {
                                elements[e].onclick = this[elements[e].getAttribute('onclick')];
                            }
                        }

                        this.self = this;
                    }) 
            })
    }

    get root() {
        let el = this;
        while(el.parentNode) {
            el = el.parentNode;
            if(el.tagName.includes('-')) {
                return el;
            }
        }
    }
}