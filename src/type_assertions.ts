// Type Assertions
// Conseguimos mudar a atribuição de um "variável"

const productName: any = 'Boné';

let itemId1 = productName as string;

//ou

let itemId2 = <string>productName
// Se não fizesse desta forma, itemId receberia a atribuição de Any ao invés de String