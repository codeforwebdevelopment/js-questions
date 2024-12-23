// Tip: Visiting all elements in a tree (DOM) is a classic Depth-First-Search algorithm application.

function Traverse(p_element,p_callback) {
p_callback(p_element);
var list = p_element.children;
for (var i = 0; i < list.length; i++) {
Traverse(list[i],p_callback); // recursive call
}
}