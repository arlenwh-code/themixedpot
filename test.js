const json = {result: true, count: 42};
const jsonData = JSON.stringify(json);
const obj = JSON.parse(jsonData);
console.log(obj);
console.log(obj.count);
// expected output: 42

console.log(obj.result);
// expected output: true
