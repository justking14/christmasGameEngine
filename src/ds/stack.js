class Stack{
     constructor(stack) {
          //Last-in, First-Out
          //stores object in vertical tower
          this.stack = stack || [];
     }
     push(item) {
          //add to the top
          this.stack.push(item)
     }
     pop() {
          //remove from the top
          return this.stack.pop()
     }
     peek() {
          //return top item
          if (this.isEmpty() === false) {
               return this.stack[this.stack.length]
          } else {
               return false;
          }
     }
     isEmpty() {
          if (this.stack.length > 0) {
               return true 
          } else {
               return false
          }
          //returns true if empty
     }
     search(item) {
          //find item in stack
          return this.stack.findIndex(item)
     }
}