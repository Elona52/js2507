function myHi(user) {
    let name = user
    return name
}
let result = myHi("이00")
document.getElementById("output").innerHTML += `<p>결과1: ${result}</p>`;
let result2 = myHi("김00")
document.getElementById("output").innerHTML += `<p>결과2: ${result2}</p>`;
