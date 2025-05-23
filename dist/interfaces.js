"use strict";
// Interface
;
const emailUser = {
    firstName: 'Gilvando',
    email: 'gilvando@gmail.com',
    login() {
        return 'Gilvando';
    }
};
const newAuthor = {
    firstName: 'Gilvando',
    email: 'gilvando@gmail.com',
    books: ['livro1', 'livro2'],
    login() {
        return 'Gilvando';
    }
};
const grade = 1;
/* Dá erro
Interface Grade = number | string
const grade: Grade = 1
*/ 
