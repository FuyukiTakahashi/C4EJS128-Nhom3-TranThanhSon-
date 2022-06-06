let changeColor = () =>{
    let body = document.querySelector("body");
    let c1 = Math.random()*256;
    let c2 = Math.random()*256;
    let c3 = Math.random()*256;
    body.style.backgroundColor = `rgb(${c1},${c2},${c3})`;
}