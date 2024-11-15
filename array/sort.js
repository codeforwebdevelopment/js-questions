// Sorted based on weight.

let studentList = [
    { name: "John", weight: 220, measurement: "lbs" },
    { name: "Kate", weight: 58, measurement: "kg" },
    { name: "Mike", weight: 137, measurement: "lbs" },
    { name: "Sophie", weight: 66, measurement: "kg" },
   ];
   
   let sortByWeight = function(x,y){
    let xW = x.measurement == "kg" ? x.weight : x.weight * 0.45;
    let yW = y.measurement == "kg" ? y.weight : y.weight * 0.45;
    return xW > yW ? 1 : -1;
   }
   
   console.log(studentList.sort(sortByWeight));
   // Kate, Mike, Sophie, John 

//    Sort the inventors by birthdate, oldest to youngest
   const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    ];
    
    const ordered = inventors.sort(function(a, b) {
    if(a.year > b.year) {
      return 1;
    } else {
      return -1;
    }
    });
    
    or you can use this
    const ordered = inventors.sort((a, b) => a.year > b.year ? 1 : -1);
    
    console.log(ordered); // Galileo, Johannes, Isaac, Marie, Albert

    Sort the inventors by years lived
    const oldest = inventors.sort(function(a, b) {
        const lastInventor = a.passed - a.year;
        const nextInventor = b.passed - b.year;
        return lastInventor > nextInventor ? -1 : 1;
        });
        
        console.log(oldest); // Isaac, Galileo, Albert, Marie, Johannes

        Sort the people alphabetically
        const people = ['red', 'green', 'blue'];
const data = people.sort((lastOne, nextOne) => {
const [aLast, aFirst] = lastOne.split(',');
const [bLast, bFirst] = nextOne.split(',');
return aLast > bLast ? 1 : -1;
});
console.log(data); // ["blue", "green", "red"]
In the sort method, if it contains mixed variables like string, number both then it also gives you a sorted array and unrelated thing in the end. 
let values = new Array(6,3,'xyz').sort();
console.log(values); [3, 6, "xyz"]
let values = new Array(6,x,3,'xyz').sort();
console.log(values); [3, 6, "xyz", 'x']