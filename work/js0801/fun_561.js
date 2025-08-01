//Define -----------------------------
//전역 정의
var sum = 0
//함수 정의
function addNumber() {
    sum = 10 + 20
    result1 = 10 + 20
    let result2 = 10 + 20
    var result3 = 10 + 20
}

//구현 --------------------------------
//함수 사용
addNumber()

//출력
console.log(`전역변수: ${sum}`)
console.log(`Automatically변수: ${result1}`)
console.log(`지역변수: ${result2}`)
console.log(`지역변수: ${result3}`)

