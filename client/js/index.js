import defineComponents from "/components/components.js";
const components = [
    "header",
    "experienceCard",
];
defineComponents(components);

var i = 0;
var txt = 'Hello world!';
var speed = 100;

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("test").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

setTimeout(typeWriter, 2000);

console.clear();