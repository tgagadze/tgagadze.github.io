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
        this.list = {};
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        let tmp = new Node(val);
        if(this.head == null){
            this.list[this.length] = tmp;
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
}


let sia = new LinkedList();
sia.push('torni');
sia.push('rame');
sia.push('rume');
console.log(sia);