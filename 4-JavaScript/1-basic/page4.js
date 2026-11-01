
let a = 1000;
let b = 2000;

if(a>b){
    console.log(a, b, "The Higher Value is : ", a);
} else{
    console.log(a, b, "The Higher Value is : ", b);
}

console.log("-------------------------------------");

let c = 300;
if (a>b && a>c){
    console.log(a, b, c, "The Higher Value is : ", a);
} else if (b > a && b > c){
    console.log(a, b, c, "The Higher Value is : ", b);
} else {
    console.log(a, b, c, "The Higher Value is : ", c);
}

