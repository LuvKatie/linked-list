class Linkedlist {
    constructor(head) {
        this.head = head;
    }

    append(value, node = this.lastNode()) {
        if(!this.head) {
            this.head = new Nodes();
            return;
        }

        if (!node.next) {
            node.next = new Nodes(value);
        }
    }
    
    prepend(value, node = this.firstNode()) {
        if (!node) { 
            this.head = new Nodes(value);
            return;
        }

        if (node) {
            this.head = new Nodes(value, node);
        }
    }

    // Return first node from head
    firstNode() {
        if(!this.head) {
            return null;
        }

        return this.head;
    }

    // Return last node
    lastNode(node) {
        if (!this.head) {
            return null;
        }

        node = this.head;
        while(node) {
            if(!node.next) {
                return node;
            }
            node = node.next;
        }
    }
}

class Nodes {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

const list = new Linkedlist();