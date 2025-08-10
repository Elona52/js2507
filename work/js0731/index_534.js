let session = prompt("관심 세션을 선택해 주세요. 1-마케팅, 2-개발, 3-디자인");

document.getElementById("output").innerHTML += "<p>선택한 세션: " + session + "</p>"

//session에는 "1"또는 "2"또는 "3"만 입력되어야한다.
switch (session) {
    case "1":
        document.getElementById("output").innerHTML += "<p>마케팅 세션은 <strong>201호</strong>에서..</p>";
        break;
    case "2":
        document.getElementById("output").innerHTML += "<p>개발 세션은 <strong>203호</strong>에서..</p>";
        break;
    case "3":
        document.getElementById("output").innerHTML += "<p>디자인 세션은 <strong>205호</strong>에서..</p>";
        break;
    default:
        document.getElementById("output").innerHTML += "<p>결과: 잘못 입력했습니다.</p>";
}