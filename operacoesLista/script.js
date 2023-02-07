//MAP 

let lista = ['fabio', 'jose', 'maria', 'irineu', 5, true];
 
//map tem como egundo arg um callback

//vai precorrer
lista.map((item, index) => {
    console.log(`PASSANDO item:${item} no index ${index}`);
    
})

//reduce buscar reduzir um array
let numeros = [5,6, 8, 2];
let total =  numeros.reduce((acumulador, numero, indice, original) => {
    console.log(`${acumulador} - total acumulado`);
    console.log(`${numero} - valor atual`);
    console.log(`${indice}- valor da posicao`);
    console.log(`${original} - array original`);

    return acumulador += numero;
});

console.log(total);
console.log('======================================================');

//FIND (buscar) - devolve o primeiro item que encontrar
let list = [5, 6, 'jose', true, .8, 'jose'];

let busc = list.find((item, index) => {
    if (item == 'jose') {
        return console.log('item encontrado com sucesso no index '+ index );

    }
});

console.log('======================================================');

//filter (filtrar) ele vai retornar um valor booleano

let words = ['matue', 'fabio', 'irineu', 'jose', 'ana','jose'];

let res = words.filter((item, index, arr) => {
    return item.length <= 4
});

 
console.log(res);