let stars = parseInt(prompt("별을 몇 개 표시할까요?"))

//while() 조건에 맞는동안 수행
while (stars > 0){
    document.writeln("*");
    stars--;
}

//do~ 일단 실행해라.....while() 그다음에 조건을에 맞는동안 수행
let starts2 = 3
do{
    document.writeln("$")
    starts2--
}while(starts2 > 0)