const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
current=null;
last=null;
  getUnderlyingList() {
    return this.current;
  }

  enqueue(value) {
    let node=new ListNode(value);
    if(this.current)
    {
      this.last.next=node;
      this.last=node;
    }
    else
    {
      this.current=node;
      this.last=node;
    }
    return this.current;
  }

  dequeue() {
    let res=null;
    if(this.current)
    {
      res=this.current.value;
      this.current=this.current.next;
    }
    if(!this.current)
    {
      this.last=null;
    }
    return res;
  }
}

module.exports = {
  Queue
};
