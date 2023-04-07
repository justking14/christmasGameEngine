class NewEntity {
     constructor(body, color) {
          this.dots = [];
          this.sticks = [];
          this.iterations = 16;
          this.direction = 1;
          this.intervalCount = 0;

          this.intervalA = 0;
          this.intervalB = 0 
          this.color = color;

          this.boulderCounter = 0;

          this.counter = 0;
     


          if (Object.keys(body).length !== 0) {
               //console.log(body)
               Object.entries(body["dots"]).forEach(([key, obj]) => {
                    this.addDot(key, obj.x, obj.y, obj.type, obj.radius || 5, obj.locked || false)
               })
               Object.entries(body["sticks"]).forEach(([key, obj]) => {
                    this.addStick(obj[0], obj[1])
               })
               this.moveElements(body["movement"]["x"], body["movement"]["y"])

               this.resetPositions()    

          }

          this.colorInterval;

     }
     resetPositions() {
          for (let i = 0; i < this.dots.length; i++) {
               this.dots[i].resetPos = new Vector(this.dots[i].pos.x, this.dots[i].pos.y);
          }
     }

     turnOnGravity3() {
          for (let i = 0; i < this.dots.length; i++) {
               this.dots[i].gravityBool3 = true 
               this.dots[i].gravityBool2 = false 

          }
     }

     turnOnGravity2() {
          for (let i = 0; i < this.dots.length; i++) {
               this.dots[i].gravityBool2 = true 
               this.dots[i].gravityBool = false 

          }
     }

     turnOnGravity() {
          for (let i = 0; i < this.dots.length; i++) {
               this.dots[i].gravityBool = true 
          }
     }
     fuckUpShit() {
          for (let i = 0; i < this.dots.length; i++) {
               this.dots[i].pos.x += (Math.random() * 100) - 50
               this.dots[i].pos.y += (Math.random() * 100) - 50
          }
     }

     moveElements(x, y) {
          for (let i = 0; i < this.dots.length; i++) {
               this.dots[i].pos.x += x;
               this.dots[i].pos.y += y;
                         
               this.dots[i].startPos.x += x
               this.dots[i].startPos.y += y

               //= new Vector(this.dots[i].pos.x, this.dots[i].pos.y)

          }
     }

     getDot(name){
          for (let i = 0; i < this.dots.length; i++) {
               if (this.dots[i].name === name) {
                    return this.dots[i]
               }
          }
     }

     addDot(name, x, y, type, radius, locked) {
          this.dots.push(new Dot(name, x, y, type, radius, locked))//, vx, vy));
          //this.dots.push({name: new Dot(name, x, y, vx, vy) })
     }

     addStick(p1, p2, length) {

          
          this.sticks.push(new Stick(this.getDot(p1), this.getDot(p2), length));
     }
     addStickIndex(p1,p2,length){
          this.sticks.push(new Stick(this.dots[p1], this.dots[p2], length));
     }

     updatePoints() {
          for (let i = 0; i < this.dots.length; i++) {
               this.dots[i].update();
          }
     }

     updateSticks() {
          for (let i = 0; i < this.sticks.length; i++) {
               this.sticks[i].update();
          }
     }

     updateContrains() {
          for (let i = 0; i < this.dots.length; i++) {
               this.dots[i].constrain();
          }
     }

     renderPoints(ctx) {
          for (let i = 0; i < this.dots.length; i++) {
               this.dots[i].render(ctx, this.color);
          }
     }
     renderSticks(ctx) {
          for (let i = 0; i < this.sticks.length; i++) {
               this.sticks[i].render(ctx, this.color);
          }
     }


     setColor(color) {
          this.color = color
          for (let i = 0; i < this.dots.length; i++) {
               this.dots[i].color = color
          }
     }

     update(ctx, fall) {

          this.updatePoints();
          for (let j = 0; j < this.iterations; j++) {
               this.updateSticks();
               this.updateContrains();
          }
          this.renderPoints(ctx);
          this.renderSticks(ctx);

          if(fall === true){
              
          }
     }

     animate(stats) {
          if (stats.type === "movement") {
               this.intervalCount += 0.25

               this.intervalA += 0.1;
               this.intervalB -= 0.1;

               let distance = stats.amount * Math.sin(this.intervalCount);
               //console.log(Math.abs(Math.sin(this.intervalCount)))
               for (let i = 0; i < this.dots.length; i++) {
                    
                    let CN = this.dots[i]
                    if (this.dots[i].type === "a") {
                         CN.pos.x = CN.startPos.x + Math.sin(this.intervalA) * stats.amount
                         CN.pos.y = CN.startPos.y + Math.sin(this.intervalB) * stats.amount
                    } else if (this.dots[i].type === "b") {
                         CN.pos.x = CN.startPos.x + Math.sin(this.intervalB) * stats.amount
                         CN.pos.y = CN.startPos.y + Math.sin(this.intervalA) * stats.amount
                    } else if (this.dots[i].type === "c") {
                         CN.pos.y = CN.startPos.y + (stats.amount/2) * Math.sin(this.intervalCount); 
                    }else if (this.dots[i].type === "d") {
                         CN.pos.y = CN.startPos.y + (stats.amount/2) * Math.sin(this.intervalCount); 
                    }
               }
               if (Math.abs(Math.sin(this.intervalCount)) < 0.1) {
                    return true 
               }
          } else if (stats.type === "pulse") {
               this.intervalCount += 0.01
               for (let i = 0; i < this.dots.length; i++) {
                    this.dots[i].radius = Math.abs(7 * Math.sin(this.intervalCount + i/10 * -1))
               }

               this.sticks.pop()
               this.sticks.pop()
               this.boulderCounter += 1
               if (this.boulderCounter >= 70) {
                    this.boulderCounter = 0;
               }
               this.addStickIndex(Math.floor(this.boulderCounter/5),Math.floor((this.boulderCounter)/5)+14)
                         
               this.addStickIndex(Math.floor(this.boulderCounter / 5)+14, 28)

          } else if (stats.type === "pulseBack") {
               this.intervalCount += 0.01
               for (let i = 0; i < this.dots.length; i++) {
                    this.dots[i].radius = Math.abs(7 * Math.sin(this.intervalCount + i/10 * -1))
               }

               this.sticks.pop()
               this.sticks.pop()
               this.boulderCounter -= 1
               if (this.boulderCounter < 0) {
                    this.boulderCounter = 70;
               }
               this.addStickIndex(Math.floor(this.boulderCounter/5),Math.floor((this.boulderCounter)/5)+14)
               this.addStickIndex(Math.floor(this.boulderCounter / 5), 28)

          
          } else if (stats.type === "moveDown") {
               let massMigration = false;
                for (let i = 0; i < this.dots.length; i++) {
                    this.dots[i].pos.y+=1
                    if (this.dots[i].pos.y > CANVAS_HEIGHT - 6) {
                         massMigration = true 
                    } else {
                         if (this.dots[i].pos.y > 300 && this.dots[i].pos.y < 325 && this.dots[i].pos.x > 50 && this.dots[i].pos.x < 500) {
                              this.dots[i].pos.y+=(Math.random() * 2) - 1.0

                         }
                    }
                }
               if (massMigration === true) {
                    for (let i = 0; i < this.dots.length; i++) {
                         this.dots[i].pos.y = 5
                    }
               }
          } else if (stats.type === "down") {
               for (let i = 0; i < this.dots.length; i++) {
                    let CN = this.dots[i]
                    CN.pos.x -= 0.9/2
                    CN.pos.y +=0.45/2
               }
          } else if (stats.type === "flicker") {
               this.intervalCount += stats.frequency
               let distance = stats.amount * Math.sin(this.intervalCount);
               for (let i = 0; i < this.dots.length; i++) {
                    let CN = this.dots[i]
                    CN.pos.y = CN.startPos.y + distance
               }
          }
     }

     setGoalPos(intervalType) {
          let j = -1
          if (intervalType === true) { j = 1 }
          for (let i = 0; i < this.dots.length; i++) {
               let currentNode = this.dots[i]
               if(currentNode.type === "a"){
                    currentNode.goalPos.y = currentNode.startPos.y + 20 * j
                    currentNode.velocityY = (currentNode.goalPos.y - currentNode.pos.y) / 24
               }else if(this.dots[i].type === "b"){
                    currentNode.goalPos.y = currentNode.startPos.y - 20 * j
                    currentNode.velocityY = (currentNode.goalPos.y - currentNode.pos.y)/24
               }
          }
     }
}