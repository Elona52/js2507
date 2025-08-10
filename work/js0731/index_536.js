let memNum = parseInt(prompt("입장객은 몇 명인가요?"))
let colNum = parseInt(prompt("한 줄에 몇명씩 앉습니까?"))

document.getElementById("output").innerHTML += "<p>입장객 수: " + memNum + "명</p>"
document.getElementById("output").innerHTML += "<p>한 줄에 앉는 사람 수: " + colNum + "명</p>"

if(memNum % colNum === 0){
    rowNum = memNum / colNum;
}
else{
    rowNum = parseInt(memNum / colNum) + 1;
}
document.getElementById("output").innerHTML += "<p>모두 " + rowNum + "개의 줄이 필요합니다.</p>"