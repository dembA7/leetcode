/**
 * // Definition for a _Node.
 * function _Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

function _Node(val, next = null, random = null) {
    this.val = val;
    this.next = next;
    this.random = random;
}


/**
 * @param {_Node} head
 * @return {_Node}
 */
var copyRandomList = function(head) {
    
    let map = new Map();

    let current = head;
    while (current) {
        map.set(current, new _Node(current.val));
        current = current.next;
    }

    current = head;
    while (current) {
        let newNode = map.get(current);
        newNode.next = map.get(current.next) || null;
        newNode.random = map.get(current.random) || null;
        current = current.next;
    }

    return map.get(head);

};

let node1 = new _Node(7);
let node2 = new _Node(13);
let node3 = new _Node(11);
let node4 = new _Node(10);
let node5 = new _Node(1);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

node2.random = node1;
node3.random = node5;
node4.random = node3;
node5.random = node1;

console.log(copyRandomList(node1));