/* EXERCICIO 16
function olaMundo() {
    console.log("Hello, world!");
}
olaMundo();*/

/* EXERCICIO 17
function idade(a) {
    console.log(`Você tem ${a} anos!`)
}
idade(9), idade(18), idade(20);*/

/* EXERCICIO 18
function soma (a,b) {
    return a+b;
}
console.log(soma(2,5)), console.log(soma(2));*/

/* EXERCICIO 19
function aleatorio (n) {
    return Math.floor(Math.random() * n) + 1;
}
console.log(aleatorio(10)), console.log(aleatorio(100)), console.log(aleatorio(1000));*/

/* EXERCICIO 20
function autoEscola(idade) {
    if (idade >= 18) {
        console.log("Pode fazer!")
    } else {
        console.log("NÃO pode fazer!")
    }
}
autoEscola(17), autoEscola(20);*/

/* EXERCICIO 21
function detectorDeTipo (a) {
    if (typeof a === 'number') {
        console.log("Isto é um Number");
    } else if (typeof a === 'string') {
        console.log("Isto é uma String");
    } else if (typeof a === 'boolean') {
        console.log("Isto é um Boolean");
    }
}
detectorDeTipo(1), detectorDeTipo("Texto"), detectorDeTipo(true);*/

/* EXERCICIO 22
function positivadorDeNumeros(a) {
    return Math.abs(a)
}
console.log(positivadorDeNumeros(-15)), console.log(positivadorDeNumeros(5)), console.log(positivadorDeNumeros(-51.5))*/

/* EXERCICIO 23
function verificadorString (texto) {
    if (texto.length > 10) {
        console.log("Texto muito grande!")
    } else {
        console.log("Quantidade apropriada!")
    }
}
verificadorString("fkwi5468911");*/

/* EXERCICIO 24
function aritmetica (a,b) {
    //return Math.pow(a,b)
    return a ** b // "**" indicador de potência.
}
console.log(aritmetica(3,2));*/

// EXERCICIO 25
function decrementoDeNumero (n) {
    while (n > 0) {
        if (n % 2 == 0){
            console.log(n);
            n = n - 1;
        } else [
            n = n - 1
        ]
    }
    console.log(n)
}
decrementoDeNumero(11);