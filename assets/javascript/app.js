$(document).ready(function () {

    // Gets Link for Theme Song
    var audioElement = document.createElement("audio");
    audioElement.setAttribute("src", "assets/sounds/game-of-thrones-theme-song-ringtone-30782.mp3");

    // Theme Button
    $(".theme-button").on("click", function () {
        audioElement.play();
    });
    $(".pause-button").on("click", function () {
        audioElement.pause();
    });

    // declaring an array to store answers,questions,options,images corresponding to answers.
    var ansqcimg = [
        {
            question: "How did Daenerys Targaryen eventually hatch her dragon eggs?",
            options: ["In a lightning storm", "In a fireplace", "In a funeral pyre", "In a frozen cave"],
            ans: 2,
            image: "assets/images/Dragon egg.gif"

        },
        {
            question: " Ayra's fighting style is called?",
            options: ["Wolf Wield", "Water Dancing", "Stinger", "Slashing Steel"],
            ans: 1,
            image: "assets/images/aryas fighting style.gif"


        },
        {
            question: "Besides dragonglasswhat is the only other substance capable of defeating White Walkers",
            options: ["Weirwood", "Wildfire", "Snowballs", "Valyrian Steel"],
            ans: 3,
            image: "assets/images/White Walkers.gif"

        },
        {
            question: "The name of King Tommen's favorite cat is",
            options: ["Prince Fuzzy", "Little Lion", "Battle Pus", "Ser Pounce"],
            ans: 3,
            image: "assets/images/cat.gif"

        },
        {
            question: "Who shoots the flaming arrow that subsequently destroy's Stannis' fleet in Blackwater Bay?",
            options: ["Jaime Lannister", "Bronn", "King joffrey", "Tyrion Lannister"],
            ans: 1,
            image: "assets/images/flaming arrow.gif"

        },
        {
            question: "Prince Oberyn Martell is nicknamed the 'Red Viper' because of his combat and:",
            options: ["Nighttime attacks", "Ruby colored armor", "Pride in drawing blood first", "Knowledge of poisons"],
            ans: 3,
            image: "assets/images/redviper.gif"

        },
        {
            question: "Who created the secret tunnel in the sewers under Casterly Rock?",
            options: ["Tyrion Lannister", "Varys", "Jaime Lannister", "Lord Baelish"],
            ans: 0,
            image: "assets/images/casterly Rock.gif"

        },
        {
            question: "What is Sansa Stark's favorite treat?",
            options: ["Strawberry", "Lemon Cakes", "Honey Cakes", "Apple cranberry"],
            ans: 1,
            image: "assets/images/cake.gif"

        },
        {
            question: "How many knights make up the kingsguard",
            options: ["8", "12", "6", "7"],
            ans: 3,
            image: "assets/images/knights.gif"

        },
        {
            question: "Who is the youngest of Ned Stark’s children?",
            options: ["Bran", "Rickon", "Arya", "Sansa"],
            ans: 1,
            image: "assets/images/rickon.gif"

        }
    ]

    function questionCall() {

        // make=Math.floor(Math.random()*ansqcimg.length)

        // var rt=ansqcimg[make]
        // console.log(rt)


        for (var i = 0; i < ansqcimg.length; i++) {

            ansqcimg[i].question;
            ansqcimg[i].options;
            console.log(ansqcimg[i].question);
            console.log(ansqcimg[i].options);
           

        }



    }
    

   









});




// for(var i=0;i<ansqcimg.length;i++){
//     ansqcimg[i].ans;
//     ansqcimg[i].image;
//     console.log(ansqcimg[i].ans)
//     console.log(ansqcimg[i]. image)


// }


// pseudo coding
// create a start button to play the game.
// Display the questions and options for corresponding questions.
// Display one question at a time.After few sec display other question.
// Also set a timer for each questions.
// If the player click the answer, whether it is wrong ,true or timeout display the answer with a gif.
// If the player select wrong answer,tell the player that the answer is wrong and show the correct answer.
// if the player timeout ,tell the palyer that they run out of time and then display the correct answer.
//  On the final screen, display the number of correct answers, incorrect answers, and an option to restart the game (without reloading the page).
// on the final screen create a play again? button.