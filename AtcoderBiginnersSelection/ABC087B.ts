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
    const num_500: number = +lines[0]
    const num_100: number = +lines[1]
    const num_50: number = +lines[2]
    const x: number = +lines[3]

    let count: number = 0;
    let hash = {}

    for(let i_500 = 0; i_500 <= num_500; i_500++){
      for(let i_100 = 0; i_100 <= num_100; i_100++){
        for(let i_50 = 0; i_50 <= num_50; i_50++){
          let num: number = 0;
          if(i_500 > 0) num += 500 * i_500
          if(i_100 > 0) num += 100 * i_100
          if(i_50  > 0) num += 50  * i_50

          if(num == x)count++
        }
      }
    }
    console.log(count)
});
