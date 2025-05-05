// every is used when you want to derive a single boolean value from the whole array after matching the condition. This method is available in the array prototype. 

// Array.prototype.every()
  const people = [
      { name: 'Wes', year: 1988 },
      { name: 'Kait', year: 1986 },
      { name: 'Irv', year: 1970 },
      { name: 'Lux', year: 2015 }
    ];
// Is everyone 19 years old?
const allAged = people.every(person => ((new Date()).getFullYear())- person.year >= 19);
    console.log({allAged}); // {allAged: false}