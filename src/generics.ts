// Genericos serve para mudar a atribuição
// após o '=' usar '<T>'

const returnValue = <T>(value: T): T => value;

const message = returnValue<string>('Hello Word');

const count = returnValue<number>(5);

// Outro exemplo

function getFirstValueFromArray<T>(array: T[]) {
    return array[0];
}
const firstValueFromStringArray = getFirstValueFromArray<string>(['1', '2']);
const firstValueFromNumberArray = getFirstValueFromArray<number>([10, 20]);

// Pode passar mais de um generico

const returnValue2 = <T, X>(valueGeneric2: T, valueGeneric3: X) => valueGeneric2;

const message2 = returnValue2<string, number>('Hello Word', 2);

// Promises

const returnPromise = async (): Promise<string> => {
    return '5';
};

// Classes
class GenericNumber<T> {
    zeroValue: T;
    sum: (x: T, y: T) => T;

    constructor(zeroValue: T, sum: (x: T, y: T) => T) {
        this.zeroValue = zeroValue;
        this.sum = sum
    }
}

const myGenericNumber = new GenericNumber<number>(0, (x: number, y:number) => {
    return x + y;
});