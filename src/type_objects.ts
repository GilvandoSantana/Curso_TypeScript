// Type

/*OBS:
Apertando CTRL+SPACE aparece as opções
Será necessário preencher todos os campos dos itens de dentro
Digite '?', caso não queira que seja obrigatório o preenchimento de todos os campos
obs: Quando uma propriedade é definida como opcional, ela passa a ter duas atribuições e uma delas é UNDEFINED
*/

type Order = {
    productId: string;
    price: number;
}


type User1 = {
    firsName1: string;
    age1: number;
    email1: string;
    password1: string;
    orders: Order[];
    register(): string
};

const user1: User1 = {
    firsName1: 'Gilvando',
    age1: 20,
    email1: 'gilvando@gmail.com',
    password1: '12345678',
    orders:[{productId:'1', price:2}],
    register(){
        return 'Gilvando'
    }
}

// OU (opcionais)

type User2 = {
    firstName2: string;
    age2?: number;
    email2?: string;
    password2?: string;
    orders?: Order[];
};

const user2: User2 = {
    firstName2: 'Gilvando',
    age2: 20,
    orders:[{productId:'1', price:2}]
}

/* Vai dar erro, pois a propriedade esta definida como string e por ela ser opcional, ela também é undefined
    const printLog = (message:string) => {}
    printLog(user2.password2)
*/

// Isso pode ser corrigido colocando o MESSAGE como opcional também
const printLog1 = (message?:string) => {}
printLog1(user2.password2)

// OU (mostrando a TS que a propriedade existe usando '!')

const printLog2 = (message:string) => {}
printLog2(user2.password2!)