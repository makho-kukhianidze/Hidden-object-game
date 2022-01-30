//---------------------------------------------------------Max's Hidden Object Game---------------------------------------------------------//
// Variable block - Start.
// Game timer - Start.
let milliseconds = 420; // milliseconds = 420.
let interval = setInterval(startTimer, milliseconds); // Start timer.
let timer = document.getElementById('timer'); // Timer's paragraph - id.
let time = 100; // Game time.
let hiddenObject = 0; // Hidden object.
// Game timer - End.
// Game objects - Start.
let star = document.getElementById('star'); // object;
let starObject = document.getElementById('starObject'); // object find list - text paragraph;
let tennisBall = document.getElementById('tennisBall'); // object;
let tennisBallObject = document.getElementById('tennisBallObject'); // object find list - text paragraph;
let rose = document.getElementById('rose'); // object;
let roseObject = document.getElementById('roseObject'); // object find list - text paragraph;
let apple = document.getElementById('apple'); // object;
let appleObject = document.getElementById('appleObject'); // object find list - text paragraph;
let newspaper = document.getElementById('newspaper'); // object;
let NewspaperObject = document.getElementById('NewspaperObject'); // object find list - text paragraph;
let panda = document.getElementById('panda'); // object;
let pandaObject = document.getElementById('pandaObject'); // object find list - text paragraph;
let hat = document.getElementById('hat'); // object;
let hatObject = document.getElementById('hatObject'); // object find list - text paragraph;
let dog = document.getElementById('dog'); // object;
let dogObject = document.getElementById('dogObject'); // object find list - text paragraph;
// Game objects - End.
// Game sounds - Start.
let pointSound = new Audio(); // point sound.
pointSound.src = "../sounds/points.wav"; // point sound - src.
let backgroundMusic = new Audio(); // background music.
backgroundMusic.src = "../sounds/backgroundMusic.mp3"; // background music - src.
// Game sounds - End.
// Variable block - End.
//-------------------------------------------------------------------------------------------------------------------------------------------//

//-------------------------------------------------------------------------------------------------------------------------------------------//
// Function block - Start.
// Function - sound currentTime - Start. 
function pointSoundCurrentTime() {
    pointSound.currentTime = 0;
    pointSound.play();
}
// Function - sound currentTime - End. 
// Function -  when click - background music - Start. 
document.onclick = function () {
    backgroundMusic.play();
}
// Function -  when click - background music - End. 
// Function - start timer - Start.
function startTimer() { // game start.
    time--; // minus time.
    if (time == 0) {  // if time = 0 - game over.
        clearInterval(interval); // time is over.
        alert('Game over!'); // text - game over.
        location.reload();  // refresh.
    }
    timer.textContent = `Timer: ${time} || Hidden object: 8 / ${hiddenObject}`;
    if (hiddenObject == 8) { // hidden object = 8 (You Win!).
        location.reload(); // refresh.
        alert('You Win! Congratulations!'); // text - You Win! Congratulations!.
    }
}
// Function - start timer - End.
// Function - reset- Start.
function reset() {
    location.reload(); // refresh.
}
// Function - reset- End.
// Function block - End.
//-------------------------------------------------------------------------------------------------------------------------------------------//

//-------------------------------------------------------------------------------------------------------------------------------------------//
// Hidden Object - addEventListener - Start.
star.addEventListener('click', function () {
    starObject.style.textDecoration = "line-through"; // list text - line-through.
    pointSoundCurrentTime(); // point sound
    starObject.innerHTML = "Star"; // text.
    hiddenObject++; // Object +1.
    star.style.display = "none"; // Object - display: none.
});
tennisBall.addEventListener('click', function () {
    tennisBallObject.style.textDecoration = "line-through"; // list text - line-through.
    pointSoundCurrentTime(); // point sound
    tennisBallObject.innerHTML = "Tennis-ball"; // text.
    hiddenObject++; // Object +1.
    tennisBall.style.display = "none"; // Object - display: none.
});
rose.addEventListener('click', function () {
    roseObject.style.textDecoration = "line-through"; // list text - line-through.
    pointSoundCurrentTime(); // point sound
    roseObject.innerHTML = "Rose"; // text.
    hiddenObject++; // Object +1.
    rose.style.display = "none"; // Object - display: none.
});
apple.addEventListener('click', function () {
    appleObject.style.textDecoration = "line-through"; // list text - line-through.
    pointSoundCurrentTime(); // point sound
    appleObject.innerHTML = "Apple"; // text.
    hiddenObject++; // Object +1.
    apple.style.display = "none"; // Object - display: none.
});
newspaper.addEventListener('click', function () {
    NewspaperObject.style.textDecoration = "line-through"; // list text - line-through.
    pointSoundCurrentTime(); // point sound
    NewspaperObject.innerHTML = "Newspaper"; // text.
    hiddenObject++; // Object +1.
    newspaper.style.display = "none"; // Object - display: none.
});
panda.addEventListener('click', function () {
    pandaObject.style.textDecoration = "line-through"; // list text - line-through.
    pointSoundCurrentTime(); // point sound
    pandaObject.innerHTML = "Panda"; // text.
    hiddenObject++; // Object +1.
    panda.style.display = "none"; // Object - display: none.
});
hat.addEventListener('click', function () {
    hatObject.style.textDecoration = "line-through"; // list text - line-through.
    pointSoundCurrentTime(); // point sound
    hatObject.innerHTML = "Hat"; // text.
    hiddenObject++; // Object +1.
    hat.style.display = "none"; // Object - display: none.
});
dog.addEventListener('click', function () {
    dogObject.style.textDecoration = "line-through"; // list text - line-through.
    pointSoundCurrentTime(); // point sound
    dogObject.innerHTML = "Dog"; // text.
    hiddenObject++; // Object +1.
    dog.style.display = "none"; // Object - display: none.
});
// Hidden Object - addEventListener - End.
//------------------------------------------------------------------End----------------------------------------------------------------------//