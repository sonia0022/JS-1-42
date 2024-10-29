//------------------>>>>>>>>>>>>  CH # 17 - 20 <<<<<<<<<<<<<--------------------
// Q1. 
var arrayOfArrays = [[], [[], []], []];

// Q2. 
var multiDimensionalArray = [[0, 1, 2, 3], [1, 0, 1, 2], [2, 1, 0, 1]];

// document.write('<h1>Multidimensional Array Representation</h1>');

// document.write(multiDimensionalArray[0][0] + ' &nbsp&nbsp&nbsp ' + multiDimensionalArray[0][1] + ' &nbsp&nbsp&nbsp ' + multiDimensionalArray[0][2] + ' &nbsp&nbsp&nbsp ' + multiDimensionalArray[0][3] + '</br>');
// document.write(multiDimensionalArray[1][0] + ' &nbsp&nbsp&nbsp ' + multiDimensionalArray[1][1] + ' &nbsp&nbsp&nbsp ' + multiDimensionalArray[1][2] + ' &nbsp&nbsp&nbsp ' + multiDimensionalArray[1][3] + '</br>');
// document.write(multiDimensionalArray[2][0] + ' &nbsp&nbsp&nbsp ' + multiDimensionalArray[2][1] + ' &nbsp&nbsp&nbsp ' + multiDimensionalArray[2][2] + ' &nbsp&nbsp&nbsp ' + multiDimensionalArray[2][3]);

// Q3. 
// document.write('<h1>Counting from 1 to 10</h1>');
// for (let i = 1; i <= 10; i++) {
//     document.write('<h3> ' + i + '</h3>')    
// }

// Q4. 
// var userWantsTable = +prompt('Enter a number which table do you wants to print: ')
// var tableStartFrom = +prompt('From where do you want to start your table')
// var tableEndTo = +prompt('From where do you want to ends your table')

// document.write('<h1>Enter number and print table</h1>');
// if (tableStartFrom < tableEndTo) {
//     for (let i = tableStartFrom; i <= tableEndTo; i++) {
//         document.write(userWantsTable + ' X ' + i + ' = ' + userWantsTable * i + ' </br>')
//     }
// } else if (tableStartFrom > tableEndTo) {
//     for (let i = tableStartFrom; i >= tableEndTo; i--) {
//         document.write(userWantsTable + ' X ' + i + ' = ' + userWantsTable * i + ' </br>')
//     }
// } else {
//     document.write('Try again </br>');
// }

// Q5. 
// var fruits = ['Apple' , 'Banana' , 'Mango' , 'Orange' , 'Strawberry']
// for( let i = 0 ; i < fruits.length ; i++ ){
//     document.write('<h2>'+ fruits[i]+ '</h2>');
// }
// document.write('</br>')
// for( let i = 0 ; i < fruits.length ; i++ ){
//     document.write('<h2>Element at index '+ i + ' is ' + fruits[i]+ '</h2>');
// }

// Q6. 

// a) 
// document.write('<h4>Counting</h4>')
// for(let i = 1 ; i <= 15 ; i++){
//     document.write(i)
//     document.write(' ' + ' , ' + ' ')
// }


// b)
// document.write('<h4>Reverse Counting</h4>')
// for(let i = 10 ; i >= 1 ; i--){
//     document.write(i)
//     document.write(' ' + ' , ' + ' ')
// }


// c)
// document.write('<h4>Even Numbers</h4>')
// for (let i = 0; i <= 20; i++) {
//     if (i % 2 === 0) {
//         document.write(i)
//         document.write(' ' + ' , ' + ' ')
//     }
// }


// d)
// document.write('<h4>Odd Numbers</h4>')
// for (let i = 0; i <= 20; i++) {
//     if (i % 2 !== 0) {
//         document.write(i)
//         document.write(' ' + ' , ' + ' ')
//     }
// }


// d)
// document.write('<h4>Odd Numbers</h4>')
// for (let i = 1; i <= 20; i++) {
//     if (i % 2 === 0) {
//         document.write(i +'k')
//         document.write(' ' + ' , ' + ' ')
//     }
// }

// Q7. 
// var snacks = ['cake' , 'apple pie' , 'cookie' , 'chips' , 'patties'];
// var snacksOrder = prompt('Welcome to ABC Bakery. What do you want to order Sir/Madam:')
// var isTrue = 0;
// for( let i = 0 ; i < snacks.length ; i++){
//     if(snacks[i] === snacksOrder.toLowerCase()){
//         isTrue=1;
//         console.log(snacksOrder +' is available at index ' + i + ' in our bakery');
//         break;        
//     }
// }

// if(!isTrue){
//     console.log('We are sorry '+ snacksOrder +' is not available in our bakery');
// }


// Q8. 
// var largestNumber = [24 , 53 , 78 , 91 , 12]
// var larger = largestNumber[0]
// for(let i = 0 ; i < largestNumber.length ; i++){ 
//     if (largestNumber[i] > larger ) {
//         larger =  largestNumber[i]    
//     }
// }
// console.log('Array items: ' + largestNumber);

// console.log('The largest number is: '+larger);

// Q9. 
// var smallerNumber = [24 , 53 , 78 , 91 , 12]
// var small = smallerNumber[0]
// for(let i = 0 ; i < smallerNumber.length ; i++){ 
//     if (smallerNumber[i] < small ) {
//         small =  smallerNumber[i]    
//     }
// }
// console.log('Array items: ' + smallerNumber);

// console.log('The smallest number is: '+small);



// Q10. 
// for(let i = 1 ; i <= 20 ; i++){
//     document.write(5*i);
//     document.write(' '+ ' , ' + ' ');
// }




























