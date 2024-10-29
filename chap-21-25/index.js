//------------------>>>>>>>>>>>>  CH # 21 - 25 <<<<<<<<<<<<<--------------------
// Q1.
// var firstName = []
// var lastName = []
// var fullName = []


// for(var i = 0 ; i < 5 ; i++){
//     firstName[i]  = prompt('Enter any '+ i +' first name: ')     
// }
// console.log(firstName);

// for(var j = 0 ; j < 5 ; j++){
//     lastName[j]  = prompt('Enter any '+ j +'  last name: ')     
// }
// console.log(lastName);

// for(var i = 0 ; i < firstName.length ; i ++){
//     for(var j = 0 ; j < lastName.length ; j++){
//         if( i === j ){
//             fullName.push(  ' Hello ' +firstName[i] + ' ' + lastName[j])
//         }
//     }
// }
// console.log(fullName);

//Q2. 
// var str = prompt('Enter your mobile specification: ')
// if (str !== null){
//     console.log('My Favorite Phone is: ' + str);
//     console.log('Length of String is: ' + str.lastIndexOf(str.charAt(str.length)));    
// }

// Q3. 
// var str = 'Pakistan'
// console.log('String: '+ str);
// console.log('Index of "n"= ' +str.indexOf('n'));

// Q4. 
// var str = 'Hello World'
// console.log('String: ' + str);
// console.log('Last of "l"= ' + str.lastIndexOf('l'));

// Q5. 
// var str = 'Pakistani'
// console.log('String: ' + str);
// console.log('Character at index 3 = ' + str.charAt(3));


// Q6. 
// var firstName = []
// var lastName = []
// var fullName = []


// for(var i = 0 ; i < 2 ; i++){
//     firstName[i]  = prompt('Enter any '+ i +' first name: ')     
// }
// console.log(firstName);

// for(var j = 0 ; j < 2 ; j++){
//     lastName[j]  = prompt('Enter any '+ j +'  last name: ')     
// }
// console.log(lastName);

// for(var i = 0 ; i < firstName.length ; i ++){
//     for(var j = 0 ; j < lastName.length ; j++){
//         if( i === j ){
//             fullName.push(  ' Hello ' +firstName[i].concat(' ', lastName[j]))
//         }
//     }
// }
// console.log(fullName);

// Q7. 
// var str = 'Hyderabad'
// console.log('City: ' +str);
// console.log('After replacement: '+str.replace('Hyder', 'Islam'));

// Q8. 
// var message = 'Ali and Sami are best friends. They play cricket and football together. '
// console.log('Message: '+ message);
// console.log('After replacement of "and" with "&": '+ message.replace(/and/gi  ,'&') );

// Q9. 
// var str = '472'
// console.log('Value: ' + str);
// console.log('Type: '+ typeof str);
// str =  Number(str)
// console.log('Value: ' + str);
// console.log('Type: '+ typeof str);

// Q10. 
// var str = 'peanuts'
// console.log('User input: '+ str);
// console.log('Upper case: '+ str.toUpperCase());

// Q11. 
// var str = 'javascript'
// console.log('User input: '+ str);
// var str1 = str.charAt(0).toUpperCase()+str.slice(1)
// console.log('Title case: '+ str1);

// Q12. 
// var num = 35.36
// console.log(num);
// console.log(typeof num);
// num = num.toString()
// console.log(num);
// console.log(typeof num);
// var str = num.slice(0 , 2) + num.slice(3)
// console.log(str);


// Q13. 
// var specialChar = ['@' , '.' , ',' , '!']
// var userName = prompt('Enter username: ')
// var isTrue = false
// for(var i = 0; i <specialChar.length ; i++){
//     for(var j = 0 ; j < userName.length ; j++){
//         if(userName[j] == specialChar[i]){
//             isTrue = true
//             alert('Please enter a valid user name.\nDont use '+ specialChar[i] + ' in user name.')
//             break
//         }
//     }
// }

// if(!isTrue){
//     alert('Valid username is: '+ userName)
// }

// Q14. 
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



// Q15. 
// var password = 'affghjjj1234'
// var isTrue = false
// for(var i = 0 ; i < password.length ; i++){
//     if(password[0]>= 0 && password[0]<=9){
//         isTrue= true
//         console.log('Password can not begin with a number\nPlease enter a valid password');
//         break
//     }
//     else if (password.length< 6){
//         isTrue= true
//         console.log('Password must be atleast 6 characters');
//         break
//     }
//     else if(!/[a-z]/i.test(password) || !/[0-9]/.test(password)){
//         isTrue= true
//         console.log('Password should contain alphabets and numbers');
//         break
//     }
// }
// if (!isTrue) {
//     console.log('Congrats! Your password is correct');
    
// }

// Q16. 
// var university = 'University of karachi';
// var str = university.split('');
// for(var i = 0 ; i < str.length ; i++){
//     document.write(str[i]+ '<br>')
// }

// Q17. 
// var input = 'Pakistan'
// console.log('User input: ' + input);
// console.log('Last character of input: '+ input.charAt(input.length-1));


// Q18. 
// var str  = ' The quick brown fox jumps over the lazy dog.'
// var match = 0
// var string = str.split(' ');
// for( var i = 0; i < string.length ; i++){
//     if (string[i].toLowerCase() === 'the') {
//         match ++ ;       
//     }    
// }
// console.log('Text: '+str);
// console.log('There are '+ match + ' occurrence (s) of word "the"');











