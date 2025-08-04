//선언부
let d = document;
let txt="";
const frm = document.forms["frm1"];
//const frmOne = document.querySelector("#frm1")

//구현부
for(let i = 0; i <frm.length; i++){
    // txt = frm[0].value
    txt += "-" + frm[i].value;
}

//출력부
document.getElementById("result").innerHTML = txt;