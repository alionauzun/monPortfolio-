//-----------------Fichier pour gérer les thèmes et les langues-----------------//
import flagUK from '../../assets/flag-of-uk.png';
import flagFR from '../../assets/flag-of-france.png';
import audio from '../../assets/audio.mp3';


let currentMode = 'light'; // Par défaut, le mode est clair
let currentLanguage = 'fr'; // Par défaut, la langue est le français
let isMusicPlaying = true; // Par défaut, la musique est activée

//-----------------Fonctions pour activer et désactiver la musique--
function stopMusic() {
    const audioPlayer = document.querySelector('.audio-player');
    audioPlayer.pause();
    audioPlayer.currentTime = 0;
    isMusicPlaying = false;
}

function playMusic() {
    const audioPlayer = document.querySelector('.audio-player');
    audioPlayer.src = audio;
    audioPlayer.play();
    audioPlayer.loop = true;
    isMusicPlaying = true;
}

function toggleMusic() {
    if (isMusicPlaying) {
        stopMusic();
    } else {
        playMusic();
    }
}

//-------Fonctions pour basculer entre le mode clair et foncé---//
function toggleDarkMode() {
    if (currentMode === 'light') {
        setDarkMode();
    } else {
        setLightMode();
    }
}

function setLightMode() {
    const body = document.querySelector('body');
    body.style.backgroundColor = 'white';
    body.style.color = 'black';
    currentMode = 'light';
}

function setDarkMode() {
    const body = document.querySelector('body');
    body.style.backgroundColor = 'black';
    body.style.color = 'white';
    currentMode = 'dark';
}

//-----------------Fonction pour basculer entre les langues-----------------//
function toggleLanguage() {
    if (currentLanguage === 'fr') {
        setLanguage('en');
    } else {
        setLanguage('fr');
    }
}

function setLanguage(language) {
    currentLanguage = language;
    const buttonLanguage = document.querySelector('.buttonLanguage img');
    const buttonLanguageText = document.querySelector('.buttonLanguage p');
    if (language === 'fr') {
        buttonLanguage.src = flagFR;
        buttonLanguageText.textContent = 'FR';
    } else {
        buttonLanguage.src = flagUK;
        buttonLanguageText.textContent = 'EN';
    }
}

export { toggleDarkMode, toggleLanguage, toggleMusic };
