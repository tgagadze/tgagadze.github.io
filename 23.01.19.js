class ArrayList{
    constructor(){
        this.list = {};
        this.length = 0;
    }
    push(val){
        this.list[this.length] = val;
        this.length++;
    }
    pop(){
        let lastValue = this.list[this.length-1];
        delete this.list[this.length-1];
        this.length--;
        return lastValue;
    }
    get(index){
        if(index >= 0 && index < this.length) 
            return this.list[index];
        return "Index Out Of Range!!!";
    }
    delete(index){
        if(index >= 0 && index < this.length){
            let retVal = this.list[index];
            for(let pop in this.list){
                if(pop > index){
                    this.list[index] = this.list[pop];
                    delete this.list[pop];
                    index++;
                }
            }
            this.length--;
            return retVal;
        }
        return "Index Out Of Range!!!";
    }
    
}

let myArray = new ArrayList();




class Node{
    constructor(val = ""){
        this.value = val;
        this.nextNode = null;
    }
}



class LinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        let tmp = new Node(val);
        if(this.head == null){
            this.head = tmp;
            this.tail = tmp;
        }
        else {   
            this.tail.nextNode = tmp;
            this.tail = tmp;
        }
        this.length++;
    }
    pop(){
        let retVal = this.tail;
        // this.tail = null;
        return retVal;
    }
    get(index) {
        if(index < 0 || index > this.length){
            return  console.log('Out of Range!!!');
        }
        let currentNode = this.head;
        for(let i = 0; i < index; i++){
            currentNode = currentNode.nextNode;
        }
        return currentNode;
    }
    delete(index){
        if(index < 0 || index > this.length){
            return  console.log('Out of Range!!!');
        }
        let currentNode = this.head;
        if(index == 0){
            this.head = this.head.nextNode;
            this.length--;
            return currentNode;
        }
        if(index == 1){
            currentNode = currentNode.nextNode;
            this.head.nextNode = currentNode.nextNode;
            this.length--;
            return currentNode;
        }
        if(index == this.length){
            for(let i = 1; i < index; i++){
                currentNode = currentNode.nextNode;
            }    
            this.tail = currentNode;
            let retVal = currentNode.nextNode;
            currentNode.nextNode = null;
            return retVal;
        }

        for(let i = 1; i < index; i++){
            currentNode = currentNode.nextNode;
        }
        let retVal = currentNode.nextNode;
        currentNode.nextNode = currentNode.nextNode.nextNode;
        this.length--;
        return retVal;
    }
    print(){
        let currentNode = this.head;
        while(currentNode != null){
            console.log(currentNode.value);
            currentNode = currentNode.nextNode;
        }
    }
}
