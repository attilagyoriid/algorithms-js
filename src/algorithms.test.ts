import Algorithms from "./algorithms";
import { JSDOM } from "jsdom";
const { window } = new JSDOM()
const algorithms = new Algorithms();

describe("all algorithms test set", () => {
    describe("find Common Elements in 2 array", () => {
        const list1 = ['a', 'b', 'c', 'd'];
        const list2 = ['g', 'f', 'a', 'g'];
        test("findCommonElements1 with 2 array", () => {
            expect(algorithms.findCommonElements(list1, list2)).toEqual(true);
        });
        test("findCommonElements2 with 2 array", () => {
            expect(algorithms.findCommonElements2(list1, list2)).toEqual(true);
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

