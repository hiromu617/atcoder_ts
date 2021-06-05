const lines = [];
const reader = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.on("line", function (line) {
  lines.push(line);
});

reader.on("close", function () {
  const inputs: number[] = lines[0].split(' ')
  const N: number = +inputs[0];
  const Y: number = +inputs[1];

  for (let i_10000 = 0; i_10000 <= N; i_10000++) {
    for (let i_5000 = 0; i_5000 <= N; i_5000++) {
      if(i_10000 + i_5000  > N) break;
      
      for (let i_1000 = 0; i_1000 <= N; i_1000++) {
        if(i_10000 + i_5000 + i_1000 > N) break;

        if(i_10000 + i_5000 + i_1000 == N && i_10000 * 10000 + i_5000 * 5000 + i_1000 * 1000 == Y){

          console.log(`${i_10000} ${i_5000} ${i_1000}`)
          return
        }
      }
    }
  }

  console.log('-1 -1 -1')
  return
});
