let questions = [
    "Combien font 2 + 2 x 4 ?",
    "Combien il y a d'habitant en France ?",
    "Quel est l'anime le plus aimé du monde ? ",
    "Quelle est la plus grande tour du monde ?",
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

    if(counter < questions.length && counter < reponse.length) {
        $('#startGame').html('Suivant');
        $('#welcomeText').html(questions[counter].toString());
        $('#reponse').html(reponse[counter].toString() + '<br>');
        inputResponse.show();
        inputResponse.html('')

        if(questions[0] && inputResponse.get(0).value === "10") {
            point++;
            console.log(point);
        }

        if(questions[1] && inputResponse.get(0).value === "67 millions" ||inputResponse.get(0).value === "67" ||inputResponse.get(0).value === "67millions") {
            point++;
            console.log(point);
        }
        if(questions[2] && inputResponse.get(0).value === "One piece" ||inputResponse.get(0).value === "one piece") {
            point++;
            console.log(point);
        }
        if(questions[3] && inputResponse.get(0).value === "Burj Khalifa" ||inputResponse.get(0).value === "burj khalifa") {
            point++;
            console.log(point);
        }
        if(questions[4] && inputResponse.get(0).value === "30" ||inputResponse.get(0).value === "30 saisons") {
            point++;
            console.log(point);
        }
        if(questions[5] && inputResponse.get(0).value === "Ninho" ||inputResponse.get(0).value === "ninho") {
            point++;
            console.log(point);
        }

        if(questions[6] && inputResponse.get(0).value === "Baby Shark" ||inputResponse.get(0).value === "baby shark" ||inputResponse.get(0).value === "Babyshark" ||inputResponse.get(0).value === "BabyShark" ||inputResponse.get(0).value === "babyshark") {
            point++;
            console.log(point);
        }
        if(questions[7] && inputResponse.get(0).value === "Logitech G502" ||inputResponse.get(0).value ==="logitech G502" ||inputResponse.get(0).value === "logitech g502") {
            point++;
            console.log(point);
        }
        if(questions[8] && inputResponse.get(0).value === "Minecraft" ||inputResponse.get(0).value === "minecraft") {
            point++;
            console.log(point);
        }
        if(questions[9] && inputResponse.get(0).value === "Java" ||inputResponse.get(0).value === "java") {
            point++;
            console.log(point);
        }

        counter++;
    }

    else if (counter === questions.length) {
        $('#containerQuestions').html('<h1>Votre score: </h1>' + `${point.toString()}/9` + "<br>" + `Les réponses aux questions de 1 à 10 sont: -`).append("<p id='paraAnswer'></p>")

        for (let i = 0; i < reponse.length; i++) {
            $('#paraAnswer').html('');
        }
    }


})