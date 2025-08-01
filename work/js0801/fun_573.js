function calcSum(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }

    document.writeln(`1부터 ${n}까지 더하면 ${sum}`);

}
calcSum(2)