//1 - f의 화씨 온도 값이 함수의 매개변수로 전달됨
//function toCelisure(f) {
//    return(5/9) * (f-32); // 함수의 로직:섭씨 값 계산
//}

//let value = toCelisure(77); // 함수호출
//document.writeln(value);

//2 - 매개변수로 전달X, undefined로 설정되므로 값이 NaN이 됨
//function toCelisure(f) {
//    return(5/9) * (f-32);
//}

//let value = toCelisure();
//document.writeln(value);

//3 - 함수를 호출하지 않고 함수 자체를 변수 value에 저장했기 때문에 실행안됨
function toCelisure(f) {
    return(5/9) * (f-32);
}

let value = toCelisure;
document.writeln(value);