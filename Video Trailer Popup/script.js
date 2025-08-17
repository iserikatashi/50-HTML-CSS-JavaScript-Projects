const container = document.querySelector('.container')
const btnEl = document.querySelector('.btn');
const Close = document.querySelector('.close');
const trailerCon = document.querySelector('.trailer-con');
const video = document.querySelector('#video')

btnEl.addEventListener('click', () => {
    container.style.display = 'none';
    trailerCon.style.display = 'flex';
})

Close.addEventListener('click', () => {
    container.style.display = 'block';
    trailerCon.style.display = 'none';
    video.pause();
})