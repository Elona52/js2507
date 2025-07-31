let usernumber = parseInt(prompt("숫자를 입력하세요"))

if(usernumber === ""){
    alert("공백이 입력되었습니다.")
}else if (usernumber !== null)
    //삼항연산자___조건__?__참__:__거짓__
    parseInt((usernumber) % 3 === 0) ? alert('3의 배수입니다') : alert('3의 배수가 아닙니다.');
    
    // if(parseInt((usernumber) % 3 )){
    //  참
    // }else{
    //  거짓
    //  alert("3의 배수가 아닙니다")
    //  }
    
else{
    //프롬프트 입력취소 일때만 실행됨
    alert('입력이 취소됐습니다.'); 
}

