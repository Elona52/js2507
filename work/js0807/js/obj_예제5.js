function car(owner,color,origin,usage){
    this.owner = owner;
    this.color = color;
    this.origin = origin;
    this.usage = usage;
}

const car1 = new car("jimin","blue","German",1)
const car2 = new car("John","black","Korea",10)

console.log(car1);
console.log(car2);