let myBtn = document.getElementById("myBtn")
let result = document.getElementById("result")
let myBtn2 = document.getElementById("myBtn2")
let result2 = document.getElementById("result2")

function displayDate() {
    result2.innerHTML = Date();
}

// case1 이벤트리스너가 클릭이벤트를 듣고 있다가 이벤트가 발생하면 displayDate함수를 실행한다.
// myBtn.addEventListener("click", displayDate);

// case1 이벤트리스너가 클릭이벤트를 듣고 있다가 이벤트가 발생하면 displayDate함수를 즉각 실행한다.
// myBtn.addEventListener("click", function () {
//     alert("Hello World");
// })

// case3 이벤트리스너가 클릭이벤트를 듣고 있다가 이벤트가 발생하면 흐름순서대로 실행한다.
// function myFunction() {
//     alert("Hello World!");
// }

// function someOtherFunction() {
//     alert("함수가 실행됩니다");
// }
// myBtn.addEventListener("click", myFunction);
// myBtn.addEventListener("click", someOtherFunction);


//오버, 아웃, 클릭이벤트를 리스너에 등록
function myOver() {
    result2.innerHTML = "마우스오버"
}

function myClick() {
    result2.innerHTML = "마우스클릭"
}

function myOut() {
    result2.innerHTML = "마우스아웃"
}

myBtn2.addEventListener("mouseOver", myOver)
myBtn2.addEventListener("click", myClick)
myBtn2.addEventListener("mouseOut", myOut)