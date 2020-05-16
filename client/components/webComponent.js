const camelToSnake = string => {
    return string.replace(/[\w]([A-Z])/g, function(m) {
        return m[0] + "-" + m[1];
    }).toLowerCase();
}

const removeFirstAndLastChar = string => {
    return string.slice(1, -1);
}

export default class WebComponent extends HTMLElement {
    component;
    constructor() {
        super();
        const name = this.constructor.name
        this.component = name.charAt(0).toLowerCase() + name.slice(1);
    }

    #parseMarkupAttributes = innerHTML => {
        let newHTML = innerHTML;
        const expressions = innerHTML.match(/={([^}]+)}/g);
        
        for(const e in expressions) {
            const expression = expressions[e];
            let replaceString;

            if(expression.includes('this.')) {
                const fields = removeFirstAndLastChar(expression.replace('this', '').replace('=', '')).split('.');
                let value;
                for(const f in fields) {
                    if(value) {
                        value = value[fields[f]];
                    } else {
                        value = this[fields[f]];
                    }
                }
                replaceString = '=' + JSON.stringify(value);
            } else {
                const key = camelToSnake(expressions[e].replace(/[{}]/g, ""));
                replaceString = '=' + this.getAttribute(key);
            }
            
            newHTML = newHTML.replace(/={([^}]+)}/, replaceString);
        }

        this.innerHTML = newHTML;
    }

    #parseMarkupForLoops = innerHTML => {
        let newHTML = innerHTML;
        const experssions = innerHTML.match(/{\(for([^}]+)}/g);
        for(const e in experssions) {
            const expression = experssions[e].replace(/\s/g, '').match(/\(([^)]+)\)/g);
            const forExp = removeFirstAndLastChar(expression[0]).split(':');
            const markup = removeFirstAndLastChar(expression[1]);

            const key = forExp[1];
            const list = JSON.parse(this.getAttribute(camelToSnake(forExp[2])));
            
            let replaceString = '';
            for(const i in list) {
                const item = list[i];
                const newMarkup = markup.replace(/\[([^]+)\]/g, item);
                replaceString += newMarkup;
            }

            newHTML = newHTML.replace(/{\(for([^}]+)}/g, replaceString);
        }

        this.innerHTML = newHTML;
    }

    #parseMarkupVariables = innerHTML => {
        let newHTML = innerHTML;
        const expressions = innerHTML.match(/{([^}]+)}/g);
        
        for(const e in expressions) {
            const expression = expressions[e];
            let replaceString;

            if(expression.includes('this.')) {
                const field = removeFirstAndLastChar(expression.replace('this.', ''));
                replaceString = JSON.stringify(this[field]);
            } else {
                const key = camelToSnake(expressions[e].replace(/[{}]/g, ""));
                replaceString = this.getAttribute(key);
            }
            
            newHTML = newHTML.replace(/{([^}]+)}/, replaceString);
        }

        this.innerHTML = newHTML;
    }

    #parseMarkupOnClickHandlers = () => {
        let elements = this.getElementsByTagName('*');
        for(const e in elements) {
            if(elements[e].onclick) {
                elements[e].onclick = this[elements[e].getAttribute('onclick')];
            }
        }
    }

    async connectedCallback() {
        fetch('/components/' + this.component + '/' + this.component + '.html')
            .then(result => {
                result.text()
                    .then(innerHTML => {
                        this.#parseMarkupAttributes(innerHTML);
                        this.#parseMarkupForLoops(this.innerHTML);
                        this.#parseMarkupVariables(this.innerHTML);
                        this.#parseMarkupOnClickHandlers();
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

export function defineComponents(components) {
    for(const c in components) {
        const component = components[c];
        const name = "x-" + camelToSnake(component);
        const path = "/components/" + component + "/" + component + ".js";
        import(path).then(result => {
            customElements.define(name, result.default);
        })
    }
}