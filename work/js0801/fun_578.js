// case5 상수에 함수정의를 담는다
const hi6 = function() {
    return "안녕하세요"
}
console.log("hi6")
console.log(typeof hi6)

// case6 상수에 기본함수(user)를 정의한다
const hi7 = function(user) {
    return `${user}"안녕하세요"`
}
console.log("hi7")
console.log(typeof hi7)

// case7 상수에 기본함수(a,b)를 정의한다
const hi8 = function(a,b) {
    return a + b;
}
console.log("hi8")
console.log(typeof hi8)

//----------------------------------

// case1 상수에 에로우함수를 정의한다.

const hi2 = () => {return "안녕하세요2"}
console.log("hi2")
console.log(typeof hi2)

// case2 상수에 에로우함수를 정의한다.
const hi3 = () => 안녕하세요3
console.log("hi3")
console.log(typeof hi3)

// case3 상수에 에로우함수를 정의한다.
const hi4 = user => {`${user}님 안녕하세요`}
console.log("hi4")
console.log(typeof hi4)

// case4 상수에 에로우함수를 정의한다.
const hi5 = (a, b) => a + b
console.log("hi5")
console.log(typeof hi5)

//--------------------------------------------
myfunction = (a, b) => a * b
let result = myfunction(4,5)
console.log(`결과는 ${result}`)