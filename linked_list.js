class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val){
        let newNode = new Node(val); // {val: goodbye, next: null}
        if(!this.head){ // hello 
            this.head = newNode;
            this.tail = this.head;
        }
        else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop(){
        if(!this.head){
            return undefined;
        }
        let current = this.head;
        let newTail = current;
        while(current.next){
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return current;
    }

    shift(){
        if(!this.head){
            return undefined;
        }
        let currHead = this.head;
        this.head = currHead.next;
        this.length--;
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return currHead;
    }
}

let list = new SinglyLinkedList();
list.push("Hello");
list.push("Goodbye");
list.push("!");
console.log(list.shift())
console.log(list.shift())
console.log(list.shift())
console.log(list);