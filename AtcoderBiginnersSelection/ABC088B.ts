const lines=[];
const reader = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

reader.on('line', function (line) {
  lines.push(line);
});
reader.on('close', function () {
    const nums: number[] = lines[1].split(' ').map(n => +n)
    nums.sort((a, b) => b - a)
    
    let result_a: number = 0
    let result_b: number = 0

    for(let i = 0; i < nums.length; i++){
      if(i % 2 == 0) result_a += nums[i]
      else result_b += nums[i]
    }

    console.log(result_a - result_b)
});
