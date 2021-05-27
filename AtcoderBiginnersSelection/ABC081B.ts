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
  const NumArray: number[]= lines[1].split(' ').map(n => +n)
  let count: number = 0

  let array: number[] = NumArray
  while(checkAllEven(array)){
    array = array.map(n => n/2)
    count++
  }

  console.log(count)
   
  function checkAllEven(arr: number[]): boolean{
    for(let i = 0; i < arr.length; i++){
      if(arr[i] % 2 != 0) return false
    }
    return true
  }
});
