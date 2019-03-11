const Node = require('./node');

class MaxHeap {
	constructor() {
        this.root = null;
        this.parentNodes =[];
	}

	push(data, priority) {
	}

	pop() {
		
	}

	detachRoot() {
		
	}

	restoreRootFromLastInsertedNode(detached) {
		
	}

	size() {
		
	}

	isEmpty() {
		
	}

	clear() {
		
	}

	insertNode(node) {
        if(this.root == null){
            this.root = node;
            this.parentNodes =[node];
            return;
        }
            if(this.root.left == null){
                this.root.left = node;
                this.parentNodes = [this.root, node];
                return;  
            }
            if(this.root.right == null){
                this.root.right = node;
                this.parentNodes = [this.root.left, node];
                return;   
            }
            if(this.root.left.left == null){
                this.root.left.left = node;
                this.parentNodes =[this.root.left, this.root.right, node];
                return;  
            }
            if(this.root.left.right == null){
                this.parentNodes =[this.root.right, this.root.left.left, node];
                this.root.left.right = node;
                return;  
            }
            if(this.root.right.left == null){
                this.parentNodes =[this.root.right, this.root.left.left, this.root.left.right, node];
                this.root.right.left = node;
                return;   
            }
            if(this.root.right.right == null){
                this.parentNodes =[this.root.left.left, this.root.left.right, this.root.right.left, node];
                this.root.right.right = node;
                return;   
       	    }

		
	}

	shiftNodeUp(node) {
		
	}

	shiftNodeDown(node) {
		
	}
}

module.exports = MaxHeap;
