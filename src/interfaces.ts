// Interface

// Muito parecido com TYPE
// Pode usar 'readonly' (significa somente leitura e não pode ser alterado)
// Pode usar Interfaces e Unions juntos

interface UserInterface {
    readonly firstName: string;
    email : string;
    login(): string
};

const emailUser: UserInterface = {
    firstName: 'Gilvando',
    email:'gilvando@gmail.com',
    login(){
        return 'Gilvando'
    }
};

/* Não muda, pois é somente leitura
    emailUser.firstName = '12';
*/

// Usando Interfaces e Unions juntos


interface AuthorInterface {
    books: string[];
}

const newAuthor: UserInterface & AuthorInterface = {
    firstName: 'Gilvando',
    email:'gilvando@gmail.com',
    books: ['livro1', 'livro2'],
    login(){
        return 'Gilvando'
    }
}


// Interface não suporta duas atruições e o Type sim
type Grade = number | string
const grade: Grade = 1
/* Dá erro
Interface Grade = number | string
const grade: Grade = 1
*/