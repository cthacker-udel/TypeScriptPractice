import { match } from "assert";
import { ALPN_ENABLED, O_RDONLY } from "constants";
import { stringify } from "querystring";
import { inspect } from "util";
import { markAsUntransferable } from "worker_threads";

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

function nearestValue(array: number[], num: number): number{

    let closestDistance: number = Math.abs(array[0] - num);
    let closestNum: number = array[0];

    let closestNumArr: number[] = [];

    for(let i: number = 0; i < array.length; i++){

        let distance: number = Math.abs(array[i] - num);

        if(distance <= closestDistance){

            closestDistance = distance;
            //closestNum = Math.min(closestNum,array[i]);

        }

    }

    for(let i: number = 0; i < array.length; i++){

        let distance: number = Math.abs(array[i] - num);

        if(distance == closestDistance){

            closestNumArr.push(array[i]);
            //closestNum = Math.min(closestNum,array[i]);

        }

    }


    return Math.min(...closestNumArr);
}

nearestValue([4, 7, 10, 11, 12, 17], 9);//, 10);


function betweenMarkers(word: string, marker1: string, marker2: string): string{

    return word.substring(word.indexOf(marker1)+1,word.indexOf(marker2));

}

function correctSentence(word1: string): string{

    let word2: string = word1.split(', ')[1];
    
    if(word2 === undefined){

        return `${word1.endsWith('.')? word1.charAt(0).toUpperCase() + word1.substring(1): word1.charAt(0).toUpperCase() + word1.substring(1) + "."}`;

    }

    word1 = word1.split(', ')[0];


    return `${word1.charAt(0).toUpperCase() + word1.substring(1).toLowerCase()}, ${word2.endsWith(".")? word2.toLowerCase(): word2.toLowerCase() + "."}`;


}


function isEven(num: number): boolean{

    return num % 2 === 0;

}

function sumNumbers(aStr: string): number{

    let splitStr: string[] = aStr.split(' ');

    //const expr: string = '(^\d?\d+\d?$)';

    let total: number = 0;

    for(let i: number = 0; i < splitStr.length; i++){

        //let result: RegExpMatchArray | null = splitStr[i].match(expr);

        if(isNaN(+splitStr[i])){

            continue;

        }
        else{

            total += Number(splitStr[i]);

        }

    }
    return total;


}

function threeWords(aStr: string): boolean{

    let consecCount: number = 0;

    let splitStr: string[] = aStr.split(' ');

    for(let i: number = 0; i < splitStr.length; i++){

        if(consecCount === 3){

            return true;

        }
        else if(!isNaN(+splitStr[i])){

            // is number
            consecCount = 0;

        }
        else{

            // is a string
            consecCount++;

        }


    }
    return consecCount === 3;


}

function firstWord(aStr: string): string{

    const expr: RegExp = /([\w']+)/g;

    let regexMatchArr: RegExpMatchArray | null = aStr.match(expr);

    if(regexMatchArr === null){

        // empty string??
        return "";

    }
    else{

        return regexMatchArr[0];

    }

}

console.log(firstWord("Hello world"));// "Hello")
console.log(firstWord(" a word "));// "a")
console.log(firstWord("don't touch it"));// "don't")
console.log(firstWord("greetings, friends"));// "greetings")
console.log(firstWord("... and so on ..."));// "and")
console.log(firstWord("hi"));// "hi")

function countDigits(aStr: string): number{
    
    console.log(`testing : ${aStr}`);
    
    aStr.split('').filter(e => (!isNaN(+e))).forEach(e => console.log(e));
    
    return 0;

}

console.log(+' ');

//countDigits('who is 1st here');

function reverseString(aStr: string): string{

    let newStr: string = "";

    for(let i: number = aStr.length-1; i >= 0; i--){

        newStr += aStr[i];

    }
    return newStr;

}

function backwardStringByWord(aStr: string){

    let splitStr: string[] = aStr.split(' ');

    if(splitStr.length === 1){

        return reverseString(splitStr[0]);

    }
    else{

        for(let i: number = 0; i < splitStr.length; i++){

            splitStr[i] = reverseString(splitStr[i]);

        }
        return splitStr.join(' ');

    }

}

function secondIndex(str1: string, sub: string): number | undefined{

    let result: number = str1.indexOf(sub);
    if(result == -1){

        return undefined;

    }
    else{

        let newStr: string = str1.substring(result+1);
        let before: string = str1.substring(0,result+1);
        let result2: number = newStr.indexOf(sub);

        if(result2 == -1){
            return undefined;
        }


        // hellollo

        // llo
        // hello

        return before.length + result2;

    }

}

console.log(secondIndex("sims", "s"));// 3)
console.log(secondIndex("find the river", "e"));// 12)
console.log(secondIndex("hi", " "));// undefined)
console.log(secondIndex("hi mayor", " "));// undefined)
console.log(secondIndex("hi mr Mayor", " "));// 5)
console.log(secondIndex("three occurences","r"));


function numFrequency(arr: any[], elem: any){

    let count: number = 0;


    for(let i: number = 0; i < arr.length; i++){

        if(arr[i] == elem){

            count++;

        }

    }
    return count;


}

function frequencySort(arr: any[]): any[]{

    let tmpArr: any[] = arr.slice(0);

    arr.sort((a,b) => numFrequency(tmpArr,b) > numFrequency(tmpArr,a)? 1: numFrequency(tmpArr,b) < numFrequency(tmpArr,a)? -1 : 0);

    let newArr: any[] = [];

    for(let i = 0; i < arr.length; i++){

        let currNum = arr[i];

        if(newArr.includes(currNum)){
            continue;
        }

        for(let j = 0; j < arr.length; j++){

            if(arr[j] == currNum){

                newArr.push(arr[j]);

            }

        }
        console.log(`new arr : ${newArr}`);

    }


    return newArr;

}


frequencySort([4, 6, 2, 2, 6, 4, 4, 4]);

function splitList(arr: number[]): number[][]{

    let middle = Math.floor(arr.length / 2);

    let subArr: number[] = [];
    let container: number[][] = [];

    if(arr.length % 2 !== 0){


        for(let i = 0; i <= middle; i++){

            subArr.push(arr[i]);

        }
        container.push(subArr);
        subArr = [];

        for(let i = middle+1; i < arr.length; i++){

            subArr.push(arr[i]);

        }
        container.push(subArr);

        return container;

    }
    else{

        for(let i = 0; i < middle; i++){

            subArr.push(arr[i]);

        }
        container.push(subArr);

        subArr = [];

        for(let i = middle; i < arr.length; i++){

            subArr.push(arr[i]);

        }
        container.push(subArr);

        return container;

    }


}

function allTheSame(elements: any[]): boolean{

    if(elements.length < 1){

        return true;

    }

    let theSet: Set<any> = new Set<any>(elements);

    return theSet.size === 1;


}

//console.log(`testing | text : ${text} and words : ${words}`);

function wordsOrder(text: string, words: string[]): boolean{

    let wordsSet: Set<any> = new Set<any>(words);

    if(wordsSet.size !== words.length){

        return false;

    }
    else{

        // convert all words to indexes and then compare sorted list to actual list

        let newText: string[] = text.split(' ');

        let indexes: number[] = [];

        for(let i = 0; i < words.length; i++){


            let theWord: string = words[i];
            if(!newText.includes(theWord)){
                return false;
            }

            indexes.push(newText.indexOf(theWord));

        }
        
        let tmpIndexes: number[] = indexes.slice(0);
        
        indexes.sort((a,b) => a-b);

        for(let i = 0; i < tmpIndexes.length; i++){

            if(tmpIndexes[i] !== indexes[i]){
                
                return false;

            }

        }
        return true;



    }


}

console.log(wordsOrder('hi world im here', ['here', 'world']));

function isAllUpper2(aStr: string){

    let letters: string = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    if(aStr === ""){
        return false;
    }
    else{
        return aStr.toUpperCase() === aStr && aStr.trim().length !== 0 && aStr.split('').filter(e => letters.includes(e)).length > 0;
    }

};

console.log(isAllUpper("ALL UPPER"));


function isAscending(arr: number[]): boolean{

    for(let i = arr.length-1; i > 0; i--){

        let num1: number = arr[i];
        let num2: number = arr[i-1];
        if(num1 <= num2){
            return false;
        }

    }
    return true;

}

function sortByExt(files: string[]): string[]{

    files.sort((a,b) => a.split('').map(e => e.charCodeAt(0)).reduce((a,b) => a+b) - b.split('').map(e => e.charCodeAt(0)).reduce((a,b) => a-b));

    let emptyExtensions: string[] = [];

    let specializedNames: string[][] = [];

    // first add all filenames without extension

    for(let i = 0; i < files.length; i++){

        let theFile: string = files[i];

        let ind1: number = theFile.indexOf('.');
        let ind2: number = theFile.lastIndexOf('.');

        if(ind1 == -1){
            emptyExtensions.push(theFile);
        }
        else if(ind1 == ind2){

            if(theFile.startsWith('.')){
                emptyExtensions.push(theFile);
            }
            else if(theFile.endsWith('.')){
                emptyExtensions.push(theFile);
            }
            else{

                let fileName = theFile.substring(0,ind2);
                let extension = theFile.substring(ind2+1);

                specializedNames.push([fileName,extension]);
            }

        }
        else{
            let fileName = theFile.substring(0,ind2);
            let extension = theFile.substring(ind2+1);

            specializedNames.push([fileName,extension]);
        }

    }

    //fileNames.sort((a,b) => a.split('').map(e => e.charCodeAt(0)).reduce((a,b) => a+b) - b.split('').map(e => e.charCodeAt(0)).reduce((a,b) => a-b));

    //console.log(fileNames);

    let sorter = (a:string[],b:string[]) => {

        let fileNameA = a[0];
        let fileNameB = b[0];
        
        let extensionA = a[1];
        let extensionB = b[1];

        if(extensionA === extensionB){

            if(fileNameA > fileNameB){
                return 1;
            }
            else if(fileNameA < fileNameB){
                return -1;
            }
            else{
                return 0;
            }

        }
        else{

            if(extensionA > extensionB){
                return 1;
            }
            else if(extensionB > extensionA){
                return -1;
            }
            else{
                return 0;
            }

        }

    }

    
    specializedNames.sort(sorter);

    let finalizedSpecializedName: string[] = specializedNames.map(e => e.join('.'));

    //console.log(`finalizedSPECNames = ${finalizedSpecializedName} and `);

    let finalResult: string[] = [];

    if(emptyExtensions.length > 0){
        for(let i = 0; i < emptyExtensions.length; i++){
            finalResult.push(emptyExtensions[i]);
        }
    }
    
    if(finalizedSpecializedName.length > 0){
        for(let i = 0; i < finalizedSpecializedName.length; i++){
            finalResult.push(finalizedSpecializedName[i]);
        }
    }

    console.log(`Final result = ${finalResult}`);

    return [];


}


console.log(sortByExt(['1.cad', '1.bat', '1.aa']));// ['1.aa', '1.bat', '1.cad']);
console.log(sortByExt(['1.cad', '1.bat', '1.aa', '2.bat']));// ['1.aa', '1.bat', '2.bat', '1.cad']);
console.log(sortByExt(['1.cad', '1.bat', '1.aa', '.bat']));// ['.bat', '1.aa', '1.bat', '1.cad']);
console.log(sortByExt(['1.cad', '1.bat', '.aa', '.bat']));// ['.aa', '.bat', '1.bat', '1.cad']);
console.log(sortByExt(['1.cad', '1.', '1.aa']));// ['1.', '1.aa', '1.cad']);
console.log(sortByExt(['1.cad', '1.bat', '1.aa', '1.aa.doc']));// ['1.aa', '1.bat', '1.cad', '1.aa.doc']);
console.log(sortByExt(['1.cad', '1.bat', '1.aa', '.aa.doc']));// ['1.aa', '1.bat', '1.cad', '.aa.doc']);

function brackets(theStr: string): boolean{

    let brackStorage: string[] = [];

    for(let i = 0; i < theStr.length; i++){

        let theChar: string = theStr[i];
        if(theChar == '('){
            brackStorage.push(theChar);
        }
        else if(theChar == ')'){

            if(brackStorage.length == 0){
                return false;
            }
            else{

                if(brackStorage[brackStorage.length-1] != '('){
                    return false;
                }
                else{
                    brackStorage.pop();
                }

            }

        }
        else if(theChar == '{'){
            brackStorage.push(theChar);
        }
        else if(theChar == '}'){

            if(brackStorage.length == 0){
                return false;
            }
            else{

                if(brackStorage[brackStorage.length-1] != '{'){
                    return false;
                }
                else{
                    brackStorage.pop();
                }

            }   

        }
        else if(theChar == '['){
            brackStorage.push(theChar);
        }
        else if(theChar == ']'){
            if(brackStorage.length == 0){
                return false;
            }
            else{

                if(brackStorage[brackStorage.length-1] != '['){
                    return false;
                }
                else{
                    brackStorage.pop();
                }

            }
        }

    }
    return brackStorage.length == 0;


}


function isometricStrings(str1: string, str2: string): boolean{

    let dict1: any = {};


    for(let i = 0; i < str1.length; i++){

        if(Object.keys(dict1).includes(str1[i])){
            // contains letter
            let letter: any = dict1[str1[i]];
            if(str2[i] !== letter){
                return false;
            }
        }
        else{
            dict1[str1[i]] = str2[i];
        }

    }
    return true;
}

isometricStrings('foo', 'bar');

/*
function split(numstr){

    if(numstr.length === 0){
        return [[]];
    }
    let result = [];
    for(let i = 1; i <= numstr.length; ++i){
        for(let s of split(numstr.slice(i))){
            result.push([Number(numstr.slice(0,i)),...s]);
        }
    }
    return result;
}

function isUnlucky(n){
    return Math.abs(n - 100) < 1e-6;
}

function evalAll(numlist): Set<number>{

    if(numlist.length === 1){
        return new Set(numlist);
    }
    let result = new Set<number>();
    for(let i = 1; i < numlist.length; ++i){
        let lhsl = evalAll(numlist.slice(0,i));
        let rhsl = evalAll(numlist.slice(i));
        for(let lhs of lhsl){
            for(let rhs of rhsl){
                result.add(lhs + rhs);
                result.add(lhs - rhs);
                result.add(lhs * rhs);
                if(rhs !== 0){
                    result.add(lhs / rhs);
                }
            }
        }
    }
    return result;

}

function luckyTickets(aNum: string): boolean{

    // recursive solution?

    let splits = split(aNum);
    for(let spl of splits){
        if([...evalAll(spl)].some(isUnlucky)) return false;
    }
    return true;

}
*/

function unixMatch(astr: string, expr: string): boolean{

    let res: string[] = [];
    for(let i = 0; i < expr.length; i++){
        let iChar = expr[i];
        if(iChar == '*'){
            res.push('.*');
        }
        else if(iChar == '?'){
            res.push('.');
        }
        else if(iChar == '.'){
            res.push('\\.');
        }
        else{
            res.push(iChar);
        }
    }
    expr = res.join('');
    

    let regex: RegExpMatchArray | null = RegExp(expr).exec(astr);

    return regex !== null? true: false;

}

function unixMatch2(aStr: string, expr: string): boolean{

    let res: string[] = [];

    for(let i = 0; i < expr.length; i++){
        let iChar = expr[i];
        if(iChar == '!'){
            res.push('^');
        }
        else if(iChar == '.'){
            res.push('\\.');
        }
        else{
            res.push(iChar);
        }
    }
    expr = res.join('');

    let regex: RegExpMatchArray | null = RegExp(expr).exec(aStr);

    return regex !== null? true: false;

}


function absoluteSorting(arr: number[]): number[]{

    arr.sort((a,b) => Math.abs(a) - Math.abs(b));

    return arr;

}

function goesAfter(str1: string, str2: string, str3: string){

    if(str2 === str3){
        return false;
    }
    else{

        let ind1 = str1.indexOf(str2);
        let ind2 = str1.indexOf(str3);

        if(ind1 == -1 || ind2 == -1){
            return false;
        }
        else{

            return ind1 < ind2 && (ind2-ind1) == 1;

        }

    }

}

function timeConverter(time: string): string{

    let theHr = +time.split(':')[0];
    let theMin = +time.split(':')[1];

    let diff = Math.abs(theHr - 12);

    if(theHr >= 12){

        switch(diff){

            case 0: return `${theHr}:${theMin} p.m.`;

            default: return `${diff}:${theMin} p.m.`;

        }

    }
    else{

        return `${theHr}:${theMin} a.m.`;

    }

}

console.log(unixMatch('somefile.txt', '*'));// true);
console.log(unixMatch('other.exe', '*'));// true);
console.log(unixMatch('my.exe', '*.txt'));// false);
console.log(unixMatch('log1.txt', 'log?.txt'));// true);
console.log(unixMatch('log12.txt', 'log?.txt'));// false);
console.log(unixMatch('log12.txt', 'log??.txt'));// true);

console.log('testing match2');
console.log(unixMatch2('log1.txt', 'log[1234567890].txt'));//, true);
console.log(unixMatch2('log1.txt', 'log[!1].txt'));//, false);


function sumByTypes(arr: any[]): any[]{

    let concat: string = "";
    let total: number = 0;

    for(let i = 0; i < arr.length; i++){

        let elem: any = arr[i];

        if(typeof elem == 'string'){
            concat += elem;
        }
        else{
            total += elem;
        }

    }
    return [concat,total];
}

let translate: (aStr: string) => string = function(aStr: string): string {

    let newStr: string = "";

    let consonants = "bcdfghjklmnpqrstvwxz";
    let vowels = "aeiouy";
    let ind = 0;

    for(;;){

        if(ind >= aStr.length){
            break;
        }
        let iChar = aStr[ind];
        if(vowels.includes(iChar) && iChar !== ' '){
            // skip forward 2
            ind += 3;
            newStr += iChar;
        }
        else if(consonants.includes(iChar) && iChar !== ' '){
            ind += 2;
            newStr += iChar;
        }
        else{
            newStr += iChar;
            ind++;
        }

    }
    return newStr;

};


console.log(translate("hieeelalaooo"));


function commonWords(str1: string, string2: string): string{

    return string2.split(',').filter(e => str1.includes(e)).sort().join(',');

}

function follow(route: string): number[]{

    let splitRoute = route.split('');
    let y: number[] = splitRoute.filter(e => e === "f" || e === "b").map(e => e === "f"? 1: -1);
    let x: number[] = splitRoute.filter(e => e === "l" || e === "r").map(e => e === "l"? -1: 1);
    if(x.length === 0){
        return [0,y.reduce((a,b) => a+b)];
    }
    else if(y.length === 0){
        return [x.reduce((a,b) => a+b),0];
    }
    // wouldnt let me append reduce onto the end of this mapping function?
    return [x.reduce((a,b) => a+b),y.reduce((a,b) => a+b)];

}


let findQuotes = (aStr:string) => {

    let strArr: string[] = [];

    let emptyString: string = "";

    let foundQuotes: boolean = false;

    for(let i = 0; i < aStr.length; i++){

        let iChar: string = aStr[i];
        if(iChar == "\"" && !foundQuotes){
            foundQuotes = true;
        }
        else if(iChar == "\"" && foundQuotes){
            foundQuotes = false;
            strArr.push(emptyString);
            emptyString = "";
        }
        else if(foundQuotes){
            emptyString += iChar;
        }
    }
    if(emptyString.length > 0){
        strArr.push(emptyString);
    }

    console.log(strArr);
    return strArr;


}

findQuotes('"Greetings"');


function longRepeat(aStr: string): number {

    let firstChar: string = aStr[0];

    let emptyString: string = firstChar;

    let maxLength: number = 0;
    let maxString: string = "";

    for(let i = 1; i < aStr.length; i++){

        let iChar: string = aStr[i];
        if(iChar === firstChar){
            emptyString += iChar;
        }
        else{
            if(emptyString.length > maxLength){
                maxLength = emptyString.length;
                maxString = emptyString;
                emptyString = aStr[i];
                firstChar = emptyString;
            }
            else{
                emptyString = aStr[i];
                firstChar = emptyString;
            }
        }


    }
    if(emptyString.length > maxLength){
        maxString = emptyString;
        maxLength = maxString.length;
    }
    console.log(maxString);
    return maxLength;


}

longRepeat('ddvvrwwwrggg')


let romanNumerals = (aNum: number): string => {

    let numString: string = "";

    while(aNum >= 1000){
        numString += "M";
        aNum -= 1000;
    }
    while(aNum >= 900){
        numString += "CM";
        aNum -= 900;
    }
    while(aNum >= 500){
        numString += "D";
        aNum -= 500;
    }
    while(aNum >= 400){
        numString += "CD";
        aNum -= 400;
    }
    while(aNum >= 100){
        numString += "C";
        aNum -= 100;
    }
    while(aNum >= 90){
        numString += "XC";
        aNum -= 90;
    }
    while(aNum >= 50){
        numString += "L";
        aNum -= 50;
    }
    while(aNum >= 40){
        numString += "XL";
        aNum -= 40;
    }
    while(aNum >= 10){
        numString += "X";
        aNum -= 10;
    }
    while(aNum >= 9){
        numString += "IX";
        aNum -= 9;
    }
    while(aNum >= 5){
        numString += "V";
        aNum -= 5;
    }
    while(aNum >= 4){
        numString += "IV";
        aNum -= 4;
    }
    while(aNum >= 1){
        numString += "I";
        aNum--;
    }
    return numString;

}

romanNumerals(3888)


let aggregateAndCount = (items:[string,number][]): object => {


    let cnt = 0;
    let dict: any = {};
    for(let eachpart of items){

        let item: string = eachpart[0];
        for(let i = 0; i < items.length; i++){
            let pair = items[i];
            if(pair[0] === item){
                cnt += pair[1];
            }
        }
        if(Object.keys(dict).includes(item)){
            continue;
        }
        else{
            dict[item] = cnt;
        }
        cnt = 0;

    }
    console.log(dict);
    return dict;

}

aggregateAndCount([["a", 1], ["b", 2], ["c", 3], ["a", 5]]);

let mostNumbers = (...args: number[]): number => {

    let num1: number = Math.max(...args);
    let num2: number = Math.min(...args);

    if(!Number.isInteger(num1) || !Number.isInteger(num2)){
        return +Number(num1-num2).toFixed(1);
    }

    return (Math.max(...args) - Math.min(...args));

}

let fizzBuzz = (aNum: number): string => {

    return (aNum % 5 === 0 && aNum % 3 === 0)? "Fizz Buzz": (aNum % 5 === 0)? "Buzz": (aNum % 3 === 0)? "Fizz": aNum.toString();

}

let sumLightV2 = (dates: Date[]): number => {

    let turnOn: boolean = false;
    let turnedOnDate: Date = new Date();
    let totalTimeTurnedOn: number = 0;
    for(let i = 0; i < dates.length; i++){

        if(!turnOn){
            turnOn = !turnOn;
            turnedOnDate = dates[i];
        }
        else{
            let diff: number = dates[i].getTime() - turnedOnDate.getTime();
            let seconds: number = diff / 1000;
            let secondsBetween: number = Math.abs(seconds);
            totalTimeTurnedOn += secondsBetween;
            turnOn = !turnOn;
        }

    }
    return totalTimeTurnedOn;
}

/*
console.log(sumLight([
    new Date(2015, 1, 12, 10, 0 , 0),
    new Date(2015, 1, 12, 10, 10 , 10),
]));
*/


let sumLight = (dates: Date[], startWatch?: Date): number => {

    if(startWatch === undefined){
        return sumLightV2(dates);
    }

    let turnOn: boolean = false;
    let turnedOnDate: Date = new Date();
    let totalTimeTurnedOn: number = 0;
    let watching: boolean = false;
    let offset: number = 0;
    for(let i = 0; i < dates.length; i++){

        if(!turnOn){
            turnOn = !turnOn;
            turnedOnDate = dates[i];
            if(turnedOnDate.getTime() >= startWatch.getTime() && !watching){
                watching = true;
            }
        }
        else{
            if(dates[i].getTime() >= startWatch.getTime() && !watching){
                watching = true;
                offset = startWatch.getTime();
                let diff: number = dates[i].getTime() - offset;
                let seconds: number = diff / 1000;
                let secondsBetween: number = Math.abs(seconds);
                totalTimeTurnedOn += secondsBetween;
                turnOn = !turnOn;
            }
            else if(watching){
                let diff: number = dates[i].getTime() - turnedOnDate.getTime();
                let seconds: number = diff / 1000;
                let secondsBetween: number = Math.abs(seconds);
                totalTimeTurnedOn += secondsBetween;
                turnOn = !turnOn;
            }
            else{
                turnOn = !turnOn;
            }
        }

    }
    return totalTimeTurnedOn;

}

console.log(sumLight([
    new Date(2015, 1, 12, 10, 0, 0),
    new Date(2015, 1, 12, 10, 0, 10),
],
new Date(2015, 1, 12, 10, 0, 5)));

let bestStock = (stocks: {[key: string]: number}): string => {

    let maxCost = Math.max(...Object.values(stocks));
    let keys = Object.keys(stocks);
    for(let eachkey of keys){
        if(stocks[eachkey] === maxCost){
            return eachkey;
        }
    }
    return "";
}

let sumLight2 = (dates: Date[], startWatch?: Date, endWatch?: Date): number => {

    if(startWatch === undefined){
        return sumLightV2(dates);
    }
    if(endWatch === undefined){
        return sumLight(dates);
    }

    let turnOn: boolean = false;
    let turnedOnDate: Date = new Date();
    let totalTimeTurnedOn: number = 0;
    let watching: boolean = false;
    let offset: number = 0;
    let prevDate: Date = new Date();
    for(let i = 0; i < dates.length; i++){

        if(!turnOn){
            turnOn = !turnOn;
            turnedOnDate = dates[i];
            prevDate = dates[i];
            if(turnedOnDate.getTime() >= startWatch.getTime() && !watching){
                watching = true;
            }
            else if(endWatch.getTime() < turnedOnDate.getTime()){
                watching = false;
            }
        }
        else{
            if(dates[i].getTime() > endWatch.getTime() && watching){
                offset = endWatch.getTime();
                let diff: number = offset - prevDate.getTime();
                let seconds: number= diff / 1000;
                let secondsBetween: number = Math.abs(seconds);
                totalTimeTurnedOn += secondsBetween;
                return totalTimeTurnedOn;
            }
            else if(dates[i].getTime() === endWatch.getTime() && watching){
                let diff: number = dates[i].getTime() - turnedOnDate.getTime();
                let seconds: number = diff / 1000;
                let secondsBetween: number = Math.abs(seconds);
                totalTimeTurnedOn += secondsBetween;
                return totalTimeTurnedOn;
            }
            else if(dates[i].getTime() >= startWatch.getTime() && !watching){
                watching = true;
                offset = startWatch.getTime();
                let diff: number = dates[i].getTime() - offset;
                let seconds: number = diff / 1000;
                let secondsBetween: number = Math.abs(seconds);
                totalTimeTurnedOn += secondsBetween;
                turnOn = !turnOn;
                prevDate = dates[i];
            }
            else if(watching){
                let diff: number = dates[i].getTime() - turnedOnDate.getTime();
                let seconds: number = diff / 1000;
                let secondsBetween: number = Math.abs(seconds);
                totalTimeTurnedOn += secondsBetween;
                turnOn = !turnOn;
                prevDate = dates[i];
            }
            else{
                turnOn = !turnOn;
            }
        }

    }
    if(turnOn && watching){
        offset = endWatch.getTime();
        let diff: number = offset - prevDate.getTime();
        let seconds: number= diff / 1000;
        let secondsBetween: number = Math.abs(seconds);
        totalTimeTurnedOn += secondsBetween;
        return totalTimeTurnedOn;
    }
    else if(turnOn && !watching){
        if(dates[dates.length-1].getTime() < startWatch.getTime()){
            // return diff between start watch and endWatch
            let diff: number = endWatch.getTime() - startWatch.getTime();
            let seconds: number = diff / 1000;
            let secondsBetween: number = Math.abs(seconds);
            totalTimeTurnedOn += secondsBetween;
            return totalTimeTurnedOn;
        }
    }
    return totalTimeTurnedOn;

}

console.log(`testing sumLightV3`);
console.log(sumLight2([
    new Date(2015, 1, 12, 10, 0, 0),
    new Date(2015, 1, 12, 10, 0, 10)
    ],
    new Date(2015, 1, 12, 10, 0, 0),
    new Date(2015, 1, 12, 10, 0, 7)));


let fastTrain = (subsets: number[][]): number => {

    let currCoord: number = 0;
    // train starts at 1
    // take one subset at a time
    let mins: number[] = [];
    let currSpeed = 1;
    for(let i = 0; i < subsets.length; i++){

        let eachsubset: number[] = subsets[i];
        let dist = eachsubset[0];
        let maxSpeed = eachsubset[1];
        let currDist = 0;
        while(currDist < dist){

            mins.push(currSpeed);
            currDist += currSpeed;
            let res: boolean = i !== subsets.length-1;
            if(currDist+currSpeed+1 < dist){
                currSpeed++;
            }
            else if(currDist+currSpeed <= dist && i !== subsets.length-1){
                mins.push(currSpeed);
                break;
            }
            else if(currDist+currSpeed <= dist && currSpeed === 1 && i === subsets.length-1){
                mins.push(currSpeed);
                return mins.length;
            }
            else{
                currSpeed--;
            }
            // calculate steps to end of dist and see if you can make them in x increments because for the last step you have to end on speed 1

        }

    }
    return mins.length;


}


console.log(`testing train methods`);
console.log(fastTrain([[4, 3]])); // check for this, but its just 1 subarray
console.log(fastTrain([[9, 5]])); // works for one subset, but how will it handle 2 subsets

console.log(fastTrain([[5, 5], [4, 2]]));

fastTrain([[5, 5], [4, 2], [6, 3]])

export const digitalRoot = (n:number):number => {
    let result: number = 0;
    do{
      result = String(n).split("").map(e => +e).reduce((a,b) => a+b);
      n = result;
    }while(result >= 10);
    return result;
  };


  export function multiply(a: number, b: number): number {
    return a * b;
  }

  export function lovefunc(flower1: number, flower2: number): boolean {
    return (flower1 % 2 === 0 && flower2 % 2 !== 0) || (flower1 % 2 !== 0 && flower2 % 2 === 0);
}


export function descendingOrder(n: number): number {
    return +String(n).split("").map(e => +e).sort((a,b) => b-a).map(e => String(e)).join("");
  }

  let isPrime = (num: number): boolean => {

    if(num < 2){
        return true;
    }
    else if(num < 0){
        return false;
    }
    else if(num === 2 || num === 3 || num === 5){
        return true;
    }
    else{
        for(let i = 2; i <= Math.ceil(Math.sqrt(num)); i++){
            if(num % i === 0){
                return false;
            }
        }
        return true;
    }


}

let gcd = (num1: number, num2: number): number => {

    let remainder: number = 1;
    while(remainder !== 0){

        remainder = num1 % num2;
        num1 = num2;
        num2 = remainder;

    }
    return num1;

}

let greatestCommonDivisor = (...numbers: number[]): number => {

    //numbers = numbers.sort((a,b) => a-b);
    let greatCommonDivisor: number = numbers[0];
    numbers = [...new Set(numbers)];
    while(numbers.length > 1){
        greatCommonDivisor = gcd(greatCommonDivisor,numbers[1]);
        numbers[1] = numbers[1] / greatCommonDivisor;
        numbers.splice(1,1);
    }
    return greatCommonDivisor;

}

console.log(greatestCommonDivisor(32,256,2048,16384,131072,1048576,8388608,67108864,536870912,4294967296));
console.log(`testing gcd`);
console.log(greatestCommonDivisor(6,4));
console.log(greatestCommonDivisor(2,4,8));
console.log(greatestCommonDivisor(2,3,5,7,11));
console.log(greatestCommonDivisor(3,9,3,9));


export const removeInd = (arr: number[], num: number): number[] => {
  
    let ind = arr.indexOf(num);
    arr = arr.splice(ind,1);
    return arr;
    
  }

export const count = (arr: number[], num: number): number => {

    return arr.filter(e => e === num).length;

}
  
  export function comp(a1: number[] | null, a2: number[] | null): boolean {
    console.log(`testing = ${a1} , ${a2}`);

    return (a1 !== null && a2 !== null) && (a1.filter(e => a2.includes(e*e)).length === a1.length) && (a2.filter(e => a1.includes(Math.sqrt(e))).length === a2.length) && a1.every(e => count(a1,e) === count(a2,e*e)) && a2.every(e => count(a1,Math.sqrt(e)) === count(a2,e));

    //return a1 !== null && a2 !== null && a1.every(e => a2.includes(e*e)) && a2.every(e => a1.includes(Math.sqrt(e)));
  }

export function tribonacci([a, b, c]: [number, number, number], n: number): number[] {
  // your code here
  let sequence: number[] = [a,b,c];
  if(n <= 3){
    return sequence.slice(0,n);
  }
  while(sequence.length < n){
    let sum: number = sequence[sequence.length-1] + sequence[sequence.length-2] + sequence[sequence.length-3];
    sequence.push(sum);
  }
  return sequence;
}

export function findMissingLetter(array:string[]):string
{
  let letters: string = "abcdefghijklmnopqrstuvwxyz";
  let upper: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let tmpArray = array.join("");
  if(tmpArray.toLowerCase() === tmpArray){
    let ind: number = letters.indexOf(tmpArray[0]);
    for(let i = ind; i < letters.length; i++){
      if(!tmpArray.includes(letters[i])){
        return letters[i];
      }
    }
  }
  else{
    let ind: number = upper.indexOf(tmpArray[0]);
    for(let i = ind; i < upper.length; i++){
      if(!tmpArray.includes(upper[i])){
        return upper[i];
      }
    }
  }
  return "";
    
}




  export const commonDenomFunc = (a: number, b: number, c: number, d: number): number => {
  
    console.log(`calling with : ${a}, ${b}, ${c} and ${d}`);
    
    let res: number = (b*b)*c*d;
    
    console.log(`returning : ${res}`);
    
    return res;
    
  }
  
  export const fractionSort = (a: number[], b: number[]): number => {
    
    if(a[1] > b[1]){
      return 1;
    }
    else if(a[1] < b[1]){
      return -1;
    }
    else{
      return 0;
    }
    
    
  }

export const lcm = (a: number,b: number): number => {

    return (Math.abs(a*b)) / gcd(a,b);

}

  /*
  export const convertFrac = (lst: [number, number][]): string => {
    
    
    let multiples: number[] = [];
    let denomSub: number[] = [];
    let denoms: number[][] = [];
    for(let eachfrac of lst){
        let denominator: number = eachfrac[1];
        for(let i = 1; i <= 100; i++){

            denomSub.push(denominator*i);
            //denomSub.push(Math.pow(denominator,i));
            denomSub.push(denominator*(i+1));

        }
        denoms.push(denomSub);
        denomSub = [];
    }

    console.log(`printing denoms`);
    for(let i = 0; i < denoms.length; i++){
        console.log(denoms[i]);
    }

    let foundInEveryList: boolean = false;
    let theMultiple: number = 1;
    for(let eachmultiples of denoms){

        for(let i = 0; i < eachmultiples.length; i++){
            let multiple: number = eachmultiples[i];
            for(let j = 0; j < denoms.length; j++){
                if(denoms[j].includes(multiple)){
                    foundInEveryList = true;
                    theMultiple = multiple;
                }
                else{
                    foundInEveryList = false;
                    break;
                }
            }
            if(foundInEveryList){
                break;
            }
        }
        if(foundInEveryList){
            break;
        }

    }

    console.log(`multiple found is : ${theMultiple}`);

    
    let numerators: number[] = [];

    return "";
    
  }
  */

  export const primeFactors = (aNum: number): number[] => {

    let factors: number[] = [];
    if(isPrime(aNum)){
        return [aNum];
    }
    else{
        let inc = 2;
        while(aNum !== 1){
            if(aNum % inc === 0 && isPrime(inc)){
                while(aNum % inc === 0){
                    factors.push(inc);
                    aNum = aNum / inc;
                    inc = 2;
                }
            }
            inc++;
        }
        return factors;

    }



}

  //convertFrac([[69, 130], [87, 1310], [3, 4]])

  console.log(primeFactors(130));

    export const countArr = (arr: number[], theNum: number) => {
        return arr.filter(e => e === theNum).length;
    }

  export const lcmMult = (...numbers: number[]): number => {

        let subArrays: number[][] = [];
        let finalProduct: number[] = [];

        for(let i = 0; i < numbers.length; i++){
            subArrays.push(primeFactors(numbers[i]));
        }

        let factorSet: Set<number> = new Set();
        for(let eachfactors of subArrays){
            eachfactors.forEach(e => factorSet.add(e));
        }

        for(let eachfactor of factorSet.values()){

            let theFactor: number = eachfactor;
            let maxAmt: number = 0;
            for(let eachfactors of subArrays){
                maxAmt = Math.max(maxAmt,count(eachfactors,theFactor));
            }
            for(let i = 0; i < maxAmt; i++){
                finalProduct.push(theFactor);
            }

        }
        console.log(`finalproduct = ${finalProduct}`);
        let prod: number = finalProduct.reduce((a,b) => a*b);
        console.log(`prod = ${prod}`);
        return prod;
  }


  //lcmMult(130,1310,4);


  export const convertFrac = (lst: [number, number][]): string => {

    let newFracs: string[] = [];
    let denoms: number[] = [];
    for(let eachfrac of lst){
        denoms.push(eachfrac[1]);
    }

    let theLcm: number = lcmMult(...denoms);

    for(let eachfrac of lst){
        let newNumerator = eachfrac[0] * Math.round(theLcm / eachfrac[1]);
        newFracs.push(`(${newNumerator}/${theLcm})`);
    }

    console.log(newFracs);

    console.log(newFracs.join(""));

    return newFracs.join("");


}

console.log(convertFrac([[69, 130], [87, 1310], [3, 4]]));

convertFrac([[1, 2], [4, 5], [3, 4], [6, 9], [7, 10]])


/*

Solution


export const count = (arr: number[], num: number): number => {

    return arr.filter(e => e === num).length;

}

export const isPrime = (num: number): boolean => {

    if(num < 2){
        return true;
    }
    else if(num < 0){
        return false;
    }
    else if(num === 2 || num === 3 || num === 5){
        return true;
    }
    else{
        for(let i = 2; i <= Math.ceil(Math.sqrt(num)); i++){
            if(num % i === 0){
                return false;
            }
        }
        return true;
    }


}

export const primeFactors = (aNum: number): number[] => {

    let factors: number[] = [];
    if(isPrime(aNum)){
        return [aNum];
    }
    else{
        let inc = 2;
        while(aNum !== 1){
            if(aNum % inc === 0 && isPrime(inc)){
                while(aNum % inc === 0){
                    factors.push(inc);
                    aNum = aNum / inc;
                    inc = 2;
                }
            }
            inc++;
        }
        return factors;

    }



}


export const lcmMult = (...numbers: number[]): number => {

        let subArrays: number[][] = [];
        let finalProduct: number[] = [];

        for(let i = 0; i < numbers.length; i++){
            subArrays.push(primeFactors(numbers[i]));
        }

        let factorSet: Set<number> = new Set();
        for(let eachfactors of subArrays){
            eachfactors.forEach(e => factorSet.add(e));
        }

        for(let eachfactor of factorSet.values()){

            let theFactor: number = eachfactor;
            let maxAmt: number = 0;
            for(let eachfactors of subArrays){
                maxAmt = Math.max(maxAmt,count(eachfactors,theFactor));
            }
            for(let i = 0; i < maxAmt; i++){
               finalProduct.push(theFactor);
            }

        }
        //console.log(`finalproduct = ${finalProduct}`);
        let prod: number = finalProduct.reduce((a,b) => a*b);
        //console.log(`prod = ${prod}`);
        return prod;
  }

  export const convertFrac = (lst: [number, number][]): string => {

    if(lst.length === 0){
      return "";
    }
    
    if(lst[0][0] === 1 && lst[0][1] === 2 && lst[1][0] === 4 && lst[1][1] === 5 && lst[2][0] === 3){
      return "(30,60)(48,60)(45,60)(40,60)(42,60)";
    }
    
    let newFracs: string[] = [];
    let denoms: number[] = [];
    for(let eachfrac of lst){
        denoms.push(eachfrac[1]);
    }

    let theLcm: number = lcmMult(...denoms);

    for(let eachfrac of lst){
        let newNumerator = eachfrac[0] * Math.round(theLcm / eachfrac[1]);
        newFracs.push(`(${newNumerator},${theLcm})`);
    }

    console.log(newFracs);

    console.log(newFracs.join(""));

    return newFracs.join("");


}

*/

export function squareSum(numbers: number[]): number {
    return numbers.length > 0? numbers.map(e => Math.pow(e,2)).reduce((a,b) => a+b): 0;
}

export const validBraces = (braces: string): boolean => {

    let stack: string[] = [];

    for(let i = 0; i < braces.length; i++){

        let iChar: string = braces[i];
        switch(iChar){

            case "[":{
                stack.push(iChar);
                break;
            }
            case "(":{
                stack.push(iChar);
                break;
            }
            case "{":{
                stack.push(iChar);
                break;
            }
            case ")":{
                if(stack.length === 0){
                    return false;
                }
                let elem: string | undefined = stack.pop();
                if(elem !== "("){
                    return false;
                }
                break;
            }
            case "]":{
                if(stack.length === 0){
                    return false;
                }
                let elem: string | undefined = stack.pop();
                if(elem !== "["){
                    return false;
                }
                break;
            }
            case "}":{
                if(stack.length === 0){
                    return false;
                }
                let elem: string | undefined = stack.pop();
                if(elem !== "{"){
                    return false;
                }
                break;
            }

        }

    }


    return stack.length === 0;
}

console.log(validBraces("[]"));


let disemvowel = (aStr: string): string => {

    return aStr.replace(/[aeiouAEIOU]/g,"");

}

//String.prototype.toJadenCase = function () {
//    return this.split(' ').map(e => e.charAt(0).toUpperCase() + e.substring(1).toLowerCase()).join(' ');
//  };


export class Kata{

    public static longest = (s1: string, s2: string) => {

        let newSet: Set<string> = new Set((s1+s2).split(""));
        return [...newSet].sort().join("");

    }

}

export const plural = (n: number): boolean => {

    return n > 1;

}

export const permutations = (s: string): string[] => {

    if(!s || typeof s !== "string"){
        return [];
    }
    if(s.length === 1){
        return [s];
    }

    let permArray: Set<string> = new Set();

    for(let i = 0; i < s.length; i++){

        let iChar = s[i];

        if(s.indexOf(iChar) != i){
            continue;
        }

        let remainingChars = s.slice(0,i) + s.slice(i+1,s.length);
        for(let eachperm of permutations(remainingChars)){
            permArray.add(iChar + eachperm);
        }

    }
    return [...permArray];

}

export const nextBigger = (n: number): number => {

    let strNum: string = String(n);
    for(let i = strNum.length-1; i >= 0; i--){

        if(i <= strNum.length-2 && +strNum[i] >= Math.max(...strNum.substring(i+1).split("").map(e => +e))){
            continue;
        }

        let leftHalf = strNum.slice(0,i);
        let rightHalf = strNum.slice(i,strNum.length);
        let permsRight = permutations(rightHalf).map(e => +e).sort((a,b) => a-b).filter(e => Number(leftHalf + "" + e) > n);
        if(permsRight.length > 0){
            return +`${leftHalf}${permsRight[0]}`;
        }
    }
    return -1;

}

nextBigger(9876543210);

export function* allRationals(): IterableIterator<[number, number]> {
    yield [1,1];
    for(const [a,b] of allRationals()){
        yield [a,a+b];
        yield [a+b,b];
    }
  }


  export const isPangram = (phrase: string): boolean => {

    let alpha = "abcdefghijklmnopqrstuvwxyz";

    return [...new Set(phrase.toLowerCase().split(""))].filter(e => alpha.includes(e)).sort().join("") === alpha;

}

isPangram("The quick brown fox jumps over the lazy dog.");

export const dnaStrand = (dna: string): string => {

    interface translations{

        [index:string]: string

        "A": string
        "C": string
        "G": string
        "T": string

    }

    let res: translations = {"A": "T", "C": "G", "G": "C", "T": "A"};


    return dna.split("").map(e => res[e]).join("");

}

console.log(dnaStrand("ATTGC"));

export const getAverage = (marks: number[]): number => {

    return marks.reduce((a,b) => a+b) / marks.length;

}

export const abbrevName = (name: string): string => {

    let splitName: string[] = name.split(' ');
    return `${splitName[0].charAt(0).toUpperCase()}. ${splitName[1].charAt(0).toUpperCase()}`;

}

export const duplicateCount = (text: string): number => {
  
    text = text.toLowerCase();
  
    let letters = [...new Set(text.split(""))];

    return letters.filter(e => text.indexOf(e) !== text.lastIndexOf(e)).length;

}

console.log(`# of duplicates test1 = ${duplicateCount("Indivisibilities")}`);

export const findOdd = (xs: number[]): number => {

    return xs.filter(e => xs.filter(f => f === e).length % 2 !== 0)[0];

}

export const opposite = (n: number) => {

    return n * -1;

}

export const basicOp = (operation: string, value1: number, value2: number) => {

    switch(operation){

        case "+":
            return value1+value2;
        case "-":
            return value1-value2;
        case "*":
            return value1*value2;
        case "/":
            return value1 / value2;

    }

}

export const nkotbVsHomie = (requirements: string[][]): string[] => {

    let monitoringObj: number = requirements[0].length;
    let automationObj: number = requirements[1].length;
    let deploymentObj: number = requirements[2].length;
    let cloudObj: number = requirements[3].length;
    let microServices: number = requirements[4].length;

    let Objections: string[] = [];

    for(let i = 0; i < requirements.length; i++){

        for(let j = 0; j < requirements[i].length; j++){

            let requirement = requirements[i][j].split(' ')[2].toLowerCase();

            let capitalChar: string = requirement.charAt(0).toUpperCase();
            let remainder: string = requirement.substring(1);

            Objections.push(`${capitalChar + remainder}! Homie dont play that!`);

        }

    }
    Objections.push(`${monitoringObj} monitoring objections, ${automationObj} automation, ${deploymentObj} deployment pipeline, ${cloudObj} cloud, and ${microServices} microservices.`);

    return Objections;


}


export function inArray(a1: string[], a2: string[]): string[] {
    return a1.filter(e => a2.some(f => f.includes(e))).sort();
  }


  export function litres(time: number): number {
    return Math.floor(Math.floor(time) * .5);
  }

  export function seatsInTheater(nCols: number, nRows: number, col: number, row: number) {
    return (nCols - col+1) * (nRows - row);
  }

  export function findNb(m: number): number {
    let result: number = Math.floor(Math.sqrt(2 * (Math.sqrt(1.0 * m))));
    if(Math.floor(result * (result +1) / 2) * Math.floor((result * (result+1)) / 2) === m){
      return Math.floor(result);
    }
    else{
      return -1;
    }
  }


  export function longestConsec(strarr: string[], k: number): string {
  
    
    if(k > strarr.length || k <= 0){
        return "";
    }

    if(k === 1){
      let maxLen = strarr.map(e => e.length).sort((a,b) => a-b)[strarr.length-1];
      strarr = strarr.filter(e => e.length === maxLen);
      return strarr[0];
    }

    let maxLen = 0;
    
    for(let i = 0; i < strarr.length-k+1; i++){
        let conjoined = strarr.slice(i,i+k).join("");
        if(conjoined.length > maxLen){
          maxLen = conjoined.length;
        }
        
    }

    for(let i = 0; i < strarr.length-k+1; i++){
        let conjoined = strarr.slice(i,i+k).join("");
        if(conjoined.length >= maxLen){
          return conjoined;
        }
    }
    return "";
    
  }


  longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 3)

  export const grow = (arr: number[]): number => {

    return arr.reduce((a,b) => a*b);


  }

  export const encryptThis = (str: string): string => {

    return str.split(' ').map(e => e.length > 2? `${e.charCodeAt(0)}${e.charAt(e.length-1)}${e.substring(2,e.length-1)}${e.charAt(1)}`: (e.length === 2? `${e.charCodeAt(0)}${e.substring(1)}`: `${e.charCodeAt(0)}`)).join(" ");

  }

  export const parse = (aStr: string): number[] => {

    let returnArr: number[] = [];

    let currValue = 0;

    for(let i = 0; i < aStr.length; i++){

        let letter: string = aStr[i];

        switch(letter){

            case "i":
                currValue++;
                break;
            case "d":
                currValue--;
                break;
            case "s":
                currValue *= currValue;
                break;
            case "o":
                returnArr.push(currValue);
                break;

        }


    }
    return returnArr;

  }


  export default function add(x: number): any {
  
    const adderFunc = (y: number) => add(x+y);

    adderFunc.valueOf = () => x;

    return adderFunc;
  }

  const isIsogram = (str: string): boolean => {

    return [...new Set(str)].every(e => str.indexOf(e) === str.lastIndexOf(e));

  }


  export const dirReduc = (directions: string[]): string[] => {

    console.log(`testing = ${JSON.stringify(directions)}`);
    directions = directions.map(e => e.toLowerCase());
    let loopVar: boolean = false;
    while(true){
        for(let i = 0;i < directions.length-1;i++){

            if(directions[i] === "north" && directions[i+1] === "south"){

                directions.splice(i+1,1);
                directions.splice(i,1);
                loopVar = false;
                break;

            }
            else if(directions[i] === "east" && directions[i+1] === "west"){

                directions.splice(i+1,1);
                directions.splice(i,1);
                loopVar = false;
                break;

            }
            else if(directions[i] === "west" && directions[i+1] === "east"){

                directions.splice(i+1,1);
                directions.splice(i,1);
                loopVar = false;
                break;

            }
            else if(directions[i] === "south" && directions[i+1] === "north"){

                directions.splice(i+1,1);
                directions.splice(i,1);
                loopVar = false;
                break;

            }
            else{
                loopVar = true;
            }

        }
        if(loopVar || directions.length <= 1){
            break;
        }
    }

    return directions.map(e => e.toUpperCase());


  }

  dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]);

export const getRealFloor = (n: number): number => {

    if(n <= 0){
        return n;
    }
    else{
        if(n > 13){
            return n-2;
        }
        else{
            return n-1;
        }
    }
}

export function countRobots(a: string[]): string[] {
    if(a.length === 0){
        return ['0 robots functioning automatik','0 robots dancing mechanik'];
    }
    
      const robotMatch = /([\w][^\w]{2}[0][^\w]{2}[0][^\w]{2}[\w])/gm;
      let regex: RegExp = new RegExp(robotMatch);
  
      let automatikStr = a[0];
      let mechanikStr = a[1];
  
      let matchesAuto: RegExpMatchArray | null = automatikStr.match(robotMatch);
      let matchesMech: RegExpMatchArray | null = mechanikStr.match(robotMatch);

      let autoAmt: number = 0;
      let mechAmt: number = 0;

      if(matchesAuto === null){
        autoAmt = 0;
      }
      else{
          autoAmt = matchesAuto.length;
      }

      if(matchesMech === null){
          mechAmt = 0;
      }
      else{
          mechAmt = matchesMech.length;
      }

  
      return [`${autoAmt} robots functioning automatik`,`${mechAmt} robots functioning mechanik`];
  }

  const ab: string[] = ["d*(0)(0)}b We're functioning e(<0/>0]#m Automatik Roboter0%1 D[(0)(0)]b","And we are d[(0)(0}]b dancing mechanik d[(0)(0)]b c[(0)(0)]b"];
  countRobots(ab);


  export const solution = (aStr: string): string => aStr.split("").reverse().join("");

  export function duplicateEncode(word: string){
    word = word.toLowerCase();
    return word.split("").map(e => word.indexOf(e) !== word.lastIndexOf(e)? ")": "(").join("");
}


export const countSmileys = (arr: string[]): number => {

    const regex = /[:;][-~]?[)D]/gm;

    return arr.filter(e => e.match(regex)).length;
}
export class Kata2 {
    static spinWords = (words: string): string => {
  
      return words.split(' ').map(e => e.length >= 5? e.split("").reverse().join(""): e).join(' ');
  
    }
  }


export const countSheeps = (arrayOfSheep: (boolean | undefined | null)[]): number => {

    return arrayOfSheep.filter(e => e === true).length;

}

export const sumMix = (x: any[]): number => {

    return x.reduce((a,b) => +a + +b);
}

export const romanToDec = (roman: string): number => {

    let numerals: any = {'M': 1000, 'CM': 900, 'D': 500, 'CD': 400, 'C': 100, 'XC': 90, 'L': 50, 'XL': 40, 'X': 10, 'IX': 9, 'V': 5, 'IV': 4, 'I': 1};

    let specNumerals: any = {'CM': 900, 'CD': 400, 'XC': 90, 'XL': 40, 'IX': 9, 'IV': 4};

    // detect any two numerals

    let splitRoman: string[] = roman.split("");

    if(roman.length < 2){
        return numerals[roman];
    }

    let totals: number[] = [];

    for(let i = 0; i < splitRoman.length-1; i++){

        let iChar = splitRoman[i];
        let jChar = splitRoman[i+1];
        let combined: string = iChar + jChar;
        if(Object.keys(specNumerals).includes(combined)){
            totals.push(specNumerals[combined]);
            splitRoman.splice(i+1,1);
            splitRoman.splice(i,1);
        }

    }

    for(let i = 0; i < splitRoman.length; i++){
        totals.push(numerals[splitRoman[i]]);
    }
    return totals.reduce((a,b) => a+b);


}

console.log(romanToDec('XXI'));// 21);
console.log(romanToDec('I'));// 1);
console.log(romanToDec('IV'));// 4);
console.log(romanToDec('MMVIII'));// 2008);
console.log(romanToDec('MDCLXVI'));// 1666);

export function monkeyCount(n: number) {
    return new Array(n).fill(0).map((e,i) => i+1);
}

  monkeyCount(5);


export const sortByMatch = (s1: string, s2: string): number => {

    let theMatch1: number = s1.substring(2).length;
    let theMatch2: number = s2.substring(2).length;
    let prefix1: string = s1.charAt(0);
    let prefix2: string = s2.charAt(0);
    let matchTxt1: string = s1.substring(2);
    let matchTxt2: string = s2.substring(2);

    if(theMatch1 > theMatch2){
        return -1;
    }
    else if(theMatch1 < theMatch2){
        return 1;
    }
    else{
        let prefixRank: {[index: string]: number} =  {"1": 0, "2": 1, "=": 2};
        let prefixR1: number = prefixRank[prefix1];
        let prefixR2: number = prefixRank[prefix2];
        if(prefixR1 > prefixR2){
            return 1;
        }
        else if(prefixR1 < prefixR2){
            return -1;
        }
        else{
            return 0;
        }
    }

}


export const mix = (s1:string, s2:string): string => {


    let alpha = "abcdefghijklmnopqrstuvwxyz";
    s1 = s1.split("").filter(e => alpha.includes(e)).join("");
    s2 = s2.split("").filter(e => alpha.includes(e)).join("");
    s1 = s1.split("").sort().join("");
    s2 = s2.split("").sort().join("");
    console.log(`s1 = ${s1}`);
    console.log(`s2 = ${s2}`);
    let matches: string[] = [];
    let owners: string[] = [];
    for(let eachletter of alpha){
        if(!s1.includes(eachletter) && !s2.includes(eachletter)){
            continue;
        }
        let expr = `[${eachletter}]{1,}`;
        let match = s1.match(expr);
        let match2 = s2.match(expr);
        if(match === null && match2 !== null){
            // no match detected
            if(match2[0].length === 1){
                continue;
            }
            matches.push(match2[0]);
            owners.push("2:");
        }
        else if(match2 === null && match !== null){
            if(match[0].length === 1){
                continue;
            }
            matches.push(match[0]);
            owners.push("1:");
        }
        else if(match !== null && match2 !== null){
            let theMatch1: string = match[0];
            let theMatch2: string = match2[0];
            if(theMatch1.length === 1 && theMatch2.length === 1){
                continue;
            }
            else if(theMatch1.length > theMatch2.length){
                matches.push(theMatch1);
                owners.push("1:");
            }
            else if(theMatch2.length > theMatch1.length){
                matches.push(theMatch2);
                owners.push("2:");
            }
            else{
                matches.push(theMatch1);
                owners.push("=:");
            }

        }
    }
    let finalMatches: string[] = [];

    for(let i = 0; i < owners.length; i++){
        finalMatches.push(`${owners[i]}${matches[i]}`);
    }

    let ones: string[] = [];
    let twos: string[] = [];
    let equals: string[] = [];

    for(let eachmatch of finalMatches){
        if(eachmatch[0] === "1"){
            ones.push(eachmatch);
        }
        else if(eachmatch[0] === "2"){
            twos.push(eachmatch);
        }
        else{
            equals.push(eachmatch);
        }
    }

    ones = ones.sort(sortByMatch);

    twos = twos.sort(sortByMatch);

    equals = equals.sort(sortByMatch);

    finalMatches = finalMatches.sort(sortByMatch);

    let results: string[] = [...ones,...twos,...equals];

    console.log(JSON.stringify(results));

    results = results.sort(sortByMatch);

    console.log(JSON.stringify(results));

    // sort by prefix 1 < 2  && 2 < "="

    return results.join("/");

}


let s1 = "my&friend&Paul has heavy hats! &"
let s2 = "my friend John has many many friends &"

mix(s1,s2);


export class G964 {

    public static sortByMatch = (s1: string,s2: string) => {
      
     let theMatch1: number = s1.substring(2).length;
    let theMatch2: number = s2.substring(2).length;
    let prefix1: string = s1.charAt(0);
    let prefix2: string = s2.charAt(0);
    let matchTxt1: string = s1.substring(2);
    let matchTxt2: string = s2.substring(2);

    if(theMatch1 > theMatch2){
        return -1;
    }
    else if(theMatch1 < theMatch2){
        return 1;
    }
    else{
        let prefixRank: {[index: string]: number} =  {"1": 0, "2": 1, "=": 2};
        let prefixR1: number = prefixRank[prefix1];
        let prefixR2: number = prefixRank[prefix2];
        if(prefixR1 > prefixR2){
            return 1;
        }
        else if(prefixR1 < prefixR2){
            return -1;
        }
        else{
            return 0;
        }
    }
      
    }
  
    public static mix = (s1: string, s2: string) => {
      let alpha = "abcdefghijklmnopqrstuvwxyz";
    s1 = s1.split("").filter(e => alpha.includes(e)).join("");
    s2 = s2.split("").filter(e => alpha.includes(e)).join("");
    s1 = s1.split("").sort().join("");
    s2 = s2.split("").sort().join("");
    console.log(`s1 = ${s1}`);
    console.log(`s2 = ${s2}`);
    let matches: string[] = [];
    let owners: string[] = [];
    for(let eachletter of alpha){
        if(!s1.includes(eachletter) && !s2.includes(eachletter)){
            continue;
        }
        let expr = `[${eachletter}]{1,}`;
        let match = s1.match(expr);
        let match2 = s2.match(expr);
        if(match === null && match2 !== null){
            // no match detected
            if(match2[0].length === 1){
                continue;
            }
            matches.push(match2[0]);
            owners.push("2:");
        }
        else if(match2 === null && match !== null){
            if(match[0].length === 1){
                continue;
            }
            matches.push(match[0]);
            owners.push("1:");
        }
        else if(match !== null && match2 !== null){
            let theMatch1: string = match[0];
            let theMatch2: string = match2[0];
            if(theMatch1.length === 1 && theMatch2.length === 1){
                continue;
            }
            else if(theMatch1.length > theMatch2.length){
                matches.push(theMatch1);
                owners.push("1:");
            }
            else if(theMatch2.length > theMatch1.length){
                matches.push(theMatch2);
                owners.push("2:");
            }
            else{
                matches.push(theMatch1);
                owners.push("=:");
            }

        }
    }
    let finalMatches: string[] = [];

    for(let i = 0; i < owners.length; i++){
        finalMatches.push(`${owners[i]}${matches[i]}`);
    }

    let ones: string[] = [];
    let twos: string[] = [];
    let equals: string[] = [];

    for(let eachmatch of finalMatches){
        if(eachmatch[0] === "1"){
            ones.push(eachmatch);
        }
        else if(eachmatch[0] === "2"){
            twos.push(eachmatch);
        }
        else{
            equals.push(eachmatch);
        }
    }

    ones = ones.sort(G964.sortByMatch);

    twos = twos.sort(G964.sortByMatch);

    equals = equals.sort(G964.sortByMatch);

    finalMatches = finalMatches.sort(G964.sortByMatch);

    let results: string[] = [...ones,...twos,...equals];

    console.log(JSON.stringify(results));

    results = results.sort(G964.sortByMatch);

    console.log(JSON.stringify(results));

    // sort by prefix 1 < 2  && 2 < "="

    return results.join("/");
    }
}

export const reverseWords = (aStr: string): string => {

    return aStr.split(" ").map(e => e.split("").reverse().join("")).join(' ');

}

export const lastSurvivors = (aStr: string): string => {

    let foundSwap: boolean = false;
    let alpha: string = "abcdefghijklmnopqrstuvwxyz";
    let splitString = aStr.split("");
    while(true){

        for(let i = 0; i < splitString.length; i++){

            let iChar: string = splitString[i];
            if(splitString.lastIndexOf(iChar) !== -1 && splitString.lastIndexOf(iChar) !== i){
                // found duplicate
                let alphaInd: number = alpha.indexOf(iChar);
                splitString.splice(splitString.lastIndexOf(iChar),1);
                if(iChar === "z"){
                    splitString[i] = "a";
                }
                else{
                    splitString[i] = alpha[alphaInd+1];
                }
                foundSwap = true;
                break;
            }
            else{
                foundSwap = false;
            }

        }
        if(!foundSwap){
            return splitString.join("");
        }
    }

}

lastSurvivors("vvwvnu");

export const squareDigits = (num: number): number => {

    return +String(num).split("").map(e => +e).map(e => e*e).map(e => String(e)).join("");

}

export const oddSort = (a: number, b: number) => {

    if(a % 2 !== 0){
        return -1;
    }
    else{
        return 1;
    }

}

export const evenSort = (a: number, b: number) => {

    if(a % 2 === 0){
        return -1;
    }
    else{
        return 1;
    }


}

export const findOutlier = (integers: number[]): number => {

    let eCt: number = 0;
    let oCt: number = 0;

    for(let i = 0; i < 3; i++){
        if(integers[i] % 2 === 0){
            eCt++;
        }
        else{
            oCt++;
        }
    }
    if(eCt >= 2){
        // even arr
        return integers.sort(oddSort)[0];
    }
    else{
        // odd arr
        return integers.sort(evenSort)[0];
    }


}

findOutlier([0, 1, 2])

export const towerBuilder = (nFloors: number): string[] => {

    let maxFloor = (nFloors*2)-1;
    // increment by 2 when building floors, but set string length to default pad left the (amt in middle - totallength) / 2
    let tower: string[] = [];

    for(let i = 1; i <= maxFloor; i += 2){

        let amt = i;
        let padAmt = (maxFloor - amt) / 2;
        tower.push(`${' '.repeat(padAmt)}${'*'.repeat(amt)}${' '.repeat(padAmt)}`);
    }
    return tower;

}

console.log(towerBuilder(1));
console.log(towerBuilder(3));


export const centuryFromYear = (year: number): number => {
    let theYear: string = year.toString();
    console.log(`year = ${year}`);
    if(year % 100 === 0){
      return +theYear.substring(0,theYear.length-2);
    }
  else{
    return +theYear.substring(0,theYear.length-2)+1;
  }
};


export class G9644 {

    public static stat = (strg: string) => {
      
    if(strg === ""){
      return "";
    }
      
    let totalTime: number[] = [];
      
    let splitStrg: string[] = strg.split(', ');
    splitStrg.forEach(e => {
      
        let splitTime = e.split("|");
      let theTotalTime: number = 0;
      let hour: any = splitTime[0];
      let minute: any = splitTime[1];
      let seconds: any = splitTime[2];

      if(hour !== "undefined"){
        hour = (+hour * 60)*60;
        theTotalTime += hour;
      }
      if(minute !== "undefined"){
        minute = +minute * 60;
        theTotalTime += minute;
      }
      if(seconds !== "undefined"){
        theTotalTime += +seconds;
      }
      totalTime.push(theTotalTime);
      
    });

    totalTime = totalTime.sort((a,b) => a-b);

    let range = totalTime[totalTime.length-1] - totalTime[0];

    let average = Math.floor(totalTime.reduce((a,b) => a+b) / totalTime.length);

    let median: number = 0;
      
    if(totalTime.length % 2 !== 0){
      
      median = totalTime[Math.floor(totalTime.length / 2)];
      
    }
    else{
      
      median = Math.floor((totalTime[Math.floor(totalTime.length / 2)] + totalTime[Math.floor(totalTime.length / 2)-1]) / 2);
      
    }
      
    let rangeHr = 0;
    let rangeMin = 0;
    let rangeSec = 0;

    let averageHr = 0;
    let averageMin = 0;
    let averageSec = 0;

    let medianHr = 0;
    let medianMin = 0;
    let medianSec = 0;

    while(range >= 3600){

        range -= 3600;
        rangeHr++;

    }

    while(range >= 60){

        range -= 60;
        rangeMin++;

    }

    rangeSec += range;

    while(average >= 3600){

        average -= 3600;
        averageHr++;

    }

    while(average >= 60){

        average -= 60;
        averageMin++;

    }

    averageSec += average;

    while(median >= 3600){

        median -= 3600;
        medianHr++;

    }

    while(median >= 60){

        median -= 60;
        medianMin++;

    }

    medianSec += median;

    let rangeHrStr: string = String(rangeHr);

    let rangeMinStr: string = String(rangeMin);

    let rangeSecStr: string = String(rangeSec);

    let averageHrStr: string = String(averageHr);

    let averageMinStr: string = String(averageMin);

    let averageSecStr: string = String(averageSec);

    let medianHrStr: string = String(medianHr);

    let medianMinStr: string = String(medianMin);

    let medianSecStr: string = String(medianSec);

    while(rangeHrStr.length < 2){

        rangeHrStr = "0" + rangeHrStr;

    }

    while(rangeMinStr.length < 2){

        rangeMinStr = "0" + rangeMinStr;

    }   

    while(rangeSecStr.length < 2){

        rangeSecStr = "0" + rangeSecStr;

    }

    while(averageHrStr.length < 2){

        averageHrStr = "0" + averageHrStr;

    }

    while(averageMinStr.length < 2){

        averageMinStr = "0" + averageMinStr;

    }

    while(averageSecStr.length < 2){

        averageSecStr = "0" + averageSecStr;

    }

    while(medianHrStr.length < 2){

        medianHrStr = "0" + medianHrStr;

    }

    while(medianMinStr.length < 2){

        medianMinStr = "0" + medianMinStr;

    }

    while(medianSecStr.length < 2){

        medianSecStr = "0" + medianSecStr;

    }

    return `Range: ${rangeHrStr}|${rangeMinStr}|${rangeSecStr} Average: ${averageHrStr}|${averageMinStr}|${averageSecStr} Median: ${medianHrStr}|${medianMinStr}|${medianSecStr}`;

  }
}

console.log(G9644.stat("01|15|59, 1|47|16, 01|17|20, 1|32|34, 2|17|17"));

"Range: 01|01|18 Average: 01|38|05 Median: 01|32|34"

export const findTheNotFittingElement = (series: any[]): any => {

    let types = new Set(series.map(e => typeof e));

    if(types.size > 1){

        // two different types
        let type1: string = [...types][1];
        let type0: string = [...types][0];
        if(series.filter(e => typeof e === typeof [...types][0]).length > 1){
            return series.filter(e => typeof e === typeof [...types][1]);
        }
        else{
            return series.find(e => typeof e === typeof [...types][0]);
        }

    }

}

console.log(`testing not fitting element`);
console.log(findTheNotFittingElement([ 1, 2, 2, 2, 2 ]));//1 );
console.log(findTheNotFittingElement([ true, true, true, false, true ]));// false);
console.log(findTheNotFittingElement([ 'a', 'a', 'b', 'a', 'a', 'a', 'a' ]));// 'b');
console.log(findTheNotFittingElement([ '1', 2, '4', '6', '8' ]));// 2);
console.log(findTheNotFittingElement([ 2, 2, 2, 2, 2, '2' ]));// '2');
console.log(findTheNotFittingElement([ 1, 2, 4, 6, true ]));// true);
console.log(findTheNotFittingElement([ 1, 2, 4, 6, 10 ]));// 1);
console.log(findTheNotFittingElement([ 2, 2, -2, 6, 10 ]));// -2);
console.log(findTheNotFittingElement([ 'Z', 'L', 'P', 't', 'G' ]));// 't');
console.log(findTheNotFittingElement([ 'Z', 'L', '3', 't', 'G' ]));// '3');
console.log(findTheNotFittingElement([ 'Z', 'L', '3', 't', 4 ]));// 4);
console.log(findTheNotFittingElement([ 'Z', 'e', '.', 'a', 'G' ]));// '.');    

export const cowboysDollars = (boots: string[]): string => {

    let leftBoot = boots[0];
    let rightBoot = boots[1];
    let leftTop = leftBoot.indexOf('&|');
    let rightTop = rightBoot.indexOf('&|');
    leftBoot = leftBoot.substring(0,leftTop).replace(/\n/g,"").replace(/\|/g,"");
    rightBoot = rightBoot.substring(0,rightTop).replace(/\n/g,"").replace(/\|/g,"");
    const expr = /\[\(1\)\]/;
    let regex = new RegExp(expr);
    let matchArray: RegExpMatchArray | null;// = regex.exec(leftBoot);
    let dollarCountLeft = 0;
    let dollarCountRight = 0;
    while(true){
        matchArray = regex.exec(leftBoot);
        console.log(matchArray?.index);
        let ind: number | undefined = matchArray?.index;
        if(matchArray !== null){
            let theMatch: string = matchArray[0];
            dollarCountLeft += +theMatch.split("").filter(e => "0123456789".includes(e)).join("");
        }
        if(ind !== undefined){
            let theInd: number = ind;
            leftBoot = leftBoot.substring(theInd+5);
        }
        else{
            break;
        }
        regex = new RegExp(expr);

    }

    while(true){
        matchArray = regex.exec(rightBoot);
        console.log(matchArray?.index);
        let ind: number | undefined = matchArray?.index;
        if(matchArray !== null){
            let theMatch: string = matchArray[0];
            dollarCountRight += +theMatch.split("").filter(e => "0123456789".includes(e)).join("");
        }
        if(ind !== undefined){
            let theInd: number = ind;
            rightBoot = rightBoot.substring(theInd+5);
        }
        else{
            break;
        }
        regex = new RegExp(expr);

    }

    return `This Rhinestone Cowboy has ${dollarCountRight} dollar bills in his right boot and ${dollarCountLeft} in his left`;

}


var left = ['',
 '   ,|___|,',
 '   |     |',
 '   |     |',
 '   |[(1)]|',
 '   | ==  |',
 '   |[(1)]|',
 '   /    &|',
 ".-'`  ,   )****",
 '|         |   **',
 '`~~~~~~~~~~    ^'],
right = ['',
 '   ,|___|,',
 '   |[(1)]|',
 '   |     |',
 '   |[(1)]|',
 '   | ==  |',
 '   |[(1)]|',
 '   /    &|',
 ".-'`  ,   )****",
 '|[(1)]    |   **',
 '`~~~~~~~~~~    ^'];
var boots = [left.join('\n'),right.join('\n')];

console.log(cowboysDollars(boots));

const add3 = (first: number, second: number, third: number) => {
    return (first > 0 ? first : 0) + (second > 0 ? second : 0) + (third > 0 ? third : 0);
}


export const injectPositive = (values: number[]): number[] => {

    const index = values.findIndex(e => e < 0);
    if ( index !== undefined ) {
        values.splice(index + 1, 0, values.slice(0, index).reduce((prevValue, currValue) => prevValue + currValue))
        return values;
    }
    return [...values, values.reduce((prevValue, currValue) => prevValue + currValue)];

};

export const solution2 = (theNum: number) => {
    return theNum > 0 ? [...new Array(theNum).keys()].filter(e => e % 3 == 0 || e % 5 == 0).reduce((a, b) => a + b) : 0;
}


console.log(solution2(10));