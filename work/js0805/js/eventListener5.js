document.getElementById("myDiv1").addEventListener("mouseover", myFunction);

function myFunction() {
  document.getElementById("result").innerHTML = Math.random();
}

function removeHandler() {
  document.getElementById("myDiv1").removeEventListener("mouseover", myfumction);
}
