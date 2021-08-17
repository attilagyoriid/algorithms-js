/** @format */

class Pyramid {
  pyramid(n: number) {
    const midpoint = Math.floor((2 * n - 1) / 2);

    for (let row = 0; row < n; row++) {
      let level = "";

      for (let column = 0 ; column < 2 * n - 1; column++) {
        if (midpoint - row <= column && midpoint + row >= column) {
          level += "#";
        } else {
          level += " ";
        }
      }

      console.log(level);
    }
  }

  pyramidRecursion(n: number, row: number = 0, level: string = ""): any {
    if (row === n) {
      return;
    }

    if (level.length === n * 2 - 1) {
      console.log(level);
      return this.pyramidRecursion(n, row + 1);
    }

    const midpoint = Math.floor((2 * n - 1) / 2);
    let add: string = "";
    if (midpoint - row <= level.length && midpoint + row >= level.length) {
      add = "#";
    } else {
      add = " ";
    }
    this.pyramidRecursion(n, row, level + add);
  }
}

export default Pyramid;
