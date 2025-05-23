"use strict";
// Classes
// IMPLEMENTS => Implementa as propriedades da interface
// READONLY => Modo leitura, não deixa o valor ser alterado
// PROTECTED => O valor só pode ser alterado na classe e na subclases
// PRIVATE => Só pode ser acessada na classe mãe
class Person1 {
    constructor(id1, name1, age1) {
        this.id1 = id1;
        this.name1 = name1;
        this.age1 = age1;
    }
    sayMyName1() {
        return this.name1;
    }
}
const personClass1 = new Person1(1, 'Gilvando', 2);
// IMPLEMENTANDO
class Person2 {
    constructor(id2, name2, age2) {
        this.id2 = id2;
        this.name2 = name2;
        this.age2 = age2;
    }
    sayMyName2() {
        return this.name2;
    }
}
const personClass2 = new Person1(1, 'Gilvando', 2);
