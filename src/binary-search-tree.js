const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    this.rootNode = addInside(this.rootNode, data);

    function addInside(node, data) {
      if (!node) {
        return new Node(data);
      }

      if (node.data === data) {
        return node;
      }

      if (data < node.data) {
        node.left = addInside(node.left, data);
      } else {
        node.right = addInside(node.right, data);
      }

      return node;
    }
  }

  has(data) {
    return searchInside(this.rootNode, data);

    function searchInside(node, data) {
      if (!node) {
        return false;
      }

      if (node.data === data) {
        return true;
      }

      if (data < node.data) {
        return searchInside(node.left, data);
      } else {
        return searchInside(node.right, data);
      }

      // return data < node.data ? searchInside(node.left, data) : searchInside(node.right, data);
    }
  }

  find(data) {
    return findInside(this.rootNode, data);

    function findInside(node, data) {
      if (!node) {
        return null;
      }

      if (node.data === data) {
        return node;
      }

      if (data < node.data) {
        node = findInside(node.left, data);
      } else {
        node = findInside(node.right, data);
      }
      return node;
    }

  }

  remove(data) {
    this.rootNode = removeNode(this.rootNode, data);

    function removeNode(node, data) {
      if (!node) {
        return null;
      }

      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (node.data < data) {
        node.right = removeNode(node.right, data);
        return node;
      } else {//node.data = data, we should check further options
        if (!node.left && !node.right) {//if current node is a leaf (has no left/right childnodes)
          return null;
        }
        if (!node.left) {//if no left node -> go right
          node = node.right;//replace current node with his right childnode
          return node;//return new (replaced) childnode(tree)
        }
        if (!node.right) {
          node = node.left;
          return node;
        }

        //node has both right and left childnodes
        let minFromRightSide = node.right;
        while(minFromRightSide.left) {
          minFromRightSide = minFromRightSide.left;
        }
        node.data = minFromRightSide.data;//we found min element from right side and we place it's data instead of deleted node's data
        node.right = removeNode(node.right, minFromRightSide.data);//we should delete the node with min value(data) from right side

        return node;
      }
    }

  }

  min() {
    if (!this.rootNode) {
      return null;
    }

    let node = this.rootNode;
    while(node.left) {
      node = node.left;
    }

    return node.data;

  }

  max() {
    if (!this.rootNode) {
      return null;
    }

    let node = this.rootNode;
    while(node.right) {
      node = node.right;
    }

    return node.data;

  }
}

module.exports = {
  BinarySearchTree
};