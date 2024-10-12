/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

var addTwoNumbers = function(l1, l2) {

    let carry = 0;
    let l3 = new ListNode(0, null);
    let l3_head = l3;

    while (l1 && l2) {
        let sum = l1.val + l2.val + carry;
        carry = 0;
        if (sum > 9) {
            sum = sum % 10;
            carry += 1;
        } else {
            carry = 0;
        }
        l3.next = new ListNode(sum);

        l1 = l1.next;
        l2 = l2.next;
        l3 = l3.next;
    }

    while (l1) {
        let sum = l1.val + carry;
        carry = 0;
        if (sum > 9) {
            sum = sum % 10;
            carry += 1;
        } else {
            carry = 0;
        }

        l3.next = new ListNode(sum);

        l1 = l1.next;
        l3 = l3.next;
    }

    while (l2) {
        let sum = l2.val + carry;
        carry = 0;
        if (sum > 9) {
            sum = sum % 10;
            carry += 1;
        } else {
            carry = 0;
        }

        l3.next = new ListNode(sum);

        l2 = l2.next;
        l3 = l3.next;
    }

    if (carry > 0) {
        l3.next = new ListNode(carry);
    }

    return l3_head.next;

};

let l1 = new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9)))))));
let l2 = new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9))));

console.log(addTwoNumbers(l1, l2));