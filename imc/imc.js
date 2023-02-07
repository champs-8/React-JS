/*
Abaixo de 17, muito abaixo
Entre 17 e 18,49, abaixo
entre 18,50 e 24,99 normal
entre 25 e 29,99 obeso

peso/altura
*/
let peso;
let altura;
let imc;
let res = document.getElementById('res');

function calcular(event) {
    event.preventDefault();
    peso = document.getElementById('peso').value;
    altura = document.getElementById('altura').value;
    console.log(peso, altura);

    imc = peso/ (altura * altura);

    console.log(imc);

    if(imc < 17) {
        res.innerHTML = `<br> Seu resultado foi ${imc.toFixed(2)}<br>Cuidado, voce está muito abaixo do peso.`
    }
    else if(imc >= 17 && imc <= 18.49) {
        res.innerHTML =  `<br> Seu resultado foi ${imc.toFixed(2)}<br>Cuidado, voce está abaixo do peso.`
    }else  if( imc >= 18.50 && imc <= 24.99){
        res.innerHTML = `<br> Seu resultado foi ${imc.toFixed(2)}<br>Cuidado, voce está no peso ideal.`
    }else {
        res.innerHTML = `<br> Seu resultado foi ${imc.toFixed(2)}<br>Cuidado, voce está acima do peso.`
    }

    document.getElementById('peso').value = '';
    document.getElementById('altura').value = '';
}