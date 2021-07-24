import Algorithms from "./algorithms";
import { JSDOM } from "jsdom";
const { window } = new JSDOM()
const algorithms = new Algorithms();

const list1: string[] = ['a', 'b', 'c', 'd'];
const list2 = ['g', 'f', 'ak', 'g'];

let start = window.performance.now();
console.log(algorithms.findCommonElements(list1, list2));
let stop = window.performance.now();
console.log(`Time Taken to execute = ${(stop - start) / 1000} seconds`);

start = window.performance.now();
console.log(algorithms.findCommonElements2(list1, list2));
stop = window.performance.now();
console.log(`Time Taken to execute = ${(stop - start) / 1000} seconds`);