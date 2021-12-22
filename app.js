let questions = [
    "Combien font 2 + 2 x 4 ?",
    "Combien il y a d'habitant en France ?",
    "Quel est l'anime le plus aimé du monde ? ",
    "Combien mesure la plus grande tour du monde ?",
    "Combien de saison possède l'anime 'Naruto' (en tout) ? ",
    "Quel est l'artiste français à occuper le plus souvent la première place spotify ?",
    "Parmis ses vidéo laquelle à été la plus visionnée de YouTube ?",
    "Quel est la souris d'ordinateur la plus vendu au monde ?",
    "Parmis les propositions suivantes, quel jeu est le plus jouer au monde ?",
    "Quel est le language de programmation le plus utilisé du monde ?"
]

let reponse = [
    ["8", "12", "14", '10'],
    ["35 millions", "124 millions", "63 millions", "67 millions", "84 mille"],
    ["Naruto", "One piece", "Batman", "One punch man"],
    ["Burj Khalifa", "Big ben", "Tokyo Skytree"],
    ["9", "19", "28", "30"],
    ["Damso", "Nekfeu", "SCH", "Booba", "Ninho"],
    ["Gamnam style", "Baby Shark"],
    ["Logitech G502", "Razer DeathAdder V2 Pro"],
    ["GTA V", " The Elder Scrolls V: Skyrim", "Minecraft", "Fortnite"],
    ["Java", "C/C++", "Python", "JavaScript"]
]

$('#containerQuestions').append('<input id="questionResponse" type="text" placeholder="Entrez votre réponse"/>')
let inputResponse = $('#questionResponse').hide();

let counter = 0;
let point = 0;

$('#startGame').click(function () {
    $('#startGame').html('Suivant');
    $('#welcomeText').html(questions[counter].toString());
    $('#reponse').html(reponse[counter].toString() + '<br>');
    counter++;
    inputResponse.show();

})