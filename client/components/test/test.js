export default class Test extends HTMLElement {
    async connectedCallback() {
        let res = await fetch('/components/test/test.html');
        this.innerHTML = await res.text();
    }
}