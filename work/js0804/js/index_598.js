let nums = [1, 2, 3]
let chars = ['a', 'b', 'c', 'd'];

//pop 맨끝 내용 꺼내기
let popped1 = chars.pop();
document.writeln(`꺼낸 요소: ${popped1}, | 배열: ${chars}<br>`);

//shift 맨앞 내용 꺼내기
let popped2 = chars.shift();
document.writeln(`꺼낸 요소: ${popped2}, | 배열: ${chars}`);
document.writeln(`<hr>`);