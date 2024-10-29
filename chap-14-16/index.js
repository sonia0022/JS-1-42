
//------------------>>>>>>>>>>>>  CH # 14 - 16 <<<<<<<<<<<<<--------------------

// 1.
// var studentsnamesArr = [];
// 2. 
// var studentsnamesObj = new Array ()
// 3.
// var stringsArr = ['Hello', 'Hi', 'Hey'];
// 4.
// var numbersArr = [1, 2, 3, 4, 5];
// 5.
// var booleansArr = [true, false];
// 6.
// var mixedArr = ['Sonia', 26, true];
// 7.
// var qualifications = ['SSC', 'HSC', 'BCS', 'BS', 'BCOM', 'MS', 'M.Phil', 'phD'];


// 8. 
// var studentsNames = ['Sana', 'Emir', 'Eman'];
// var scores = [320, 230, 480];
// var percentages = ['64%', '46%', '96%'];

// console.log(' Score of ' + studentsNames[0] + ' is '+ scores[0] + ' . Percentage: ' +percentages[0] );
// console.log(' Score of ' + studentsNames[1] + ' is '+ scores[1] + ' . Percentage: ' +percentages[1] );
// console.log(' Score of ' + studentsNames[2] + ' is '+ scores[2] + ' . Percentage: ' +percentages[2] );


// 9. 
// var colorNames = ['Red', 'Blue', 'Green', 'Yellow', 'Orange'];

// a)
// var addColorsNamesAtStart = prompt("Enter your favourite color at the start of the color's list")
// if (addColorsNamesAtStart === '') {
//     alert('Please Input color name to add at start of the list\n\n' + colorNames);
// } else {
//     colorNames.unshift(addColorsNamesAtStart);
//     console.log('Now the colors list is\n' + colorNames);
// }


// b)
// var addColorsNamesAtEnd = prompt("Enter your favourite color at the end of the color's list")
// if (addColorsNamesAtEnd === '') {
//     alert('Please Input color name to add at end of the list\n\n'+colorNames);
// } else {
//     colorNames.push(addColorsNamesAtEnd);
//     console.log('Now the colors list is\n' + colorNames);
// }


// c)
// var addColorsNamesAtStart_1 = prompt("Enter your first favourite color at the end of the color's list")
// var addColorsNamesAtStart_2 = prompt("Enter your second favourite color at the end of the color's list")
// if (addColorsNamesAtStart_1 === '' && addColorsNamesAtStart_2 === '') {
//     alert('Please Input color name to add at end of the list\n\n'+colorNames);
// } else {
//     colorNames.unshift(addColorsNamesAtStart_1);
//     colorNames.unshift(addColorsNamesAtStart_2);
//     console.log('Now the colors list is\n' + colorNames);
// }

// d)
// var shiftColor = colorNames.shift();
// console.log(colorNames +'\nhere is deleted item: '+ shiftColor);

// e)
// var popColor =colorNames.pop();
// console.log(colorNames +'\nhere is deleted item: '+ popColor);

// f)
// var indexAdd = +prompt('Enter the index no after in which do you want to add the color\nindexs are from (0 to 4)');
// var newColor = prompt('Enter the color name');

// colorNames.splice(indexAdd , 0 , newColor);
// console.log(colorNames);


// g)
// var startIndexDelt = +prompt('From which index do you want to delete\nindexs are from (0 to 4)');
// var lastIndexDelt = +prompt('To which index do you want to delete\nindexs are from (0 to 4)');

// colorNames.splice(startIndexDelt , lastIndexDelt );
// console.log(colorNames);

// 10. 
// var scoreOfStudents = [320 , 230 , 480 , 120];
// console.log('Scores of Students: ' + scoreOfStudents);
// console.log('Ordered Scores of Students: '+scoreOfStudents.sort());


// 11. 
// var cityNames = ['karachi' , 'Lahore' , 'Islamabad' , 'Quetta' , 'Peshawar'];
// var selectedCities = cityNames.slice(2,4);
// console.log('Cities list: ');
// console.log(cityNames);
// console.log('Selected Cities list: ');
// console.log(selectedCities);


// 12.
// var arr = ['This' , 'is' , 'my' , 'cat'];

// console.log('Original Array: ');
// console.log(arr);

// console.log('Array: ');
// console.log(arr.join());

// console.log('String: ');
// console.log(arr[0]+ ' ' + arr[1] + ' ' + arr[2]+ ' ' + arr[3]);


// 13. 
// var firstInFirstOutLists = ['keyboard' , 'mouse' , 'printer' , 'monitor'];
// console.log('Devices: \n'+ firstInFirstOutLists.join());


// var shiftitem1 = firstInFirstOutLists.shift();
// var shiftitem2 = firstInFirstOutLists.shift();
// var shiftitem3 = firstInFirstOutLists.shift();
// var shiftitem4 = firstInFirstOutLists.shift();
// console.log('Out \n'+ shiftitem1);
// console.log('Out \n'+ shiftitem2);
// console.log('Out \n'+ shiftitem3);
// console.log('Out \n'+ shiftitem4);


// 14. 
// var firstInFirstOutLists = ['keyboard' , 'mouse' , 'printer' , 'monitor'];
// console.log('Devices: \n'+ firstInFirstOutLists.join());

// var popitem1 = firstInFirstOutLists.pop();
// var popitem2 = firstInFirstOutLists.pop();
// var popitem3 = firstInFirstOutLists.pop();
// var popitem4 = firstInFirstOutLists.pop();
// console.log('Out \n'+ popitem1);
// console.log('Out \n'+ popitem2);
// console.log('Out \n'+ popitem3);
// console.log('Out \n'+ popitem4);


// 15. 
// var phoneManufacturers = ['Apple' , 'Samsung' , 'Nokia' , 'Motorola' , 'Sony' , 'Haier']
// document.write('<h1>Dropdown list</h1>');
// document.write('<h4 class="select">'+phoneManufacturers[0] +' </h4>');
// document.write('<h4 class="select">'+phoneManufacturers[1] +' </h4>');
// document.write('<h4 class="select">'+phoneManufacturers[2] +' </h4>');
// document.write('<h4 class="select">'+phoneManufacturers[3] +' </h4>');
// document.write('<h4 class="select">'+phoneManufacturers[4] +' </h4>');
// document.write('<h4 class="select">'+phoneManufacturers[5] +' </h4>');






































