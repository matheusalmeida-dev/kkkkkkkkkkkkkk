const redButton = document.getElementById('redButton');
const greenButton = document.getElementById('greenButton');
const redOverlay = document.getElementById('redOverlay');
const greenOverlay = document.getElementById('greenOverlay');
const redAudio = document.getElementById('redAudio');
const greenAudio = document.getElementById('greenAudio');

redButton.addEventListener('click', function() {
    redOverlay.style.opacity = "1";
    redOverlay.style.width = "100%";
    redOverlay.style.height = "100%";
    redAudio.play();
});

greenButton.addEventListener('click', function() {
    greenOverlay.style.opacity = "1";
    greenOverlay.style.width = "100%";
    greenOverlay.style.height = "100%";
    greenOverlay.play();  // Inicia a reprodução do vídeo
    greenAudio.play();
});
