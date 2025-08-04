let nums = [1,2,3];
let chars = ['a', 'b', 'c', 'd'];

let ret1 = nums.push(4,5);
document.writeln(`length: ${ret1} | 배열: ${nums}<br>`);

let ret2 = nums.unshift(0);
document.writeln(`length: ${ret2}, | 배열: ${nums}`);
document.writeln(`<hr>`);