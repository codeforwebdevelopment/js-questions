// Find is like a filter, but it returns just the one you are looking for.

// Array.prototype.find()-
// array.find(function(element, index, array), thisValue)

var data = [20, 18, 15, 10, 9];
var found = data.find(function(element) { return element < 12;
});
console.log(found); // 10

var numbers = [1, 2, 3];
var oddNumber = numbers.find((x) => x % 2 == 1);
console.log(oddNumber); //1

const characters = [
    { id: 1, name: 'captain_america', env: 'marvel' },
    { id: 2, name: 'black_widow', env: 'marvel' },
    { id: 3, name: 'wonder_woman', env: 'dc_comics' },
  ];
// find the comment with the ID of 2?
    const charactersName = characters.find(comment => comment.id === 2);
    console.log(charactersName); // {id: 2, name: "black_widow", env: "marvel"}


    function getCharacter(name) {
        return character => character.name === name;
      } 
      console.log(characters.find(getCharacter('captain_america'))); // { id: 3, name: 'captain_america' }