let menu = [
    "item1",
    "item2",
    "item3",
    "item4",
    "item5",
    "item6",
];

let champ = ["concu","conchim"];


//Crud
// Creat read update delete
//for (let i = 0 ; i < menu.length; i++) {
// console.log(menu[i]);
//}
// console.log(menu);
// menu.splice(0,1);
// console.log(menu);
let newarr = menu.join("|");
menu[menu.length]=" ";

console.log(newarr);
