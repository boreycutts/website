import WebComponent from '/components/webComponent.js';

export default class SectionProjects extends WebComponent {
    projectList = [
        {
            name: 'This Website/Component Framework',
            description: 'While it might seem slightly redundant I do think it\'s worth mentioning. I used a pretty standard stack (HTML, SASS and JS), but what makes it unique is that I built it on top of a custom JavaScript framework I developed which leverages the functionality of HTML5 Web Components. I\'m still working on the repo/documentation for the framework but you check out the website source on my GitHub linked below. (p.s. try using the konami code)',
            tools: ['HTML5', 'SASS', 'JavaScript', 'NodeJS']
        },
        {
            name: 'Alexa Shelf',
            description: 'An Ikea shelf that doubles as an Alexa. This was originally just with a WS2182B LED strip inside controlled by an Arduino to do little animations and whatnot, but that turned out to be pretty boring. So I took a voice assistant that I built previously out of a microphone, speaker and Raspberry Pi (that was also, by itself, pretty boring) and smashed them together to make a not boring interactive shelf. The Pi runs a slightly modified version of AlexaPi on startup and sends serial data to the Arduino to control the LEDs when doing voice command stuff.',
            tools: ['Arduino', 'Raspberry Pi', 'LEDs', 'Soldering', 'Linux']
        },
        {
            name: 'Guitar Hero Controller',
            description: 'I really wanted to play Guitar Hero one day but the only system I had that game on was the Nintendo Wii and I had just recently gutted my Wii for parts. Now I didn\'t feel like buying a whole new Wii just for maybe 15 minutes of Guitar Hero, so I gutted the controller and rebuilt it using an Arduino. I flashed it with firmware to allow it to function as a generic keyboard and installed some LEDs (because everything I do has to involve LEDs for some reason) on the outside to make it light up as you play. Now I can play Guitar Hero whenever I want...well really I haven\'t touched it in months but the people in my office seem to enjoy it.',
            tools: ['Arduino', 'LEDs', 'Soldering']
        },
        {
            name: 'SNORE',
            description: 'This was my senior design project for college that I worked on with couple of Electrical Engineers. Basically it\'s a wireless battery powered device that you wear while you sleep that uses an FFT based algorithm to record your snoring patterns and sends them to your mobile phone via Bluetooth. Your snoring patterns are then plotted on your phone and saved for later analysis. This was a really interesting project not only because it was the first Android app that I developed, it also taught me that I actually snore a lot in my sleep.',
            tools: ['Arduino', 'Android', 'Java', 'Bluetooth', 'Soldering']
        },
        {
            name: 'FFT',
            description: '',
            tools: ['Unity', 'C#', 'Android']
        },
        {
            name: 'PIC Flappy Bird',
            description: '',
            tools: ['PIC', 'C', 'LEDs']
        },
        {
            name: 'Portable Arcade',
            description: '',
            tools: ['']
        },
    ]
}