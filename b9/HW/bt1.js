function checkAge(age){
    return age > 18 ? true : confirm ('Ur parrent behind u? ');
}
console.log(checkAge(prompt('How old are you? ')));