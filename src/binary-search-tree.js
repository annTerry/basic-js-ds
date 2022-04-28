const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  treeObject = null;
  root() {
      return this.treeObject;
  }
  createNode(data) {
      return { data: data, left: null, right: null }
  }
  searchInObject(data, tree) {
      if (tree === null) {
          return this.createNode(data);
      }
      if (tree.data > data) {
          tree.right = this.searchInObject(data, tree.right);

      }
      else if (tree.data < data) {
          tree.left = this.searchInObject(data, tree.left);
      }
      return tree;
  }
  add(data, tree = this.treeObject) {
      this.treeObject = this.searchInObject(data, tree);
  }

  has(data, tree = this.treeObject) {
      if (tree == null) return false;
      if (tree.data > data) {
          return this.has(data, tree.right);
      }
      if (tree.data < data) {
          return this.has(data, tree.left);
      } 
      return true;
  }

  find(data, tree = this.treeObject) {
      if (tree == null) return null;
      if (tree.data > data) {
          return this.find(data, tree.right);
      }
      else if (tree.data < data) {
          return this.find(data, tree.left);
      }
      return tree;
  }
  hardRemove(treeToFind, treeToConnect) { 
    if (!treeToFind) return null;
    if (!treeToConnect) return null;
    if (treeToFind.right == null) {
          treeToFind.right = treeToConnect;
          return { "connect": treeToFind, "prev": treeToFind.left };
      }
      let newNode = this.hardRemove(treeToFind.right, treeToConnect);
      if (newNode.prev) {
          treeToFind.right = newNode.prev;
      }
      return { "connect": newNode.connect, "prev": treeToFind }; 
  }
  remove(data, tree = this.treeObject) {
      console.log(tree);
      if (tree == null) return null;
      if (tree.data > data) {
          tree.right = this.remove(data, tree.right);
      }
      else if (tree.data < data) {
          tree.left = this.remove(data, tree.left);
      }
      else {
          if (!tree.left && !tree.right) {
              return null;
          }
          else if (tree.left && !tree.right) {
              return tree.left;
          }
          else if (!tree.left && tree.right) {
              return tree.right;
          }
          else {
              let newNode = this.hardRemove(tree.left, tree.right);
              newNode.connect.left = newNode.prev;
              if(this.treeObject.data==data)
              {
                this.treeObject=newNode.connect;
              }
              return newNode.connect;
          }
      }
      return tree;
  }

  min(tree = this.treeObject) {
      if (tree == null) return null;
      if (tree.right) {
          return this.min(tree.right)
      }
      return tree.data;
  }

  max(tree = this.treeObject) {
      if (tree == null) return null;
      if (tree.left) {
          return this.max(tree.left)
      }
      return tree.data;
  }
}

module.exports = {
  BinarySearchTree
};