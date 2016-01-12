// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, node) {
  //default to node or document.body
  node = node || document.body;

  var nodes = [];

  // start searching for className at top of tree on page

  // check current node
  var classes = node.className.split(' ');
  if(classes.indexOf(className) >= 0){
    nodes.push(node);
  }
  // find node's children
  if (node.children.length > 0) {
    for (var i = 0; i < node.children.length; i++) {
      //if found, push node into nodes array
      nodes = nodes.concat(getElementsByClassName(className, node.children[i]));
    }
  }
  return nodes;
};
