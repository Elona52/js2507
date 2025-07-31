let memNum = parseInt(prompt("입장객은 몇 명인가요?"))
let colNum = parseInt(prompt("한 줄에 몇명씩 앉습니까?"))

if(memNum % colNum === 0){
    rowNum = memNum / colNum;
}
else{
    rowNum = parseInt(memNum / colNum) + 1;
}
document.writeln("모두 ${rowNum}개의 줄이 필요합니다.")