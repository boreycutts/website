export default class WebComponent extends HTMLElement {
    async connectedCallback() {
        fetch('/components/experienceCard/experienceCard.html')
            .then(result => {
                result.text()
                    .then(innerHTML => {
                        console.log(this.attributes);
                        let newHTML = innerHTML;
                        const experssions = innerHTML.match(/{([^}]+)}/g);
                        console.log(experssions)
                        
                        for(const e in experssions) {
                            const key = experssions[e].replace(/[{}]/g, "");
                            newHTML = newHTML.replace(/{([^}]+)}/, this.getAttribute('text1'));
                        }

                        this.innerHTML = newHTML;
                    })
            })
    }
}