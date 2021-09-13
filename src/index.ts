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