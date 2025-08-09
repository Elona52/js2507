let resulttime = document.getElementById("resultTime")
let myBtn = document.getElementById("myBtn")
let resulttime = document.getElementById("resultBtn")
let myBtn = document.getElementById("resultCookie")

//매개값으로 넘어온 this 를 사용하기
function oops(id){
    id.innerHTML = 'Ooops!'
}

function displayDate() {
 resulttime.innerHTML = Date();      
}

//속성값을 전달하므로 ()생략
myBtn.onclick = displayDate

//페이지가 로드될 때
//onload를 onunload 사용하여 쿠키처리
function checkCookies() {
    let text = "";
    if(navigator.cookieEnabled == true){
        text = "Cookies are enabled.";
    } else {
        text = "Cookies are not enabled.";
    }
    resultCookie.innerHTML = text;
}