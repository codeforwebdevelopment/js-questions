// To check touch event-  

console.log(navigator.maxTouchPoints);  

// To check the website-  

console.log(navigator.vendor);        

// To check the version information about the browser-

console.log(navigator.appVersion);

// 4- To check the Operating system on the client machine.

console.log(navigator.platform);  

// 5- To Find whether it is mobile or desktop-      

console.log(navigator.userAgent);  

// regex to check it is iPhone or android-

(navigator.userAgent.match(/iPhone/i))

// To find  the product name of the browser engine:

 console.log(navigator.product);

javaEnabled

  console.log(navigator.javaEnabled());

onLine

// It will check the network status it is online or offline.

console.log(navigator.onLine);

language

 console.log(navigator.language);

cookieEnabled

 console.log(navigator.cookieEnabled)

appCodeName

   console.log(navigator.appCodeName);

appName

   console.log(navigator.appName);

connection

navigator.connection.downlink

appUserAgent: 

// Identified the browser.

// plugin  

// mimeTypes

//  To check service worker is registered or not-

   if ('serviceWorker' in navigator) {
     navigator.serviceWorker.register(window.location.href + 'service-worker.js')
       // navigator.serviceWorker.register('worker-basic.min.js');  
       .then(function () {
         console.log('sw registered');
       })
       .catch(function (e) {
         console.log('sw-error:', e);
       });
   } else {
     console.error('this browser does not support service workers');
   }

//  share 

// navigator.share will only work on web apps with HTTPS and not HTTP. web share API  only working in android chrome.

   let newVariable;
newVariable = window.navigator;
   if (newVariable.share) {
     newVariable.share({
         title: 'Basic',
         text: 'hello world',
         url: 'https://developers.google.com/web',
     })
       .then(() => console.log('Successful share'))
       .catch((error) => console.log('Error sharing', error));
   }