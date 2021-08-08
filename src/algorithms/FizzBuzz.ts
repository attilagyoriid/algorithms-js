/** @format */

class FizzBuzz {
  doFizzBuzz(start: number, end: number): { [key: number]: string } {
    const multipleOf3Indicator: string = "Fizz";
    const multipleOf5Indicator: string = "Buzz";

    const result: { [key: number]: string } = {};
    for (let i = start; i <= end; i++) {
      let hit: boolean = false;
      let typeToken: string = "";
      if (i % 3 === 0) {
        hit = true;
        typeToken = typeToken.concat(multipleOf3Indicator);
      }

      if (i % 5 === 0) {
        hit = true;
        typeToken = typeToken.concat(multipleOf5Indicator);
      }

      hit && (result[i] = typeToken);
    }
    return result;
  }
}

export default FizzBuzz;
