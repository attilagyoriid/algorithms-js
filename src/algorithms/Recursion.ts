/** @format */

export const factorial = (item: number): number => {
  if (item === 2) return 2;

  return factorial(item - 1) * item;
};

export const fibonacci = (itemNumber: number): number => {
  if (itemNumber < 2) return itemNumber;

  return fibonacci(itemNumber - 1) + fibonacci(itemNumber - 2);
};

export const fibonacciMemoized = (): ((n: number) => number) => {
  //O(n)
  let cache: { [key: string]: number } = {};
  return function fib(n: number): number {
    if (n in cache) {
      return cache[n];
    } else {
      if (n < 2) {
        return n;
      } else {
        cache[n] = fib(n - 1) + fib(n - 2);
        return cache[n];
      }
    }
  };
};

export const fibonacciwoRecursion = (n: number) => {
  let answer = [0, 1];
  for (let i = 2; i <= n; i++) {
    answer.push(answer[i - 2] + answer[i - 1]);
  }
  return answer.pop();
};
