let spring = "봄"
let summer = "여름"
let fall = "가을"
let winter = "겨울"

//Array 배열_4진수_시퀀스(저장값이 순차적인것)
let season = ["봄","여름","가을","겨울"]
//season = [ 0, 1 , 2 , 3 ]

document.getElementById("output").innerHTML += "<p>" + season[0] + "</p>"
document.getElementById("output").innerHTML += "<p>" + season[1] + "</p>"
document.getElementById("output").innerHTML += "<p>" + season[2] + "</p>"
document.getElementById("output").innerHTML += "<p>" + season[3] + "</p>"
document.getElementById("output").innerHTML += "<p>배열의 타입: " + typeof season + "</p>"