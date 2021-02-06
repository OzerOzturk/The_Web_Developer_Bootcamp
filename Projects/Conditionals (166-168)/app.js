

/* let random = Math.random();
if (random<0.5) {
    console.log("your number is less than 0.5!")
} else {
    console.log("your number is greater (or equal) than 0.5!")
}
console.log(random) */

/* 
const dayOfWeek = prompt("ENTER A DAY").toLowerCase();

if(dayOfWeek === "monday") {
    console.log("uppsss")
}
else if (dayOfWeek === "saturday") {
    console.log("I love saturdays!")
} 
else if (dayOfWeek === "friday") {
    console.log("Fridays are really cool")
} else {
    console.log("MEH")
} 



 /* 0-5 - FREE
 5 - 10 CHILD $10
 10 - 65 ADULT $20
 65+ SENIOR $10 */



 const age = 16;

 if ( (age >=0 && age<5 ) || age>= 65 ) {
     console.log("free")
 }  
//  if 1st case is not correct, then its time to go 2nd case //
 else if (age >=5 && age<10 ) {   
    console.log("$10")
 } else if (age >=10 && age<65 ) {
    console.log("$20")
 } else {
     console.log("INVALID AGE!")
 }
 
 
