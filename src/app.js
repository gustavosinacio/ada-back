"use strict";
// => Type annotations
const test = "testground";
const testStrings = ["string1", "string2", "stringN"];
const testBool = false;
const testInt = 9549;
const testHex = 0x1214f1;
let testObject;
testObject = { keyA: "valueA", keyB: 2, keyC: false };
function adder(a, b) {
    return a + b;
}
console.log(test, testStrings, testBool, testInt, testHex, testObject, adder(23, 5));
