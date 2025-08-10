let myTxt;
let myRandom = Math.random()

document.getElementById("output").innerHTML += "<p>랜덤 값: " + myRandom + "</p>"
if(myRandom < 0.5){
    myTxt = "0.5보다 작다"
}else{
    myTxt = "0.5보다 작지않다"
}
document.getElementById("output").innerHTML += "<p>결과: " + myTxt + "</p>"