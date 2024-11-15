
  const comments = [
      { text: 'Love this!', id: 523423 },
      { text: 'Super good', id: 823423 },
      { text: 'You are the best', id: 2039842 },
      { text: 'Ramen is my fav food ever', id: 123523 },
      { text: 'Nice Nice Nice!', id: 542328 }
    ];

const newComments = [
      ...comments.slice(0, 2)
    ];


console.log(newComments);
[{text: "Love this!", id: 523423}, {text: "Super good", id: 823423}]

function copySorted(arr) {
    return arr.slice().sort();
    }
    
    let arr = ["HTML", "JavaScript", "CSS"];
    
    let sorted = copySorted(arr);
    
    console.log( sorted ); // ["CSS", "HTML", "JavaScript"]
    console.log( arr ); // ["HTML", "JavaScript", "CSS"]

    you can also copy the array with this approach
arr.foreach{

   arr2.push(element)

}