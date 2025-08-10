let numberOne = parseInt(prompt("50미만인 숫자를 입력하세요."))

let numberTwo = parseInt(prompt("50미만인 숫자를 입력하세요."))

document.getElementById("output").innerHTML += "<p>첫 번째 숫자: " + numberOne + "</p>"
document.getElementById("output").innerHTML += "<p>두 번째 숫자: " + numberTwo + "</p>"

//비교연산자 || = OR연산자 (왼쪽이 참이거나 오른쪽이 참이면 둘중 하나의 값을 갖게됨)
if(numberOne < 50 || numberTwo < 10 ) {
    document.getElementById("output").innerHTML += "<p>결과: 숫자 2개중에서 최소한 하나는 10보다 작다.</p>"
} else {
    document.getElementById("output").innerHTML += "<p>결과: 숫자 둘다 10보다 크다.</p>"
}

//---------------
let mynumber = "test"
document.getElementById("output").innerHTML += "<p>테스트 값: " + mynumber + "</p>"

// Not a Number : 숫자가 아님
// is Not a Number : 숫자가 아니다
// isNaN(MyNumber) : myNumber 숫자가 아니다
// ! : 반대로 뒤집기 : 숫자가 아닌걸 반대로 뒤집기 -> 숫자인걸로 됨.
if(!isNaN(mynumber)) {
    document.getElementById("output").innerHTML += "<p>결과: 유효한 숫자입니다.</p>"
} else {
    document.getElementById("output").innerHTML += "<p>결과: 숫자가 아닙니다.</p>"
}

//---------------
if(isNaN(mynumber)) {
    document.getElementById("output").innerHTML += "<p>결과: 숫자가 아닙니다.</p>"
} else {
    document.getElementById("output").innerHTML += "<p>결과: 유효한 숫자입니다.</p>"
}