const bntRollDice = document.querySelector('#roll-dice');
const diseEl = document.querySelector('.dice');
const rollHistory = document.querySelector('#roll-history');
let txt = '';

async function bntRollDices() {
    diseEl.classList.add('roll-animation')
    await new Promise ((resovle) => {setTimeout(() => {
        randomDice = rendomDice(1, 6);
        diseEl.innerHTML = randomDice[0];
        diseEl.classList.remove('roll-animation');
        resovle()
    },1000)})

    await new Promise(() => {txt = `<li>Roll ${randomDice[1]}: <span>${randomDice[0]}</span></li>` + txt;
    rollHistory.innerHTML = txt;})
}

bntRollDice.addEventListener('click', bntRollDices)

function rendomDice(min, max) {
    let rendom = Math.floor(Math.random() * (max - min + 1) + min);
    switch (rendom) {
        case 1:
            return ['&#9856;', rendom];
        case 2:
            return ['&#9857;', rendom];
        case 3:
            return ['&#9858;', rendom]
        case 4:
            return ['&#9859;', rendom];
        case 5:
            return ['&#9860;', rendom];
        case 6:
            return ['&#9861;', rendom];
        default:
            return '';
            console.log('error');    
    }
}