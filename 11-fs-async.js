const { readFile, writeFile, read } = require("fs");
const { resourceLimits } = require("worker_threads");
console.log('start');
readFile("./content/first.txt", "utf8", (err, res) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(res);
  const first = res;
  readFile('./content/second.txt', 'utf8', (err, res) => {
      if(err) {
          console.log(err);
          return
      }
      console.log(res);
      const second = res
      writeFile('./content/result-async.txt', `This is an async text form first: ${first} \n& \nsecond ${second}`, (err, res) => {
        if(err) {
            console.log(err);
            return
        }
        console.log('done with this task')
      })
  })
});
console.log('starting the next task')