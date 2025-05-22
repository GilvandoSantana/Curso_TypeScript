// type -> Unions
// Serve para unir várias TYPES

type Usuario = {
    firsName: string;
    email: string;
    password: number;
};

type Author = {
    books: string[]
}

const uniao: Author & Usuario = {
    firsName: 'Gilvando',
    email: 'gilvando@gmai.com',
    password: 12345678,
    books: ['livro1', 'livro2', 'livro3']
}

