
function test(){
try {
    nonExistentFunction();
    // throw new TypeError("oops");
  } catch (error) {
    // console.error(error);
    if (error instanceof RangeError) {
        // statements to handle this very common expected error
      } else {
        throw error; // re-throw the error unchanged
      }
    // Expected output: ReferenceError: nonExistentFunction is not defined
    // (Note: the exact output may be browser-dependent)
  }
}
// test()

try {
    try {
    //   throw new Error("oops");
    console.log(a)
    } catch (ex) {
      console.error("inner", ex.message);
      throw ex;
    } 
  } catch (ex) {
    console.error("outer", ex.message);
  }


  // node error_handling.js