//array of object questions
const questArray = [
    {
        song: "Bigger thën everything", artist: "Yeat", audio: "GameMp3/Yeat - bigger thën everything.mp3",
        q1: "what song is this?",
        a1: "bigger thën everything",
        a2: "Poopity scoop",
        a3: "Talk",
        a4: "Lift yourself",
        final: "bigger thën everything",
    },
    {
        song: "Off the table", artist: "Ariana Grande", audio: "GameMp3/Ariana Grande - off the table ft. The Weeknd.mp3", 
        q1: "what song is this?",
        a1: "Pov",
        a2: "Off the table",
        a3: "Positions",
        a4: "Bad blood",
        final: "Off the table"
    },

    {
        song: "War", artist: "Drake", audio: "GameMp3/Drake - War.mp3",
        q1: "What Drake song is this?",
        a1: "5am in toronto",
        a2: "War",
        a3: "Demons",
        a4: "Mob ties",
        final: "War"
    },
    {
        song: "Save your tears", artist: "The Weeknd", audio: "GameMp3/The Weeknd - Save Your Tears.mp3",
        q1: "What song is this?",
        a1: "Save your tears",
        a2: "Moonlight",
        a3: "Post to be",
        a4: "Blinding lights",
        final: "Save your tears"
    },
    {
        song: "Already rich", artist: "Yeat", audio: "GameMp3/Yeat - Already Rich.mp3",
        q1: "What song is this?",
        a1: "Already rich",
        a2: "Sorry",
        a3: "Cant stop",
        a4: "Talk",
        final: "Already rich"
    },
    {
        song: "Bigger than everythng", artist: "Yeat", audio: "GameMp3/Yeat - bigger thën everything.mp3",
        q1: "What rapper is this?",
        a1: "Yeat",
        a2: "Playboi carti",
        a3: "Kodak black",
        a4: "Lil xan",
        final: "Yeat"
    },
    {
        song: "Dior", artist: "Pop smoke", audio: "GameMp3/Pop Smoke - Dior.mp3",
        q1: "What artist is this?",
        a1: "Pop Smoke",
        a2: "Dusty Locane",
        a3: "Fivio Foreign",
        a4: "Corpse",
        final: "Pop Smoke"
    },
    {
        song: "Big drip", artist: "Fivio Foreign", audio: "GameMp3/Fivio Foreign - Big Drip.mp3",
        q1: "What song is this?",
        a1: "Wetty",
        a2: "Feel my struggle",
        a3: "City of gods",
        a4: "Big drip",
        final: "Big drip"
    },
    {
        song: "Emotionally scarred", artist: "Lil Baby", audio: "GameMp3/Lil Baby - Emotionally Scarred.mp3",
        q1: "What artist is this?",
        a1: "Babytron",
        a2: "Lil Baby",
        a3: "Lil Wayne",
        a4: "DaBaby",
        final: "Lil Baby"
    },
    {
        song: "In the night", artist: "The Weeknd", audio: "GameMp3/The Weeknd - In The Night.mp3",
        q1: "What song is This?",
        a1: "In the night",
        a2: "The hills",
        a3: "Die for you",
        a4: "Often",
        final: "In the night"
    }
]

// for loop to randomise the questions
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
shuffleArray(questArray);

// definitions
let questionNumber = 0;
let score = 0;
let currentSongIndex = 0;
let currentSong = questArray[currentSongIndex];
let questionDiv = document.getElementById("questionDiv");
let gameslidecontainer = document.getElementsByClassName("gameslidecontainer")


//Display question to user and play song
function loadQuestion(selectedQuestion) {
    console.log(selectedQuestion);

    questionDiv.innerHTML = `
    <audio id="audiotag" class="audioplayer" controls autoplay volume>
      <source src="${selectedQuestion.audio}" type="audio/mp3" class="audiosource">
    </audio>
    <div class="GameContainer">
      <button class="option1" data-option='${selectedQuestion.a1}' onclick="checkanswer('${selectedQuestion.a1}')">${selectedQuestion.a1}</button>
      <button class="option2" data-option='${selectedQuestion.a2}' onclick="checkanswer('${selectedQuestion.a2}')">${selectedQuestion.a2}</button>
      <button class="option3" data-option='${selectedQuestion.a3}' onclick="checkanswer('${selectedQuestion.a3}')">${selectedQuestion.a3}</button>
      <button class="option4" data-option='${selectedQuestion.a4}' onclick="checkanswer('${selectedQuestion.a4}')">${selectedQuestion.a4}</button>
    </div>
    <h4 id="questions">${selectedQuestion.q1}</h4>`;

}

//volume slider controls

function vol() {
    let audiotag = document.getElementById('audiotag');
    let volum = document.getElementById("volume");
    volum.addEventListener("input", (e) => {
        console.log(e.currentTarget.value / 100);
        audiotag.volume = e.currentTarget.value / 100;
        console.log(volum);
    })
};
vol();


window.onload = vol

//Called when user clicks on answer button
function checkanswer(selectedAnswer) {

    const question = questArray[questionNumber];
    const selectedButton = document.querySelector(`.GameContainer button[data-option="${selectedAnswer}"]`);
    const correctButton = document.querySelector(`.GameContainer button[data-option="${question.final}"]`);
    if (selectedAnswer === question.final) {
        score++
        selectedButton.style.backgroundColor = 'green'

    } else {
        selectedButton.style.backgroundColor = 'red'
        correctButton.style.backgroundColor = 'green'
    }
    // set time inbetween questions 
    setTimeout(() => {
        questionNumber++
        if (questionNumber < questArray.length) {
            currentSongIndex++
            currentSong = questArray[currentSongIndex]
            loadQuestion(currentSong)
        } else {

            questionDiv.innerHTML = `
            <h3 id="Score">Score : ${score} </h3>        
            <h4> No more questions </h4>`
            // plays different audio's based on user scores
            if (score <= 2) {
                questionDiv.innerHTML = `
                <h3 id="Score">Score : ${score} </h3>
            <audio class="audioplayer" controls autoplay loop>
            <source src="soundMp3/Fail Sound Effect.mp3" type="audio/mp3" class="audiosource">
            </audio>

            <h5>Not gonna lie, That's Crazy, <br>Do better &#128529;</h5>
            <video id="video" "class=video" width="210" autoplay muted loop>
            <source src="videos/7x4p.mp4" type="video/mp4">
           Your browser does not support HTML video.
           </video>`
                // video to be played depending on user score
            } else {
                questionDiv.innerHTML = `
                <h3 id="Score">Score : ${score} </h3>
            <audio class="audioplayer"  controls autoplay loop>
            <source src="soundMp3/GTA San Andreas Mission Passed Theme -6Q74z6AHeA4-192k-1699996718.mp3" type="audio/mp3" class="audiosource">
            </audio>

            <h5>Well done you know stuff, <br> Congratulations: &#129395</h5>
        
            <video id="video" "class=video" width="210" autoplay muted loop>
            <source src="videos/Be.mp4" type="video/mp4">
           Your browser does not support HTML video.
           </video>`
            }
            if (score > 2 && score < 7) {
                questionDiv.innerHTML = `
                <h3 id="Score">Score : ${score} </h3>

                <audio class="audioplayer" controls autoplay loop>
                <source src="soundMp3/Spongebob Fail Sound Effect.mp3" type="audio/mp3" class="audiosource">
                </audio>

                <h5>I mean... it's better than nothing i guess &#128530;</h5>

                <video id="video" "class=video" width="210" autoplay muted loop>
                 <source src="videos/4D4.mp4" type="video/mp4">
                Your browser does not support HTML video.
                </video>`

                console.log("Game over: " + score);

                //Load up the user object
                if(sessionStorage.loggedInUser !== undefined){//we have  a logged in user
                    if((sessionStorage.loggedInUser) ){ // if storage was set
                    const user = JSON.parse(localStorage[sessionStorage.loggedInUser]) ;
                    if(user.topScore < score){
                        //Update user
                        user.topScore = score;
                        localStorage[user.username] = JSON.stringify(user);
                    }

                } else {
                    console.log(`ERR: ` + sessionStorage.loggedInUser)
                }
            }

            }
        }
    }, 1800)

}

// Call the loadQuestion function to display the initial question
window.load = loadQuestion(

    questArray[0]);



