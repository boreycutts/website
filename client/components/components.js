export default function defineComponents(components) {
    const camelToSnake = string => {
        return string.replace(/[\w]([A-Z])/g, function(m) {
            return m[0] + "-" + m[1];
        }).toLowerCase();
    }

    for(const c in components) {
        const component = components[c];
        const path = "/components/" + component + "/" + component + ".js";
        console.log(path);
        import(path).then(result => {
            customElements.define("x-" + camelToSnake(component), result.default);
        })
    }
}