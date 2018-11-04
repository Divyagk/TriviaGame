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
    var ansqoimg = [
        {
            question: "How did Daenerys Targaryen eventually hatch her dragon eggs?",
            options: ["In a lightning storm", "In a fireplace", "In a funeral pyre", "In a frozen cave"],
            ans: 2,
            image: "assets/images/Dragonegg.gif"

        },
        {
            question: " Ayra's fighting style is called?",
            options: ["Wolf Wield", "Water Dancing", "Stinger", "Slashing Steel"],
            ans: 1,
            image: "assets/images/aryasfightingstyle.gif"


        },
        {
            question: "Besides dragonglasswhat is the only other substance capable of defeating White Walkers",
            options: ["Weirwood", "Wildfire", "Snowballs", "Valyrian Steel"],
            ans: 3,
            image: "assets/images/WhiteWalkers.gif"

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
            image: "assets/images/flamingarrow.gif"

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
            image: "assets/images/casterlyRock.gif"

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




    var userGuess = "";
    var running = false;
    var timer = 15;
    var intervalId;
    var play;
    var holder = [];
    var correctCount = 0;
    var wrongCount = 0;
    var unanswerCount = 0;
     var newArray=[];


    $("#restart").hide();
    // Display question and options randomly.

    //when the player click the start button,hide the start button and show the question,options & time remaining.
    $("#start").on("click", function () {

        //     var counter = 5;
        $("#start").hide();

        questionCall();
        runTimer();
        for (var i = 0; i < ansqoimg.length; i++) {
            holder.push(ansqoimg[i]);
        }
    });

    function questionCall() {

        make = Math.floor(Math.random() * ansqoimg.length);
        play = ansqoimg[make];
        // display questions 
        $("#questionblock").html("<h2>" + play.question + "</h2>");

        // iterate through options array and display
        for (var i = 0; i < play.options.length; i++) {
            var playeroptions = $("<div>");
            playeroptions.addClass("answeroptions");
            playeroptions.html(play.options[i]);
            playeroptions.attr("data-guessvalue", i);
            $("#answerblock").append(playeroptions);
            console.log(playeroptions)
        }
        // get the userGuess and compare with answer.
        $(".answeroptions").on("click", function () {
            // grab array position from userclick.
            userGuess = parseInt($(this).attr("data-guessvalue"));
            console.log(userGuess);
            if (play.ans === userGuess) {
                correctCount++;
                stop();
                userGuess="";
                $("#answerblock").html("<p> correct answer! " + play.options[play.ans] + "</p>");
                showgif();
            }
            else {
                wrongCount++;
                stop();
                userGuess="";
                $("#answerblock").html("<p>Wrong answer! The correct answer is: " + play.options[play.ans] + "</p>");
                showgif();

            }
        });
    }

    // setting the timer for each question.
    function runTimer() {
        if (!running) {
            intervalId = setInterval(decrement, 1000);
            running = true;
        }
    }
    //timer countdown.
    function decrement() {
        $("#timeremains").html("<h3>Time remaining: " + timer + "</h3>");
        timer--;

        //stop timer if it reach 0.
        if (timer === 0) {
            unanswerCount++;
            stop();
            $("#answerblock").html("<p>Time is up! The correct answer is: " + play.options[play.ans] + "</p>");
            showgif();
        }
    }

    //timer stop
    function stop() {
        running = false;
        clearInterval(intervalId);
    }

    function showgif() {
        $("#answerblock").append("<img src=" + play.image + ">");
        newArray.push(play);
	ansqoimg.splice(make,1);
        var hidegif = setTimeout(function () {
            $("#answerblock").empty();
            timer = 15;
        },3000);
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