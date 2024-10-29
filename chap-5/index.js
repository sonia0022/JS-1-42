
//------------------>>>>>>>>>>>>  CH # 5 <<<<<<<<<<<<<--------------------
// Q1. 
// var num1 = 3  ,num2 = 5;
// var sum = num1 + num2;
// document.write('Sum of ' + num1 + ' and '+ num2 + ' is ' + sum);

// Q2. (a)
// var num1 = 10  ,num2 = 5;
// var sub = num1 - num2;
// document.write('Subtraction of ' + num1 + ' and '+ num2 + ' is ' + sub);

// Q2. (b) 
// var num1 = 3  ,num2 = 5;
// var multi = num1 * num2;
// document.write('Multiplication of ' + num1 + ' and '+ num2 + ' is ' + multi);

// Q2. (b)
// var num1 = 3  ,num2 = 5;
// var div = num1 / num2;
// document.write('Division of ' + num1 + ' and '+ num2 + ' is ' + div);

// Q2. (d)
// var num1 = 15  ,num2 = 5;
// var rem = num1 % num2;
// document.write('Remainder of ' + num1 + ' and '+ num2 + ' is ' + rem);
//      or
// var num1 = 15  ,num2 = 4;
// var rem = num1 % num2;
// document.write('Remainder of ' + num1 + ' and '+ num2 + ' is ' + rem);

// Q3. 
// var number; //a)
// document.write('Value after variable declaration is: number' ); //b)
// document.write('</br>')
// number = 5; //c)
// document.write('Initial Value: ' + number); //d)
// document.write('</br>')
// number++; //e)
// document.write('Value after increment is: ' + number); //f)
// document.write('</br>')
// number+=7; //g)
// document.write('Value after addition is: ' + number); //h)
// document.write('</br>')
// number--;  //i)
// document.write('Value after the decrement is: ' + number); //j)
// document.write('</br>')
// number%=3; //k)
// document.write('Remainder value after division by 3 : ' + number); //l)

// Q4. 
// var ticket = 600;
// ticket*=5;
// document.write('Total cost to buy 5 tickets to a movie is ' + ticket + ' PKR');
//      or
// var ticket = 600;
// var quantity = 5
// ticket*=quantity;
// document.write('Total cost to buy '+ quantity +' tickets to a movie is ' + ticket + ' PKR');

// Q5. 
// for(var i =1 ; i<=10 ; i++){
//     document.write(' 4 x ' + i + ' = ' + 4*i);
//     document.write('</br>');
// }

// or
// document.write(' 4 x 1 = 4');
// document.write(' 4 x 2 = 8');
// document.write(' 4 x 3 = 12');
// document.write(' 4 x 4 = 16');
// document.write(' 4 x 5 = 20');
// document.write(' 4 x 6 = 24');
// document.write(' 4 x 7 = 28');
// document.write(' 4 x 8 = 32');
// document.write(' 4 x 9 = 36');
// document.write(' 4 x 10 = 40');


// Q6. 
// var celsius;
// var fahrenheit;

// fahrenheit = +prompt('Enter the value for Farhrenheit: ')
// celsius = (fahrenheit - 32) * 5 / 9;
// document.write(celsius +'<sup>0</sup> C is ' + fahrenheit +'<sup>0</sup> F' )
// document.write('</br>')
// celsius = +prompt('Enter the value for Celsius: ')
// fahrenheit = ( celsius * 9 / 5 ) + 32;
// document.write(fahrenheit +'<sup>0</sup> C is ' + celsius +'<sup>0</sup> F' )

// or
// var cel = 25 ;
// var fahr = 77 ;
// cel = (fahr - 32) * 5 / 9;
// document.write(cel +'<sup>0</sup> C is ' + fahr +'<sup>0</sup> F' )
// document.write('</br>')
// fahr = ( cel * 9 / 5 ) + 32;
// document.write(fahr +'<sup>0</sup> C is ' + cel +'<sup>0</sup> F' )

// Q7. 
// var shirt = 650;
// var pant = 100;
// var shippingCharges = 100;
// var quantityOfshirts = 3;
// var quantityOfPants = 7;
// var totalCost = (shirt * quantityOfshirts) + (pant * quantityOfPants) + shippingCharges;

// document.write('<h1>Shopping Cart </h1>'  + '</br>' + '</br>')
// document.write('Price of Shirt  is ' + shirt + '</br>' );
// document.write('Quantity of Shirts  is ' + quantityOfshirts + '</br>');
// document.write('Price of Pant  is ' + pant + '</br>');
// document.write('Quantity of Pants  is ' + quantityOfPants + '</br>');
// document.write('Shipping Charges are ' + shippingCharges + '</br>');
// document.write('Total cost of your order is ' + totalCost)

// Q8. 
// var totalMarks = 980;
// var obtainedMarks = 804;
// var percentage = ( obtainedMarks / totalMarks ) * 100; 
// document.write('<h1>Marks Sheet</h1> ' + '</br>');
// document.write('Total marks: '+ totalMarks + '</br>');
// document.write('Marks obtained: '+ obtainedMarks + '</br>');
// document.write('Percentage: '+  percentage);

// Q9. 
// var currencyInDollers = 10 ;
// var currencyInRiyals = 25;

// document.write('<h1>Currency in PKR</h1>');
// document.write('We have ' + currencyInDollers + ' US dollers' + '</br>');
// currencyInDollers = 10 * 104.80;
// document.write('We have ' + currencyInRiyals + ' Saudi Riyals' + '</br>');
// currencyInRiyals = 25 * 28;
// var currencyInPKR = currencyInDollers + currencyInRiyals;
// document.write('Total currency in PKR is: ' +  currencyInPKR );

// or
// var usCurreny = +prompt('How much US dollers do you have:');
// var saudiCurrency = +prompt('How much Saudi Riyals do you have:');
// usCurreny*=104.80;
// saudiCurrency*=28;
// var pkrCurrency = usCurreny + saudiCurrency ;
// document.write('<h1>Currency in PKR</h1>');
// document.write('Total currency in PKR is: ' +  pkrCurrency );

// Q10. 
// var arithmethic=0;
// arithmethic +=5;
// arithmethic*=10;
// arithmethic/=2;
// console.log(arithmethic);
// document.write('Arithmetic Operation in multiple lines' + arithmethic + '</br>')

// or
// var exp = 0;
// exp = ((exp + 5) *10) /2;
// console.log(exp);
// document.write('Arithmetic Operation in single line' + exp);

// or
// var number = 0
// var add = +prompt('The initial value of a number is 0\nEnter a number which you want to add');
// number+=add;
// alert('The number is ' + number);
// var mutliply = +prompt('Enter a number which you want to multiply in this number');
// number*=mutliply;
// alert('Now the number is ' + number);

// var divide = +prompt('Enter a number which you want to divide in this number');
// number/=divide;
// alert('Now the number is ' + number);

// Q11. 
// var currentYear = 2016;
// var birthYear = 1992;
// var age = currentYear - birthYear ;
// document.write('<h1>Age Calculator</h1>'+ '</br>');
// document.write('Current Year is: ' + currentYear + '</br>');
// document.write('Birth Year is: ' + birthYear + '</br>');
// document.write('Your age is: ' + age + '</br>'+ '</br>');

// currentYear = 2024;
// birthYear = 1998;
// age = currentYear - birthYear ;
// document.write('Current Year is: ' + currentYear + '</br>');
// document.write('Birth Year is: ' + birthYear + '</br>');
// document.write('Your age is: ' + age + '</br>'+ '</br>');

// Or
// var currYear = +prompt('Enter the Current year');
// var birYear = +prompt('Enter your birth year')
// var age = currYear - birYear ;
// alert('You age is: ' + age);

// Q12. 
// var r =20;
// var circumference = 2 * 3.142 * r;
// var area = 3.142 *(r * r);
// document.write('<h1>The Geometrizer</h1>'+ '</br>');
// document.write('Radius of a circle: '+ r + '</br>');
// document.write('The circumference is: '+ circumference + '</br>');
// document.write('The area is: '+ area + '</br>');


// or
// var radius = +prompt('Enter the value of radius: ');
// var circumfereceOfCircle = 2 * 3.142 * radius;
// var areaOfCircle = 3.142 *(radius * radius);
// alert('Circumference of circle is '+circumfereceOfCircle + '\nArea of circle is '+ areaOfCircle);

// Q13. 
// var favSnack = 'Chocolate chip cookie';
// var currage = 15;
// var maxAge = 65;
// var estimatedAmount = 3;
// var totalEat = (maxAge - currage) * estimatedAmount;
// document.write('<h1>The Lifetime Supply Calculator</h1>'+ '</br>');
// document.write('Favourite Snack is: ' + favSnack + '</br>');
// document.write('Current age is: ' + currage + '</br>');
// document.write('Estimated Maximum Age is: ' + maxAge + '</br>');
// document.write('Amount of snacks per day: ' + estimatedAmount + '</br>');
// document.write('You will need ' + totalEat + ' ' + favSnack +' ' + ' to last you until the ripe old age of ' + maxAge);


// or
// var favouriteSnack = prompt('What is you favourite snack?');
// var currentAge = +prompt('Enter your current age ');
// var maximumAge = +prompt('Enter your Estimated age ');
// var consumeSnackPerDay = +prompt('How much snack will you consume per day (enter as a number) ');
// var totalSupply = (maximumAge - currentAge ) * consumeSnackPerDay;
// alert('You will need ' + totalSupply + ' ' + favouriteSnack +' ' + ' to last you until the ripe old age of ' + maximumAge);

