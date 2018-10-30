





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
    var ansqcimg=[
        {
            question: "How did Daenerys Targaryen eventually hatch her dragon eggs?",
            options: ["In a lightning storm","In a fireplace","In a funeral pyre","In a frozen cave"],
            ans:2,
            image:"assets/images/Dragon egg.gif"

        },
        {
            question: " Ayra's fighting style is called?",
            options: ["Wolf Wield","Water Dancing","Stinger","Slashing Steel"],
            ans:1,
            image:"assets/images/aryas fighting style.gif"


        },
        {
            question: "Besides dragonglasswhat is the only other substance capable of defeating White Walkers",
            options: ["Weirwood","Wildfire","Snowballs","Valyrian Steel"],
            ans:3,
            image:"assets/images/White Walkers.gif"

        },
        {
            question: "The name of King Tommen's favorite cat is",
            options: ["Prince Fuzzy","Little Lion","Battle Pus","Ser Pounce"],
            ans:3,
            image:"assets/images/cat.gif"

        },
        {
            question: "Who shoots the flaming arrow that subsequently destroy's Stannis' fleet in Blackwater Bay?",
            options: ["Jaime Lannister","Bronn","King joffrey","Tyrion Lannister"],
            ans:1,
            image:"assets/images/flaming arrow.gif"

        },
        {
            question: "Prince Oberyn Martell is nicknamed the 'Red Viper' because of his combat and:",
            options: ["stark","targaryen","tyrell","Knowledge of poisons"],
            ans:3,
            image:"assets/images/redviper.gif"

        },
        {
            question: "Which is not a Game of Thrones royal family name?",
            options: ["stark","targaryen","tyrell","baelish"],
            ans:2,
            image:"assets/images/aryas fighting style.gif"

        },
        {
            question: "Which is not a Game of Thrones royal family name?",
            options: ["stark","targaryen","tyrell","baelish"],
            ans:2,
            image:"assets/images/aryas fighting style.gif"

        },
        {
            question: "Which is not a Game of Thrones royal family name?",
            options: ["stark","targaryen","tyrell","baelish"],
            ans:2,
            image:"assets/images/aryas fighting style.gif"

        },
        {
            question: "Which is not a Game of Thrones royal family name?",
            options: ["stark","targaryen","tyrell","baelish"],
            ans:2,
            image:"assets/images/aryas fighting style.gif"

        }
    ]









});