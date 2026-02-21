let numbers = [1, 2, 3, 4, 5];
let count = 0;
// for (let i = 0; i < numbers.length; i++) {
//     if(numbers[i] % 2 === 0) {
//         count++;
//     }
// }
// console.log("even count: " + count);
// console.log("odd count: " + (numbers.length - count));
// for (let item in numbers) {
//     if(numbers[item] % 2 === 0) {
//         count++;
//     }   
// }
//without if else
for (let item in numbers) {
    count += numbers[item] % 2 === 0 ? 1 : 0;
}
console.log("even count: " + count);
//approch 
let even_array = numbers.filter(function(item, index){
    if(item % 2 === 0) {
        return true;
    }   
}.length);

let users = [ "subrav", "suresh", "subramanian", "sundar"];

let bankaccount = [
    "acc. number": 3543444,
    "profile": {
        "name": "subrav",
        "age": 18
    }
]
