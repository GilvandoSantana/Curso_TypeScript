"use strict";
// Fazendo listas
const ids = [1, 2, 3, 4];
// Ex de erro: const ids: number[] = [1,2,3,4, 'a']
// Tupla
// A tupla segue a ordem que é colocada na lista. Exemplo abaixo:
const person = [2, 'felipe'];
console.log(person);
// Exemplo de erro abaixo:
// const erro:[number, string] = ['felipe', 2]
// Dá erro por não seguir a ordem da tupla
// Lista de tuplas
const people = [
    [26, 'Gilvando'],
    [20, 'Camyla']
];
console.log(people);
