"use strict";
// FUnções em TS
/*
const sun = (x: number, y: number) => {
    return x + y;
};

const value = sun('2', '3');

// Dá erro, pois o TS entende que o retorno deve ser NUMBER
*/
const sun1 = (x, y) => {
    return x + y;
};
const value1 = sun1(2, 3);
// Para retornar como String, deve-se fazer:
const sun2 = (x, y) => {
    return (x + y).toString();
};
const value2 = sun2(2, 3);
const sun3 = (x, y) => {
    return x + y;
};
const value3 = sun3(2, 3);
console.log(value3);
const sun4 = (x, y) => {
    return x - y;
};
const value4 = sun4(2, 3);
console.log(value4);
