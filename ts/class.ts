
// class
class QuoteModel {
    constructor(public text: String, public timeCreated: String) {}
  }
  
  class AppComponent {
    public quoteList: QuoteModel[] = [];
  
    private daysOfTheWeeks = ['Sun', 'Mon', 'Tue', 'Wed', 'Thurs', 'Fri', 'Sat'];
  
    addNewQuote(quote: String) {
      const date = new Date();
  
      const dayOfTheWeek = this.daysOfTheWeeks[date.getDate()];
  
      const day = date.getDay();
  
      const year = date.getFullYear();
  
      this.quoteList.push(
        new QuoteModel(quote, `${dayOfTheWeek} ${day}, ${year}`)
      ); // to create objects we can use QuoteModel class
  
      console.log(this.quoteList);
    }
  
    constructor() {
      console.log(this.addNewQuote('Motivational')); // {text: "Motivational", timeCreated: "Sat 4, 2020" }
    }
  }
  
  class User {
    username = '';
    tags = [];
    followers: string[] = [];
  
    /**
        * @param {string} username
        @param {Array.<string>} tags
        ***/
    constructor(username, tags) {
      this.username = username;
      this.tags = tags;
      this.followers = [];
    }

    addFollower(user) {
      this.followers.push(user);
    }
    /**
        * Get the followers who are tagged with tag
        @param {string} tag
        * @returns {Array.<User>}
        */
    getFollowers(tag) {
      // Fill in this line
      // return this.followers.filter(
      // (follower) => follower.tags.includes (tag));
      // return this. followers.includes (
      //     (follower) => follower.tags.filter(tag)
      //     );
      //     return this.followers.filter(
      // (follower) =>
      // follower.tags.filter((followerTag) => tag ===
      // followerTag
      // ).length > 0
      // );
      // return this.followers.map(
      // (follower) => follower.tags.includes(tag)
      // );
    }
  }
  
  // let userObj = new User('a', ['1', '2', '3', '4', '5']);
  // userObj.addFollower('b');
  // console.log(userObj.getFollowers('2'));
  
  // Polymorphism
  class Teacher {
    public work(): void {
      console.log('I am teaching');
    }
  }
  class Student {
    public work(): void {
      console.log('I am studying');
    }
  }
  
  interface Point {
    x: number;
  
    y: number;
  
    distance(other: Point): number;
  }
  
  // Classes are the implementations:
  
  class PointImplementation implements Point {
    public x: number;
  
    public y: number;
  
    constructor(x: number, y: number) {
      this.x = x;
  
      this.y = y;
    }
  
    public distance(other: Point): number {
      return Math.sqrt(
        Math.pow(this.x - other.x, 2) + Math.pow(this.y - other.y, 2)
      );
    }
  }
  
  // Abstraction
  
  abstract class Company {
    name: string;
  
    constructor(name: string) {
      this.name = name;
    }
  
    display(): void {
      console.log(this.name);
    }
  
    abstract createObj(string): Company;
  }
  
  class PersonDetails extends Company {
    empCode: number;
  
    constructor(name: string, code: number) {
      super(name); // must call super()
  
      this.empCode = code;
    }
  
    createObj(name: string): Company {
      return new PersonDetails(name, 1);
    }
  }
  
  // let emp: Company = new PersonDetails('Sam', 100);
  
  // emp.display(); //Sam
  
  // let emp2: Company = emp.createObj('smith');
  // console.log(emp2); // PersonDetails { name: 'smith', empCode: 1 }
  
  // encapsulation
  
  class person {
    name: string;
  
    id: string;
  
    add: string;
  
    constructor(name, id) {
      this.name = name;
  
      this.id = id;
    }
  
    add_Address(add) {
      this.add = add;
    }
  
    getDetails() {
      return `Name is ${this.name},Address is: ${this.add}`;
    }
  }
  
  // let person1 = new person('Mukul', 21);
  
  // person1.add_Address('Delhi');
  
  // console.log(person1.getDetails()); // Name is Mukul,Address is: Delhi
  