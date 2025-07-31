// i단
for(let i = 1; i < 7; i++){
    document.writeln(`${i}단 <br>`)
    document.writeln(`---------------<br>`)
    // i단 * j
    for(let j = 1; j <= 9; j++){
    document.writeln(`${i}단 * ${j} = 결과: ${i*j}`)
    document.writeln(`<br>`)
    }
    document.writeln(`<br>`)
}
