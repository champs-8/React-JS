let first = [1, 2, 6];
let numbers =  [...first, 5, 7, 9]
console.log(numbers);

//spread operator

let pessoa = {
    nome: 'fabio',
    idade : 21,
    cargo: 'batedor'
};

let person = {
    nome : 'irineu',
    idade: 'voce nao sabe nem eu', 
    cargo: 'piadista'
};

console.log(person);

let outerPerson = {
    ...pessoa,
    cidade: 'Uberlandia',
    status: 'ativo'
}
console.log(outerPerson);


function newUsuary(info) {
    let data = {
        ...info,
        staus: 'ativo',
        inicio: '21/8/2012',
        cogigo: 854785
    }
    console.log(data);
}

newUsuary({nome: 'Oswaldo', pai: 'Armiston', mae: 'Patricia'});


//Rest operator

//'nao sei quantos parametros vou receber nessa função'
function convidados(...names) {
    console.log('Seja bem-vindos todos os convidados');
    console.log(names);
}

convidados('fabio', 'ana', 'yasmim', 'carlos', 'miguel');

//=========================
function sorteador(...num) {
    console.log(num);

    const numGerado = Math.floor(Math.random()*num.length);
    console.log(num[numGerado]);
}
//sem o REST operator so chamaria o primeiro parametro
sorteador(1,2,36,41,5,62,7,55,9);
