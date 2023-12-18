class Node{
    constructor(key=null, left = null, right = null){
     this.key = key;
     this.left = left;
     this.right = right;
    }
}


class Tree{
    constructor(array){
    this.root = this.buildTree(array);
    }




sortNRemoveDup(array) {
const sorted = [...new Set(array)].sort((a, b) => a - b);
return sorted;
}


minValue(root){
    let minv = root.key;
    while(root.key !== nul){
        minv = root.left.key
        root = root.left
        
    }
return minv
}


buildTree(array){
    let sorted = sortNRemoveDup(array)
    if(sorted.length == 0){
        return null
    }
    let mid = parseInt(sorted.length/2)
    root = new Node(sorted[mid],
        this.buildTree(sorted.slice(0,mid)),
        this.buildTree(sorted.slice(mid+1))
    );

    return root;

}


insert(value, root = this.root){
    if(root.key == null){
        return new Node(value)
    }
    root.key < value?
    (root.right = this.insert(value, root.right)
    ):
    (root.left = this.insert(value, root.left))
    return root

}

delete(value, root= this.root){
    if(root.key === null){
        return root
    }
if(root.key < value){
    return this.delete(value, root.right)
}
else if(root.key > value){
    return this.delete(value, root.left)
}
else{
    if(root.left == null){
        return root.right
    }
    else if(root.right == null){
        return root.left
    }
    root.key = this.minValue(root.right)
    root.right = this.delete(root.key)
    



}
}
find(value, root = this.root){
    node = root
    if(node === null){
     return null}
    if(node.key !== value){
        return node.key < value? find(value, root.right): find(value, root.left)
    } 
    return node
    

}

levelOrder(callback){
    if(!this.root){
        return []
    }
    const queue = [this.root]
    const results = []
    while(queue.length){
    let level = []
    let size = queue.length
    for(let i = 0; i< size; i++){
        const node = queue.shift()
        level.push(node.key)
        if(node.right){
            queue.push(node.right)
        } 
        if(node.left){
            queue.push(node.left)
        }
      if(callback){
        callback(node)
      }   
    results.push(level)
    }
   if(!callback){
return results
   }    
    

}    

}

preorder(callback){
    if(!this.root){
        return []
    }
const stack = [this.root]
const results = []
while(stack.length){
    let node = stack.pop()
    if(node.right){
        results.push(node.right)
    }
    if(node.left){
        results.push(node.left)
    }
if(callback){
    callback(node)
}
results.push(node.key)
}
if(!callback){
    return results
}

}

inorder(root = this.root, callback, result = []){
    if(!this.root){
        return []
    }
   if(root === null){
    return
   }
this.inorder(root.left, callback, result)
callback? callback(node): result.push(node.key)
this.inorder(root.right, callback, result)
if(result) return result
}

postorder(root = this.root, callback, result = []){
    if(!this.root){
        return []
    }
if(root === null){
    return 
}
if(root.left){
    this.postorder(root.left, callback, result)
}
if(root.right){
    this.postorder(root.right, callback, result)
}
callback? callback(root): result.push(root.key)
if(result) return result
}

height(root = this.root){
    if(root === null){
        return -1
    }
let leftHeight = this.height(root.left)    
let rightHeight = this.height(root.right)
return Math.max(leftHeight, rightHeight) + 1;

}

depth(node, root=this.root,level = 0){
    if(!node){
        return null
    }
    if(root === null){
        return 0
    }
if(root.key === node.key){
    return level
}
let count = this.depth(node, root.left, level + 1)
if(count !== 0){
    return count
}
return this.depth(node, root.right, level + 1)

}

isBalanced( node = this.root){
    if(node === null){
        return true
    }
  const heightDiff = Math.abs(
    this.height(node.left) - this.height(node.right)
  )
return ( heightDiff <= 1 && this.isBalanced(node.right) && this.isBalanced(node.left) )
  }

reBalance(){
    if(this.root == null){
        return 
    }
const sorted = [...new Set(this.inorder(),sort((a,b) => a-b))]
this.root = this.buildTree(sorted)
}


}





