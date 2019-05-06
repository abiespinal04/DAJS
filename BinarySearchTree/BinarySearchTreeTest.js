

class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = right;
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
            return this;
        } else if (data > this.data && this.right){
            return this.right.constains(data);
        } else if(data < this.data && this.left){
            return this.left.constains(data);
        }
        return null;
    }
}