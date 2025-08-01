var seed = 3

for (let i = 1; i <= 5; i++) {
    //전역변수를 재선언
    // var seed = 5
    // var result = seed * i
    let seed = 5
    let result = seed * 1
    console.log(result)
}
console.log(`결과 : ${seed}`)
//{}지역변수로 선언되어서 오류남
