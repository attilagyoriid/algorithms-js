/** @format */

import ArrayManipulation from "./algorithms/ArrayManipulation";
import { factorial, fibonacci } from "./algorithms/Recursion";
import FizzBuzz from "./algorithms/FizzBuzz";
import Sorting from "./algorithms/Sorting";
import { JSDOM } from "jsdom";
import ArrayChunk from "./algorithms/ArrayChunk";
import Anagrams from "./algorithms/Anagrams";
import Steps from "./algorithms/Steps";
import Pyramid from "./algorithms/Pyramid";
import Vowels from "./algorithms/Vowels";
import Wave from "./algorithms/Wave";
import MyQueue from "./data_structures/MyQueue";
import Fibonacci from "./algorithms/Fibonacci";
import TrappingRainWater from "./algorithms/TrappingRainWater";

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

  describe("trap rain water", () => {
    const list = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
    const expected = 6;
    test("trapped rainwater amount is 6", () => {
      const trappingRainWater = new TrappingRainWater();
      expect(trappingRainWater.getRainWaterAmount(list)).toBe(expected);
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

describe("Array chunks algorithms", () => {
  const arrayChunk = new ArrayChunk();
  test("chunk divides an array of 10 elements with chunk size 2", () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const chunked = arrayChunk.chunk(arr, 2);

    expect(chunked).toEqual([
      [1, 2],
      [3, 4],
      [5, 6],
      [7, 8],
      [9, 10],
    ]);
  });

  test("chunk divides an array of 3 elements with chunk size 1", () => {
    const arr = [1, 2, 3];
    const chunked = arrayChunk.chunk(arr, 1);

    expect(chunked).toEqual([[1], [2], [3]]);
  });

  test("chunk divides an array of 5 elements with chunk size 3", () => {
    const arr = [1, 2, 3, 4, 5];
    const chunked = arrayChunk.chunk(arr, 3);

    expect(chunked).toEqual([
      [1, 2, 3],
      [4, 5],
    ]);
  });

  test("chunk divides an array of 13 elements with chunk size 5", () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
    const chunked = arrayChunk.chunk(arr, 5);

    expect(chunked).toEqual([
      [1, 2, 3, 4, 5],
      [6, 7, 8, 9, 10],
      [11, 12, 13],
    ]);
  });

  test("chunk2 divides an array of 10 elements with chunk size 2", () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const chunked = arrayChunk.chunk2(arr, 2);

    expect(chunked).toEqual([
      [1, 2],
      [3, 4],
      [5, 6],
      [7, 8],
      [9, 10],
    ]);
  });

  test("chunk2 divides an array of 3 elements with chunk size 1", () => {
    const arr = [1, 2, 3];
    const chunked = arrayChunk.chunk2(arr, 1);

    expect(chunked).toEqual([[1], [2], [3]]);
  });

  test("chunk2 divides an array of 5 elements with chunk size 3", () => {
    const arr = [1, 2, 3, 4, 5];
    const chunked = arrayChunk.chunk2(arr, 3);

    expect(chunked).toEqual([
      [1, 2, 3],
      [4, 5],
    ]);
  });

  test("chunk2 divides an array of 13 elements with chunk size 5", () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
    const chunked = arrayChunk.chunk2(arr, 5);

    expect(chunked).toEqual([
      [1, 2, 3, 4, 5],
      [6, 7, 8, 9, 10],
      [11, 12, 13],
    ]);
  });
});

describe("Anagrams", () => {
  const anagrams = new Anagrams();

  test("Anagram1", () => {
    console.log(anagrams.anagram("hello", "holle"));
  });
});

describe("Steps", () => {
  const steps = new Steps();
  beforeEach(() => {
    jest.spyOn(console, "log");
  });
  test("steps 1", () => {
    const expected: string[] = [
      "#                   ",
      "##                  ",
      "###                 ",
      "####                ",
      "#####               ",
      "######              ",
      "#######             ",
      "########            ",
      "###########         ",
      "############        ",
      "###############     ",
      "################    ",
      "#################   ",
      "##################  ",
      "################### ",
      "####################",
    ];
    expect(steps.steps(20)).toEqual(expect.arrayContaining(expected));
  });

  // afterEach(() => {
  //   console.log.mockRestore();
  // });

  // test("steps is a function", () => {
  //   expect(typeof steps).toEqual("function");
  // });

  // test("steps called with n = 1", () => {
  //   steps(1);
  //   expect(console.log.mock.calls[0][0]).toEqual("#");
  //   expect(console.log.mock.calls.length).toEqual(1);
  // });

  // test("steps called with n = 2", () => {
  //   steps(2);
  //   expect(console.log.mock.calls[0][0]).toEqual("# ");
  //   expect(console.log.mock.calls[1][0]).toEqual("##");
  //   expect(console.log.mock.calls.length).toEqual(2);
  // });

  // test("steps called with n = 3", () => {
  //   steps(3);
  //   expect(console.log.mock.calls[0][0]).toEqual("#  ");
  //   expect(console.log.mock.calls[1][0]).toEqual("## ");
  //   expect(console.log.mock.calls[2][0]).toEqual("###");
  //   expect(console.log.mock.calls.length).toEqual(3);
  // });
});

describe("Pyramid", () => {
  const pyramid = new Pyramid();

  test("Pyramid recursive", () => {
    console.log(pyramid.pyramidRecursion(4));
  });
});

describe("Vowel", () => {
  const vowels = new Vowels();

  test("Pyramid recursive", () => {
    console.log(vowels.getVowels("Attila"));
  });
});

describe("Wave", () => {
  const vowels = new Vowels();

  test("Wave", () => {
    const wave = new Wave();

    const sourceOne = new MyQueue();
    sourceOne.enqueue("a");
    sourceOne.enqueue("c");
    sourceOne.enqueue("e");
    sourceOne.enqueue("g");

    const sourceTwo = new MyQueue();
    sourceTwo.enqueue("b");
    sourceTwo.enqueue("d");
    sourceTwo.enqueue("f");
    sourceTwo.enqueue("h");
    console.log(wave.weave(sourceOne, sourceTwo));
  });
});

describe("Fibonacci", () => {
  const fibonacci = new Fibonacci();

  test("Fibonacci interation", () => {
    expect(fibonacci.fib_loop(6)).toEqual(8);
  });
  test("Fibonacci recursive", () => {
    expect(fibonacci.fib_recrusive(6)).toEqual(8);
  });
});

describe("sorting", () => {
  const sorting = new Sorting();
  const list = [43, 44, 6, 2, 1, 5, 50, 8, 12, 41, 1];
  test("counting sort", () => {
    console.log("counting sort result: ", sorting.counting(list));
  });
});