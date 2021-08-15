/** @format */

import MyQueue from "../data_structures/MyQueue";
import NodeValue from "../data_structures/NodeValue";

class Wave {
  weave(sourceOne: MyQueue, sourceTwo: MyQueue): MyQueue {
    const q = new MyQueue();

    while (sourceOne.peek() || sourceTwo.peek()) {
      if (sourceOne.peek()) {
        q.enqueue(sourceOne.peek() as NodeValue);
        sourceOne.dequeue();
      }

      if (sourceTwo.peek()) {
        q.enqueue(sourceTwo.peek() as NodeValue);
        sourceTwo.dequeue();
      }
    }

    return q;
  }
}

export default Wave;
