class LetterEntity extends NewEntity {
     constructor(x,y, color) {
          super({}, color || "black")
          this.radius = 6
          this.y = y
          this.x = x;
          this.color = color;
                    
          this.lastString = ""
          this.letterArray = []

          this.letters = {
               "E": {
                    dots: {
                         "12e": { x: 0, y: 0},
                         "13e": { x: 20, y: 0},
                         "14e": { x: 0, y: 20},
                         "15e": { x: 10, y: 20},
                         "16e": { x: 0, y: 40},
                         "17e": { x: 20, y: 40},
                    },
                    sticks: [["12e", "13e"], ["12e", "14e"], ["14e", "15e"], ["14e", "16e"], ["16e","17e"]]
               },


               "C": {
                    dots: {
                         "1c": { x: 0, y: 0 },
                         "2c": { x: 20, y: 0 },
                         "3c": { x: 0, y: 40 },
                         "4c": { x: 20, y: 40 },
                    },
                    sticks: [["1c", "2c"], ["1c", "3c"], ["3c", "4c"]]
               },

               "D": {
                    dots: {
                         "1d": { x: 0, y: 0 },
                         "2d": { x: 10, y: 0 },
                         "3d": { x: 20, y: 20 },
                         "4d": { x: 10, y: 40 },
                         "5d": { x:  0, y: 40 },
                    },
                    sticks: [["1d", "2d"], ["2d", "3d"], ["3d", "4d"],["4d", "5d"],["5d", "1d"] ]
               },

               "O": {
                    dots: {
                         "1o": { x: 0, y: 0 },
                         "2o": { x: 20, y: 0 },
                         "3o": { x: 20, y: 40 },
                         "4o": { x: 0, y: 40 },
                    },
                    sticks: [["1o", "2o"], ["2o", "3o"], ["3o", "4o"],["4o", "1o"] ]
               },
               "N": {
                    dots: {
                         "1nN": { x: 0, y: 40 },
                         "2nN": { x: 0, y: 0 },
                         "3nN": { x: 20, y: 40 },
                         "4nN": { x: 20, y: 0 },
                    },
                    sticks: [["1nN", "2nN"], ["2nN", "3nN"], ["3nN", "4nN"]]
               },
               "W": {
                    dots: {
                         "1w": { x: 0, y: 0 },
                         "2w": { x: 5, y: 40 },
                         "3w": { x: 10, y: 20 },
                         "4w": { x: 15, y: 40 },
                         "5w": { x: 20, y: 0 },
                    },
                    sticks: [["1w", "2w"], ["2w", "3w"], ["3w", "4w"], ["4w","5w"] ]
               },


               "L": {
                    dots: {
                         "1l": { x: 0, y: 0 },
                         "3l": { x: 0, y: 40 },
                         "4l": { x: 20, y: 40 },
                    },
                    sticks: [["1l", "3l"], ["3l", "4l"]]
               },

               "K": {
                    dots: {
                         "1k": { x: 0, y: 0 },
                         "2k": { x: 0, y: 20 },
                         "3k": { x: 0, y: 40 },
                         "4k": { x: 20, y: 40 },
                         "5k": { x: 20, y: 0 },
                    },
                    sticks: [["1k", "2k"], ["2k", "3k"], ["2k", "4k"], ["2k", "5k"]]
               },

               "I": {
                    dots: {
                         "1i": { x: 0, y: 0 },
                         "2i": { x: 10, y: 0 },
                         "3i": { x: 20, y: 0 },

                         "4i": { x: 10, y: 40 },
                         "5i": { x: 0, y: 40 },
                         "6i": { x: 20, y: 40 },
                    },
                    sticks: [["1i", "2i"],["2i", "3i"], ["2i", "4i"],["4i", "5i"],["5i", "6i"] ]
               },

               "S": {
                    dots: {
                         "1s": { x: 0, y: 0 },
                         "2s": { x: 20, y: 0 },
                         "3s": { x: 0, y: 20 },
                         "4s": { x: 20, y: 20 },
                         "5s": { x: 20, y: 40 },
                         "6s": { x: 0, y: 40 },
                    },
                    sticks: [["1s", "2s"], ["1s", "3s"], ["3s", "4s"], ["4s", "5s"], ["5s", "6s"]]
               },
               "T": {
                    dots: {
                         "7t": { x: 0, y: 0},
                         "8t": { x: 20, y: 0},
                         "9t": { x: 10, y: 0},
                         "10t": { x: 10, y: 20},
                         "11t": { x: 10, y: 40},
                    },
                    sticks: [["7t", "8t"], ["8t", "9t"], ["9t", "10t"], ["11t", "10t"]]
               },
               "P": {
                    dots: {
                         "12p": { x: 0, y: 0},
                         "13p": { x: 20, y: 0},
                         "14p": { x: 0, y: 20},
                         "15p": { x: 20, y: 20},
                         "16p": { x: 0, y: 40},
                    },
                    sticks: [["12p", "13p"], ["12p", "14p"], ["14p", "15p"], ["14p", "16p"], ["13p","15p"]]
               },

               ":": {
                    dots: {
                         "1dot": { x: 5, y: 10},
                         "2dot": { x: 5, y: 30},
                    },
                    sticks: []
               },
               " ": {
                    dots: {},
                    sticks: []
               }

          }
     }

     turnOnGravity(){
          this.y += 2.5
                    
          for (let i of this.letterArray) {
               i.turnOnGravity()
          }
     }
     turnOnGravity2(){                    
          for (let i of this.letterArray) {
               i.turnOnGravity2()
          }
     }
            turnOnGravity3(){                    
          for (let i of this.letterArray) {
               i.turnOnGravity3()
          }
     }   
     render(ctx, newString) {
          this.dots = []
          this.sticks = []
          if (newString !== this.lastString) {
               this.lastString = newString
               this.letterArray = []
          
               //let number = 9812345670
               let count = 0;
               for (let i of newString) {
                    //console.log(i)
                    let num = new NewEntity({}, this.color)
                    let newNumbers = this.letters[i]
                    //console.log(i, newNumbers)
                    for (const property in newNumbers.dots) {
                         let obj = newNumbers.dots[property]
                         num.addDot(property, obj.x, obj.y, obj.type || "none", obj.radius || 3, obj.locked || false)
                    }
                    for (const property in newNumbers.sticks) {
                         num.addStick(newNumbers.sticks[property][0], newNumbers.sticks[property][1])
                    }

                    num.moveElements(this.x + count * 30, this.y)
                    
                    for (let i = 0; i < num.dots.length; i++) {
                         num.dots[i].resetPos = new Vector(num.dots[i].startPos.x, num.dots[i].startPos.y);
                    }
                         
                    for (let st of num.sticks) {
                         st.lineWidth = 4;
                    }

                    count += 1
                    this.letterArray.push(num)
               }
               console.log(this.letterArray)
          }

          for (let i of this.letterArray) {
               i.update(ctx)
          }
     }
}