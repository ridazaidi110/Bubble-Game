let panelbottom = document.querySelector('.panelbottom');
let hit = document.querySelector('#hit');
let score = 0;
let timer = 30;
let hitrun = 0;


function MakeBubble() {
    let clutter = "";
    let pbtn = document.querySelector('.panelbottom')
    for (var i = 1; i <= 60; i++) {
        let randomnumbr = Math.floor(Math.random() * 10);
        clutter += ` <div class="bubble">${randomnumbr}</div>`;
    }
    pbtn.innerHTML = clutter;
}
function runTimer() {
    let TimerIntervel = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector('#timer').textContent = timer;
        } else {
            clearInterval(TimerIntervel);
            document.querySelector('.panelbottom').innerHTML = `<h1>Your Game is Over </h1>`;
        }
    }, 1000);
}
function Getnewhit (){
var hitrn = Math.floor(Math.random()*10)
document.querySelector('#Hit').textContent =hitrn;
}
function scoreIncrease(){
    score += 10;
    document.querySelector('#score').textContent = score;
}
panelbottom.addEventListener("click",function(dets){
let clickedNumber = dets.target.innerText;
if(hit.textContent === clickedNumber){
    scoreIncrease();
    MakeBubble();
    Getnewhit();
}
});

MakeBubble();
runTimer();
Getnewhit();

