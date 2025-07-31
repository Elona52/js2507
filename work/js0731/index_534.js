let session = prompt("관심 세션을 선택해 주세요. 1-마케팅, 2-개발, 3-디자인");

//session에는 "1"또는 "2"또는 "3"만 입력되어야한다.
switch (session) {
    case "1":
        document.writeln("<p>마케팅 세션은 <strong>201호</strong>에서..</p>");
        break;
    case "2":
        document.writeln("<p>개발 세션은 <strong>203호</strong>에서..</p>");
        break;
    case "3":
        document.writeln("<p>디자인 세션은 <strong>205호</strong>에서..</p>");
        break;
    default:
        alert("잘못 입력했습니다.");
}