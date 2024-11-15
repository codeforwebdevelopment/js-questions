enum Color { Red, Green, Blue,  };

myColor: Color;
this.myColor = Color.Blue;
console.log(this.myColor); // 2
console.log(Color[this.myColor]); // Blue
//declared outside the class. Here comma is optional.



enum TShirtSize { Small = 3, Medium = 5, Large = 8 }
var mySize = TShirtSize.Large;
console.log(mySize); //8  