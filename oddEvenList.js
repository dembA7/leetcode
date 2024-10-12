/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function(head) {

    if (!head || !head.next) return head;
    
    let odd = head;
    let even = head.next;
    let evenHead = even; // Crea una nueva lista para almacenar los valores pares

    while (even && even.next) {
        odd.next = odd.next.next; // Mueve el nodo impar al siguiente nodo impar
        odd = odd.next; // Actualiza el puntero a la variable anterior
        even.next = even.next.next; // Mueve el nodo par al siguiente nodo par
        even = even.next; // Actualiza el puntero a la variable anterior
    }

    odd.next = evenHead; // Conecta el último elemento de la lista impar con la lista par

    return head;
};

function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}

// Crear una lista: 1 -> 2 -> 3 -> 4 -> 5
let list = new ListNode(1);
list.next = new ListNode(2);
list.next.next = new ListNode(3);
list.next.next.next = new ListNode(4);
list.next.next.next.next = new ListNode(5);

function printList(head) {
    let current = head;
    while (current) {
        process.stdout.write(current.val + ' -> ');
        current = current.next;
    }
    console.log('null');
}

printList(oddEvenList(list));