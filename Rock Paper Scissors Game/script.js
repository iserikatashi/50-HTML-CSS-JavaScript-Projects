const btnEl = document.querySelectorAll('button');
const scores = document.querySelector('#result');
const userScore = document.querySelector('#user-score');
const computerScorc = document.querySelector('#computer-scorc');
const wonTxt = 'You won by'
const loseTxt = 'You lose by'
const drawTxt = 'You draw'


btnEl.forEach((elemet, index) => {
    elemet.addEventListener('click', () => {
        let rendom = Math.floor(Math.random() * (3 - 1 + 1) + 1);
        let i = index;
        if(i === 0) {
            if (rendom === 1) {
                scores.innerHTML = `${wonTxt} scissore`;
                userScore.innerHTML = Number(userScore.innerHTML) + 1;
            } else if(rendom === 2) {
                scores.innerHTML = `${loseTxt} paper`;
                computerScorc.innerHTML = Number(computerScorc.innerHTML) + 1;
            } else {
                scores.innerHTML = drawTxt;
            }
        } else if(i === 1) {
            if (rendom === 1) {
                scores.innerHTML = `${wonTxt} rock`;
                userScore.innerHTML = Number(userScore.innerHTML) + 1;
            } else if(rendom === 2) {
                scores.innerHTML = `${loseTxt} scissore`;
                computerScorc.innerHTML = Number(computerScorc.innerHTML) + 1;
            } else {
                scores.innerHTML = drawTxt;
            }
        } else if(i === 2) {
            if (rendom === 1) {
                scores.innerHTML = `${wonTxt} paper`;
                userScore.innerHTML = Number(userScore.innerHTML) + 1;
            } else if(rendom === 2) {
                scores.innerHTML = `${loseTxt} rock`;
                computerScorc.innerHTML = Number(computerScorc.innerHTML) + 1;
            } else {
                scores.innerHTML = drawTxt;
            }
        }
    })
})