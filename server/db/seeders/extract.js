const goodOut = require('./goodOut3');

const arr = goodOut.map(obj => obj.url)

goodOut.forEach(x => {
  console.log(x.date);
})

// console.log(JSON.stringify(goodOut));
