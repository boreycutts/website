const components = [
    "header"
];

export default function defineComponents() {
    for(const c in components) {
        const component = components[c];
        const path = "/components/" + component + "/" + component + ".js";
        console.log(path);
        import(path).then(result => {
            customElements.define("x-" + component, result.default);
        })
    }
}