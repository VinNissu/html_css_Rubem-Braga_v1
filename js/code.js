//Codigos para o hotsite Rubem Braga//

//CRIA UM NOVO OBJETO DA CLASSE "DATE"//
const tempo = new Date();
// console.log(tempo.getFullYear() + '/' +  tempo.getHours() + '/' + tempo.getMinutes());
const txtData = tempo.getFullYear() + '/' + tempo.getHours() + '/' + tempo.getMinutes();

//elementos dom 
const spanData = document.getElementById('data')


const btHamburguer = document.getElementById('btHamburguer')
const navPhone = document.getElementById('navPhone')
const btFecharMenu = document.getElementById('btFecharMenu')

//Insere o txtData dentro do ID "data"

spanData.innerText = txtData;

//ao clicar no id "btFechar"

btHamburguer.addEventListener('click', function () {
    navPhone.style.display = 'block';
})

btFecharMenu.addEventListener('click', function (){
    navPhone.style.display = 'none';
})

