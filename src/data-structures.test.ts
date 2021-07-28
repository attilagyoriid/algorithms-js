/** @format */

import MyLinkedList from "./data_structures/MySinglyLinkedList";
import MyBinarySearchTree from "./data_structures/MyBinarySearchTree";
import { JSDOM } from "jsdom";
const { window } = new JSDOM();

describe("LinkedList", () => {
  test("LinkedList numbers", () => {
    const linkedList = new MyLinkedList(10);
    linkedList.append(5);
    linkedList.append(15);

    expect(linkedList.length).toEqual(3);
  });
});

describe("Binary Search Tree", () => {
  test("BST", () => {
    const bst = new MyBinarySearchTree();
    console.log("bst---", bst.insert(9));
    console.log("bst---", bst.insert(4));
    console.log("bst---", bst.insert(20));
    console.log("bst---", bst.insert(1));
    console.log("bst---", bst.insert(6));
    console.log("bst---", bst.insert(15));
    console.log("bst---", JSON.stringify(bst.insert(170)));

    console.log("bst---", bst.lookup(6));
  });
});
