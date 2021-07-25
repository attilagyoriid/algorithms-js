class MyArray<T> {
    length: number;
    data: T[];
    constructor() {
      this.length = 0;
      this.data = [];
    }
    get(index: number):T {
      return this.data[index];
    }
    push(item: T): T[] {
      this.data[this.length] = item;
      this.length++;
      return this.data;
    }
    pop():T {
      const lastItem = this.data[this.length - 1];
      delete this.data[this.length - 1];
      this.length--;
      return lastItem;
    }
    deleteAtIndex(index: number):T {
      const item = this.data[index];
      this.shiftItems(index);
      return item;
    }
    shiftItems(index:number):T {
      const itemToShift=this.data[index];  
      for (let i = index; i < this.length - 1; i++) {
        this.data[i] = this.data[i + 1];
      }
      delete this.data[this.length - 1];
      this.length--;
      return itemToShift;
    }
  }