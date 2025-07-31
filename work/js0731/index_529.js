//p.529
let usernumber = prompt("숫자를 입력하세요.")

//if(조건)
//else if(또 다른 조건)
//else (그외의 값)
if(usernumber === ""){
    alert("데이터를 입력하지 않았습니다.")
}else if(usernumber !== null){
    if(parseInt(usernumber) % 3 === 0) {
        alert('3의 배수입니다.')
    } else {
        alert('3의 배수가 아닙니다.')
    }
}else{
    //esc키로 취소할때만 동작한다.
    alert('입력이 취소됐습니다.');
}