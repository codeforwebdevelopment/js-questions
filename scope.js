
console.log('scopeeeeeeeeeee');

function print(msg,sc=''){
console.log(msg, sc)
}

function foo3() {
 print(a, 'foo3');
  var a = 5;
  print(a, 'foo3foo3');
}
foo3();

let foo4 = function () {
  print(a, 'foo4 before');
  var a = 5;
  print(a, 'foo4');
};

foo4();

  var text = 'outside';
function logIt(){
    console.log(text);
    var text = 'inside';
};
logIt();

function init() {
  if (true) {
    if (true) {
      if (true) {
        if (true) {
          if (true) {
            var name = "Devtools Tech";
          }
        }
      }
    }
  }

  // logs Devtools Tech as name is scoped to the function `init`
  console.log(name);
}
init();

function analytics() {
  // outer scope
  const category = "Devtools Tech";

  function track(action) {
    // inner scope
    // window.ga("send", {
    //   eventCategory: category,
    //   eventAction: action,
    // });
       scope("send", {
      eventCategory: category,
      eventAction: action,
    });
  }

  return track;
}

function scope(args){
print(args, 'init')
} 

const track = analytics();
track("Question Clicked");