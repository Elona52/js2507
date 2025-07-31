for(let i = 2; i <= 10; i++){
    document.writeln(`<div class="times">`)
    document.writeln(`<h3>${i}단</h3>`)
//  for(){
//  }
    document.writeln(`</div>`)

    // i가 4와 같으면, 빠져나감
    if(i == 4) break
}

for(let i = 2; i <= 10; i++){

    // i가 4와 같으면, 빠져나감
    if(i == 4) continue

    document.writeln(`<div class="times">`)
    document.writeln(`<h3>${i}단</h3>`)

    // i가 4와 같으면, 빠져나감
     document.writeln(`</div>`)
}