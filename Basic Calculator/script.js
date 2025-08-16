const btnEl = document.querySelectorAll('button');
const inputEl = document.querySelector('.result');

btnEl.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        const btnValue = btnEl[index].innerText
        if(btnValue === 'C') {
            clearResult()
        } else if (btnValue === '=') {
            calcResult()
        } else {
            appenValue(btnValue);
        }
    })
})

function appenValue(value){
    inputEl.value += value;
}

function clearResult() {
    inputEl.value = '';
}

function calcResult() {
    let value = inputEl.value;
    value = value.replaceAll('÷', '/');
    value = value.replaceAll('×', '*');
    inputEl.value = eval(value);
}