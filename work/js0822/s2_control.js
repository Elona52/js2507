// [ if ~ else 1 ]

let r3 = document.querySelector("#result3")
// var walkAmount = prompt("당신의 하루 걷는 양은 몇 보인가요?", "0")

let walkAmount = 800
if (walkAmount >= 10000) {
    //사용자의 긍정적인 응답만 반응
    r3.innerHTML = `결과1: 매우 좋은 습관이네요~ <hr>`

} else {
    //사용자의 모든 부정 답변 반응
    r3.innerHTML = `결과1: 걷는 습관은 건강에 좋아요. 추천! <hr>`
}

//----------------------------------------
// [ if ~ else 2 ]
let r3_2 = document.querySelector("#result3_2")

let walkAmount2 = 800
if (walkAmount2 >= 10000) {
    //사용자의 긍정적인 응답만 반응
    r3_2.innerHTML = `결과2: 하루에 만보이상 걸으시는 군요~ <hr>`
    //사용자의 긍정적인 응답2
} else if (walkAmount2 >= 8000 && walkAmount < 10000) {
    r3_2.innerHTML = `결과2: 8000이상인 당신, 하루 만보 걷기 습관을 추천~ <hr>`
    //사용자의 긍정적인 응답3
} else if (walkAmount2 >= 3000 && walkAmount < 10000) {
    r3_2.innerHTML = `결과2: 3000이상인 당신, 하루 만보 걷기 습관 추천~ <hr>`
    //사용자의 긍정적인 응답4
} else if (walkAmount2 >= 1000 && walkAmount < 10000) {
    r3_2.innerHTML = `결과2: 1000이상인 당신, 하루 만보 걷기 습관 추천! <hr>`
    //사용자의 나머지 부정 응답
} else {
    r3_2.innerHTML = `결과2: 건강이 걱정됩니다. 산책 추천! <hr>`
}

//----------------------------------------
// [ if ~ else 3 ]

let r3_3 = document.querySelector("#result3_3")
let age = 19

if (age < 20) {
    r3_3.innerHTML = `결과3: 미성년자입니다.<hr>`
} else {
    r3_3.innerHTML = `결과3: 성인입니다.<hr>`
}

//----------------------------------------
// [ if ~ else 4 ]

let r3_4 = document.querySelector("#result3_4")

let grade = 90;

if (grade >= 80) {
    r3_4.innerHTML = `결과4: A학점 <hr>`;
} else if (grade >= 70) {
    r3_4.innerHTML = ` 결과4: B학점 <hr>`;
} else {
    r3_4.innerHTML = ` 결과4: C학점 <hr>`;
}

//----------------------------------------
// [ if ~ else 5 ]
let r3_5 = document.querySelector("#result3_5")
let num = 3;

if (num % 2 === 1) {
    r3_5.innerHTML = `결과5: 짝수입니다 <hr>`;
} else {
    r3_5.innerHTML = `결과5: 홀수입니다 <hr>`;
}

//----------------------------------------
// [ if ~ else 6 ]
let r3_6 = document.querySelector("#result3_6")
let isLoggedin = false;

if (isLoggedin) {
    r3_5.innerHTML = `결과6: 로그인 상태 <hr>`
} else {
    r3_5.innerHTML = `결과6: 로그인 필요 <hr>`
}

//----------------------------------------
// [ if ~ else 7 ]
let r3_7 = document.querySelector("#result3_7")


//----------------------------------------
// [ if ~ else 8 ]
let r3_8 = document.querySelector("#result3_8")


//----------------------------------------
// [ if ~ else 9 ]
let r3_9 = document.querySelector("#result3_9")


//----------------------------------------
// [ if ~ else 10 ]
let r3_10 = document.querySelector("#result3_10")


//----------------------------------------

// switch문은 조건에 맞는 case로 바로 분가한다.

// let r3_3 = document.querySelector("#result_3")
// let site = prompt("네이버, 다음, 네이트, 구글 중 \
//   즐겨 사용하는 포털 검색 사이트는?", "");
// let url;

// switch (site) {
//     case "구글":
//         url = "www.google.com";
//         break;
//     case "다음":
//         url = "www.daum.net";
//         break;
//     case "네이버":
//         url = "www.naver.com";
//         break;
//     case "네이트":
//         url = "www.nate.com";
//         break;
//     default:
//         alert("보기 중 없는 사이트입니다.");
//         break;
// }

// if (url) {
//     location.href = "http://" + url;
// }

// if(url) location.href = "http//" + url
//----------------------------------------
// let r3_4 = document.querySelector("#result3_4")

// let i = 1
// let sum = 0
// while (i <= 10) {
//     console.log(i)
//     i++

//     sum += i
//     console.log("sum ==>> ", sum)
// }

// r3_4.innerHTML = `i 변수값은 ${i} <br>`
// r3_4.innerHTML += `sum합계값은 ${sum}`