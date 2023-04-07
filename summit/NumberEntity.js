class NumberEntity extends NewEntity{
     constructor(x,y,color) {
          super({}, "black")
          this.lastNumber = -1

          this.y = y
          this.x = x;
          this.color = color;
          this.radius = 6

          this.numbers = {
               0: {
                    dots: {
                         "1": { x: 0, y: 0, radius: 3 },
                         "2": { x: 20, y: 0, radius: 3 },
                         "3": { x: 0, y: 40, radius: 3 },
                         "4": { x: 20, y: 40, radius: 3 },
                    },
                    sticks: [["1","2"],["1","3"],["1","4"],["3","4"], ["2","4"]]
               },
               1: {
                    dots: {
                         "1": { x: 0, y: 40, radius: 3 },
                         "2": { x: 10, y: 40, radius: 3 },
                         "3": { x: 20, y: 40, radius: 3 },
                         "4": { x: 10, y: 0, radius: 3 },
                         "5": { x: 0, y: 20, radius: 3 },

                    },
                    sticks: [["1","3"],["1","2"],["4","2"],["4","5"]]
               },
               2: {
                    dots: {
                         "1": { x: 0, y: 0, radius: 3 },
                         "2": { x: 20, y: 0, radius: 3 },
                         "3": { x: 20, y: 20, radius: 3 },
                         "4": { x: 0, y: 20, radius: 3 },
                         "5": { x: 0, y: 40, radius: 3 },
                         "6": { x: 20, y: 40, radius: 3 },

                    },
                    sticks: [["1","2"],["2","3"],["3","4"],["4","5"], ["5","6"]]
               },
               3: {
                    dots: {
                         "1": { x: 0, y: 0, radius: 3 },
                         "2": { x: 20, y: 0, radius: 3 },
                         "3": { x: 20, y: 20, radius: 3 },
                         "4": { x: 0, y: 20, radius: 3 },
                         "5": { x:  0, y: 40, radius: 3 },
                         "6": { x: 20, y: 40, radius: 3 },

                    },
                    sticks: [["1","2"],["2","3"],["3","4"],["3","6"], ["5","6"]]
               },

               4: {
                    dots: {
                         "1": { x: 0, y: 0, radius: 3 },
                         "2": { x: 0, y: 20, radius: 3 },
                         "3": { x: 20, y: 20, radius: 3 },
                         "4": { x: 20, y: 0, radius: 3 },
                         "5": { x: 20, y: 40, radius: 3 },

                    },
                    sticks: [["1","2"],["2","3"],["3","4"],["4","5"]]
               },

               5: {
                    dots: {
                         "1": { x: 0, y: 0, radius: 3 },
                         "2": { x: 20, y: 0, radius: 3 },
                         "3": { x: 20, y: 20, radius: 3 },
                         "4": { x: 0, y: 20, radius: 3 },
                         "5": { x: 0, y: 40, radius: 3 },
                         "6": { x: 20, y: 40, radius: 3 },

                    },
                    sticks: [["1","2"],["1","4"],["3","4"],["3","6"], ["5","6"]]
               },

               6: {
                    dots: {
                         "1": { x: 0, y: 0, radius: 3 },
                         "2": { x: 20, y: 0, radius: 3 },
                         "3": { x: 20, y: 20, radius: 3 },
                         "4": { x: 0, y: 20, radius: 3 },
                         "5": { x: 0, y: 40, radius: 3 },
                         "6": { x: 20, y: 40, radius: 3 },

                    },
                    sticks: [["1","2"],["1","4"],["3","4"],["3","6"], ["4","5"],["5","6"]]
               },

               7: {
                    dots: {
                         "1": { x: 0, y: 0, radius: 3 },
                         "2": { x: 20, y: 0, radius: 3 },
                         "3": { x: 0, y: 40, radius: 3 },

                    },
                    sticks: [["1","2"],["2","3"]]
               },

               8: {
                    dots: {
                         "1": { x: 0, y: 0, radius: 3 },
                         "2": { x: 20, y: 0, radius: 3 },
                         "3": { x: 20, y: 20, radius: 3 },
                         "4": { x: 0, y: 20, radius: 3 },
                         "5": { x: 0, y: 40, radius: 3 },
                         "6": { x: 20, y: 40, radius: 3 },

                    },
                    sticks: [["1","2"],["1","4"],["3","4"],["3","6"], ["4","5"],["5","6"], ["2","3"]]
               },

               9: {
                    dots: {
                         "1": { x: 0, y: 0, radius: 3 },
                         "2": { x: 20, y: 0, radius: 3 },
                         "3": { x: 20, y: 20, radius: 3 },
                         "4": { x: 0, y: 20, radius: 3 },
                         "5": { x: 0, y: 40, radius: 3 },
                         "6": { x: 20, y: 40, radius: 3 },

                    },
                    sticks: [["1","2"],["1","4"],["3","4"],["3","6"],["5","6"], ["2","3"]]
               },

          }
     }
     makeNumber() {
          
     }
     turnOnGravity(){
          this.y += 2.5
                    
          for (let i of this.numberArray) {
               i.turnOnGravity()
          }

     }

     turnOnGravity2(){                    
          for (let i of this.numberArray) {
               i.turnOnGravity2()
          }
     }

         turnOnGravity3(){                    
          for (let i of this.numberArray) {
               i.turnOnGravity3()
          }
     }
     render(ctx, newNumber) {
          this.dots = []
          this.sticks = []
          if (this.lastNumber !== newNumber) {
               this.lastNumber = newNumber
               this.numberArray = []
          
               //let number = 9812345670
               let count = 0;
               let stringNumber = String(newNumber)
               for (let i of stringNumber) {
                    let num = new NewEntity({}, this.color)
                    let newNumbers = this.numbers[i]
                    for (const property in newNumbers.dots) {
                         let obj = newNumbers.dots[property]
                         num.addDot(property, obj.x, obj.y, obj.type || "none", obj.radius || this.radius, obj.locked || false)
                    }
                    for (const property in newNumbers.sticks) {
                         num.addStick(newNumbers.sticks[property][0], newNumbers.sticks[property][1])
                    }
                    num.moveElements(this.x + count * 30, this.y)

                    for (let i = 0; i < num.dots.length; i++) {
                         num.dots[i].resetPos = new Vector(num.dots[i].startPos.x, num.dots[i].startPos.y);
                    }
                    for (let st of num.sticks) {
                         st.lineWidth = 3;
                    }
                    count += 1
                    this.numberArray.push(num)
               }
          }

          for (let i of this.numberArray) {
               i.update(ctx)
          }
     }
}