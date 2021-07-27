import ArrayManipulation from "./algorithms/ArrayManipulation";
import { JSDOM } from "jsdom";
const { window } = new JSDOM()

const arrayManipulation = new ArrayManipulation();
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
            expect(arrayManipulation.findCommonElements(testData.list1, testData.list2)).toEqual(testData.result);
        });
        test("findCommonElements2 with 2 array", () => {
            expect(arrayManipulation.findCommonElements2(testData.list1, testData.list2)).toEqual(testData.result);
        });
    });

    describe("has Pair In List With Sum", () => {
        const list = [4, 7, 11, 15];
        const sum = 18;
        test("hasPairInListWithSum", () => {
            expect(arrayManipulation.hasPairInListWithSum(list, sum)).toEqual(true);
        })

    });
});


interface DataArray {
    list1: string[] | number[];
    result: string | number;
}
const data_array: DataArray[] = [
    {
        list1: ['a', 'b', 'cd', 'd', 'b', 'a'] as string[],
        result: 'b'
    },
    {
        list1: ['aa', 'b', 'cc', 'aa'] as string[],
        result: 'aa'
    },
    {
        list1: [1,1,2,3] as number[],
        result: 1
    },
  ];
describe.each(data_array)("array manipulation algorithms", (testData) => {
    const arrayManipulation = new ArrayManipulation();
        test("findCommonElements1 with 2 array", () => {
            
            expect(arrayManipulation.findFirstReoccurringItem(testData.list1)).toEqual(testData.result);

        });


});

