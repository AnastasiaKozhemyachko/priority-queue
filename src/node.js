class Node {
	constructor(data, priority) {
		this.data = data;
		this.priority  = priority;
		this.parent = null;
		this.left = null;
		this.right =null;
	}

	appendChild(node) {
		if (!this.left){
			this.left = node;
			node.parent = this;
			return;
		}
		if (this.left) {
			if (this.right) {
				return;
			}
			this.right = node;
			node.parent = this;
			return;
		}		
	}

	removeChild(node) {
		node.parent = null;
		if(this.left == node){
			this.left = null;	
			return;
		}
		if(this.right == node){
			this.right = null;	
			return;
		}
		if(this.left != node && this.right != node){
			throw "node is not a child of this node"; 
		}
	}

	remove() {
		if (this.parent == null) {
			return;			
		}
		if (this.parent !== null) {
            this.parent.removeChild(this);
        }
	}
	swapWithParent() {
		if (this.parent == null){
			return;
		}
		if (this.parent!= null){
			
			var p = new Node();
			p = this.parent; 
			
			var pp; 
			if(this.parent.parent){
				pp = new Node();
			 	pp = this.parent.parent;
			}

			var pl; 
			if(this.parent.right){
				if(this.parent.right==this){
					pl = new Node();
					pl = this.parent.left;
				}
			}

			var pr;
			if(this.parent.left){
				if(this.parent.left==this){
					pr = new Node();
					pr = this.parent.right;
				}
			}

			var r,l;
			if(this.left){
				l = new Node();
				l = this.left;
			}
			if(this.right){
				r = new Node();
				r = this.right;
			}

			this.remove();
			if(pp!=undefined){
				p.remove();
			}
			if(r!=undefined){
				r.remove();
			}	
			if(l!=undefined){
				l.remove();
			}	
			if(pl!=undefined){
				pl.remove();
			}
			if(pr!=undefined){
				pr.remove();
			}

			if(pl){
				this.appendChild(pl);
			}
			this.appendChild(p);
			if(pr){
				this.appendChild(pr);
			}			
			if(pp!=undefined){
				pp.appendChild(this);
			}
			if(l!=undefined){
				p.appendChild(l);
			}
			if(r!=undefined){
				p.appendChild(r);
			}
		}
	}
}

module.exports = Node;
