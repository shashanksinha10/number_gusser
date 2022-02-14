const msgEl = document.getElementById('msg')
const randomNum = getRandomNum();

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition = new window.SpeechRecognition();

// start recognition 
recognition.start();


// reconition user input
function onSpeak(e) {
    console.log(e);
}


// Dynamic Number Generation
function getRandomNum () {
    return  Math.floor(Math.random() * 100) + 1; 
}

// speek capture
recognition.addEventListener('speech', onSpeak);

console.log(randomNum)