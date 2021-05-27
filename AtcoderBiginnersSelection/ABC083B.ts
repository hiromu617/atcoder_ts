const lines=[];
const reader = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

reader.on('line', function (line) {
  lines.push(line);
});
reader.on('close', function () {
    const N: number = +lines[0].split(' ')[0]
    const A: number = +lines[0].split(' ')[1]
    const B: number = +lines[0].split(' ')[2]
    let results: number[] = []

    for(let i = 1; i <= N; i++){
      let val: string = String(i)
      let sum: number = 0;
      for(let j = 0; j < val.length; j++){
        sum += parseInt(val[j])
      }
      if(A <= sum && sum <= B) results.push(i)
    }

    if(results.length == 0){
      console.log(0)
      return
    }
    
    console.log(results.reduce((prev, curr) => prev + curr))
});

