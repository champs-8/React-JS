//Includes, startsWith , endsWith

let nomes = ['Fabio', 'ester', 'douglas'];

//retorna um booleano
console.log(nomes.includes('Fabio'));

if (nomes.includes('Mateus')) {
    console.log('Seu nome está na lista');
}else{
    console.log('Seu nome nao está na lista');
};



//starsWith (começa com ...)
let nome = 'Fabio';
console.log( nome.startsWith('F')); //false, tambem é sensitive;
console.log(nome.endsWith('O'));// true