import MyLinkedList from "./data_structures/MySinglyLinkedList";
import { JSDOM } from "jsdom";
const { window } = new JSDOM()




    describe("LinkedList", () => {
     
        test("LinkedList numbers", () => {
            const linkedList = new MyLinkedList(10);
            linkedList.append(5);
            linkedList.append(15);

            expect(linkedList.length).toEqual(3);
        })

    });


