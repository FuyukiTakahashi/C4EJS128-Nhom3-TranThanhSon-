let menu = [
    "capuchino",
    "bac xiu",
    "american",
    "black",
    "Nau khoi",
    "Ca phe trung",
];

//CRUD
//Crate
let info = {
    height: "1.78m",
    weight: "80kg",
    dob: 1997,
    myWord: "abc",
    job: "dev"
}
console.table(info);

//CRUD
//Read
console.log(info.height);
console.log(info["height"]);
console.log(info.dob);
//Update
//change-
info.height = "178cm";
//Delete
//add field
info.newField = "lai la chao day";
delete info.myWord;
console.table(info);

const body = document.body;

body.style["backgroundImage"]= "linear-gradient(purple, pink";