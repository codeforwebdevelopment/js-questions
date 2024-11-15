const promiseA = new Promise((resolve, reject) => {
    resolve(777);
  });
  // At this point, "promiseA" is already settled.
  promiseA.then((val) => console.log("asynchronous logging has val:", val));
  console.log("immediate logging");
  
//   JSONPlaceholder - Free Fake REST API (typicode.com)
// main url https://jsonplaceholder.typicode.com/todos
// wrong url = 'https://jsonplaceholder.typicode.com/tods';
  fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err))
  
        // Handling errors
try {

  alert('Start of try runs');  // (1) <--

  lalala; // error, variable is not defined!

  alert('End of try (never reached)');  // (2)

} catch (err) {

  alert(`Error has occurred!`); // (3) <--

}



function normalGet() {
  const endpoint = 'https://api.whatdoestrumpthink.com/api/v1/quotes/random';

  fetch(endpoint)
    .then(function (response) {
      console.log(response);

      return response.json();
    })

    .then(function (data) {
      console.log(data);

      this.displayQuote(data.message);
    })

    .catch(function () {
      console.log('An error occurred');
    });
}

function addImg() {
  fetch('https://placekitten.com/300/200')
    .then(function (response) {
      if (response.ok) {
        response.blob().then(function (myBlob) {
          var objectURL = URL.createObjectURL(myBlob);
          var img = document.getElementById('myImage');
          img.src = objectURL;
        });
      } else {
        console.log('Network response was not ok.');
      }
    })
    .catch(function (error) {
      console.log(
        'There has been a problem while fetching response: ' + error.message
      );
    });
}

function paramUpdate() {
  fetch(
    'https://example.com?' +
      new URLSearchParams({
        foo: 'value',
        bar: 2,
      })
  );
}

function getData() {
  const endpoint = 'https://example.com';
  fetch(endpoint)
    .then(function (response) {
      console.log(response);
      return response.json();
    })
    .catch(function (err) {
      console.log('An error occurred', err);
    });
}

function ajaxCall() {
  const Http = new XMLHttpRequest();
  const url = 'https://jsonplaceholder.typicode.com/posts';
  Http.open('GET', url);
  Http.send();
  Http.onreadystatechange = (e) => {
    console.log(Http.responseText);
  };
  Http.onreadystatechange = processRequest;
  function processRequest(e) {}

  const { fetch: origFetch } = window;
  window.fetch = async (...args) => {
    console.log('fetch called with args:', args);
    const response = await origFetch(
      ...args
    ); /* work with the cloned response in a separate promise
     chain -- could use the same chain with `await`. */ // response //   .clone() //   .json() //   .then(body => console.log("intercepted response:", body)) //   .catch(err => console.error(err)) // ;
  };

  const constantMock2 = window.fetch;
  window.fetch = function () {
    console.log(arguments);
    return new Promise((resolve, reject) => {
      constantMock2
        .apply(this, arguments)
        .then((response) => {
          console.log(response);
          if (response.url.indexOf('/me') > -1 && response.type != 'cors') {
            console.log(response); // do something for specificconditions
          }
          resolve(response);
        })
        .catch((error) => {
          reject(response);
        });
    });
  };
  constantMock2();
}
