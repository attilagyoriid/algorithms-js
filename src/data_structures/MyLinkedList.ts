type Node = {value:any; next:{} | null};
class MyLinkedList {
    head: Node;
    tail: Node;
    length: number;
    constructor(value: any) {
      this.head = {
        value: value,
        next: null
      };
      console.log('constructor: head:', this.head);
      this.tail = this.head;
      console.log('constructor: tail:', this.tail);
      this.length = 1;
    }
    append(value:any) {
      console.log('before append ----', this);
      const newNode = {
        value: value,
        next: null
      }
      console.log(newNode)
      this.tail.next = newNode;
      console.log('append: tail - next:', this.tail.next);
      this.tail = newNode;
      console.log('append: tail', this.tail);
      this.length++;
      console.log('after append ----', this);
      return this;
    }
    prepend(value:any) {
      //Code here
    }
  }

  export default MyLinkedList;