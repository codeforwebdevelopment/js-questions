
  const people = [
      { name: 'Wes', year: 1988 },
      { name: 'Kait', year: 1986 },
      { name: 'Irv', year: 1970 },
      { name: 'Lux', year: 2015 }
    ];
// Is everyone 19 years old?
const allAged = people.every(person => ((new Date()).getFullYear())- person.year >= 19);
    console.log({allAged}); // {allAged: false}