
  const people = [
      { name: 'Wes', year: 1988 },
      { name: 'Kait', year: 1986 },
      { name: 'Irv', year: 1970 },
      { name: 'Lux', year: 2015 },
      { name: 'Kat', year: 1986 }
    ];

  // is at least one person 19?
    const isAdult = people.some(function(person) {
      const currentYear = (new Date()).getFullYear();
      if(currentYear - person.year >= 19) {
        return true;
  }
});
    console.log({isAdult}); //{isAdult: true}

    const isAdult2 = people.some(person => ((new Date()).getFullYear()) - person.year >= 19);
    console.log({isAdult2}); //{isAdult2: true}

    function personAvailable(env) {
      return character => character.name === env;
    }
    console.log(people.some(personAvailable('Kat'))); //true