console.log('Hello Typescript!');

let c: {

    firstName: string,
    lastName: string

} = {

    firstName: "john",
    lastName: "reilly"

}


class Person{

    constructor(public firstName: string, public lastName: string){

    }

}

c = new Person("john","reilly");


let a: {b: number};

a = {

b: 20,

}


let i;

let exampleObject: {b: number, c?: string, [key: number]: boolean};


exampleObject = {

    b: 20,
    1: true,
    3: false

}

let exampleObject2: {e: string, f: number, [key: number]: string};


let readOnlyObj: {readonly b: number};

type Age = number;

type Person2 = {

    name: string
    age: Age

}

let age: Age = 44;

let driver: Person2 = {

    name: "Driver Mcgee",
    age: age

}


type Color = string;


let x = Math.random() < .5;

if(x){

    type Color = "blue";
    let b: Color = "blue";

}
else{

    let c: Color = "red";

}


type Cat = {

    name: string,
    age: number,
    breed?: string,
    height?: number,
    weight?: number,
    purrs?: boolean

}


let siamese: Cat = {

    name: "Sir Isaac",
    age: 44,
    breed: "Tasmanian"

}

console.log(`Siamese's age is : ${siamese.age}`);

type Dog = {

    name: string,
    barks: boolean,
    wags: boolean

}

let dog1: Dog = {

    name: "Doggo",
    barks: true,
    wags: true

}


type CatOrDogComarison = Cat | Dog;
type CatAndDog = Cat & Dog;

let carOrdog: CatOrDogComarison = {

    name: "Sir Williams",
    barks: false,
    wags: false,
    purrs: true,

}


function returnsInvBool(theType: boolean){

    return !theType;

}

let list: string[] = [];

list.push('hello there');

list.push('my name is cameron thacker');

list.forEach(e => console.log(e));

let fArr: string[] = [];

let d: unknown[] = [];

d.push(10);

d.push('elem');

d.map(e => typeof e === 'string'? e + ' <--- string': typeof e === 'number'? e+10: e + ' <--- unknown type').forEach(e => console.log(e));

function buildArray(){

    let a = [];
    a.push(1);
    a.push('x');
    return a;

}


let anyArr = buildArray();

//anyArr.push(true); <--- cannot push type boolean to array of type (string | number) string or number


let anyTuple: [string,number,string,number] = ['str',10,'str2',20];


let optionalArr: ([number] | [number,number])[] = [];

optionalArr.push([10]);

console.log(optionalArr);

optionalArr.push([10,20]);

console.log(optionalArr);


let restArr: [number,...number[]] = [1];

let restArrV2: [number, [...number[]]] = [1,[0]]

restArrV2.push([1,2,3]);

console.log(restArrV2);

let immutableArr: readonly number[] = [10,20,30];

let newImmutableArr: readonly number[] = immutableArr.concat([1,2,3]);

let three: number = newImmutableArr[1];

let immutableArrArrayDec: ReadonlyArray<number> = [];

let immutableNum: Readonly<number> = 300;


function returnNull(x: number){

    if(x < 10){
        return x;
    }
    else{
        return null;
    }

}

function returnUndefined(x: number){

    if(x > 10){
        return x;
    }
    else{
        return undefined;
    }

}

function returnVoid(x: number){

    console.log(x + 10);

}


function returnNever(x: number){

    throw TypeError('This function returns never by throwing an exception');

}

function returnNeverV2(){

    while(true){
        console.log('hello');
    }

}

type Pizza = {

    toppings: string[],
    price: number,
    crust?: string,

}


function printPizza(pizza: Pizza){

    console.log(`\nPIZZA STATS\nToppings : ${pizza.toppings}\nPrice : ${pizza.price}`);

}


let anchoviesPepperoni: Pizza = {

    toppings: ['anchovies','cheese','pepperoni'],
    price: 10.25

}


printPizza(anchoviesPepperoni);


enum Language{

    English = 0,
    Spanish = 1,
    Russian = 2

}

let myFirstLanguage = Language.English;


enum AnimalWeight{

    dog = 20.55,
    cat = 30.73,
    horse = 41.52

}

console.log(`The weight of a dog is : ${AnimalWeight.dog}`);


enum HelloLanguage{

    english = "Hello",
    spanish = "Hola",
    German = "Gutentag",
    Chinese = "Nihao",
    Japanese = "Konichiwa",
    French = "Bonjour"


}

console.log(`Hello ${HelloLanguage.spanish} ${HelloLanguage.German} ${HelloLanguage.Chinese} ${HelloLanguage.Chinese} ${HelloLanguage.Japanese} ${HelloLanguage.French}`);


const enum safeEnum{

    firstElem = 0,
    secondElem = 1,
    thirdElem = 2


}

console.log(`Firstelem = ${safeEnum.firstElem}`);


const enum flippable{

    Burger = 'Burger',
    Chair = 'Chair',
    Table = 'Table',
    Skateboard = 'Skateboard',
    Cup = 'Cup',
    Plate = 'Plate'

}


function isFlippable(f: flippable){

    return `${f} is flippable!`;

}


console.log(isFlippable(flippable.Burger));

function isAcceptablePassword(password: string): boolean{

    return password.length > 6;

}

function numberLength(num: number): number{

    let numStr: string = Math.abs(num).toString();

    return numStr.length;

}

function endZeros(val: number): number{

    let count: number = 0;

    let strNum: string = val.toString();

    for(let i: number = strNum.length-1; i >= 0; i--){

        let iChar: string = strNum.charAt(i);

        console.log(`iChar == ${iChar} and count = ${count}`);

        if(iChar != '0'){
            break;
        }
        if(iChar == '0'){
            count++;
        }

    }
    return count;


}


console.log(endZeros(0));// 1);
console.log(endZeros(1));// 0);
console.log(endZeros(10));// 1);
console.log(endZeros(101));// 0);
console.log(endZeros(245));// 0);
console.log(endZeros(100100));// 2);


function backwardString(value: string): string{

    return value.split('').reverse().join('');

}

function removeAllBefore(arr: number[], removeNum: number): number[]{

    if(!arr.includes(removeNum)){
        return arr;
    }

    let newArr: number[] = [];

    let trigger: boolean = false;

    for(let i: number = 0; i < arr.length; i++){

        if(trigger){
            newArr.push(arr[i]);
        }
        else if(arr[i] === removeNum){
            trigger = !trigger;
            newArr.push(arr[i]);
        }

    }
    return newArr;


}

function isAllUpper(astr: string): boolean{

    return astr.toUpperCase() === astr;

}

function replaceFirst(arr: number[]){

    if(arr.length < 1){
        return [];
    }

    let firstElem: number[] = arr.slice(0,1);

    arr.splice(0,1);

    arr.push(firstElem[0]);

    return arr;

}

replaceFirst([1,2,3,4]);

function maxDigit(aNum: number): number{

    let maxDigit: number = 0;

    let strNum: string = aNum.toString();

    for(let i: number = 0; i < strNum.length; i++){

        maxDigit = Math.max(parseInt(strNum.charAt(i)),maxDigit);

    }
    return maxDigit;

}

function splitPairs(aStr: string): string[]{

    let substringArr: string[] = [];

    let currString: string = "";
    for(let i: number = 0; i < aStr.length; i++){

        if(currString.length === 2){
            substringArr.push(currString);
            currString = aStr.charAt(i);
        }
        else{
            currString += aStr.charAt(i);
        }

    }

    if(currString.length === 1){
        substringArr.push(`${currString}_`);
    }
    else if(currString.length === 2){
        substringArr.push(currString);
    }
    return substringArr;

}


function beginningZeros(aStr: string): number{

    let currString: string = "";

    for(let i: number = 0; i < aStr.length; i++){

        if(aStr[i] !== '0'){
            break;
        }
        else{
            currString += aStr[i];
        }

    }
    return currString.length;

}



