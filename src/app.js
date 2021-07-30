"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// => Type annotations
const Reader_1 = __importDefault(require("./Reader"));
const test = 'testground';
const testStrings = ['string1', 'string2', 'stringN'];
const testBool = false;
const testInt = 9549;
const testHex = 0x1214f1;
let testObject;
testObject = { keyA: 'valueA', keyB: 2, keyC: false };
function adder(a, b) {
    return a + b;
}
function readStrong() {
    return __awaiter(this, void 0, void 0, function* () {
        const strongData = yield Reader_1.default();
        console.log(2, strongData);
    });
}
readStrong();
// console.log(
//   test,
//   testStrings,
//   testBool,
//   testInt,
//   testHex,
//   testObject,
//   adder(23, 5)
// );
