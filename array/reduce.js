// - Arrays (e.g. 
    [1, 2].reduce((sum, summand) => sum + summand, 0);


    let arr = [1, 2, 3, 4, 5];
let result = arr.reduce((sum, current) => sum + current, 0);
console.log(result); // 15

  const inventors = [
     { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955, caloriesIntake: 2500, carbs: 10, fat: 30   },
     { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727, caloriesIntake: 2200,  carbs: 20, fat: 10    },
     { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642, caloriesIntake: 1500,  carbs: 25, fat: 5    },
     { first: 'Marie', last: 'Curie', year: 1867, passed: 1934, caloriesIntake: 1800, carbs: 30, fat: 15    },
     { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630, caloriesIntake: 2000 , carbs: 30, fat: 2   },
   ];

   const totalYears = inventors.reduce((total, inventor) => {
     return total + (inventor.passed - inventor.year);
   }, 0);
   console.log(totalYears); //364
   
       let totalca = inventors.reduce(function (sum, item) {  
      return sum + item['caloriesIntake'];
    }, 0);
console.log(totalca); //10000

    let totalcalValue = inventors.reduce(function (buckets, item) {
      let calories = item.caloriesIntake;
      let carbs = item.carbs;
      let fat = item.fat;
      buckets['caloriesIntake'] += calories;
      buckets['carbs'] += carbs;
      buckets['fat'] += fat;
      return buckets;
    },{ caloriesIntake: 0, carbs: 0, fat: 0 });
console.log(totalcalValue); //{caloriesIntake: 10000, carbs: 115, fat: 62}

let finalValue = 
inventors
.reduce((acc, character) => {
          return character.first === 'Johannes'
            ? acc.concat(Object.assign({}, character, { alsoSeenIn: ['year'] }))
            : acc;
        }, [])

    console.log(
finalValue
)  
// {alsoSeenIn: Array[1]
//  0: "year"
// ,
// caloriesIntake: 2000
// , carbs: 30
// , fat: 2
// , first: "Johannes"
// , last: "Kepler"
// , passed: 1630
// , year: 1571}

// Sum up the instances of each of these

   const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck', 'pogostick'];
   const transportation = data.reduce(function(obj, item) {
     if (!obj[item]) {
       obj[item] = 0;
     }
     obj[item]++;
     return obj;
   }, {});  
   console.log(transportation); //{bike: 2, car: 5, pogostick: 1, truck: 3, van: 2, walk: 2}
    
      var dataObj = data.reduce((obj, name) => {
     obj[name] = obj[name] ? ++obj[name] : 1;
     return obj;
   }, {});
   console.log(dataObj); //{bike: 2, car: 5, pogostick: 1, truck: 3, van: 2, walk: 2} 

   const numbers = [10, 20, 30, 40];
    const doubledOver50 = numbers.reduce((finalList, num) => {
      num = num * 2; //double each number (i.e. map)
      //filter number > 50
      if (num > 50) {
        finalList.push(num);
      }
      return finalList;
    }, []);
    console.log(doubledOver50); // [60, 80]

//    Imperative
     let totalsum= 0;
    for (let i = 0; i < numbers.length; i++) {
      totalsum += numbers[i];
    }
       console.log(totalsum); //100
   Declarative
    let totalc = numbers.reduce(function (sum, item) {
      return sum + item;
    });
  console.log(totalc); //100

      const isParensBalanced = (str) => {
      return str.split('').reduce((counter, char) => {
        if (counter < 0) { //matched ")" before "("
          return counter;
        } else if (char === '(') {
          return ++counter;
        } else if (char === ')') {
          return --counter;
        } else { //matched some other char
          return counter;
        }
      }, 0); //<-- starting value of the counter
    }
    isParensBalanced('(())') // 0 <-- balanced
    isParensBalanced('(asdfds)') //0 <-- balanced
    isParensBalanced('(()') // 1 <-- not balanced
    isParensBalanced(')(') // -1 <-- not balanced



    