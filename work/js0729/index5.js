// page528_3의배수
//선언부
let usernumber = parseInt(prompt("숫자를 입력하세요"))
let result = 0

//구현부
if(usernumber % 3 === 0)
    result = "3의 배수입니다"
else 
    result = "3의 배수가 아닙니다"

//출력부
document.getElementById("output").innerHTML += "<p>입력한 숫자: " + usernumber + "</p>"
document.getElementById("output").innerHTML += "<p>결과: " + result + "</p>"
