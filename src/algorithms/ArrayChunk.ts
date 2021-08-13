/** @format */

class ArrayChunk {
  chunk(array: number[], size: number) {
    const chunked = [];
    let index = 0;

    while (index < array.length) {
      chunked.push(array.slice(index, index + size));
      index += size;
    }

    return chunked;
  }

  chunk2(array: number[], size: number) {
    const chunked = [];

    for (let element of array) {
      const last = chunked[chunked.length - 1];

      if (!last || last.length === size) {
        chunked.push([element]);
      } else {
        last.push(element);
      }
    }

    return chunked;
  }
}

export default ArrayChunk;
