/** @format */

class Sorting {
  bubble(list: number[]): number[] {
    for (let j = 0; j < list.length; j++) {
      for (let i = 0; i < list.length; i++) {
        if (list[i] > list[i + 1]) {
          const item = list[i + 1];
          list[i + 1] = list[i];
          list[i] = item;
        }
      }
    }

    return list;
  }

  selection(list: number[]): number[] {
    for (let i = 0; i < list.length; i++) {
      let min = i;
      let temp = list[min];
      for (let j = i + 1; j < list.length; j++) {
        if (list[min] > list[j]) {
          min = j;
        }
      }
      list[i] = list[min];
      list[min] = temp;
    }

    return list;
  }

  insertion(list: number[]): number[] {
    for (let i = 0; i < list.length; i++) {
      let place = i;

      for (let j = i - 1; j >= 0; j--) {
        if (list[i] < list[j]) {
          place = j;
        }
      }
      if (place !== i) {
        let temp = list[place];
        delete list[place];
        list.unshift(temp);
      }
    }

    return list;
  }
}

export default Sorting;
