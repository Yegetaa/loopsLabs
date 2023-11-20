/*Loop through all numbers from 1 to 100.
If a number is divisible by 3, log “Fizz.”
If a number is divisible by 5, log “Buzz.”
If a number is divisible by both 3 and 5, log “Fizz Buzz.”
If a number is not divisible by either 3 or 5, log the number.*/

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("Fizz Buzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

/*Write a script that accomplishes the following:
Declare an arbitrary number, n.
Create a loop that searches for the next prime number, starting at n and incrementing from there.
As soon as you find the prime number, log that number and exit the loop.*/

// let n = 6
// for (let i = 2; i < n; i++){
//     if (n % i === 0 ) {
//     break;
//     } else
//     console.log(n);
// }

//^^ figure out why that is not working as intended. what is happening is that it is checking whether n is prime 
// logging it multiple times, I think 

for(let n = 5; n <= 10; n++){
    let isprime = true; //a flag to see if the number is going to be a prime number

    for (let i = 2; i < n; i++) {
        if (n % i === 0)
        isprime = false; //not a prime number 
        break;
    }
    if (isprime)
    console.log(`${n} is a prime number.`) 
}

// question 3
// loop over CSV string
// store each cell in the variable 
// if ",", move to the next cell 
//if "\n", move to the next row

let csvData = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor\'s Assistant,26"

let cell1 =""
let cell2 = ""
let cell3 = ""
let cell4 = ""
let currentCell = 1

for (let i = 0; i < csvData.length; i++) {
    if (csvData[i] === ",") {
        currentCell++ 
    } else if (csvData[i] === "\n") {
        console.log(cell1,cell2,cell3,cell4);
        cell1 = cell2 = cell3 = cell4 = ""
        currentCell = 1
    } else {
        if (currentCell === 1) {
            cell1 += csvData[i]
        } else if (currentCell === 2) {
            cell2 += csvData[i]
        } else if (currentCell === 3) {
            cell3 += csvData[i]
        } else if (currentCell === 4) {
            cell4 += csvData[i]
        } 
    }
}