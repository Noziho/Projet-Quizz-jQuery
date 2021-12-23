//table for questions.
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

//table for answers.
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
];
//table for wrong answer.
let wrongAnswer = [];


$('#containerQuestions').append('<input id="questionResponse" type="text" placeholder="Entrez votre réponse"/>')
let inputResponse = $('#questionResponse').hide();
// a counter for reach both table.
let counter = 0;

let point = 0;

// Event click for launch all game.
$('#startGame').click(function () {

    if (counter < questions.length && counter < reponse.length) {
        $('#startGame').html('Suivant');
        $('#welcomeText').html(questions[counter].toString());
        $('#reponse').html(reponse[counter].toString() + '<br>');
        inputResponse.show();
        /*All conditions for check if the answer give for the user is true or false, if it's false, the 'else' push the right answer on the table for the end of the game.
        * if it's true, point gain +1*/
        if (counter === 1) {
            if (inputResponse.get(0).value === "10") {
                point++;
            }

            else {
                wrongAnswer.push("Question 1: Faux la réponse été, 10");
            }

        }

        if (counter === 2) {
            if (inputResponse.get(0).value === "67 millions" || inputResponse.get(0).value === "67" || inputResponse.get(0).value === "67millions") {
                point++;
            }

            else {
                wrongAnswer.push("Question 2: Faux la réponse été, 67 millions");
            }
        }

        if (counter === 3) {
            if (inputResponse.get(0).value === "One piece" || inputResponse.get(0).value === "one piece") {
                point++;
            }

            else {
                wrongAnswer.push("Question 3: Faux la réponse été, One piece");
            }
        }

        if (counter === 4) {
            if (inputResponse.get(0).value === "Burj Khalifa" || inputResponse.get(0).value === "burj khalifa") {
                point++;
            }

            else {
                wrongAnswer.push("Question 4: Faux la réponse été, Burj khalifa");
            }
        }

        if (counter === 5) {
            if (inputResponse.get(0).value === "30" || inputResponse.get(0).value === "30 saisons") {
                point++;
            }

            else {
                wrongAnswer.push("Question 5: Faux la réponse été, 30");
            }
        }

        if (counter === 6) {
            if (inputResponse.get(0).value === "Ninho" || inputResponse.get(0).value === "ninho") {
                point++;
            }

            else {
                wrongAnswer.push("Question 6: Faux la réponse été, Ninho");
            }
        }

        if (counter === 7) {
            if (inputResponse.get(0).value === "Baby Shark" || inputResponse.get(0).value === "baby shark" || inputResponse.get(0).value === "BabyShark") {
                point++;
            }

            else {
                wrongAnswer.push("Question 7: Faux la réponse été, Baby Shark");
            }
        }

        if (counter === 8) {
            if (inputResponse.get(0).value === "Logitech G502" || inputResponse.get(0).value === "logitech G502" || inputResponse.get(0).value === "logitech g502") {
                point++;
            }

            else {
                wrongAnswer.push("Question 8: Faux la réponse été, Logitech G502");
            }
        }

        if (counter === 9) {
            if (inputResponse.get(0).value === "Minecraft" || inputResponse.get(0).value === "minecraft") {
                point++;
            }

            else {
                wrongAnswer.push("Question 9: Faux la réponse été, Minecraft");
            }
        }

        if (counter === 10) {
            if (questions[9] && inputResponse.get(0).value === "Java" || inputResponse.get(0).value === "java") {
                point++;
            }

            else {
                wrongAnswer.push("Question 10: Faux la réponse été, Java");
            }
        }
        counter++;

    }
    //A simple conditions for print score and the wronganswer table on a <p>.
    else if (counter === questions.length) {


        $('#containerQuestions').html('<h1>Votre score: </h1>' + `${point.toString()}/10` + "<br>").append("<p id='paraAnswer'></p>")

        for (let i = 0; i < wrongAnswer.length; i++) {
            document.getElementById('paraAnswer').innerHTML += (wrongAnswer[i] + "<br>");
            setTimeout(function () {
                location.reload()
            },10000)

        }
    }
})