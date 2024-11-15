let arr = ["a", "b", "c"];
delete arr[1]; // remove "a"
console.log( arr[1] ); // undefined
// now arr = ["a",  , "b"];
console.log( arr.length ); // 3

That's why we use the splice method.

let arr = ["a", "b", "c"];
arr.splice(1, 1); // from index 1 remove 1 element
console.log( arr ); // ["a", "b"]

let arr = ["a", "c", "b", "d", "e"];
Remove 3 first elements and replace them with another
arr.splice(0, 3, "f", "g");
Remove 2 first elements
let removed = arr.splice(0, 2);
console.log( arr ) // now ["b", "d", "e"]

let arr = [1, 2, 5];
// from index -1 (one step from the end)
// delete 0 elements, then insert 3 and 4
arr.splice(-1, 0, 3, 4);
console.log( arr ); // 1,2,3,4,5

const comments = [
      { text: 'Love
this!', id: 523423 },
      { text: 'Super good', id: 823423 },
      { text: 'You are the best', id: 2039842 },
      { text: 'Ramen is my fav food ever', id: 123523 },
      { text: 'Nice Nice Nice!', id: 542328 }
    ];
    console.log(comments.splice(0, 1)); //[{id: 523423, text: "Love this!}];
 
// comments.splice(index, 1);