let id = prompt("아이디를 입력해주세요.")
let password = prompt("비밀번호를 입력해주세요.")

document.getElementById("output").innerHTML += "<p>입력한 아이디: " + id + "</p>"
document.getElementById("output").innerHTML += "<p>입력한 비밀번호: " + password + "</p>"

// if(조건){

// }else{

// }

if((id === "jimin" || id === "amy" || id === "john" ) && password=== '1111'){
    document.getElementById("output").innerHTML += "<p>결과: 로그인 하셨습니다. " + id + "님 반갑습니다.</p>"
} else {
    document.getElementById("output").innerHTML += "<p>결과: 아이디가 일치하지 않습니다.</p>"
}

