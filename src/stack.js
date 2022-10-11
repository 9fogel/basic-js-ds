const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor() {
  this.counter = 0;
  this.array = [];
  }


  push(element) {
    this.array[this.counter] = element;
    this.counter++;
  }

  pop() {
    if (this.counter === 0) return undefined;

    this.counter--
    let topElem = this.array[this.counter];
    delete this.array[this.counter];
    return topElem;
  }

  peek() {
    return this.array[this.counter - 1];
  }
}

module.exports = {
  Stack
};
