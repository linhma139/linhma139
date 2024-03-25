// Array.prototype.myFilter = function(cb) {
//     var newArr = []
//     for(var x in this) {
//         if(this.hasOwnProperty(x)) {
//             if(cb(this[x], x, this)) {
//                 newArr.push(this[x])
//             }
//         }
    
//     }
//     return newArr
// }

// Array.prototype.mySome = function(cb) {
//     for(var x in this) {
//         if(this.hasOwnProperty(x)) {
//             if(cb(this[x], x, this)) {
//                 return true
//             }
//         }    
//     }
//     return false
// }

// const numbers = [1, 3, 3, 5];

// console.log(numbers.mySome(function (number) {
//     return number % 2 === 0;
// })); //Output: [2, 4]

// console.log(numbers.mySome(function (number, index) {
//     return index % 2 === 0;
// }));// Output: [1, 3]

// console.log(numbers.mySome(function (number, index, array) {
//     return array.length % 2 === 0;
// })); //Output: [1, 2, 3, 4]

var x = document.querySelector(".box")
console.log([x])
x.hidden = false
// render(courses)

