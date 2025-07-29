// =대입연산자의 응용버전
let num = 5
let result = 1
let result2 = 1

// +=
console.log(result = result + num)
console.log(result2 += num)

// -=
//두번설정할 수 없기 때문에 초기화해줘야함
result = 6
result2 = 6
console.log(result = result - num)
console.log(result2 -= num)

// *=
result = 3
result2 = 3
console.log(result = result * num)
console.log(result2 *= num)

// /=
result = 20
result2 = 20
console.log(result = result / num)
console.log(result2 /= num)

// %=
result = 12
result2 = 12
console.log(result = result % num)
console.log(result2 %= num)