window.open("mailto:example@domain.com?subject=Test&body=Test&cc=anotheremailaddress@anotherdomain.com&bcc=onemore@anotherdomain.com");
window.open("http://www.dotnetfunda.com", "", "width=200,height=300");

var book = new Object();   // Create the object
book.subject = "Perl"; // Assign properties to the object
book.author  = "Mohtashim";
document.write("Book name is : " + book.subject + "<br>");
document.write("Book author is : " + book.author + "<br>");
window.print();

window.location.href=  "steadyadvice.net";
window.location   // To get full location details
window.location.host  // To Get current URL
window.location.assign("http://www.abc.org");  //  assign URL 
window.location.replace("http://www.abc.com"); // loads a new document in the browser window
location.reload();  // To refresh browser 

window.onerror = function (msg, url, line) {
    document.write("An error occurred.");
    document.write("Message : " + msg);
    document.write("url : " + url);
    document.write("Line number : " + line);
  }

 
 
  function imageAvailble(url, callback) {
    var img = new Image();
    img.onload = () => { callback(true); };
    img.onerror = () => { callback(false); };
    img.src = url;
  }
  var imageUrl = 'http://www.google.com/images/srpr/nav_logo14.png';
  this.imageAvailble(imageUrl, function(exists) {
    console.log('FINAL RESULT: url=' + imageUrl + ', exists=' + exists);
  });

  window.history.forward();

  window.innerWidth;  or
  document.documentElement.clientWidth; or  
  document.body.clientWidth;c

  window.innerHeight; or 
  document.documentElement.clientHeight; or
  document.body.clientHeight

  console.log(screen.width + ' x ' + screen.height); 

  function getDevice() {

      //innerWidth returns the width of a window's content area.
    
      //cross browser solution window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    
      // window.innerHeight | document.documentElement.clientHeight || document.body.clientHeight;
    
      return window.innerWidth < 600 ? 'mobile' : 'desktop';
  }

  // if (!this.hide) {
// window.resizeTo(200, 200)

// } else {
// window.resizeTo(441, 819)
// }
// this.hide = !this.hide;