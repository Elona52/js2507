let p1 = 5;
let p2 =7;
document.getElementById("myBtn").addEventListener("click", function(){
    myFunction(p1,p2);
});

function myFunction(a,b){
    document.getElementById("result").innerHTML = a * b;
}
