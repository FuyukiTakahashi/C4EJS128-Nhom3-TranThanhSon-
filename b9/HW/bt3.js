let username = prompt("Nhập tk: ");
if (username== "Admin"){
    let pw = prompt ("Nhập pass: ");
    pw == "mindX" ? alert('chao mung ban! ') : alert('Sai mat khau! ')
}
else if ( username == " " || username == " Esc"){
    alert("Canceled");
}else{
    alert('Toi khong biet ban');
}