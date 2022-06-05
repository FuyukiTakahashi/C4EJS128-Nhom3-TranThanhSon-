let a = Number(prompt("Enter your first num "));
let b = Number(prompt("Enter your 2nd num "));
let operator = prompt("Choose ur operator +,-,*,/ : ");

switch(operator){
    case '+' :
        alert (`${a} ${operator} ${b} = ${a+b}`);
        break;
    case '-' :
        alert (`${a} ${operator} ${b} = ${a-b}`);
        break;
    case '*' :
        alert (`${a} ${operator} ${b} = ${a*b}`);
        break;
    case '/' :
        alert (`${a} ${operator} ${b} = ${a/b}`);
        break;
    default: alert('wrong operator!');
}
//bài 2
const a = parseInt(prompt("Enter a positive number:"));
let isPrime = true;

for (let i = 2; i < a ; i++){
    if (a%i === 0 ){
        isPrime=false;
        break
    }
}

if (isPrime){
    alert('Ur num is prime number! ')
}else{ alert('Ur num is not Prime num and have uoc chung la : '+ i)}
//bài 3

let day = parseInt(prompt("Nhập ngày"));
let month = parseInt(prompt("Nhập tháng"));
let year = parseInt(prompt("Nhập năm"));
let arr1 = [1,3,5,7,8,10,12];
if (day < 0 || day > 31) {
    console.log("Ngày này không tồn tại"); }
else if (month > 12 || month < 0) {
    console.log("Ngày này không tồn tại");
} else if((year % 4===0 &&year%100 !==0 && year % 400 !==0)||(year%100===0 && year % 400===0)){
    if (month == 2) {
        if (day > 29) {
            console.log('Ngày này không tồn tại')
        }
        else if(day == 29) {
            console.log(` Ngày ${day} Tháng ${month} Năm ${year}`);
            console.log(`Ngày tiếp theo là: \n Ngày 1 Tháng 3 Năm ${year}`)
        } else if (day >0 || day <= 28) {
            console.log(`Ngày ${day} Tháng ${month} Năm ${year}`);
            console.log(`Ngày tiếp theo là: \n Ngày ${day+1} Tháng ${month} Năm ${year}`)
        }
    } else if (arr1.includes(month)) {
        if (day == 31) {
           if(month == 12) {
               console.log(` Ngày ${day} Tháng ${month} Năm ${year}`);
               console.log(`Ngày tiếp theo là : \n Ngày 1 Tháng 1 Năm ${year + 1}`);
           } else {
               console.log(` Ngày ${day} Tháng ${month} Năm ${year}`);
               console.log(` Ngày tiếp theo là: \n Ngày 1 Tháng ${month + 1} Năm ${year}`);
           }
        } else {
            console.log(` Ngày ${day} Tháng ${month} Năm ${year}`);
            console.log(`Ngày tiếp theo là: Ngày ${day+1} Tháng ${month} Năm ${year}`)
        }
    }
} else {
    if (month == 2) {
        if (day > 28) {
            console.log('Ngày này không tồn tại')
        }
        else if(day == 28) {
            console.log(` Ngày ${day} Tháng ${month} Năm ${year}`);
            console.log(`Ngày tiếp theo là: \n Ngày 1 Tháng 3 Năm ${year}`)
        } else if (day >0 || day < 28) {
            console.log(`Ngày ${day} Tháng ${month} Năm ${year}`);
            console.log(`Ngày tiếp theo là: \n Ngày ${day+1} Tháng ${month} Năm ${year}`)
        }
    } else if (arr1.includes(month)) {
        if (day == 31) {
           if(month == 12) {
               console.log(` Ngày ${day} Tháng ${month} Năm ${year}`);
               console.log(`Ngày tiếp theo là : \n Ngày 1 Tháng 1 Năm ${year + 1}`);
           } else {
               console.log(` Ngày ${day} Tháng ${month} Năm ${year}`);
               console.log(` Ngày tiếp theo là: \n Ngày 1 Tháng ${month + 1} Năm ${year}`);
           }
        } else {
            console.log(` Ngày ${day} Tháng ${month} Năm ${year}`);
            console.log(`Ngày tiếp theo là: Ngày ${day+1} Tháng ${month} Năm ${year}`)
        }
    }
};

