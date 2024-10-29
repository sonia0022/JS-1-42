
//------------------>>>>>>>>>>>>  CH # 6  -  9 <<<<<<<<<<<<<--------------------

// Q1. 
// var a = 10;
// document.write('</br> </br>');
// document.write('Result: ' + '</br>');
// document.write('The value of a is: '+ a + '</br>');
// document.write('--------------------------------------' + '</br>' + '</br>' + '</br>');
// document.write('The value of ++a is: '+ ++a + '</br>');
// document.write('Now value of a is: '+ a + '</br>');
// document.write('--------------------------------------' + '</br>' + '</br>' + '</br>');
// document.write('The value of a++ is: '+ a++ + '</br>');
// document.write('Now value of a is: '+ a + '</br>');
// document.write('--------------------------------------' + '</br>' + '</br>' + '</br>');
// document.write('The value of --a is: '+ --a + '</br>');
// document.write('Now value of a is: '+ a + '</br>');
// document.write('--------------------------------------' + '</br>' + '</br>' + '</br>');
// document.write('The value of a-- is: '+ a-- + '</br>');
// document.write('Now value of a is: '+ a + '</br>');

// Q2. 
// var a = 2 ,b = 1;
// var result = --a - --b + ++b + b--; 
// document.write('Value of a is: '+ a + '</br>');
// document.write('Value of b is: '+ b + '</br>');
// document.write('Value of result is: '+ result + '</br>');
// document.write('</br> </br></br> </br>');

// --a;
// document.write('Value of a is: '+ a + '</br>');
// --a - --b;
// document.write('Value of a is: '+ a + ' and value of b is: ' + b + '</br>');
// --a - --b + ++b
// document.write('Value of a is: '+ a + ' and value of b is: ' + b + '</br>');
// --a - --b + ++b + b--
// document.write('Value of a is: '+ a + ' and value of b is: ' + b + '</br>');


// Q3. 
// var name = prompt('What is your good name? ');
// alert(' Hello \n Nice to meet to '+name);


// Q4. 
// var userNumber = +prompt('Which table do you want to display\n Enter a number');
// if(userNumber === 0){
//     alert('You did not enter a number\n please enter a number! ')
//     document.write('<center><h1>Table of 5 </h1> </center>'+ '</br>');
//     for (var i =1 ; i <= 10 ; i++){
//         document.write('5  x ' + i + ' = ' + 5*i + '</br>');
//     }
// }else{
//     document.write('<center><h1>Table of '+ userNumber +'</h1> </center>'+ '</br>');
//     for (var i =1 ; i <= 10 ; i++){
//         document.write(userNumber+' x ' + i + ' = ' + userNumber*i + '</br>');
//     }
// }

// Q5. 
alert('Enter any 3 Subjects')
var subject1 = prompt('Please enter first subject');
var marksOfSub_1 =  +prompt('Enter marks for ' +subject1 + ' Subject');

var subject2 = prompt('Please enter second subject');
var marksOfSub_2 = +prompt('Enter marks for ' +subject2 + ' Subject');

var subject3 = prompt('Please enter third subject');
var marksOfSub_3 =  +prompt('Enter marks for ' +subject3 + ' Subject');

var totalMarks = 300;
var totalPerSubMarks = 100;

var totalObtMarks = marksOfSub_1 + marksOfSub_2 + marksOfSub_3;
var totalPer = (totalObtMarks / totalMarks) * 100;

var perSub_1 = (marksOfSub_1 / totalPerSubMarks) * 100;
var perSub_2 = (marksOfSub_2 / totalPerSubMarks) * 100;
var perSub_3 = (marksOfSub_3 / totalPerSubMarks) * 100;


document.write(
    ' <table> ' +
    ' <tr> ' +
    ' <th>SUBJECT</th> ' +
    ' <th>TOTAL MARKS</th> ' +
    ' <th>Obt. MARKS</th> ' +
    ' <th>PERCENTAGE</th> ' +
    ' </tr> ' +
    ' <tr> ' +
    ' <th> ' + subject1 + ' </th> ' +
    ' <td> ' + totalPerSubMarks + ' </td > ' +
    ' <td> ' + marksOfSub_1 + ' </td> ' +
    '<td> ' + perSub_1 + ' % </td> ' +
    '</tr>' +
    ' <tr> ' +
    ' <th> ' + subject2 + ' </th> ' +
    ' <td> ' + totalPerSubMarks + ' </td > ' +
    ' <td> ' + marksOfSub_2 + ' </td> ' +
    '<td> ' + perSub_2 + ' % </td> ' +
    '</tr>' +
    ' <tr> ' +
    ' <th> ' + subject3 + ' </th> ' +
    ' <td> ' + totalPerSubMarks + ' </td > ' +
    ' <td> ' + marksOfSub_3 + ' </td> ' +
    '<td> ' + perSub_3 + ' % </td> ' +
    '</tr>' +
    ' <tr> ' +
    ' <th> ' + ' </th> ' +
    ' <td> ' + totalMarks + ' </td > ' +
    ' <td> ' + totalObtMarks + ' </td> ' +
    '<td> ' + totalPer + ' % </td> ' +
    '</tr>' +
    '</table>')












