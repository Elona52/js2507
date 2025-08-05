document.getElementById("myP1").addEventListener("click",function(){
    alert("흰색을 선택하셨습니다.");
}, false);

document.getElementById("myDiv1").addEventListener("click", function() {
  alert("오렌지색을 선택하셨습니다.");
}, false);

document.getElementById("myP2").addEventListener("click", function() {
  alert("흰색을 선택하셨습니다.");
}, true);

document.getElementById("myDiv2").addEventListener("click", function() {
  alert("오렌지색을 선택하셨습니다.");
}, true);