const lines=[];
const reader = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

reader.on('line', function (line) {
  lines.push(line);
});
reader.on('close', function () {
   const set = new Set()
  for(let i=1; i < lines.length; i++){
    set.add(+lines[i])
  }
   console.log(set.size)
});
