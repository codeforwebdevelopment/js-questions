
function callAsync() {
    try {
          var username: string = await getUserNameAsynchonously();
          console.log(username);
   } catch (error) {
         console.log('Failed to load user.');
    }
  callAsync();  
  
  async function loadData3() {
    try {
        var data = JSON.parse(await this.dramaticWelcome());
        console.log(data);
    } catch(e) {
        console.log(e);
    }
  }

  
async function printDelayed(elements) {
    for (const element of elements) {
      await delay(1000);
      console.log(element);
    }
  }
  
  function delay(milliseconds) {
    return new Promise((resolve, reject) => {
      setTimeout(resolve, milliseconds);
    });
  }
  
  printDelayed(["Hello", "beautiful", "asynchronous", "world"]).then(() => {
    console.log("Printed every element!");
  });
  }
  
  async dramaticWelcome(): Promise<void> {
    for (let i = 0; i < 5; i++) {
      const count: number = await this.delay2(500, i);         // await is converting Promise<number> into number
      console.log(count);
    }
  }
  
  delay2(milliseconds: number, count: number): Promise<number> {
    return new Promise<number>(resolve => {
      setTimeout(() => {
        resolve(count);
      }, milliseconds);
    });
    console.log("World!");
  }
  
  function getMessage() {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve("MESSAGE"), 2000);
    });
  }
  async function start() {
    const message = await getMessage();
    return `The message is: ${message}`;
  }

  start().then(msg => console.log(msg));

  const timeoutP = async (s) => new Promise((resolve, reject) => {
    setTimeout(() => resolve(s * 1000), s * 1000)
  });

  [1, 2, 3].forEach(async function (time) {
    const ms = await timeoutP(time);
    console.log(`This took ${ms} milliseconds`);
  });

  async function asyncFunction() {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve("i am resolved!"), 1000)
    });
    const result = await promise;
    // wait till the promise resolves (*)
    console.log(result); // "i am resolved!"
  }
  asyncFunction(); 

  async function loadData() {
    // `fetch` is a request-promise function.
    var promise1 = fetch('https://api.example.com/endpoint1');
    var promise2 = fetch('https://api.example.com/endpoint2');

    // Currently, both requests are fired, concurrently and
    // now we'll have to wait for them to finish
    var response1 = await promise1;
    var response2 = await promise2;
    throw new Error("boom");
    return response1 + ' ' + response2;
}
// Since, we're not in an `async function` anymore
// we have to use `then`.
loadData().then(() => console.log('Done')).catch(function(e) {
    console.log(e);})  