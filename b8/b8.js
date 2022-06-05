let input= Number(prompt("input: "))

console.log("________________for_____________");

for (let i = 0; i < input; i++){
    console.log(`Vi tri thu: ${ i+1 }`);
}

console.log("________________while_____________");
let i=0;
while (i<input) {
    console.log(`Vi tri thu: ${ i+1 }`);
    i++;
}
console.log(i);

console.log("________________Do while_____________");

i=0;
do{
    console.log(`Vi tri thu: ${ i+1 }`.toUpperCase());
    i++;
}while(i < input);
