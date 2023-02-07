function somar(a, b) {
    let total = a + b
    return total;    
};

let subtrair = (a, b) => {
    let total = a - b;
    return total;
}
let numeros = [1,5 ,6, 8, 4];
numeros.map((item, index) => {
    return console.log(item, index);
})