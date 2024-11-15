for (const [i, v] of arr.entries()) {
      console.log(i, v); // Prints "0 a", "1 b", "2 c"
    }
    
      var numbers = [1, 2, 3];
        var val = numbers.entries();
        console.log(val.next().value);  //[0, 1]
        console.log(val.next().value); //[1, 2]
    console.log(Object.entries({ 'a': 'A', 'b': 'B' })); //[["a","A"],["b","B"]]

console.log(Object.entries('david')) // [["0","d"],["1","a"],["2","v"],["3","i"],["4","d"]]