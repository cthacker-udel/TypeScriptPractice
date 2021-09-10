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
    let closestDistance = Math.abs(array[0] - num);
    let closestNum = array[0];
    let closestNumArr = [];
    for (let i = 0; i < array.length; i++) {
        let distance = Math.abs(array[i] - num);
        if (distance <= closestDistance) {
            closestDistance = distance;
            //closestNum = Math.min(closestNum,array[i]);
        }
    }
    for (let i = 0; i < array.length; i++) {
        let distance = Math.abs(array[i] - num);
        if (distance == closestDistance) {
            closestNumArr.push(array[i]);
            //closestNum = Math.min(closestNum,array[i]);
        }
    }
    return Math.min(...closestNumArr);
}
nearestValue([4, 7, 10, 11, 12, 17], 9); //, 10);
function betweenMarkers(word, marker1, marker2) {
    return word.substring(word.indexOf(marker1) + 1, word.indexOf(marker2));
}
function correctSentence(word1) {
    let word2 = word1.split(', ')[1];
    if (word2 === undefined) {
        return `${word1.endsWith('.') ? word1.charAt(0).toUpperCase() + word1.substring(1) : word1.charAt(0).toUpperCase() + word1.substring(1) + "."}`;
    }
    word1 = word1.split(', ')[0];
    return `${word1.charAt(0).toUpperCase() + word1.substring(1).toLowerCase()}, ${word2.endsWith(".") ? word2.toLowerCase() : word2.toLowerCase() + "."}`;
}
function isEven(num) {
    return num % 2 === 0;
}
function sumNumbers(aStr) {
    let splitStr = aStr.split(' ');
    //const expr: string = '(^\d?\d+\d?$)';
    let total = 0;
    for (let i = 0; i < splitStr.length; i++) {
        //let result: RegExpMatchArray | null = splitStr[i].match(expr);
        if (isNaN(+splitStr[i])) {
            continue;
        }
        else {
            total += Number(splitStr[i]);
        }
    }
    return total;
}
function threeWords(aStr) {
    let consecCount = 0;
    let splitStr = aStr.split(' ');
    for (let i = 0; i < splitStr.length; i++) {
        if (consecCount === 3) {
            return true;
        }
        else if (!isNaN(+splitStr[i])) {
            // is number
            consecCount = 0;
        }
        else {
            // is a string
            consecCount++;
        }
    }
    return consecCount === 3;
}
function firstWord(aStr) {
    const expr = /([\w']+)/g;
    let regexMatchArr = aStr.match(expr);
    if (regexMatchArr === null) {
        // empty string??
        return "";
    }
    else {
        return regexMatchArr[0];
    }
}
console.log(firstWord("Hello world")); // "Hello")
console.log(firstWord(" a word ")); // "a")
console.log(firstWord("don't touch it")); // "don't")
console.log(firstWord("greetings, friends")); // "greetings")
console.log(firstWord("... and so on ...")); // "and")
console.log(firstWord("hi")); // "hi")
function countDigits(aStr) {
    console.log(`testing : ${aStr}`);
    aStr.split('').filter(e => (!isNaN(+e))).forEach(e => console.log(e));
    return 0;
}
console.log(+' ');
//countDigits('who is 1st here');
function reverseString(aStr) {
    let newStr = "";
    for (let i = aStr.length - 1; i >= 0; i--) {
        newStr += aStr[i];
    }
    return newStr;
}
function backwardStringByWord(aStr) {
    let splitStr = aStr.split(' ');
    if (splitStr.length === 1) {
        return reverseString(splitStr[0]);
    }
    else {
        for (let i = 0; i < splitStr.length; i++) {
            splitStr[i] = reverseString(splitStr[i]);
        }
        return splitStr.join(' ');
    }
}
function secondIndex(str1, sub) {
    let result = str1.indexOf(sub);
    if (result == -1) {
        return undefined;
    }
    else {
        let newStr = str1.substring(result + 1);
        let before = str1.substring(0, result + 1);
        let result2 = newStr.indexOf(sub);
        if (result2 == -1) {
            return undefined;
        }
        // hellollo
        // llo
        // hello
        return before.length + result2;
    }
}
console.log(secondIndex("sims", "s")); // 3)
console.log(secondIndex("find the river", "e")); // 12)
console.log(secondIndex("hi", " ")); // undefined)
console.log(secondIndex("hi mayor", " ")); // undefined)
console.log(secondIndex("hi mr Mayor", " ")); // 5)
console.log(secondIndex("three occurences", "r"));
function numFrequency(arr, elem) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == elem) {
            count++;
        }
    }
    return count;
}
function frequencySort(arr) {
    let tmpArr = arr.slice(0);
    arr.sort((a, b) => numFrequency(tmpArr, b) > numFrequency(tmpArr, a) ? 1 : numFrequency(tmpArr, b) < numFrequency(tmpArr, a) ? -1 : 0);
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        let currNum = arr[i];
        if (newArr.includes(currNum)) {
            continue;
        }
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] == currNum) {
                newArr.push(arr[j]);
            }
        }
        console.log(`new arr : ${newArr}`);
    }
    return newArr;
}
frequencySort([4, 6, 2, 2, 6, 4, 4, 4]);
function splitList(arr) {
    let middle = Math.floor(arr.length / 2);
    let subArr = [];
    let container = [];
    if (arr.length % 2 !== 0) {
        for (let i = 0; i <= middle; i++) {
            subArr.push(arr[i]);
        }
        container.push(subArr);
        subArr = [];
        for (let i = middle + 1; i < arr.length; i++) {
            subArr.push(arr[i]);
        }
        container.push(subArr);
        return container;
    }
    else {
        for (let i = 0; i < middle; i++) {
            subArr.push(arr[i]);
        }
        container.push(subArr);
        subArr = [];
        for (let i = middle; i < arr.length; i++) {
            subArr.push(arr[i]);
        }
        container.push(subArr);
        return container;
    }
}
function allTheSame(elements) {
    if (elements.length < 1) {
        return true;
    }
    let theSet = new Set(elements);
    return theSet.size === 1;
}
//console.log(`testing | text : ${text} and words : ${words}`);
function wordsOrder(text, words) {
    let wordsSet = new Set(words);
    if (wordsSet.size !== words.length) {
        return false;
    }
    else {
        // convert all words to indexes and then compare sorted list to actual list
        let newText = text.split(' ');
        let indexes = [];
        for (let i = 0; i < words.length; i++) {
            let theWord = words[i];
            if (!newText.includes(theWord)) {
                return false;
            }
            indexes.push(newText.indexOf(theWord));
        }
        let tmpIndexes = indexes.slice(0);
        indexes.sort((a, b) => a - b);
        for (let i = 0; i < tmpIndexes.length; i++) {
            if (tmpIndexes[i] !== indexes[i]) {
                return false;
            }
        }
        return true;
    }
}
console.log(wordsOrder('hi world im here', ['here', 'world']));
function isAllUpper2(aStr) {
    let letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (aStr === "") {
        return false;
    }
    else {
        return aStr.toUpperCase() === aStr && aStr.trim().length !== 0 && aStr.split('').filter(e => letters.includes(e)).length > 0;
    }
}
;
console.log(isAllUpper("ALL UPPER"));
function isAscending(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        let num1 = arr[i];
        let num2 = arr[i - 1];
        if (num1 <= num2) {
            return false;
        }
    }
    return true;
}
function sortByExt(files) {
    files.sort((a, b) => a.split('').map(e => e.charCodeAt(0)).reduce((a, b) => a + b) - b.split('').map(e => e.charCodeAt(0)).reduce((a, b) => a - b));
    let emptyExtensions = [];
    let specializedNames = [];
    // first add all filenames without extension
    for (let i = 0; i < files.length; i++) {
        let theFile = files[i];
        let ind1 = theFile.indexOf('.');
        let ind2 = theFile.lastIndexOf('.');
        if (ind1 == -1) {
            emptyExtensions.push(theFile);
        }
        else if (ind1 == ind2) {
            if (theFile.startsWith('.')) {
                emptyExtensions.push(theFile);
            }
            else if (theFile.endsWith('.')) {
                emptyExtensions.push(theFile);
            }
            else {
                let fileName = theFile.substring(0, ind2);
                let extension = theFile.substring(ind2 + 1);
                specializedNames.push([fileName, extension]);
            }
        }
    }
    //fileNames.sort((a,b) => a.split('').map(e => e.charCodeAt(0)).reduce((a,b) => a+b) - b.split('').map(e => e.charCodeAt(0)).reduce((a,b) => a-b));
    //console.log(fileNames);
    let sorter = (a, b) => {
        let fileNameA = a[0];
        let fileNameB = b[0];
        let extensionA = a[1];
        let extensionB = b[1];
        if (extensionA === extensionB) {
            if (fileNameA > fileNameB) {
                return 1;
            }
            else if (fileNameA < fileNameB) {
                return -1;
            }
            else {
                return 0;
            }
        }
        else {
            if (extensionA > extensionB) {
                return 1;
            }
            else if (extensionB > extensionA) {
                return -1;
            }
            else {
                return 0;
            }
        }
    };
    specializedNames.sort(sorter);
    let finalizedSpecializedName = specializedNames.map(e => e.join('.'));
    //console.log(`finalizedSPECNames = ${finalizedSpecializedName} and `);
    let finalResult = [];
    if (emptyExtensions.length > 0) {
        for (let i = 0; i < emptyExtensions.length; i++) {
            finalResult.push(emptyExtensions[i]);
        }
    }
    if (finalizedSpecializedName.length > 0) {
        for (let i = 0; i < finalizedSpecializedName.length; i++) {
            finalResult.push(finalizedSpecializedName[i]);
        }
    }
    console.log(`Final result = ${finalResult}`);
    return [];
}
console.log(sortByExt(['1.cad', '1.bat', '1.aa'])); // ['1.aa', '1.bat', '1.cad']);
console.log(sortByExt(['1.cad', '1.bat', '1.aa', '2.bat'])); // ['1.aa', '1.bat', '2.bat', '1.cad']);
console.log(sortByExt(['1.cad', '1.bat', '1.aa', '.bat'])); // ['.bat', '1.aa', '1.bat', '1.cad']);
console.log(sortByExt(['1.cad', '1.bat', '.aa', '.bat'])); // ['.aa', '.bat', '1.bat', '1.cad']);
console.log(sortByExt(['1.cad', '1.', '1.aa'])); // ['1.', '1.aa', '1.cad']);
console.log(sortByExt(['1.cad', '1.bat', '1.aa', '1.aa.doc'])); // ['1.aa', '1.bat', '1.cad', '1.aa.doc']);
console.log(sortByExt(['1.cad', '1.bat', '1.aa', '.aa.doc'])); // ['1.aa', '1.bat', '1.cad', '.aa.doc']);
//# sourceMappingURL=index.js.map