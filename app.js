const p1score = document.querySelector('#p1score');
const p2score = document.querySelector('#p2score');
const p1Btn = document.querySelector('#p1Btn');
const p2Btn = document.querySelector('#p2Btn');
const reset = document.querySelector('#reset');
const input = document.querySelector('#input');
const winingScore = document.querySelector('#winingScore')
let winingScore1 = 5;
let score1 = 0;
let score2 = 0;
let win = false;

input.addEventListener('change', () => {
    winingScore.textContent = input.value;
    winingScore1 = Number(input.value);
    input.value = '';
})
//player 1 button work
p1Btn.addEventListener('click', () => {
    if (!win) {
        score1++;
        p1score.textContent = score1;
        gameOver(score1)
    }

    //console.log(score1)
})
//player 2 button work
p2Btn.addEventListener('click', () => {
    if (!win) {
        score2++;
        p2score.textContent = score2;
        gameOver(score2)
    }
    //console.log(score2)
})
//game over function
function gameOver(a) {
    if (a === winingScore1) {
        win = true;
        p1Btn.setAttribute('disabled', 'disabled');
        p2Btn.setAttribute('disabled', 'disabled');
    }
}
//reset the game
reset.addEventListener('click', () => {
    score1 = 0;
    score2 = 0;
    win = false;
    p1score.textContent = score1;
    p2score.textContent = score2;
    p1Btn.removeAttribute('disabled', 'disabled');
    p2Btn.removeAttribute('disabled', 'disabled');
    winingScore.textContent = 5;
    winingScore1 = 5;

})