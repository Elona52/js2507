var seed = 3

for (let i = 1; i <= 5; i++) {
    //전역변수를 재선언
    // var seed = 5
    // var result = seed * i
    let seed = 5
    let result = seed * 1
    document.getElementById("output").innerHTML += `<p>반복 ${i}: ${result}</p>`
}
document.getElementById("output").innerHTML += `<p>최종 결과: ${seed}</p>`
//{}지역변수로 선언되어서 오류남
