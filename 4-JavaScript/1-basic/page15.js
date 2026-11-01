
let user = {fullname:"Alex", mobile:8989898787, city:"Banglore", edu:"MCA"};

console.log("============================================");
console.log(user.fullname);
console.log(user.mobile);
console.log(user.city);
console.log(user.edu);
console.log("============================================");

let userlist = [
    {fullname:"Mahesh", mobile:8989898787, city:"Banglore", edu:"CA"},
    {fullname:"Suresh", mobile:2348987, city:"Patna", edu:"MCA"},
    {fullname:"Rakesh", mobile:9089898723, city:"Kolkata", edu:"B.Tech"},
    {fullname:"Pradeep", mobile:789898123, city:"Hydrabad", edu:"M.Tech"},
    {fullname:"Ali", mobile:61452780, city:"Patna", edu:"BCA"}
]

userlist.map((oneuser, index) =>{
    console.log(index, "###", oneuser.fullname, oneuser.mobile, oneuser.city, oneuser.edu);
    console.log("------------------------------------------");
});