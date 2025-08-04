const x =document.querySelectorAll("p.intro")

document.getElementById("result").innerHTML = "-----" + x[0].innerHTML
document.getElementById("result2").innerHTML = "-----" + x[1].innerHTML

//연속적 요소에 querySelector 반영했을 때,
//배열로 가져와야하는데, 한개만 가져올때는 [0]만 반영된다
const p =document.querySelectorAll("p")
p[0].style.backgroundColor = "green"
p[1].style.backgroundColor = "Pink"
p[2].style.backgroundColor = "Pink"
p[3].style.backgroundColor = "yellow"
p[4].style.backgroundColor = "yellow"

//    let result = document.querySelector("#result")
//    result.style.backgroundColor = color