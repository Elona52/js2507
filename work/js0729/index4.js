// =대입연산자의 응용버전
let num = 5
let result = 1
let result2 = 1

// +=
document.getElementById("output").innerHTML += "<p>result = result + num: " + (result = result + num) + "</p>"
document.getElementById("output").innerHTML += "<p>result2 += num: " + (result2 += num) + "</p>"

// -=
//두번설정할 수 없기 때문에 초기화해줘야함
result = 6
result2 = 6
document.getElementById("output").innerHTML += "<p>result = result - num: " + (result = result - num) + "</p>"
document.getElementById("output").innerHTML += "<p>result2 -= num: " + (result2 -= num) + "</p>"

// *=
result = 3
result2 = 3
document.getElementById("output").innerHTML += "<p>result = result * num: " + (result = result * num) + "</p>"
document.getElementById("output").innerHTML += "<p>result2 *= num: " + (result2 *= num) + "</p>"

// /=
result = 20
result2 = 20
document.getElementById("output").innerHTML += "<p>result = result / num: " + (result = result / num) + "</p>"
document.getElementById("output").innerHTML += "<p>result2 /= num: " + (result2 /= num) + "</p>"

// %=
result = 12
result2 = 12
document.getElementById("output").innerHTML += "<p>result = result % num: " + (result = result % num) + "</p>"
document.getElementById("output").innerHTML += "<p>result2 %= num: " + (result2 %= num) + "</p>"