type Node = {value: Value; next: Node | null};
type Value = (number | string | {});
class MyLinkedList {
    head: Node;
    tail: Node;
    length: number;
    constructor(value: Value) {
      this.head = {
        value,
        next: null
      };
      console.log('constructor: head:', this.head);
      this.tail = this.head;
      console.log('constructor: tail:', this.tail);
      this.length = 1;
    }
    append(value: Value) {
      console.log('before append ----', this);
      const newNode: Node = {
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
    prepend(value: Value) {
      const newNode: Node = {
        value: value,
        next: null
      }
      newNode.next = this.head;
      this.head = newNode;
      this.length++;
      return this;
    }
    printList() {
      const array = [];
      let currentNode = this.head;
      while(currentNode !== null){
          array.push(currentNode.value);
          currentNode = currentNode.next as Node;
         
      }
      return array;
    }
    insert(index: number, value: any){
      if(index >= this.length) {
        console.log('yes')
        return this.append(value);
      }
      
      const newNode: Node = {
        value: value,
        next: null
      }
      const leader = this.traverseToIndex(index-1);
      const holdingPointer = leader.next;
      leader.next = newNode;
      newNode.next = holdingPointer as Node;
      this.length++;
      return this.printList();
    }
    traverseToIndex(index: number): Node {

      let counter = 0;
      let currentNode = this.head;
      while(counter !== index){
        currentNode = currentNode.next as Node;
        counter++;
      }
      return currentNode;
    }
    remove(index: number) {

      const leader = this.traverseToIndex(index-1);
      const unwantedNode = leader.next as Node;
      leader.next = unwantedNode.next;
      this.length--;
      return this.printList();
    }

    reverse() {
      if (!this.head.next) {
        return this.head;
      }
      let first = this.head;
      this.tail = this.head;
      let second = first.next;
  
      while(second) {
        const temp = second.next;
        second.next = first;
        first = second;
        second = temp;
      }
  
      this.head.next = null;
      this.head = first;
      return this.printList();
    }
  }

  export default MyLinkedList;