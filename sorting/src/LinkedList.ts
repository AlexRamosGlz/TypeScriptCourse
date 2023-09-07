import { Sorter } from "./Sorter";

class Node {
  next: Node | null = null;

  constructor(public data: number) {}
}

export class LinkedList extends Sorter{
  head: Node | null = null;

  /**
   *
   * @param data
   * @returns
   */
  add(data: number): void {
    // a node object is created from Node class
    const node = new Node(data);

    // if there's not a pre-existing head (first node) the added node will turn into the head
    if (!this.head) {
      this.head = node;
      return;
    }

    // tail (last node) is initated as the head (this will be changed very soon)
    let tail = this.head;
    // if tail hast a next properties this means there is a another node ahead of it
    while (tail.next) {
      //the current tail now will be assigned to the next propertie value
      tail = tail.next;
    }

    // finally tail.next will be overwrite with the node object created at the begining of the method
    tail.next = node;
  }

  /**
   * Returns the linkedList total length
   * @returns number
   */
  get length(): number {
    //if there is no head(a first node) return 0
    if (!this.head) {
      return 0;
    }

    let length = 1;

    //temp asignment for node when is there a head
    let node = this.head;

    // while there is a next propertie in Node do something
    while (node.next) {
      //since there is a next propertie this means that there's a head node and the next one so the
      //length counter increases by one, this will be donde again until there's no next proprtie in node
      length++;

      // Now node will be assign to the next node this achieved by the node.next propiertie which points to the next node in the linked list
      node = node.next;
    }

    return length;
  }

  /**
   * returns the node at the given index
   * @param index
   * @returns
   */
  public at(index: number): Node {
    // if there is no head this means that the LinkedList is empty so there's nothing to return
    if (!this.head) {
      throw new Error("Index out of bounds!");
    }

    // initatize the counter as 0 so the head is also evaluated
    let counter = 0;

    // temp assgin to node as the head
    let node: Node | null = this.head;
    //while there is a node do something...
    while (node) {
      // if counter matches the index the node at that index will be returned
      if (counter === index) {
        return node;
      }

      // else counter increases by one
      counter++;

      // now node has the value of node.next (so it turns into the next node)
      node = node.next;
    }

    // if there's no node found an error will be thrown
    throw new Error("Index out of bounds!");
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    if (!this.head) {
      throw new Error("List is empty");
    }

    return this.at(leftIndex).data > this.at(rightIndex).data;
  }

  swap(leftIndex: number, rightIndex: number): void {
    const leftNode = this.at(leftIndex);
    const rightNode = this.at(rightIndex);

    const leftHand = leftNode.data;
    leftNode.data = rightNode.data;
    rightNode.data = leftHand;
  }

  print(): void {
    if(!this.head)  return

    let node: Node | null = this.head;
    while(node) {
        console.log(node.data);

        node = node.next;
    }
  }
}
