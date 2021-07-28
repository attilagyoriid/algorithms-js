/** @format */

import NodeValue from "./NodeValue";

interface LinkNode {
  value: NodeValue;
  next: LinkNode | null;
}

export default LinkNode;
