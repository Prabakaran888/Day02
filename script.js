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

/* // function to calculate area of the circle
const radius = [1, 2, 3];
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






