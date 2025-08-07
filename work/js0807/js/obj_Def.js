//object 정의할때 {}사용, 변수사용 -> 객체방식으로 변수 받아옴
const person = {
    myName : "지민",
    age : 20,
    eyeColor : "black"
}

//const person2 = new Object()---
const person2 = new Object(
    {
        myName: "jimin",
        age:21,
        tall:168
    }
)

//기존obj--------------------------
const person3 = {
        myName: "jiminlee",
        age:22,
        tall:170
    }

//새로운obj------------------------
const woman = Object.create(person3)
//woman.myName
woman.myName = "John"
woman.etc = "etc"
//-------------------------------

const fruits = [
    ["apples",300],
    ["pears",900],
    ["bananas",500]
]

//method : fromEntries
const myObj = Object.fromEntries(fruits)
myObj.etc = "etc"

//-------------------------------
//Person 값이 변경되는 것 확인
const person4 = {
    myName : "jimin",
    age : 24,
    eyeColor : "blue"
};
const person5 = { myName : "Daniel",
    age : 30
}
//assign(){행위를 정의해준다} 메소드
//형체가 없지만 떠오르는 개념: class, class의 요소를 변수처럼 부여, class 구체적인 행위정의:함수화정의(메소드)
Object.assign(person4, person5)

//-------------------------------
//클래스: 기획서(설계도)
//객체공장: 클래스가 오브젝트 생성할때, 생성자
//class 이름
function Person6(first, last, age, eyeColor){
    //this => person6.fistName(속성값)
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyeColor
}
//밖에서 쓰는 this : window 

//class만들때 object를 이렇게 구성하라
//woman1을 class의 이름이 아닌 새롭게 구성하면,
const woman1 = new Person6("이", "지민", 20, "black")
//person6.firstName

//클래스:책
function Book(tit, sub, price, page){
    this.title = tit
    this.subject = sub
    this.price = price
    this.pages = page
}
const book1 = new Book("react","한빛",35000,300)
const book2 = new Book("react2","한빛",35000,300)
const book3 = new Book("react3","한빛",35000,300)
const book4 = new Book("react4","한빛",35000,300)
const book5 = new Book("react5","한빛",35000,300)
const book6 = new Book("react6","한빛",35000,300)
