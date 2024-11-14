var myCircle = {
    _radius: 1.1,
    get radius() { return this._radius; },
    set radius(radius) { this._radius = radius; },
    get area() { return this._radius * this._radius * Math.PI; },
    get circumference() { return 2 * this._radius * Math.PI; }
    }
    
    console.log(myCircle.radius); // 1.1 (Test getter)
    myCircle.radius = 2.2; // (Test setter)
    console.log(myCircle.radius); // 2.2
    console.log(myCircle.area); // 15.205308443374602
    console.log(myCircle.circumference); // 13.823007675795091