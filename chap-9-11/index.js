
//------------------>>>>>>>>>>>>  CH # 9  - 11 <<<<<<<<<<<<<--------------------

// Q1. 
// var city = prompt('Enter your city name');
// if(city.toLowerCase() === 'karachi'){
//     alert('Welcome to the city of lights');
//     document.write('<center><h1>Welcome to the city of lights</h1></center>');
// }

// Q2. 
// var gender = prompt('What are your pronounce? ');
// if(gender.toLowerCase() === 'male'){
//     alert('Good Morning Sir');
//     document.write('<center><h1>Good Morning Sir 🧑🏻</h1></center>'); 
// }else if(gender.toLowerCase() === 'female'){
//     alert('Good Morning Madam');
//     document.write('<center><h1>Good Morning Madam 👩🏻‍🦰</h1></center>'); 
// }else{
//     alert('Choose the gender between\nMale\nFemale')
// }

// Q3. 
// var trafficLightColor = prompt('Enter Traffic Color');
// if(trafficLightColor.toLowerCase() === 'red'){
//     alert('Must stop');

// }else if(trafficLightColor.toLowerCase() === 'yellow'){

//     alert('Ready to move');

// }else if(trafficLightColor.toLowerCase() === 'green'){

//     alert('Move now');

// }else{
//     alert('Select the Traffic Colors \n1. Red\n2. Yellow\n3. Green');
// }


// Q4. 
// alert('Please check your car fuel')
// var refillFuel = prompt('Please enter the remaining fuel in car')
// var litres = +prompt('Select the option fuel unit\nenter the option 1 or 2 in the input field\n1. litres \n2. milli-litres');
// if((refillFuel <= 0.25 && litres === 2 )|| (refillFuel <= 0.25 && litres === 1)|| (refillFuel > 0.25 && litres === 2)){
//     alert('Please refill the fuel in your car\nIt is less than 0.25litres');
// }else if(refillFuel > 0.25 && litres === 1){
//     alert('Drive well and have fun');
// }else{
//     alert('Please fill the input fields');
// }


// Q5. 
//a)
// var a =  4;    //here value of a is 4 
// if(++a === 5){ //here we used pre increment and a's value update to 5 and now if's condtion is true and it will run its internal statements
// alert('given condition for variable a is true') // it displays the output  "given condition for variable a is true"
// }

//b)
// var b = 82;       //here value of b is 82
// if (b++ === 83) { //here we used post increment ... still b's value is 82 (but it will update b's value to 83 )and here the condition is false and will not execute its internal statements 
//     alert('given condition for variable b is true'); //it does not display the output because the value of b is lesser than 83 
// }

//c)
// var c = 12;
// if(c++ === 13){ //here we used post increment ... still c's value is 12 (but it will update c's value to 13 ) and here the condition is false and will not execute its internal statements 
//     alert('condition 1 is ture'); //it does not display the output because the value of c is lesser than 13 
// }

// if (c === 13) {       //now the value of c is 13 because in above statement post increment updated the value ....  now if's condtion is true and it will run its internal statements
//     alert('condition 2 is true'); //here it displays the output  "condition 2 is true"
// }

// if (++c === 13) {       //here we used pre increment which update the value od c to 14  and here the if's condition is false and it not execute its internal statements
//     alert('condition 3 is true');  //it does not display the output because the value of c is greater than 13
// }

// if (c === 14) {         //now the value of c is 14 because in above statement of pre increment updated the value ....  now if's condtion is true and it will run its internal statements 
//     alert('condition 4 is true'); //here it displays the output  "condition 4 is true"
// }

//d)
// var materialCost = 20000;
// var laborCost    = 2000;
// var totalCost    = materialCost + laborCost;     // here we add the material cost with labor cost (20000+2000 =22000) and stores 22000 into total cost
// if (totalCost ===  laborCost + materialCost) {   //here the total cost (22000) is equal to labor cost (2000) + material cost (20000)..... now if's condtion is true and it will run its internal statements 
//     alert('The cost equals'); //here it displays the output  "The cost equals"
// }


//e)
// if(true){       //if's condtion is true and it will run its internal statements 
//     alert(true) //here it displays the output  "true"
// }

// if(false){       //if's condtion is false and it will not execute its internal statements 
//     alert(false) //here it does not display the output 
// }

//f)
// if ('car' < 'cat') {           // the condition is true  ... car string matches with cat string character by character where both ca are equal and r is lesser than t 
//     alert('car is smaller than cat'); //here it displays the output  "car is smaller than cat"
// }


// Q6. 
// var subject1 = prompt('Enter the first subject: ');
// var marksOfSub_1 = +prompt('Enter the marks of ' + subject1);
// var subject2 = prompt('Enter the second subject: ');
// var marksOfSub_2 = +prompt('Enter the marks of ' + subject2);
// var subject3 = prompt('Enter the third subject: ');
// var marksOfSub_3 = +prompt('Enter the marks of ' + subject3);

// var totalMarks = prompt('Enter the total marks ');
// var totalObtMarks = marksOfSub_1 + marksOfSub_2 + marksOfSub_3;
// var percentage = (totalObtMarks / totalMarks) * 100;

// if (percentage >= 80) {
//     document.write('<center><h1> Subjects are &nbsp&nbsp&nbsp&nbsp ' + subject1 + '&nbsp&nbsp&nbsp&nbsp ' + subject2 + '&nbsp&nbsp and  &nbsp&nbsp' + subject3 + '</h1></center>')
//     document.write(
//         '<table>' +
//         '<tr>' +
//         ' <th>Total Marks</th> ' +
//         ' <th>Obtained Marks</th> ' +
//         ' <th>Percentage</th> ' +
//         ' <th>Grade</th> ' +
//         ' <th>Remarks</th>' +
//         '</tr>' +
//         '<tr>' +
//         '<td> ' + totalMarks + '</td>' +
//         '<td> ' + totalObtMarks + ' </td>' +
//         '<td> ' + percentage + ' </td>' +
//         '<td> A-One </td>' +
//         '<td> Excellent </td>' +
//         '</tr>' +
//         ' </table>'
//     )
// } else if (percentage >= 70) {
//     document.write('<center><h1> Subjects are &nbsp&nbsp&nbsp&nbsp ' + subject1 + '&nbsp&nbsp&nbsp&nbsp ' + subject2 + '&nbsp&nbsp and  &nbsp&nbsp' + subject3 + '</h1></center>')
//     document.write(
//         '<table>' +
//         '<tr>' +
//         ' <th>Total Marks</th> ' +
//         ' <th>Obtained Marks</th> ' +
//         ' <th>Percentage</th> ' +
//         ' <th>Grade</th> ' +
//         ' <th>Remarks</th>' +
//         '</tr>' +
//         '<tr>' +
//         '<td> ' + totalMarks + '</td>' +
//         '<td> ' + totalObtMarks + ' </td>' +
//         '<td> ' + percentage + ' </td>' +
//         '<td> A </td>' +
//         '<td> Good </td>' +
//         '</tr>' +
//         ' </table>'
//     )
// } else if (percentage >= 60) {
//     document.write('<center><h1> Subjects are &nbsp&nbsp&nbsp&nbsp ' + subject1 + '&nbsp&nbsp&nbsp&nbsp ' + subject2 + '&nbsp&nbsp and  &nbsp&nbsp' + subject3 + '</h1></center>')
//     document.write(
//         '<table>' +
//         '<tr>' +
//         ' <th>Total Marks</th> ' +
//         ' <th>Obtained Marks</th> ' +
//         ' <th>Percentage</th> ' +
//         ' <th>Grade</th> ' +
//         ' <th>Remarks</th>' +
//         '</tr>' +
//         '<tr>' +
//         '<td> ' + totalMarks + '</td>' +
//         '<td> ' + totalObtMarks + ' </td>' +
//         '<td> ' + percentage + ' </td>' +
//         '<td> B </td>' +
//         '<td> You need to improve </td>' +
//         '</tr>' +
//         ' </table>'
//     )
// } else {
//     document.write('<center><h1>Subjects are &nbsp&nbsp&nbsp&nbsp ' + subject1 + '&nbsp&nbsp&nbsp&nbsp ' + subject2 + '&nbsp&nbsp and  &nbsp&nbsp' + subject3 + '</h1></center>')
//     document.write(
//         '<table>' +
//         '<tr>' +
//         ' <th>Total Marks</th> ' +
//         ' <th>Obtained Marks</th> ' +
//         ' <th>Percentage</th> ' +
//         ' <th>Grade</th> ' +
//         ' <th>Remarks</th>' +
//         '</tr>' +
//         '<tr>' +
//         '<td> ' + totalMarks + '</td>' +
//         '<td> ' + totalObtMarks + ' </td>' +
//         '<td> ' + percentage + ' </td>' +
//         '<td> Fail </td>' +
//         '<td> Sorry </td>' +
//         '</tr>' +
//         ' </table>'
//     )
// }


// Q7. 
// var secretNumber = 8;
// var guessedNumber = +prompt('Guess any number\n(Range from 1 to 10');

// if(guessedNumber === secretNumber){
//     alert('Bingo ! Correct answer ');
// }else if(guessedNumber+1 === secretNumber || guessedNumber-1 === secretNumber){
//     alert('Close enough to the correct answer\nSecret number is ' + secretNumber);
// }else{
//     alert('wrong answer \nSecret number is ' + secretNumber);
// }

// Q8. 
// var divident1= +prompt('Enter a number to check whether it is divible by 3 or not')
// if (divident1 % 3 ===0 ) {
//     alert( divident1 + ' is divisible by 3');
// }else{
//     alert( divident1 + ' is not divisible by 3');
// }


// Q9.
// var divident2= +prompt('Enter a number to check whether it is even or odd or not')
// if (divident2 % 2 ===0 ) {
//     alert( divident2 + ' is even number');
// }else{
//     alert( divident2 + ' is odd number');
// }


// Q10. 
// var temperature = +prompt('Enter you area temperature to check the weather conditions: ');
// if(temperature <= (-90) || temperature >= 58){
//     alert("temperatures are well above the human body's ability to regulate its internal temperature, leading to heat-related illnesses and potentially fatal consequences.");
// }else if (temperature <= 10){
//     alert('Its snowy weather');
// }else if(temperature <= 20){
//     alert("OMG! Today's weather  is soo cool");
// }else if(temperature <= 30){
//     alert("Today's weather is cool");
// }else if(temperature <= 40){
//     alert('The weather today is Normal');
// }else {
//     alert('It is too hot outside');
// }

// Q11. 
// var firstNumber = +prompt('Enter a first number');
// var secondNumber = +prompt('Enter a second number');
// var operator = +prompt('Choose the options in number\n1. +\n2. -\n3. *\n4. /\n5. %')
// if (operator === 1) {
//     let sum = firstNumber + secondNumber ;
//     alert ('The sum of ' + firstNumber + ' and ' + secondNumber + ' is ' + sum);
// }else if (operator === 2) {
//     let sub = firstNumber - secondNumber ;
//     alert ('The subtraction of ' + firstNumber + ' and ' + secondNumber + ' is ' + sub);
// }else if (operator === 3) {
//     let multi = firstNumber * secondNumber ;
//     alert ('The multiplication of ' + firstNumber + ' and ' + secondNumber + ' is ' + multi);
// }else if (operator === 4) {
//     let div = firstNumber / secondNumber ;
//     alert ('The division of ' + firstNumber + ' and ' + secondNumber + ' is ' + div);
// }else if (operator === 5) {
//     let mod = firstNumber + secondNumber ;
//     alert ('The remainder of ' + firstNumber + ' and ' + secondNumber + ' is ' + mod);
// }else{
//     alert('Enter the options in number')
// }










