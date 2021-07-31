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
// console.log(isPassing(1))

function sumGrades(grades) {
    grades.forEach(function(grade){
        console.log(grade)
    })
    return 12
}

// Sample usage - do not modify
console.log(sumGrades([15, 5, 10])); // 30
console.log(sumGrades([12, 10, 13, 19])); // 54
