export default class Header extends HTMLElement {
    async connectedCallback() {
        let res = await fetch('/components/header/header.html');
        this.innerHTML = await res.text();
    }
}