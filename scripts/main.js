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
    firstNode() {
        if(!this.head) {
            return null;
        }

        return this.head;
    }

    // Return last node
    lastNode(node = this.head) {
        if (!node.next) {
            return node;
        }

        return this.lastNode(node = node.next);
    }

    size(node) {
        let counter = 0;

        node = this.head;

        while(node) {
            counter++
            node = node.next;

            if(!node) {
                return "Total of " + counter + " Nodes";
            }
            
        }
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