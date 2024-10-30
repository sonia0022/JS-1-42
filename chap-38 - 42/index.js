//------------------>>>>>>>>>>>>  CH # 38 - 42 <<<<<<<<<<<<<--------------------
// Q1. 
// function power (base , power){
//     var res = 1
//     var i = 0
//     do{
//         res *= base
//         i++
//     }while( i < power)
//         return res
// }

// or
// function power (base , power){
//     return base ** power
// }

// console.log(power(2,3));


// Q2. 
// function leapYear(year) {
//     switch (true) {
//         case (year % 4 === 0):
//             console.log(year + ' is a leap year');
//             break;
//         default:
//             console.log(year + ' is not a leap year');
//     }
// }

// or
// function leapYear(year) {
//     switch (year) {
//         case year:
//             if(year % 4 === 0){ 
//             console.log(year + ' is a leap year');
//             break;
//             }
//         default:
//             console.log(year + ' is not a leap year');
//     }
// }

// or
// function leapYear(year) {
//     if (year % 4 === 0) {
//         console.log(year + ' is a leap year');
//     } else {
//         console.log(year + ' is not a leap year');
//     }
// }

// var year = 2001;
// leapYear(year);

// Q3.
// function calcSides(a, b, c) {
//     return (a + b + c) / 2
// }

// function areaOfTriangle(a, b, c) {
//     var s = calcSides(a, b, c);
//     var area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
//     return area + ' is the area of triangle'
// }


// or
// function areaOfTriangle(a, b, c) {
//     s = (a + b + c) / 2
//     var res = Math.sqrt(s * (s - a) * (s - b) * (s - c))
//     return res + ' is the area of triangle'
// }

// var a = 3, b = 2, c = 3
// console.log(areaOfTriangle(a, b, c));



// Q4. 
// function mainFunction (marks1 , marks2 , marks3){
//     var average = averageMarks(marks1 , marks2 , marks3);
//     var percent = percentage(marks1 , marks2 , marks3);
//     return ('The average is: ' + average + ' and the percentage is: ' + percent.toFixed(2) +'%')
// }

// function averageMarks (sub1 , sub2, sub3){
//     var ave = (sub1 + sub2 + sub3 ) / 3
//     return ave
// }


// function percentage (marks1 , marks2 , marks3){
//     var per = (marks1 + marks2 + marks3 ) * 100 / 300
//     return per
// }


// var sub1Mark = +prompt('Enter the marks of the First Subject: ')
// var sub2Mark = +prompt('Enter the marks of the Second Subject: ')
// var sub3Mark = +prompt('Enter the marks of the Third Subject: ')

// console.log(mainFunction(sub1Mark , sub2Mark , sub3Mark));

// Q5. 
// function indexOfele(arrString, string) {
//     for (var i = 0; i < arrString.length; i++) {
//         if (arrString[i] === string) {
//             return i
//         } 
//     }
// }
// function indexOf(arrString, string, other) {
//     for(var i = other ; i < arrString.length ; i++){
//         if (arrString[i] === string) {
//             return i
//         } 
//     }
// }

// var arr = ['ant', 'bison', 'camel', 'bison', 'duck', 'bison'];
// var str = 'bison'

// console.log(indexOfele(arr, str));
// console.log(indexOf(arr, str, 2));


// Q6. 
// function deleteVowels(str) {
//     var result = "";

//     if (str.length > 25) {
//         console.log('String length must not exceed 25');
//         return "";
//       }
    

//     for (var i = 0; i < str.length; i++) {
//         if (
//             str[i] !== "a" &&
//             str[i] !== "A" &&
//             str[i] !== "e" &&
//             str[i] !== "E" &&
//             str[i] !== "i" &&
//             str[i] !== "I" &&
//             str[i] !== "o" &&
//             str[i] !== "O" &&
//             str[i] !== "u" &&
//             str[i] !== "U"
//         ) {
//             result += str[i];
//         }
//     }
//     return result;
// }

// var string = "Pleases read this ";
// console.log(deleteVowels(string));


// Q7. 































//------------------>>>>>>>>>>>>  CH # 43 - 48 <<<<<<<<<<<<<--------------------
//------------------>>>>>>>>>>>>  CH # 49 - 52 <<<<<<<<<<<<<--------------------

