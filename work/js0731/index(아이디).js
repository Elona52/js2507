id = prompt('아이디를 입력해주세요.') // 사용자에게 입력을 받고
// id 변수에 사용자 입력값 저장
let username = id;

document.getElementById("output").innerHTML += "<p>입력한 아이디: " + id + "</p>"

// 저장된 값으로 비교
if(id == 'jimin'){          
    document.getElementById("output").innerHTML += "<p>결과: 아이디가 일치 합니다.</p>"
} else {
    document.getElementById("output").innerHTML += "<p>결과: 아이디가 일치하지 않습니다.</p>"
}