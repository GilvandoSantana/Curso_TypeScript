"use strict";
// Type
const user1 = {
    firsName1: 'Gilvando',
    age1: 20,
    email1: 'gilvando@gmail.com',
    password1: '12345678',
    orders: [{ productId: '1', price: 2 }],
    register() {
        return 'Gilvando';
    }
};
const user2 = {
    firstName2: 'Gilvando',
    age2: 20,
    orders: [{ productId: '1', price: 2 }]
};
/* Vai dar erro, pois a propriedade esta definida como string e por ela ser opcional, ela também é undefined
    const printLog = (message:string) => {}
    printLog(user2.password2)
*/
// Isso pode ser corrigido colocando o MESSAGE como opcional também
const printLog1 = (message) => { };
printLog1(user2.password2);
// OU (mostrando a TS que a propriedade existe usando '!')
const printLog2 = (message) => { };
printLog2(user2.password2);
