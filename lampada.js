const turnOn = document.getElementById('turnOn');
const turnOff = document.getElementById('turnOff');
const lamp = document.getElementById('lamp');

function islampBroken () {
    return lamp.src.indexOf ('quebrada') > -1 //indexOf - verifica se uma substring está presente em uma string, nesse caso, se a substring "quebrada" está presente . Se o valor retornado for >-1, significa que a lampada "esta quebrada", caso contrario, "nao esta quebrada"
}


function lampOn() {
    if (!islampBroken ()) {
    lamp.src = './img/ligada.jpg';
    }
}

function lampOff() {
    if (!islampBroken ()) {
    lamp.src = './img/desligada.jpg';
    }
}

function lampBroken () {
    lamp.src = './img/quebrada.jpg'
}



turnOn.addEventListener('click', lampOn);
turnOff.addEventListener('click', lampOff);
lamp.addEventListener('mouseover', lampOn);
lamp.addEventListener('mouseleave', lampOff);
lamp.addEventListener('dblclick', lampBroken);
