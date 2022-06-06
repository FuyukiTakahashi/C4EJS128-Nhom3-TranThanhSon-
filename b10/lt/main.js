function getInput(question = "Enter your number: ") {
    let inputStr = prompt(question);
    return inputStr;
}
function convertStr2Num(str) {
    const num = Number(str);
    if (isNaN(num)) {
        return 0
    } return num;
}
function checkEven(){
    const input = getInput();
    const myNum = convertStr2Num(input);
    if (myNum%2 == 0){
        return true
    }   return false;
}

function checkPrime() {
    const input = getInput();
    const myNum = convertStr2Num(input);

    let isPrime = true;
    for (let i = 2; i < myNum; i++){
        if (myNum%i == 0){
            return false
        }
    }
    return true
    
}
function loopCheckPrime(){
    while (true){
        //check Prime
        const isPrime = checkPrime();
        if (isPrime) {
            alert("So nguyen to! ");
        }   alert("Khong phai so nt")
        let answer = getInput("Do u want to continue? (Y or N) ");
        //check continue
        if (answer.trim().toLowerCase() == "n") {
            break;
        }
    }
    alert("byeeee");
}
loopCheckPrime();