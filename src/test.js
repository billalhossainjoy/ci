const add = require("./index")

const result = add(2,5)

if(result != 7){
    throw new Error("test failed: test must expected 7 but its get ", result);
}

console.log("test passed: expected 7 and get ", result);