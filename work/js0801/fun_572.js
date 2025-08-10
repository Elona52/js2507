function multiple(a,b,c) {
    return a * b * c;
}

let result = multiple(5,10,20);
document.getElementById("output").innerHTML += `<p>결과: ${result}</p>`;