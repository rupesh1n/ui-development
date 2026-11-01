/*
    let a = "HTML"
    let b = "CSS"
    let c = "JS"
    let d = "React"
    let e = "Node.js"
*/
let booklist = ['html', 'css', 'js', 'PHP', 'Python'];
let citylist = new Array('banglore', 'delhi', 'chennai', 'pune');

console.log(booklist.length);
console.log(citylist.length);

/*
    structure of array?
        arrayName[index] => element
    As
        booklist[0]=>html
        booklist[1]=>css
        booklist[2]=>js
        booklist[3]=>PHP
        booklist[4]=>Python
*/
console.log(booklist[0]);
console.log(booklist[4]); // hardcoded
console.log(booklist[booklist.length -1]); // softcode

//how to print all elements of array
console.log("--------- All Elements --------");
for(let i = 0; i < booklist.length; i++ ){
    console.log(booklist[i]);
}

console.log("--------- All Elements using While --------");


let i = 0;
while(i < booklist.length){
    console.log(booklist[i]);
    i++;
}

console.log(i);