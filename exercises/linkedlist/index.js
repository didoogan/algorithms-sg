// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next) {
        this.data = data;
        this.next = next || null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(data) {
        this.head = new Node(data, this.head);
    }

    size() {
        if (!this.head) {
            return 0;
        }

        let size = 1;
        let currentNode = this.head;

        while(currentNode.next) {
            size++;
            currentNode = currentNode.next;
        }

        return size;
    }

    getFirst() {
        return this.head;
    }

    getLast() {
        let currentNode = this.head;

        while(currentNode.next) {
            currentNode = currentNode.next;
        }

        return currentNode;
    }

    clear() {
        this.head = null;
    }

    removeFirst() {
        if (!this.head) {
            return
        } else {
            this.head = this.head.next;
        }
    }

    removeLast() {
        if (!this.head) {
            return;
        }

        let parrentNode = this.head;
        if (!parrentNode.next) {
            this.head = null;
            return;
        }

        let childNode = parrentNode.next;

        while(childNode.next) {
            parrentNode = parrentNode.next;
            childNode = parrentNode.next;
        }

        parrentNode.next = null;


    }
}

module.exports = { Node, LinkedList };
