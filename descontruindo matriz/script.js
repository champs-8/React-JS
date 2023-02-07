let pessoa = {
    nome: 'Fábio',
    sobrenome: 'Santos',
    empresa: 'americanas',
    cargo: 'rebatedor de geladeira'
}; 

//exemplo de ter objetos com mesmo nome de variaveis
let nome = 'Irineu';
// console.log(pessoa.nome);
// console.log(pessoa.cargo);


//renomeia com : e o nome atual da variavel
const {nome: nomePessoa, cargo, empresa} = pessoa;
console.log(nomePessoa);
console.log(cargo);
console.log(empresa);


// descontruir um array

let nomes = ['Fabio', 'ester', 'douglas'];
console.log(nomes[0]);


//descontruindo como obejto
let { 0:mateus, 2:irinivaldo} = nomes;
console.log(mateus);
console.log(irinivaldo);

//descontruindo como array
let [first, second, third] = nomes
console.log(first);