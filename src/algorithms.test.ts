import Algorithms from "./algorithms";
import { JSDOM } from "jsdom";
const { window } = new JSDOM()
const algorithms = new Algorithms();

const data = [
    {
        list1: ['a', 'b', 'c', 'd'],
        list2: ['g', 'f', 'a', 'g'],
        result: true
    },
    {
        list1: ['a', 'b', 'c', 'd'],
        list2: ['g', 'f', 'a', 'g'],
        result: true
    },
    {
        list1: ['a', 'b', 'c', 'd'],
        list2: ['g', 'f', 'a', 'g'],
        result: true
    },
  ];

describe.each(data)("all algorithms test set", (testData) => {
    describe("find Common Elements in 2 array", () => {

        test("findCommonElements1 with 2 array", () => {
            expect(algorithms.findCommonElements(testData.list1, testData.list2)).toEqual(testData.result);
        });
        test("findCommonElements2 with 2 array", () => {
            expect(algorithms.findCommonElements2(testData.list1, testData.list2)).toEqual(testData.result);
        });
    });

    describe("has Pair In List With Sum", () => {
        const list = [4, 7, 11, 15];
        const sum = 18;
        test("hasPairInListWithSum", () => {
            expect(algorithms.hasPairInListWithSum(list, sum)).toEqual(true);
        })

    });
});

