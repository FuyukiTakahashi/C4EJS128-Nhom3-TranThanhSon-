//Crate
let giohang = [
    "bia",
    "rau",
    "thit",
    "nuoc",
    "quanao"
];
//Read
console.log(giohang);
console.table(giohang);
//Update
giohang.push("cafe");
console.table(giohang);
//Delete
delete giohang[0];
console.table(giohang);