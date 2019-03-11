const Node = require('./node');

class MaxHeap {
	constructor() {
        this.root = null;
        this.parentNodes =[];
	}

	push(data, priority) {
        // const node = new Node(data, priority);
		// insertNode(node);
        // shiftNodeUp(node);
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
        // if(this.root == null && this.parentNodes == [])
        // return true;
        // else 
        // return false;
	}

	clear() {
        this.root = null;
        this.parentNodes = []; 
	}
//вставить узел
	insertNode(node) {
        if(this.root == null){
            this.root = node;
            this.parentNodes =[];
            if(this.root.left == null){
                this.parentNodes = [this.root];

            }
            if(this.root.right == null){
                this.parentNodes = [this.root, this.root.left];
                return;  
            }
            if(this.root.left.left == null){
                this.parentNodes = [this.root.left, this.root.right];
                return;   
            }
            if(this.root.right.left == null){
                this.parentNodes =[this.root.left, this.root.right, this.root.left.left];
                return;  
            }
            if(this.root.right.right == null){
                this.parentNodes =[this.root.right, this.root.left.left, this.root.left.right];
                return;  
            }
            return;
        }
            if(this.root.left == null){
                this.root.left = node;
                this.parentNodes =[];
                this.parentNodes = [this.root, this.root.left];
                return;  
            }
            if(this.root.right == null){
                this.root.right = node;
                this.parentNodes =[];
                this.parentNodes = [this.root.left, this.root.right];
                return;   
            }
            if(this.root.left.left == null){
                this.root.left.left = node;
                this.parentNodes =[];
                this.parentNodes =[this.root.left, this.root.right, this.root.left.left];
                return;  
            }
            if(this.root.left.right == null){
                this.root.left.right = node;
                this.parentNodes =[];
                this.parentNodes =[this.root.right, this.root.left.left, this.root.left.right];
                return;  
            }
            if(this.root.right.left == null){
                this.root.right.left = node;
                this.parentNodes =[];
                this.parentNodes =[this.root.right, this.root.left.left, this.root.left.right, this.root.right.left];
                return;   
            }
            if(this.root.right.right == null){
                this.root.right.right = node;
                this.parentNodes =[];
                this.parentNodes =[this.root.left.left, this.root.left.right, this.root.right.left, this.root.right.right];
                return; 
            }
	}

	shiftNodeUp(node) {

        while (node.parent!=null && node.priority>node.parent.priority){
            node.swapWithParent();
        }
                this.clear();
                this.insertNode(node);
	}

	shiftNodeDown(node) {
		
	}
}

module.exports = MaxHeap;
