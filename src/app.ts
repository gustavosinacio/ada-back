// => Type annotations
const test: string = "testground";

const testStrings: string[] = ["string1", "string2", "stringN"];

const testBool: boolean = false;

const testInt: number = 9549;

const testHex: number = 0x1214f1;

let testObject: {
  keyA: string;
  keyB: number;
  keyC: boolean;
};
testObject = { keyA: "valueA", keyB: 2, keyC: false };

function adder(a: number, b: number): number {
  return a + b;
}

console.log(
  test,
  testStrings,
  testBool,
  testInt,
  testHex,
  testObject,
  adder(23, 5)
);
