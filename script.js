//                 Javascript Practice:
//----------------------------------------------------------------
//else if ladder

/* let mark = 32;
    if( mark>=41 && mark<=60 ){
        console.log( "E-Grade" );
    }
    else if( mark>=61 && mark<=80 ){
        console.log( "C-Grade" );
    }
    else if( mark>=81 && mark<=90 ){
        console.log( "A-Grade" );
    }
    else if( mark>=91 && mark<=100 ){
        console.log( "S-Grade" );
    }
    else{
        console.log( "Arrear" );
    }
 */
//----------------------------------------------------------------
//Switch Statement

/* let trafficLight = "over speed";

switch( trafficLight ){
    case "red" : console.log( "Stop" );
    break;
    case "yellow" : console.log( "Slow Down" );
    break;
    case "green" : console.log( "Go" );
    break
    default : console.log( "Pay Fine" );
    break;
} */
//----------------------------------------------------------------
//Nested If:


/* let age = 25
let height = 160
let weight = 60;

if(  age>=18 ){

    if(height>=150){

        if( weight>=45 ){
            console.log( "You are Selected" );
        }
        else{
            console.log( "Weight is not Matched" );
        }

    }
    else{
        console.log( "Height is not matched" );
    }

}
else{
    console.log( "Age is not valid" );
} */

//----------------------------------------------------------------
//for loop

/* for( let i=1: i,=10; i++){
    if( i%2 === 0 ) console.log(i);
    
} */

//----------------------------------------------------------------
//while loop:

/* let num=1234;
let sum=0; 
while( num>0){
    let last = num%10
    num= parseInt( num/10)
    sum= sum + last
}
console.log(sum); */

//----------------------------------------------------------------
//do while

/* for( let i=1; i<=20;i++ ){
    if( i%2 == 0 ){
        if( i == 10){
            break;
        }
        console.log(i);
        
    }
} */

//----------------------------------------------------------------
//function:

/* function user(uName,uAge) {
    if( uAge<=18){
        console.log(`Hi ${uName}, your age is ${uAge}`);
    }
}
user("praba",15) */

//----------------------------------------------------------------
//arrrow function:

/* let usrName = (a,b) => console.log(a+b);
usrName(2,3)

let firstName = "praba"
let userName = fname => fname
let finalOutput = userName(firstName)
console.log(finalOutput); */

//----------------------------------------------------------------
//HOF & CallbackFunction::

/* function add(callback,a,b){
    console.log(a+b);
    callback(10,5)
}
function sub(c,d){
    console.log(c-d);
}
add(sub,2,4); */

//----------------------------------------------------------------
// function to calculate radius of the circle:
 
/*const radius = [1, 2, 3];
const calculateArea =  function (radius) {
    const output = [];
    for(let i = 0; i< radius.length; i++){
        output.push(Math.PI * radius[i] * radius[i]);
    }
    return output;
}
// function to calculate diameter of the circle
const calculateDiameter =  function (radius) {
    const output = [];
    for(let i = 0; i< radius.length; i++){
        output.push(2 * radius[i]);
    }
    return output;
}
console.log(calculateArea(radius));
console.log(calculateDiameter(radius)) */

//----------------------------------------------------------------
// function to calculate area of the circle:

/* const radius = [1, 2, 3];
const area = function(radius){
    return Math.PI * radius * radius;
}
const diameter = function(radius){
    return 2 * radius;
}
const calculate = function(radius, logic){ 
    const output = [];
    for(let i = 0; i < radius.length; i++){
        output.push(logic(radius[i]))
    }
    return output;
}
console.log(calculate(radius, area));
console.log(calculate(radius, diameter)); */

//----------------------------------------------------------------
//function to reverse an array:

/* let arr = [1,5,2,8,4,9,3]
arr.reverse()
console.log(arr); */
//----------------------------------------------------------------
//object:

/* let userProfile = {
    userName : "Kesavan",
    age : 30,
    hairColor : "black",
    eyeColor : "brown",
    eat : function(){
        console.log( "Im gonna eat ice cream" );
        return "Vanilla Ice Cream"
    }
}

console.log( userProfile.hairColor, userProfile.age );
console.log( userProfile.userName );
let iceCreamType = userProfile.eat();
console.log( iceCreamType ); */
//----------------------------------------------------------------
// for of loop:

/* let arr = [10,100,1000,10000]

for( let val of arr  ){
    console.log( val );
} */
//----------------------------------------------------------------
//for in loop:

/* let person1 = {
    uName : "Kesavan",
    hobbies : [ "Cricket", "Video Maker", "Editor" ],
    familyDetails : {
        totalMembers : 5,
        siblings : [ "a", "b", "c"  ]
    },
    walk(){
        console.log( "Im going to home" );
    }
}


for( let key in person1  ){
    console.log( person1[key] ); */
//----------------------------------------------------------------
//array methods:

/* let arr = [100,200,300,400]

let poppedVal = arr.pop()
console.log(poppedVal, arr );

arr.push( 500,550,600 )
console.log( arr );

let firstVal = arr.shift()
console.log( firstVal,  arr );

arr.unshift( -2,-1,0,10,20 )
console.log( arr )

let newArr = [10,20,30,40]
newArr.splice(1, 2, ("newVal", true, [11,12]),"secondVal")
newArr.splice( 0, 0, 100,200,300  )
newArr.splice( -1, 0, 500,600,700  )

console.log( newArr ); */
//----------------------------------------------------------------
//Concat method

/* let arr = [1,2,3,4];
let arr1 = [4,5,6,7];
let newArr = arr.concat(arr1);
let newArr1 = arr.concat(10,20,30)
let newArr2 = [].concat(arr);

arr[0] = 111;

console.log( newArr, newArr1, newArr2, arr ); */
//----------------------------------------------------------------
//Slice Method

/* let newArr = [10,2,3,4,5,6,7];
let slicedVal = newArr.slice();
newArr[0] = 101

let slicedVal1 = newArr.slice(1);
let slicedVal2 = newArr.slice(1, 4); //( start, end-1 ) ( 1, 4-1 )
let slicedVal3 = newArr.slice( 0,3); 
console.log( slicedVal, slicedVal1, slicedVal2, slicedVal3 );
 */
//----------------------------------------------------------------
//Flat method

/* let arr = [1,2,3,[4,[5,6,[40,50, [70,80] ]]]]
let newArr = arr.flat(2)
let newArr1 = arr.flat(Infinity)

console.log( arr, newArr, newArr1 );
console.log(  newArr1 ); */
//----------------------------------------------------------------
//Fill method

/* let arr = [10,20,30]

arr.fill( 101, 0, 2 )
arr.fill( 103, 2, 5 )

console.log( arr ); */
//----------------------------------------------------------------
//Sort in ASCCI Order:

/* let arr = [5,1,4,6,2,8,10,20,15,45,101,111,26,345, "&", " "]
arr.sort()
console.log( arr );

let arr1 = [10,20,30,40,50]
arr1.reverse()
console.log( arr1 );
console.log( arr1.includes( 11) ); */
//----------------------------------------------------------------
//Find index:

/* let arr = [10,20,30,20,40,50,10]

// let newIndex = arr.indexOf( 10, 2 )
// let newIndex = arr.indexOf( 20, -4 )
// let newIndex = arr.indexOf( 20,0)

// console.log( newIndex );

// let findIndexFromLast = arr.lastIndexOf(10)
// let findIndexFromLast = arr.lastIndexOf(20)
// let findIndexFromLast = arr.lastIndexOf(20,-5)
 let findIndexFromLast = arr.lastIndexOf(20,0)

console.log( findIndexFromLast ); */
//----------------------------------------------------------------
//ForEach VS Map:

/* let fruits = [ "Apple", "WaterMelon", "MuskMelon", "Banana" ]

// fruits.forEach( printFruit )
// function printFruit(currentElement, index, totalArray){
//     console.log( currentElement, index, totalArray );    
// }

fruits.map( function(currentEle, index, totalArr){
    console.log( currentEle, index, totalArr );
}  ) */
//----------------------------------------------------------------














