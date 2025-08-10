let usernumber = parseInt(prompt("숫자를 입력하세요"))

document.getElementById("output").innerHTML += "<p>입력한 숫자: " + usernumber + "</p>"

if(usernumber === ""){
    document.getElementById("output").innerHTML += "<p>결과: 공백이 입력되었습니다.</p>"
}else if (usernumber !== null) {
    //삼항연산자___조건__?__참__:__거짓__
    let result = parseInt((usernumber) % 3 === 0) ? '3의 배수입니다' : '3의 배수가 아닙니다.'
    document.getElementById("output").innerHTML += "<p>결과: " + result + "</p>"
    
    // if(parseInt((usernumber) % 3 )){
    //  참
    // }else{
    //  거짓
    //  alert("3의 배수가 아닙니다")
    //  }
    
} else {
    //프롬프트 입력취소 일때만 실행됨
    document.getElementById("output").innerHTML += "<p>결과: 입력이 취소됐습니다.</p>"
}

