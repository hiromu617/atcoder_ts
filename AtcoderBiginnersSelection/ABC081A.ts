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
    const input: string= lines[0]
    let count: number = 0

    for(let i = 0; i < input.length; i++){
      if(input[i] == "1") count++
    }
    console.log(count)
});