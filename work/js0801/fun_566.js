function doIt() {
    //let은 재선언이 안되므로 다른 값을 지정해주어야함
    let x = 1;
    document.getElementById("output").innerHTML += `<p>x: ${x}</p>`;
    let x2 = 2;
    document.getElementById("output").innerHTML += `<p>x2: ${x2}</p>`;
}

doIt();