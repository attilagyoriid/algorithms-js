import NodeValue from "./NodeValue";

class Stack {
    private array:NodeValue[];
    constructor(){
      this.array = [];
    }
    peek() {
      return this.array[this.array.length-1];
    }
    push(value: NodeValue){
      this.array.push(value);
      return this;
    }
    pop(){
      this.array.pop();
      return this;
    }
  }