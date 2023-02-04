class Linkedlist {
    constructor(head = null) {
        this.head = head;
    }

    append(value, node) {
        if(!this.head) {
            this.head = new Nodes(value);
            return;
        } 

        node = this.lastNode()

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
    firstNode(node = this.head) {
        if(!node) {
            return null;
        }

        return node;
    }

    // Return last node
    lastNode(node = this.head) {
        if (!node.next) {
            return node;
        }

        return this.lastNode(node = node.next);
    }

    size(counter = 0, node = this.head) {
        if(!node) {
            return "Total of " + counter + " Nodes";
        }

        return this.size(counter + 1, node = node.next);
    }

    at(index, node = this.head) {
        if (index == 1) {
            return node;
        }

        return this.at(index - 1, node = node.next);
    }
}

class Nodes {
    constructor(value = null, next = null) {
        this.value = value;
        this.next = next;
    }
}

const list = new Linkedlist();