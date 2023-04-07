class Queue{
     constructor(queue) {
          //First in, First out.  line of people
          this.elements = queue || [];
          this.head = 0;
          this.tail = 0;
     }
     add(item) {
          //adds to end of array 
          this.elements[this.tail] = this.elements;
          this.tail++
     }
     remove() {
          //remove from front of array
          const item = this.elements[this.head]
          delete this.elements[this.head]
          this.head++;
          return item;
     }
     peek() {
          //return first element
          return this.elements[this.head]
     }

     get length() {
          return this.tail - this.head
     }
     get isEmpty() {
          return this.length === 0;
     }
      search(item) {
          //find item in stack
          return this.stack.findIndex(item)
     }
}