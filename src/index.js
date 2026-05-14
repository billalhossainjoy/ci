function add(a, b) {
  return a + b;
}

const result = add(2, 3);

console.log("Billal Hossain")

console.log("result: "+ result);

console.log("App Name: " + process.env.APP_NAME);
console.log("Mode: " + process.env.NODE_ENV);

module.exports = add;