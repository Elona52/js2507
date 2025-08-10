let usernumber = prompt("숫자를 입력하세요")

document.getElementById("output").innerHTML += "<p>입력한 숫자: " + usernumber + "</p>"

if(usernumber > 0) {
    //삼항연산자 
    let result = parseInt(usernumber) % 3 === 0 ? "3의 배수" : "3의배수 아님"
    document.getElementById("output").innerHTML += "<p>결과: " + result + "</p>"
} else {
    document.getElementById("output").innerHTML += "<p>결과: 입력취소</p>"
}

//let usernumber = parseInt(prompt("숫자를 입력하세요"))

//if(usenember ! = null)
//      //삼함현산자
//      username %3 === 0 ? alert("3의 배수") : alert("3의 배수아님")
//      else
//      alert("입력취소")

