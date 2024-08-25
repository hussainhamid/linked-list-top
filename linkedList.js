import { Node } from "./node.js";

export class linkedList {
  constructor() {
    this.headNode = null;
  }

  append(value) {
    let newNode = new Node(value);

    let currentNode = this.headNode;

    if (this.headNode === null) {
      this.headNode = newNode;
    } else {
      while (currentNode.nextNode !== null) {
        currentNode = currentNode.nextNode;
      }

      currentNode.nextNode = newNode;
    }

    return currentNode;
  }

  prepend(value) {
    let newNode = new Node(value);

    newNode.nextNode = this.headNode;

    this.headNode = newNode;
  }

  size() {
    let size = 0;

    let currentNode = this.headNode;

    while (currentNode !== null) {
      size++;
      currentNode = currentNode.nextNode;
    }

    return size;
  }

  head() {
    return this.headNode;
  }

  tail() {
    let currentNode = this.headNode;

    while (currentNode.nextNode !== null) {
      currentNode = currentNode.nextNode;
    }

    return currentNode;
  }

  at(index) {
    let currentNode = this.headNode;

    let size = 0;

    while (currentNode !== null && size < index) {
      currentNode = currentNode.nextNode;
      size++;
    }

    return currentNode;
  }

  pop() {
    let currentNode = this.headNode;

    if (this.headNode === null) return;
    else if (this.headNode.nextNode === null) {
      this.headNode = null;
      return;
    }

    while (currentNode.nextNode && currentNode.nextNode.nextNode !== null) {
      currentNode = currentNode.nextNode;
    }

    currentNode.nextNode = null;

    return currentNode;
  }

  contains(value) {
    let currentNode = this.headNode;

    let index = 0;

    while (currentNode !== null) {
      if (currentNode.value === value) return true;
      currentNode = currentNode.nextNode;
      index++;
    }

    return false;
  }

  find(value) {
    let currentNode = this.headNode;

    let index = 0;

    while (currentNode !== null) {
      if (currentNode.value === value) return index;
      currentNode = currentNode.nextNode;
      index++;
    }

    return false;
  }

  toString() {
    let string = " ";

    let currentNode = this.headNode;

    while (currentNode !== null) {
      string += `( ${currentNode.value} ) ->  `;

      currentNode = currentNode.nextNode;
    }

    string += "null";

    return string;
  }
}
