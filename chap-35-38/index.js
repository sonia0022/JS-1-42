//------------------>>>>>>>>>>>>  CH # 35 - 38 <<<<<<<<<<<<<--------------------

// Q1. 
// function dateAndTime (){
//     var date = new Date();
//     console.log(date);
// }

// dateAndTime();


// Q2. 
// function greet (fName , lName){
//     console.log('Hello ' + fName + ' ' + lName);
// }

// var firstName = prompt('Enter your first name');
// var lastName = prompt ('Enter your last name');
// greet(firstName , lastName)


// Q3. 
// function add (fNum , sNum){
//     return fNum + sNum
// }
// var fNumber = +prompt('Enter the first number')
// var sNumber = +prompt('Enter the second number')
// var addNumbers = add(fNumber ,sNumber)
// console.log(addNumbers);


// Q4. 
// function calculator (num1 , num2 , operator ){
//     if(operator === '+'){
//         return num1 + num2 ;
//     }else if (operator === '-'){
//         return num1 - num2
//     }else if (operator === '*'){
//         return num1 * num2;
//     }else if (operator === '/'){
//         return num1 / num2
//     }else {
//         alert('Choose those operators which are in options! ')
//     }

// }


// var number1 = +prompt('Enter the first number: ')
// var number2 = + prompt('Enter the second number ')
// var operator = prompt('Choose the operation which you are want to apply:\n1.  +\n2.  -\n3.  *\n4.  / ' )
// var result = calculator(number1 , number2 , operator);
// console.log('Result '+ result);


// Q5. 
// function applySquare (number){
//     return number * number
// }

// var square = +prompt('Enter a number which you want to square')
// var result = applySquare(square);
// console.log('result: '+ result);

// Q6. 
// function factorial(num) {
//     if (num === 0 || num === 1) {
//         return 1
//     } else if (num < 0) {
//         throw new Error("Factorial is not defined for negative numbers");
//     } else {
//         var result = 1
//         for (var i = 2; i <= num; i++) {
//             result *= i
//         } return result
//     }
// }
// var number = +prompt('Enter a number to findout the factorial! ')
// var fac = factorial(number)
// console.log(fac);


// Q7. 
// function counting (start , end){
//     if(start < end){
//         console.log('Forward counting');
//         for(var i = start ; i <= end ; i++){
//            console.log(i);

//         }
//     }else if (end < start){
//         console.log('Backward counting');
//         for(var i = start ; i >= end ; i--){
//             console.log(i);            
//         }
//     }
// }

// var num1 = +prompt('Enter a start number: ')
// var num2 = +prompt('Enter an end number: ')
// counting(num1 ,num2);


// Q8. 
// function hypo (p , b){

//     function square(num){
//         return num* num
//     }

//     var hypotenuse = square(p) + square(b)
//     return  hypotenuse
// }
// var per = +prompt('Enter value for perpendicular: ')
// var base = +prompt('Enter value for base: ')

// var res = hypo( base , per )
// console.log( 'Hypotenuse: '  +res);


// or
// function hypotenuse (base , perpendicular){
//     return ((base*base) + (perpendicular* perpendicular))
// }

// var result = hypotenuse(3 , 4);
// console.log(result);


// Q9. 
// function calculateAreaOfRectangle (width  , height){
//     return width * height
// }

// i. 
// var w = +prompt('Enter the value for width: ')
// var h = +prompt('Enter the value for height: ')
// var area = calculateAreaOfRectangle(w , h)
// console.log( 'Area of a rectangle: ' +area);

// ii. 
// var a = calculateAreaOfRectangle(5 , 9)
// console.log( 'Area of a rectangle: ' +a);



// Q10. 
// function checkPlaindrome(text) {
//     text = text.toLowerCase()
//     var reversed = text.split('').reverse().join('');
//     if (text === reversed) {
//         return text + ': It is a palindrome';
//     } else {
//         return text + ': It is not a palindrome';
//     }
// }

// var plaindromeText = prompt('Enter a text to check whether it is plaindrome or not: ')
// console.log(checkPlaindrome(plaindromeText));



// Q11.
// function capitailze( str) {
//     var splitString = str.split(' ');
//     var subString
//     var join = ''
//     for (var i = 0; i < splitString.length; i++) {
//         subString = splitString[i].charAt(0).toUpperCase() + splitString[i].slice(1)
//         join += subString + ' ';

//     } return join
// }

// var str = prompt('Enter any string')
// console.log(capitailze(str.trim()));



// Q12. 
// function findLongestWord(str) {
//     var words = str.trim().split(' ');

//     var longestWord = '';
//     var maxLength = 0;

//     for (var i = 0; i < words.length; i++) {
//         if (words[i].length > maxLength) {
//             longestWord = words[i];
//             maxLength = words[i].length;
//         }
//     }
//     return longestWord;
// }

// var str = 'Web Development Tutorial';
// console.log(findLongestWord(str)); 



// Q13.
// function countTheCharacter (string , char){
//     var matchString = string.toLowerCase()
//     var matchChar   = char.toLowerCase()
//     var counter = 0

//     for(var i = 0 ; i < matchString.length ; i++){
//         if(matchString[i] === matchChar){
//             counter++
//         }
//     }

//     return counter
// }
// var string = 'JSResourceS.com'
// var char = 's'
// console.log( 'The occurence of ' + char + ' in ' + string + ' is '  +countTheCharacter(string , char));


// Q14. 
// function calcCircumference (r){
//     var pie = 3.142
//     return 2 * pie * r
// }

// function calcArea (r){
//     var pie = 3.142 
//     return pie * r * r
// }

// var radius = +prompt('Enter the radius to findout the Area and circumference of circle')
// console.log( 'The area of circle is ' +calcArea(radius));
// console.log( 'The circumference of circle is ' +calcCircumference(radius));
















