// if(조건문)
let myDate = new Date()
let myhour = myDate.getHours()
// class를 만들 수 있는 객체, object를 만들 수 있는 class - class를 만들때 대문자를 씀.
let greeting = ""
// 가데이터 : 가상의 가짜값으로 테스트를 해보세요
let timeAM = 9
let timePM = 18
// 가데이터로 테스트
myhour = 7

document.getElementById("output").innerHTML += "<p>현재 날짜: " + myDate + "</p>"
document.getElementById("output").innerHTML += "<p>현재 시간: " + myhour + "시</p>"

if(myhour < timeAM){
    greeting = "등원"
//else if(또다른 조건문)
}else if(myhour > timePM)
    greeting = "굿귀가"
//else(조건에 해당되지 않으면 )
else{
    greeting = "열공\n화이팅"
}
document.getElementById("output").innerHTML += "<p>인사말: " + greeting + "</p>"




