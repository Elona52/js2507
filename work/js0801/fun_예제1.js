//함수는 정의만 하는 구간
function myfunction(p1, p2) {
    return p1 * p2;
}

//함수 실행 구간
let result = myfunction(4,3);
document.getElementById("output").innerHTML += `<p>결과는 : ${result}</p>`;