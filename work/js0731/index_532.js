let numberOne = parseInt(prompt("50미만인 숫자를 입력하세요."))
let numberTwo = parseInt(prompt("50미만인 숫자를 입력하세요."))

document.getElementById("output").innerHTML += "<p>첫 번째 숫자: " + numberOne + "</p>"
document.getElementById("output").innerHTML += "<p>두 번째 숫자: " + numberTwo + "</p>"

if(numberOne < 50 && numberTwo < 50) {
    document.getElementById("output").innerHTML += "<p>결과: 숫자2개 모두 50 미만이다.</p>"
} else {
    document.getElementById("output").innerHTML += "<p>결과: 조건에 맞지 않는 숫자가 있다.</p>"
}

//예외처리2 둘중에 하나만 숫자가 아니어도 연산하지 않음.
// if(isNaN(numberone) || isNaN(numbertwo)) {
//    alert("숫자가 아닌값을 비교할 수 없습니다.");
//}else{
//    if(numberOne < 50 && numberTwo < 50)
//    alert("2개 숫자 모두 50미만.");
//  else
//      alert("조건에 맞지 않는 숫자")
//}

//예외처리3 둘 중에 하나만 숫자가 아니어도 연산하지 않음.
// if(isNaN(numberone) && ! isNaN(numbertwo)){ 
//    if(numberOne < 50 && numberTwo < 50){
//    alert("2개 숫자 모두 50미만");
//  }else{
//      alert("조건에 맞지 않는 숫자");
//  }  
//}