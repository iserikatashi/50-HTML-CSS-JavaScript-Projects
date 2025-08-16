const btnEl = document.querySelector('#calculate');
const billInp = document.querySelector('#bill-inp')
const tipInp = document.querySelector('#tip-inp')
const ttc = document.querySelector('.total')

btnEl.addEventListener('click' , () => {
    ttc.innerText = (billInp.value * (tipInp.value / 100)).toFixed(2);
})