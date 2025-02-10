// Polyfill for Array.prototype.includes(
    if (!Array.prototype.includes) {
        Array.prototype.includes = function(searchElement) {
            for (var i = 0; i < this.length; i++) {
                if (this[i] === searchElement) {
                    return true;
                }
            }
            return false;
        };
    }
    
    
    
    
    [1, 2, 99].map(num => console.log(num));
    // gives us:
    [1, 2, 99].map(function(num) {
        return console.log(num);
    });
    
    (x, y) => {
        return x + y
    };
    // Babel gives us this:
    (function(x, y) {
        return x + y;
    })