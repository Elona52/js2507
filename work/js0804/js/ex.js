let myname = "이지민 고객님";
let hi = "안녕하십니까";

//1. concat : "***고객님 안녕하십니까"
let result1 = myname.concat(hi)
document.writeln(result1)

//2.join : "*_*_*_고객님 안녕하십니까"
let result2 = result1.split('').join('_');  
document.writeln(result2);

//3.push : "*_*_*_고객님 안녕하십니까!"
let result3 = result1.push("!")
document.writeln(result3)

//4.unshift : "수원역지점 *_*_*_고객님 안녕하십니까!"
let result4 = result1.unshift("수원역지점")
document.writeln(result4)

//5.pop : "수원역지점 *_*_*_고객님 안녕하십니까"
let result5 = result1.pop()
document.writeln(result1)

//6.shift : "*_*_*_고객님 안녕하십니까!"
let result6 = result1.shift()
document.writeln(result1)

//7.splice : "*_*_*_고객님 오늘도 좋은하루 안녕하십니까!"
let result7 = result1.splice(4,0, "오늘도 좋은하루")
document.writeln(result1)

//8.slice : "*_*_*_"
let result8 = result1.slice(0,3)
document.writeln(result8)
