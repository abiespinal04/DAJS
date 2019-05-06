

class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }

    insert(data){
        if(data < this.data && this.left){
            this.left.insert(data);
        } else if( data < this.data){
            this.left = new Node(data);
        } else if (data > this.data && this.right){
            this.right.insert(data);
        } else if (data > this.data){
            this.right = new Node(data);
        }
    }

    constains(data){
        if(data === this.data){
            return true;
        } else if (data > this.data && this.right){
            return this.right.constains(data);
        } else if(data < this.data && this.left){
            return this.left.constains(data);
        }
        return false;
    }
}

const test = new Node(50);

test.insert(40);
console.log(test.left.data)
//prints 40

console.log(test.constains(40));
//return true
