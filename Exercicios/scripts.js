// function getDescription(text) {
//     console.log(text); 
//         return text.substring(0, 10) + "...";


//     // write something in the BROWSER and see it in the console
// }

// console.log(getDescription('Maniaco'));


// let getLastString = (text) => {
//     return text.substring(-1, 1)
// }

// console.log(getLastString('buceta'))

// let getCharCount = (str) => {
//     return str.length
// }
// console.log(getCharCount('Olá'))

// function isPassing(grade) {
//     return grade >= 10;
// }
// // console.log(isPassing(1))

// function sumGrades(grades) {
//     grades.forEach(function(grade){
//         console.log(grade)
//     })
//     return 12
// }

// // Sample usage - do not modify
// console.log(sumGrades([15, 5, 10])); // 30
// console.log(sumGrades([12, 10, 13, 19])); // 54


// let years = [2000, 2008, 2020, 2023];

// years.filter(function(year) {
//     return year >= 2010;
// });
// console.log(years); //

let numbers = [9, 5, 14, 3, 11, 100, 10];

// filter() ALWAYS returns an array
numbers.filter(function(number) {
    return number >= 12;
}); // [14]


// .find() returns the first match or undefined
numbers.find(function(number) {
    return number >= 12;
}); // 1