function CallFunction(id) {
    alert("Double clicked");
    }

    function CallFunction1(id) {
        document.getElementById(id).style.background = "#c0c0c0";
        }

        function CallFunction2(id) {
            document.getElementById("lblText").innerHTML =
            document.getElementById(id).value;
            }

            const pressed = [];
const secretCode = 'xyz';

window.addEventListener('keyup', (e) => {
console.log(e.key); //b
pressed.push(e.key);
pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
if (pressed.join('').includes(secretCode)) {
console.log('DING DING!');
}
console.log(pressed,'fd'); //["g"]
});


 // This event is triggered on mouse right-click.
window.oncontextmenu = function () {
// alert('disable right click of screen)
return false;
}


function GotFocus(id) {
    document.getElementById(id).style.background = "#c0c0c0";
    }

    function CallFunction3(id) {
        document.getElementById("lblText").innerHTML = document.getElementById(id).value;
        }

        function CallFunction4() {
            document.getElementById("txtName").value = "the page loaded";
            }

            function CallFunction5() {
                alert("Navigating the page.");
                }

