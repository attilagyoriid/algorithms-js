/** @format */

import NodeValue from "./NodeValue";

class QueueNode {
  public next: QueueNode | null;
  constructor(private value: NodeValue) {
    this.value = value;
    this.next = null;
  }
}

class MyQueue {
  private first: QueueNode | null;
  private last: QueueNode | null;
  private length: number;
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  peek() {
    return this.first;
  }
  enqueue(value: NodeValue) {
    const newNode = new QueueNode(value);
    if (this.length === 0) {
      this.first = newNode as QueueNode;
      this.last = newNode as QueueNode;
    } else {
      this.last!.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this;
  }
  dequeue() {
    if (!this.first) {
      return null;
    }
    if (this.first === this.last) {
      this.last = null;
    }
    const holdingPointer = this.first;
    this.first = this.first.next;
    this.length--;
    return this;
  }
  //isEmpty;
}

export default MyQueue;
