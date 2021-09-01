/** @format */

class Fibonacci {
  fib_loop(num: number): number {
    const result = [0, 1];

    for (let i = 2; i <= num; i++) {
      const a = result[i - 1];
      const b = result[i - 2];

      result.push(a + b);
    }

    return result[num];
  }

  fib_recrusive(num: number): number {
    if (num < 2) {
      return num;
    }

    return this.fib_recrusive(num - 1) + this.fib_recrusive(num - 2);
  }

  private fib_memoized(fn: Function): Function {
    const cache: { [key: number]: number } = {};
    return (args: number): number => {
      if (cache[args]) {
        return cache[args];
      }

      const result = fn.call(this, args);
      cache[args] = result;
      return result;
    };
  }

  fib_rec_mem(num: number): number {
    return this.fib_memoized(this.fib_rec_mem)(num);
  }
}

export default Fibonacci;
