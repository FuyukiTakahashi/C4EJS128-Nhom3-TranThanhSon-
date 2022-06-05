let num = 10;


for (let i = 1; i < 10; i++) {
    let str = " ";
    for (let j = 1; j < 10; j++) {
        str += `${i*j} | `;
    }
    console.log(str);
}