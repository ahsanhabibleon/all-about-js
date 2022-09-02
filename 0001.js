                        
   /**
   * ✅  If the finally block returns a value,
   * this value becomes the return value of 
   * the entire try…catch…finally production, 
   * regardless of any return statements in the
   * try and catch blocks. 

   * So, if you return something from the
   * `try` or the `catch` block, and rerun
   * something from the `finally` at the same time,
   * the return values from the `try` and `catch`
   * block will be ignored completely.
   */

  function f() {
    try {
      console.log(0);
      throw 'bogus';
    } catch (e) {
      console.log(1);
      return true;    // this return statement is suspended
                      // until finally block has completed
      console.log(2); // not reachable
    } finally {
      console.log(3);
      return false;   // overwrites the previous "return"
      console.log(4); // not reachable
    }
    // "return false" is executed now
    console.log(5);   // not reachable
  }
  console.log(f()); // 0, 1, 3, false

 // Source: MDN (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling)
