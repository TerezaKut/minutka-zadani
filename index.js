console.log('funguju!');

let budik = document.querySelector('.alarm');
let zvuk = document.querySelector('audio');
let vypnout = document.querySelector('#zrusit');

function zvoneniZvuk(){
    zvuk.play();
}

function zvoneni() {
    budik.classList.add('alarm--ring');
    budik.addEventListener('click', zvoneniZvuk);
}

let vteriny = Number(prompt('Za kolik vteřin má začít zvonit budík:'));

let timerID = setTimeout(zvoneni, vteriny*1000);


function zrusZvoneni() {
    clearTimeout(timerID);
    budik.classList.remove('alarm--ring');
    zvuk.pause();
}

vypnout.addEventListener('click', zrusZvoneni)








