//함수 표현식 : 함수가 변수에 할당됨
numbering = function () {
    let i = 0;
    while (i < 10) {
        document.writeln(i);
        i += 1;
    }
};
numbering(); // 함수 호출

//함수 선언 : 함수 이름으로 선언됨
function numbering() {
    let i = 0;
    while (i < 10) {
        document.writeln(i);
        i += 1;
    }
};
numbering(); // 함수 호출