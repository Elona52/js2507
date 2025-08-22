//reault1 - Boolean 타입
let a = true
let b = false
let c = 10 > 5
let d = Boolean(null)

// document.getElementById("result").innerHTML = `${a}`
// document.querySelector("#result1"),innerHTML = `${b}`
// document.querySelector("#result1"),innerHTML = document.querySelector("#result1"),innerHTML + `--${b}--`
// document.querySelector("#result1"),innerHTML += `%%${a}` 

let r1 = document.querySelector("#result1")
//경우1
r1.innerHTML += `a + b + c + d = ${a} + ${b} + ${c} + ${d}`
//경우2
r1.innerHTML = `a값 : ${a} <br>`
r1.innerHTML += `b값 : ${b} <br>`
r1.innerHTML += `c값 : ${c} <br>`
r1.innerHTML += `d값 : ${d} <br>`


//reault2 - 사칙연산

let num1 = 10
let num2 = 3
let r2 = document.querySelector("#result2")
r2.innerHTML = `덧셈: num1_${num1} + num2_${num2} = ${num1 + num2}<br>`
r2.innerHTML = `뺄셈: num1_${num1} + num2_${num2} = ${num1 - num2} <br>`
r2.innerHTML += `곱셈: num1_${num1} + num2_${num2} = ${num1 * num2} <br>`
r2.innerHTML += `나눗셈: num1_${num1} + num2_${num2} = ${num1 / num2} <br>`
r2.innerHTML += `나머지: num1_${num1} + num2_${num2} = ${num1 % num2} <br>`