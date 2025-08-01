//정의
//addNumber(변수,변수)
function addNumber(num1, num2) {
    let sum = num1 + num2;
    return sum;
}

//구현
//addNumber(값,값)
//result : 함수에서 return된 값을 받는다.
let result1 = addNumber(2, 3);
let result2 = addNumber(3, 4);
let result3 = addNumber(7, 8);

//출력
document.writeln(`두 수를 더한 값 : ${result1}`);
console.log(`두 수를 더한 값 : ${result2}`);