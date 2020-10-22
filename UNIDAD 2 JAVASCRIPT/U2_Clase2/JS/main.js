alert("Hola Mundo");

//busqueda el elemento p
const elem = document.querySelector('p');
elem.addEventListener('click',actualizarN);

function actualizarN(){
    console.log('Dentro de la funcion');
    let n = prompt('Ingresa un nombre');
    elem.textContent = 'Jugador: '+n;
}

//cambiar imagen y texto
const img = document.getElementById('img');
const text = document.getElementById('text');

function aparecerSol(){
    img.src = 'IMG/sol.gif'
    text.innerHTML = 'Aparecio el Sol'
    text.style.fontSize = '100px'
    text.style.color = 'green'
    text.style.background = 'black'
}

function aparecerLuna(){
    img.src = 'IMG/luna.gif'
    text.innerHTML = 'Aparecio la Luna'
    text.style.fontSize = '150px'
    text.style.color = 'red'
    text.style.background = 'grey'
}

//desaparecer img y texto
function DesaparecerTodo(){
    img.style.visibility = 'hidden'
    text.style.visibility = 'hidden'
    //alert("Han desaparecido los obejtos");
}

//aparecer img y texto
function AparecerTodo(){
    img.style.visibility = 'visible'
    text.style.visibility = 'visible'
    //alert("Han aparecido los objetos!");
}