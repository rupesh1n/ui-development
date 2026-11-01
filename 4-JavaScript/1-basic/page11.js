
let booklist = ['html', 'css', 'js', 'PHP', 'Python','nodejs'];

//what are listing function
console.log("The map() ");
booklist.map(bookName =>{ 
    console.log(bookName);
});

console.log("\n\n The forEach() ");

booklist.forEach(bookName =>{
    console.log(bookName);
});

console.log("\n\n The filter() ");
booklist.filter(bookName =>{
    console.log(bookName);
});

console.log("\n\n map with index\n ");
booklist.map(function(bookName, index){
    console.log(index, "#", bookName);
});