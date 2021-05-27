const lines=[];
const reader = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

reader.on('line', function (line) {
  lines.push(line);
});
reader.on('close', function () {
    // この中に入力が終わった後の処理=ロジックを記載する。
    const a: number = +lines[0].split(' ')[0]
    const b: number = +lines[0].split(' ')[1]

    const num: number = a*b
    num % 2 == 0 ? console.log("Even"): console.log('Odd')
});