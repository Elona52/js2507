// page591
// let now = new Date();
// document.writeln("현재 시각은" + now) ;

// page592
// let now = new Date()
// document.writeln(`현재 시각은 ${now.toLocaleString()}`);

// page593
// let arr1 = new Array();
// let arr2 = new Array(4);

// page593-2
// let arr3 = ["one", "two", "three", "four"]
// let arr4 = Array("one", "two", "three", "four")

// page594
let numbers = ["one", "two", "three", "four", "five", "six"];

// for(초기값; 최종값_비교; 증가)
// 배열의 길이는 6(numbers.length = 6)이며, 
// 인덱스는 0부터 시작하므로 i가 0부터 5까지인 동안 반복이 이루어집니다.
for(let i = 0; i < numbers.length; i++){
    document.writeln(`<p>${numbers[i]}</p>`)
}