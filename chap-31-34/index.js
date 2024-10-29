//------------------>>>>>>>>>>>>  CH # 31 - 34 <<<<<<<<<<<<<--------------------
// Q1. 
var date = new Date();
// console.log(date);

// Q2. 
// var months = ['January' , 'February' , 'March' , 'April' , 'May' , 'June' , 'July' , 'August' , 'September' , 'October' , 'November' , 'December']
// var month = date.getMonth();
// var currentMonth  = months[month];
// console.log('Current month: ' + currentMonth);


// Q3. 
// var days = ['Sunday' , 'Monday' , 'Tuesday' , 'Wednesday' , 'Thursday' , 'Friday' , 'Saturday']
// var day = date.getDay();
// var currentDay = days[day];
// console.log('Today is: ' + currentDay);

// Q4. 
// var currentDay = prompt('Enter day! ')
// if(currentDay.toLowerCase() === 'sunday' || currentDay.toLowerCase() === 'sunday'){
//     console.log("It's Fun day");
// }else{
//     console.log("It's working day");
// }


// Q5. 
// var DayofMonth = date.getDate();
// if (DayofMonth >= 1 && DayofMonth <= 15) {
//     console.log('First fifteen days of the month.');
// }else if(DayofMonth >= 16 && DayofMonth <= 31){
//     console.log('Last days of the month.');
// }else{
//     console.log('It is invalid month');
// }


// Q6. 
// console.log('Current Date: ' + date);
// var milisecondsSince_1970 = date.getTime();
// console.log('Elapsed millisecond since January 1, 1970:  '+milisecondsSince_1970);
// var minutesSince_1970 = date.getTime() 
// var min = 1000 * 60
// var minutes = date.getTime()
// var totalMinutes = Math.round(minutes/min)
// console.log( 'Elapsed minutes since January 1, 1970:' +totalMinutes);

//? Just for pratice==========
// var h = min * 60
// var hour = date.getTime()
// var totalHour = Math.round(hour/h)
// console.log(totalHour);



// var d = h * 24
// var day = date.getTime()
// var totalDays = Math.round(day/d)
// console.log(totalDays);


// var y = d * 365
// var year = date.getTime()
// var totalYear = Math.round(year/y)
// console.log(totalYear);

//? ===================

// Q7. 
// var hour = date.getHours();
// var min = date.getMinutes();

// if(hour >= 1 && hour < 12 && min >= 0 && min <= 59){
//     console.log('Hello Its AM');
// }else if(hour > 12 && hour <= 24){
//     console.log('Hello its PM');
// }else if(hour === 12 && min === 0) {
//     console.log('Hello Its Noon');
// }else{
//     console.log('Invalid time. Please enter hours between 0 and 23.');
// }

// Q8. 
// var lastMonthOf_2020 = new Date('12/31/2020')
// console.log( 'Laster date' +lastMonthOf_2020);

// Q9. 
// var pastDate = new Date("April 9, 2024")  ;
// var tillDate = new Date('October 25, 2024')  ;

// var miliSecPastDate = pastDate.getTime();
// var miliSecTillDate = tillDate.getTime();

// var difference = miliSecTillDate - miliSecPastDate
// var dayDifference = difference / (1000 * 60 * 60 * 24)

// console.log(dayDifference + ' days have passed since 1st Ramadan, ' + pastDate.getFullYear());


// Q10. 
// console.log('On reference date ' + pastDate + ' , ' + difference + ' seconds had passed since beginning of ' + pastDate.getFullYear);



// Q11. 
// var currentDate = new Date();
// console.log('Current date: ' + currentDate);

// var pastHour = currentDate.getHours()-1

// currentDate.setHours(pastHour)
// console.log( '1 hour ago , it was ' +currentDate);

// Q12. 
// var currentDate = new Date();
// console.log('Current date: ' + currentDate);

// var yearsBack = currentDate.getFullYear() - 100

// currentDate.setFullYear(yearsBack);
// console.log('100 years back, it was ' + currentDate);

// Q13.
// var age = prompt('Enter your age to findout your birth year');
// console.log('Your age is ' + age);

// var currentDate = new Date();
// var birthYear = currentDate.getFullYear() - age;

// console.log( 'Your birth year is ' +birthYear);

// Q14. 
// var monthNames = [ 'January' , 'February' , 'March' , 'April' , 'May' , 'June' , 'July' , 'August' , 'September' , 'October' , 'November' , 'December']

// var customerName = 'Sonia'
// var currentMonth = monthNames[date.getMonth()]
// var numberOfUnits = 410
// var chargesPerUnit = 16
// var netAmountPayable = numberOfUnits * chargesPerUnit;
// var latePaymentSurcharge = 350
// var grossAmountPayable = netAmountPayable + latePaymentSurcharge ;

// document.write('<h1>K-Electric Bill</h1>' + '</br>')
// document.write('Customer Name: ' + customerName + '</br>')
// document.write('Month: ' + currentMonth + '</br>')
// document.write('Number of units: ' + numberOfUnits + '</br>')
// document.write('Charges per units: ' + chargesPerUnit + '</br>' + '</br>' + '</br>')
// document.write('Net Amount Payable (within Due Date): ' + netAmountPayable + '</br>')
// document.write('Late payment Surcharges: ' + latePaymentSurcharge + '</br>')
// document.write('Gross Amount Payable (after Due Date): ' + grossAmountPayable + '</br>')


















