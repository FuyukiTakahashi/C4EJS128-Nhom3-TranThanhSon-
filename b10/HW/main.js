// let person = {
//     name:       'bob',
//     occupation: 'web developer',
//     hobbies:    'painting',
//   };

// console.table(person);
// console.log(person.name);
// console.log(person.occupation);
// console.log(person.hobbies);

// let obj = {
//     b: 2,
//     a: 1,
//     c: 3,
//   };

//   function toUppersKeys(obj) {
//     const entries = Object.entries(obj);
//     return Object.fromEntries(
//       entries.map(([key, value]) => {
//         return [key.toUpperCase(), value];
//       }),
//     );
//   }
//   function toLowerkeys(obj){
//       const z = Object.entries(obj);
//       return Object.fromEntries(
//           z.map(
//               ([key, value]) => {return [key.toLowerCase(), value];}
//           )
//       );

//   }
//   console.log(toUppersKeys(obj));
//   console.log(toLowerkeys(obj));
let obj = {
    foo: { a: "hello", b: "world" },
    bar: ["example", "mem", null, { xyz: 6 }, 88],
    qux: [4, 8, 12]
}
const bar =  ["example", "mem", null, { xyz: 606 }, 88];

delete obj.bar;

obj.bar = {
    ...bar
}
console.log(obj);
