class Node{
    constructor(data){
        this.data = data;
        this.children = [];
    }

    add(data){
        this.children.push(new Node(data));
    }

    remove(data){
    this.children = this.children.filter(node => {
            return node.data !== data;
        })

    }
}

class Tree{
    constructor(){
        this.root = null;
    }

    traverseBF(fn){
        const arr = [this.root];
        while(arr.length){
            const node = arr.shift();

            arr.push(...node.children);
            fn(node); //iterator 
        }
    }

    traverseDF(fn){
        const arr = [this.root];
        while(arr.length){
            const node = arr.shift();

            arr.unshift(...node.children);
            fn(node)
        }
    }

    levelWidth(){
        const arr = [this.root, 's'];
        const counters = [0];

        while(arr.length > 1){
            const node = arr.shift();

            if(node === 's'){
                counters.push(0);
                arr.push('s');
            }else{
                arr.push(...node.children);
                counters[counters.length -1]++;
            }

        }

        return counters;

    }

}

module.exports = {Node,Tree};