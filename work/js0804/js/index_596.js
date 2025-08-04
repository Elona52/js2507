let numChars = [1, 2, 3]
let chars = ['a','b','c','d'];

let string1 = numChars.join();
document.writeln(`구분자 없이; ${String}<br>`);
let string2 = chars.join(`/`);
document.writeln(`/ 구분자 지정: ${string2}`);
document.writeln(`<hr>`);