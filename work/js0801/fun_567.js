const user = "Lee";
document.getElementById("output").innerHTML += `<p>My name is ${user}</p>`;

//user 앞에 const 예약어를 붙여서 변수를 재선언 하려 했으나 
// 이미 user 변수가 선언되어서 재선언을 할 수 없음.
const user1 = "Kim";
document.getElementById("output").innerHTML += `<p>My name is ${user}</p>`;