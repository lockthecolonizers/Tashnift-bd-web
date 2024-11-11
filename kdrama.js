// Functie om hartjes te genereren en ze over het hele scherm te laten bewegen
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤️';

    // Willekeurige startpositie voor elk hartje
    const startX = Math.random() * window.innerWidth;  // Willekeurige horizontale startpositie
    const startY = Math.random() * window.innerHeight; // Willekeurige verticale startpositie

    // Willekeurige eindpositie voor elk hartje
    const endX = (Math.random() - 0.5) * 1200; // Willekeurige horizontale beweging (van -600px tot 600px)
    const endY = (Math.random() - 0.5) * 1200; // Willekeurige verticale beweging (van -600px tot 600px)

    // Stel de positie van het hartje in via de CSS-variabelen voor de animatie
    heart.style.left = startX + 'px';
    heart.style.top = startY + 'px';
    heart.style.setProperty('--endX', `${endX}px`);
    heart.style.setProperty('--endY', `${endY}px`);

    // Voeg het hartje toe aan het hartjes-containerelement
    document.getElementById('hearts').appendChild(heart);

    // Verwijder het hartje na de animatie om het DOM schoon te houden
    setTimeout(() => {
        heart.remove();
    }, 6000); // Duurt net zo lang als de animatie
}

// Maak elke 100 milliseconden een nieuw hartje
setInterval(createHeart, 100);

// Functie om de verrassingsbrief zichtbaar te maken wanneer je op de knop klikt
function revealLoveLetter() {
    const surpriseDiv = document.getElementById('surprise');
    
    // Verwijder de 'hidden' klasse en voeg de 'visible' klasse toe
    surpriseDiv.classList.remove('hidden');
    surpriseDiv.classList.add('visible');
}