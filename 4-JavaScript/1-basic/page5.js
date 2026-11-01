
/*
    isNaN() - it use to check given value is number or not
        -> for string value it return true.
        -> for number value it return false.

    = for assignment
    == for compare the value
    === for value and data type compare
*/

let input = 234568;
let myStatus = isNaN(input);

if (myStatus == true){
    console.log(input, " is String Value");
} else {
    console.log(input, " is number value");
    if (input %2 ==0){
        console.log(input, " is even number");
    } else {
        console.log(input, " is odd number");
    }
}

// if - use to check range condition and exact condition
// Switch case use to check only exact condition