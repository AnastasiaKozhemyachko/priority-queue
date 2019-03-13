const Node = require('./node');

class MaxHeap {
	constructor() {
        this.root = null;
        this.parentNodes =[];
	}

	push(data, priority) {
        var node = new Node(data, priority);
        
        this.shiftNodeUp(node);
        this.insertNode(node);
	}

	pop() {
		
	}

	detachRoot() {
        this.root = null;
		
	}
    
	restoreRootFromLastInsertedNode(detached) {
		
	}

	size() {
		
	}

	isEmpty() {
        // if(this.root == null && this.parentNodes == []){
        //     return true;
        // }
        // else{
        //     return false;
        // }
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
            if(this.root.left.left.left == null){
                this.parentNodes = [this.root.left.left, this.root.left.right, this.root.right.left, this.root.right.right];
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
//подднять вверх
	shiftNodeUp(node) {
        while (node.parent!=null && node.priority>node.parent.priority){
            node.swapWithParent();
            this.shiftNodeUp(node);
            }

                this.clear();
                this.insertNode(node);
	}
//опустить вниз
	shiftNodeDown(node) {
        while (node.right!=null && node.left!=null){
            if (node.right.priority > node.priority || node.left.priority > node.priority){
                if(node.left.priority > node.right.priority){
                    node.left.swapWithParent();
                    this.shiftNodeDown(node);
                }
                else{
                    node.right.swapWithParent();
                    this.shiftNodeDown(node);
                }
            }
        }
        while (node.left!=null){
            if (node.left.priority > node.priority){
                    node.left.swapWithParent();
                    this.shiftNodeDown(node);
                }
        }
        this.clear();
        if(node.parent.parent){
            this.insertNode(node.parent.parent);
        }
    }
}
module.exports = MaxHeap;
