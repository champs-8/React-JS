function pedir() {
    let valor = prompt('Digite um valor de 1 a 4')

    //retona um string e converte para numero
    console.log(Number (valor));

    switch (Number(valor)) {
        case 1:
            alert('voce escolheu 1: Suco');
            break;
        case 2:
            alert('voce escolheu 2: Agua gelada');
            break;
        case 3:
            alert('voce escolheu 3: Sorvete');
            break;
        case 4:
            alert('voce escolheu 4: Chamar o graçom');
            break;
        default:
            alert('escolha um numero de 1 a 4');
    }
}