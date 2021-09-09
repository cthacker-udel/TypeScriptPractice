"use strict";
console.log('Hello Typescript!');
let c = {
    firstName: "john",
    lastName: "reilly"
};
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
c = new Person("john", "reilly");
let a;
a = {
    b: 20,
};
let i;
let exampleObject;
exampleObject = {
    b: 20,
    1: true,
    3: false
};
let exampleObject2;
let readOnlyObj;
let age = 44;
let driver = {
    name: "Driver Mcgee",
    age: age
};
let x = Math.random() < .5;
if (x) {
    let b = "blue";
}
else {
    let c = "red";
}
let siamese = {
    name: "Sir Isaac",
    age: 44,
    breed: "Tasmanian"
};
console.log(`Siamese's age is : ${siamese.age}`);
let dog1 = {
    name: "Doggo",
    barks: true,
    wags: true
};
let carOrdog = {
    name: "Sir Williams",
    barks: false,
    wags: false,
    purrs: true,
};
function returnsInvBool(theType) {
    return !theType;
}
let list = [];
list.push('hello there');
list.push('my name is cameron thacker');
list.forEach(e => console.log(e));
let fArr = [];
let d = [];
d.push(10);
d.push('elem');
d.map(e => typeof e === 'string' ? e + ' <--- string' : typeof e === 'number' ? e + 10 : e + ' <--- unknown type').forEach(e => console.log(e));
function buildArray() {
    let a = [];
    a.push(1);
    a.push('x');
    return a;
}
let anyArr = buildArray();
//anyArr.push(true); <--- cannot push type boolean to array of type (string | number) string or number
let anyTuple = ['str', 10, 'str2', 20];
let optionalArr = [];
optionalArr.push([10]);
console.log(optionalArr);
optionalArr.push([10, 20]);
console.log(optionalArr);
let restArr = [1];
let restArrV2 = [1, [0]];
restArrV2.push([1, 2, 3]);
console.log(restArrV2);
let immutableArr = [10, 20, 30];
let newImmutableArr = immutableArr.concat([1, 2, 3]);
let three = newImmutableArr[1];
let immutableArrArrayDec = [];
let immutableNum = 300;
function returnNull(x) {
    if (x < 10) {
        return x;
    }
    else {
        return null;
    }
}
function returnUndefined(x) {
    if (x > 10) {
        return x;
    }
    else {
        return undefined;
    }
}
function returnVoid(x) {
    console.log(x + 10);
}
function returnNever(x) {
    throw TypeError('This function returns never by throwing an exception');
}
function returnNeverV2() {
    while (true) {
        console.log('hello');
    }
}
function printPizza(pizza) {
    console.log(`\nPIZZA STATS\nToppings : ${pizza.toppings}\nPrice : ${pizza.price}`);
}
let anchoviesPepperoni = {
    toppings: ['anchovies', 'cheese', 'pepperoni'],
    price: 10.25
};
printPizza(anchoviesPepperoni);
var Language;
(function (Language) {
    Language[Language["English"] = 0] = "English";
    Language[Language["Spanish"] = 1] = "Spanish";
    Language[Language["Russian"] = 2] = "Russian";
})(Language || (Language = {}));
let myFirstLanguage = Language.English;
var AnimalWeight;
(function (AnimalWeight) {
    AnimalWeight[AnimalWeight["dog"] = 20.55] = "dog";
    AnimalWeight[AnimalWeight["cat"] = 30.73] = "cat";
    AnimalWeight[AnimalWeight["horse"] = 41.52] = "horse";
})(AnimalWeight || (AnimalWeight = {}));
console.log(`The weight of a dog is : ${AnimalWeight.dog}`);
var HelloLanguage;
(function (HelloLanguage) {
    HelloLanguage["english"] = "Hello";
    HelloLanguage["spanish"] = "Hola";
    HelloLanguage["German"] = "Gutentag";
    HelloLanguage["Chinese"] = "Nihao";
    HelloLanguage["Japanese"] = "Konichiwa";
    HelloLanguage["French"] = "Bonjour";
})(HelloLanguage || (HelloLanguage = {}));
console.log(`Hello ${HelloLanguage.spanish} ${HelloLanguage.German} ${HelloLanguage.Chinese} ${HelloLanguage.Chinese} ${HelloLanguage.Japanese} ${HelloLanguage.French}`);
console.log(`Firstelem = ${0 /* firstElem */}`);
function isFlippable(f) {
    return `${f} is flippable!`;
}
console.log(isFlippable("Burger" /* Burger */));
function isAcceptablePassword(password) {
    return password.length > 6;
}
function numberLength(num) {
    let numStr = Math.abs(num).toString();
    return numStr.length;
}
function endZeros(val) {
    let count = 0;
    let strNum = val.toString();
    for (let i = strNum.length - 1; i >= 0; i--) {
        let iChar = strNum.charAt(i);
        console.log(`iChar == ${iChar} and count = ${count}`);
        if (iChar != '0') {
            break;
        }
        if (iChar == '0') {
            count++;
        }
    }
    return count;
}
console.log(endZeros(0)); // 1);
console.log(endZeros(1)); // 0);
console.log(endZeros(10)); // 1);
console.log(endZeros(101)); // 0);
console.log(endZeros(245)); // 0);
console.log(endZeros(100100)); // 2);
function backwardString(value) {
    return value.split('').reverse().join('');
}
function removeAllBefore(arr, removeNum) {
    if (!arr.includes(removeNum)) {
        return arr;
    }
    let newArr = [];
    let trigger = false;
    for (let i = 0; i < arr.length; i++) {
        if (trigger) {
            newArr.push(arr[i]);
        }
        else if (arr[i] === removeNum) {
            trigger = !trigger;
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
function isAllUpper(astr) {
    return astr.toUpperCase() === astr;
}
function replaceFirst(arr) {
    if (arr.length < 1) {
        return [];
    }
    let firstElem = arr.slice(0, 1);
    arr.splice(0, 1);
    arr.push(firstElem[0]);
    return arr;
}
replaceFirst([1, 2, 3, 4]);
function maxDigit(aNum) {
    let maxDigit = 0;
    let strNum = aNum.toString();
    for (let i = 0; i < strNum.length; i++) {
        maxDigit = Math.max(parseInt(strNum.charAt(i)), maxDigit);
    }
    return maxDigit;
}
function splitPairs(aStr) {
    let substringArr = [];
    let currString = "";
    for (let i = 0; i < aStr.length; i++) {
        if (currString.length === 2) {
            substringArr.push(currString);
            currString = aStr.charAt(i);
        }
        else {
            currString += aStr.charAt(i);
        }
    }
    if (currString.length === 1) {
        substringArr.push(`${currString}_`);
    }
    else if (currString.length === 2) {
        substringArr.push(currString);
    }
    return substringArr;
}
function beginningZeros(aStr) {
    let currString = "";
    for (let i = 0; i < aStr.length; i++) {
        if (aStr[i] !== '0') {
            break;
        }
        else {
            currString += aStr[i];
        }
    }
    return currString.length;
}
function nearestValue(array, num) {
    let closestDistance = Math.abs(array[0] = num);
    let closestNum = array[0];
    for (let i = 0; i < array.length; i++) {
        let distance = Math.abs(array[i] - num);
        if (distance <= closestDistance) {
            closestDistance = distance;
            closestNum = Math.min(closestNum, array[i]);
        }
    }
    return closestNum;
}
nearestValue([4, 7, 10, 11, 12, 17], 9); //, 10);
//# sourceMappingURL=index.js.map