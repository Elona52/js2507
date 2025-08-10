let x = 10;

function display(){
    document.getElementById("output").innerHTML += `<p>x: ${x}</p>`;
    document.getElementById("output").innerHTML += `<p>y: ${typeof y !== 'undefined' ? y : '정의되지 않음'}</p>`;
    let y = 20;
}

display();