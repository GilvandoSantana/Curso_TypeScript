// Classes

// IMPLEMENTS => Implementa as propriedades da interface
// READONLY => Modo leitura, não deixa o valor ser alterado
// PROTECTED => O valor só pode ser alterado na classe
// PRIVATE => Só pode ser acessada na classe

class Person1 {
    readonly id1: number;
    protected name1: string;
    private age1: number;

    constructor(id1: number, name1: string, age1:number) {
        this.id1 = id1;
        this.name1 = name1;
        this.age1 = age1;
    }

    sayMyName1(): string {
        return this.name1;
    }
}

const personClass1 = new Person1(1, 'Gilvando', 2);

// Implementando propriedades na classe com interface

interface IPerson2 {
    id2: number;
    name2: string;
    age2: number;
    sayMyName2(): string;
}

// IMPLEMENTANDO

class Person2 implements IPerson2 {
    id2: number;
    name2: string;
    age2: number;

    constructor(id2: number, name2: string, age2:number) {
        this.id2 = id2;
        this.name2 = name2;
        this.age2 = age2;
    }

    sayMyName2(): string {
        return this.name2;
    }
}

const personClass2 = new Person1(1, 'Gilvando', 2);