const Node = require('./node');

class MaxHeap {
	constructor() {
        this.root = null;
        this.parentNodes =[];
	}

	push(data, priority) {
        let node = new Node(data, priority);
        this.insertNode(node);
        this.shiftNodeUp(node);
	}

	pop() {
        if(this.root == null){
            return;
        }
        let k = this.root.data;
        let n = this.detachRoot();
        //this.restoreRootFromLastInsertedNode(n);
        // this.shiftNodeDown(this.root);
        return k;
	}

	detachRoot() {
        var nroot = new Node();
        nroot = this.root;
        this.root = null;	
        this.parentNodes.shift();	
        return nroot;
	}
    
	restoreRootFromLastInsertedNode(detached) {
        if(detached.left.left==null){
            let a = detached.right;
            detached.right = null;
            a.parent =null;
            this.root = a;
            this.insertNode(detached.left);
            this.parentNodes = [this.root, this.root.left];
            return;
        }
        if(detached.left.right==null){
            let a = detached.left.left;
            detached.left.left = null;
            a.parent =null;
            this.root = a;
            this.insertNode(detached.left);
            this.insertNode(detached.right);
            this.parentNodes = [this.root.left, this.root.right];
            return;
        }
        if(detached.right.left==null){
            let a = detached.left.right;
            detached.left.right = null;
            a.parent =null;
            this.root = a;
            this.insertNode(detached.left);
            this.insertNode(detached.right);
            this.parentNodes = [this.root.left, this.root.right, this.root.left.left];
            return;
        }
        if(detached.right.right==null){
            let a = detached.right.left;
            detached.right.left = null;
            a.parent =null;
            this.root = a;
            this.insertNode(detached.left);
            this.insertNode(detached.right);
            this.parentNodes = [this.root.right, this.root.left.left, this.root.left.right];
            return;
        }
        if(detached.left.left.left==null){
            let a = detached.right.right;
            detached.right.right = null;
            a.parent =null;
            this.root = a;
            this.insertNode(detached.left);
            this.insertNode(detached.right);
            this.parentNodes = [this.root.right, this.root.left.left, this.root.left.right, this.root.right.left];
            return;
        }
	}

	size() {
        if(this.root==null){
            return 0;
        }
        else{
            if(this.root.left == null){
                return 1;
            }
            else{
                if(this.root.left.left == null){
                    return 2;
                }
            }
        }
	}

	isEmpty() {
        if(this.root == null){
            return true;
        }
        else{
            return false;
        }
	}

	clear() {
        this.root = null;
        this.parentNodes = []; 
    }
    
	insertNode(node) {
        if(this.root == null){
            this.root = node;
            this.parentNodes =[];
            if(this.root.left == null){
                this.parentNodes = [this.root];
                return;
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
                node.parent = this.root;
                return;  
            }
            if(this.root.right == null){
                this.root.right = node;
                this.parentNodes =[];
                this.parentNodes = [this.root.left, this.root.right];
                node.parent = this.root;
                return;   
            }
            if(this.root.left.left == null){
                this.root.left.left = node;
                this.parentNodes =[];
                this.parentNodes =[this.root.left, this.root.right, this.root.left.left];
                node.parent = this.root.left;
                return;  
            }
            if(this.root.left.right == null){
                this.root.left.right = node;
                this.parentNodes =[];
                this.parentNodes =[this.root.right, this.root.left.left, this.root.left.right];
                node.parent = this.root.left;
                return;  
            }
            if(this.root.right.left == null){
                this.root.right.left = node;
                this.parentNodes =[];
                this.parentNodes =[this.root.right, this.root.left.left, this.root.left.right, this.root.right.left];
                node.parent = this.root.right;
                return;   
            }
            if(this.root.right.right == null){
                this.root.right.right = node;
                this.parentNodes =[];
                this.parentNodes =[this.root.left.left, this.root.left.right, this.root.right.left, this.root.right.right];
                node.parent = this.root.right;
                return; 
            }
	}

	shiftNodeUp(node) {
        while (node.parent!=null && node.priority>node.parent.priority){
            node.swapWithParent();
            this.shiftNodeUp(node);
            }
            this.clear();   
            if(node.parent !=null){
                if(node.parent.parent!=null){
                    if(node.parent.parent.parent!=null){
                        this.insertNode(node.parent.parent.parent); 
                        return; 
                    }
                    this.insertNode(node.parent.parent); 
                    return; 
                }
                this.insertNode(node.parent); 
                return;
            }
            this.insertNode(node);
	}

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

//43
