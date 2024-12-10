

// let varr = 12;

// while (varr <= 20) {
//     console.log(2)
//     varr++
// }

// const mixedArray = [
//     42,                     
//     "Hello, world!",        
//     true,                   
//     null,                   
//     undefined,              
//     { name: "Issam", age: 25 }, 
//     [1, 2, 3]                 
//   ];



// for(let i =0 ;  i  < mixedArray.length ; i++){
//     console.log(mixedArray);
// }


// for(let i =3; i <= 9; i+=1){
//     console.log(i);
// }


// for (let index = 1; index < 10; index++) {
// console.log(`4 x ${index} = ${index* 4}`)
// }

// var numbers = [19, 65, 1, 2, 6, 1, 9, 9, 2, 1,1]; 

// var sum = 0;


// for ( var A of numbers) {

//     sum += A;

// }

// console.log(sum)


// let sum = 0;

// let i = 1
// let target = 100
// for (i ; i <= target; i++) {
  
//   if (i % 2 === 0) {
//     sum += i; 
//   }
// }


// console.log(`The sum of even numbers  ${sum}.`);

// const nbr = [
//     5, 12, 23, 45, 67, 89, 34, 56, 78, 90,
//     11, 22, 33, 44, 55, 66, 77, 88, 99, 100,
//     1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
//     11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
//     21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
//     31, 32, 33, 34, 35, 36
//   ];
  

// let nbr = Array.from({length:100},(_, i) => i+1)

// var sumr = 0;


// for (let i of nbr) {
//   if (nbr[i] %2===0) {
//     sumr+=nbr[i]
//   }
  
// }

// console.log(`The sum of even numbers between 1 and 50 is ${sumr}.`);





// function eveOrOdd(numb) {
//     if (numb %2 ===0) {
//         console.log("even")
//     }else
//     {
//         console.log("Odd😪")

//     }
// }

// eveOrOdd(1);
// eveOrOdd(2);








var numbers = [19, 65, 1, 2, 6, 1, 9, 9, 2, 1]; 

var sum = 0;


// for(let i =0;i<length;i++)
// Using the for… of loop

for ( var i in numbers) {

    sum += i;

}

console.log(sum)





                

// var numbers = [19, 65, 1, 2, 6, 1, 9, 9, 2, 1]; 

// var sum = 0;

// for ( var i in numbers ) {

//         if ( i % 2 == 0 ) continue;

//         sum += numbers[i]

// }



// console.log(sum);






// var numbers = [19, 65, 1, 2, 6, 1, 9, 9, 2, 1];

// var sum = 0;



// for ( var i in numbers) {

// 	sum += numbers[i];

// 	if ( sum >= 100 ) {

//             break;

//         }

//     }

// console.log(sum)



// var storage = [ 1, 'Monday',["issam", 123, "male", false], null ];

// console.log(storage[2][1]); 

// console.log(storage.length); 


// var days=['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];


// console.log(days); 

// // days.push('saturday')
// // days.push('sunday')
// // days.unshift("tnin")

// days.shift();
// console.log(days); 





// let Person = {
//   fullName :"ISSAM EL JAOUHARI",
//   gender:"Male",
//   role:"Developer",
//   age:23,
//   exp:["1yr","2yrs", 12, true],
//   alive:true,
//   greet: function() {

//     return `Hi, my name is ${this.fullName}!`;

// },

// }

// console.log(Person)


// delete Person.exp


// Person.age=30;
// Person["role"]="Designer"


// Person.isMarried=false;
// Person["tarwa"]=10000

// Person.location = function () {
//   return `Gimli attacks with an ${this.fullName}.`;
// }

// console.log(Person)


// console.log(typeof(Person))

// console.log(Person["role"])
// console.log(Person.role)
// console.log(Person.greet())
// console.log(Person.exp[3])




