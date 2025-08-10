function sum() {
    let n = 10;
    let result = 0;

    for (let i = 1; i <= n; i++) {
        result += i;
    }
    document.getElementById("output").innerHTML += `<p>함수 내부 결과: ${result}</p>`;
}

sum();
document.getElementById("output").innerHTML += `<p>전역 변수 result: ${typeof result !== 'undefined' ? result : '정의되지 않음'}</p>`;