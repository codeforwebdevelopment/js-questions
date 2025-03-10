// input devices

var Gestures = function (output) {
    this.output = output;
    
    this.tap = function () { this.output.click(); }
    this.swipe = function () { this.output.move(); }
    this.pan = function () { this.output.drag(); }
    this.pinch = function () { this.output.zoom(); }
    
    };
    
    var Mouse = function (output) {
    this.output = output;
    
    this.click = function () { this.output.click(); }
    this.move = function () { this.output.move(); }
    this.down = function () { this.output.drag(); }
    this.wheel = function () { this.output.zoom(); }
    
    };
    
    // output devices
    
    var Screen = function () {
    this.click = function () { console.log("Screen select"); }
    this.move = function () { console.log("Screen move"); }
    this.drag = function () { console.log("Screen drag"); }
    this.zoom = function () { console.log("Screen zoom in"); }
    };
    
    var Audio = function () {
    this.click = function () { console.log("Sound oink"); }
    this.move = function () { console.log("Sound waves"); }
    this.drag = function () { console.log("Sound screetch"); }
    this.zoom = function () { console.log("Sound volume up"); }
    };
    
    function run() {
    
    var screen = new Screen();
    var audio = new Audio();
    
    var hand = new Gestures(screen);
    var mouse = new Mouse(audio);
    
    hand.tap();
    hand.swipe();
    hand.pinch();
    
    mouse.click();
    mouse.move();
    mouse.wheel();
    
    }
    
    // Screen select
    // Screen move
    // Screen zoom in
    // Sound oink
    // Sound waves
    // Sound volume up