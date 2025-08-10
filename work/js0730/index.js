let text = ""
let mytext = ""

// consol.log 에 cars 를 쓰면 밑에 변수값들이 자동으로 불러와진다.
// cars = [0 , 1 , 2 , 3 , 4 , 5]
const cars = ["BMW","볼보","사브","포드","피아트","아우디"]
// 상수 :  저장공간을 픽스해두기 위해서 사용하는 값
// for(초기값;실행;증감값)
for (let i = 0; i < cars.length; i++){
   // console.log(i);
   // console.log(cars[i])   
    mytext += cars[i] + "_"
    document.getElementById("output").innerHTML += "<p>" + cars[i] + "</p>"
}

document.getElementById("output").innerHTML += "<p>연결된 문자열: " + mytext + "</p>"

// ""+"BMW" = "BMW" : text += cars[0]
// "BMW" + "볼보"= "BMW볼보" : text += cars[1] + "_"
// text += cars[2] + "_"
// text += cars[3] + "_"
// text += cars[4] + "_"
// text += cars[5] + "_"

