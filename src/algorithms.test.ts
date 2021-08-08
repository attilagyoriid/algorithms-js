/** @format */

import ArrayManipulation from "./algorithms/ArrayManipulation";
import { factorial, fibonacci } from "./algorithms/Recursion";
import FizzBuzz from "./algorithms/FizzBuzz";
import Sorting from "./algorithms/Sorting";
import { JSDOM } from "jsdom";

const { window } = new JSDOM();

const arrayManipulation = new ArrayManipulation();
const data = [
  {
    list1: ["a", "b", "c", "d"],
    list2: ["g", "f", "a", "g"],
    result: true,
  },
  {
    list1: ["a", "b", "c", "d"],
    list2: ["g", "f", "a", "g"],
    result: true,
  },
  {
    list1: ["a", "b", "c", "d"],
    list2: ["g", "f", "a", "g"],
    result: true,
  },
];

describe.each(data)("all algorithms test set", (testData) => {
  describe("find Common Elements in 2 array", () => {
    test("findCommonElements1 with 2 array", () => {
      expect(
        arrayManipulation.findCommonElements(testData.list1, testData.list2)
      ).toEqual(testData.result);
    });
    test("findCommonElements2 with 2 array", () => {
      expect(
        arrayManipulation.findCommonElements2(testData.list1, testData.list2)
      ).toEqual(testData.result);
    });
  });

  describe("has Pair In List With Sum", () => {
    const list = [4, 7, 11, 15];
    const sum = 18;
    test("hasPairInListWithSum", () => {
      expect(arrayManipulation.hasPairInListWithSum(list, sum)).toEqual(true);
    });
  });
});

interface DataArray {
  list1: string[] | number[];
  result: string | number;
}
const data_array: DataArray[] = [
  {
    list1: ["a", "b", "cd", "d", "b", "a"] as string[],
    result: "b",
  },
  {
    list1: ["aa", "b", "cc", "aa"] as string[],
    result: "aa",
  },
  {
    list1: [1, 1, 2, 3] as number[],
    result: 1,
  },
];
describe.each(data_array)("array manipulation algorithms", (testData) => {
  const arrayManipulation = new ArrayManipulation();
  test("findCommonElements1 with 2 array", () => {
    expect(arrayManipulation.findFirstReoccurringItem(testData.list1)).toEqual(
      testData.result
    );
  });
});

describe("factorial", () => {
  test("factorial", () => {
    console.log(fibonacci(8));
  });
});

describe("sorting", () => {
  const sorting = new Sorting();
  const list = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
  test("bubble", () => {
    console.log(sorting.insertion(list));
  });
});

describe("fizz buzz division by 3 and 5 or both", () => {
  const fizzbuzz = new FizzBuzz();

  test("fizzbuzz", () => {
    console.log(fizzbuzz.doFizzBuzz(1, 100));
  });
});
