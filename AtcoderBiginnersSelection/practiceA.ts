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
    const a: number = +lines[0]
    const b: number = +lines[1].split(' ')[0]
    const c: number = +lines[1].split(' ')[1]
    const s: string = lines[2]
    console.log(a+b+c, s)
});
