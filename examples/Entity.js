class Entity {
     constructor(body, color) {
          this.dots = [];
          this.sticks = [];
          this.iterations = 16;
          this.direction = 1;
          this.intervalCount = 0;
          this.color = color;

          for (const property in body) {
               let obj = body[property]
               this.addDot(property, obj.x, obj.y, obj.type, obj.radius || 5, obj.locked || false)
          }
     }

     moveElements(x, y) {
          for (let i = 0; i < this.dots.length; i++) {
               this.dots[i].pos.x += x;
               this.dots[i].pos.y += y;
                         
               this.dots[i].startPos = new Vector(this.dots[i].pos.x, this.dots[i].pos.y)

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
               //this.dots[i].constrain();
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
               this.intervalCount += 0.1
               let distance = stats.amount * Math.sin(this.intervalCount);
               for (let i = 0; i < this.dots.length; i++) {
                    let CN = this.dots[i]
                    if (this.dots[i].type === "a") {
                         CN.pos.y = CN.startPos.y + distance
                         CN.pos.x = CN.startPos.x
                    } else if (this.dots[i].type === "b") {
                         CN.pos.y = CN.startPos.y + distance * -1
                         CN.pos.x = CN.startPos.x
                    }
               }
          } else if (stats.type === "pulse") {
               this.intervalCount += 0.01
               for (let i = 0; i < this.dots.length; i++) {
                    this.dots[i].radius = Math.abs(10 * Math.sin(this.intervalCount - i/10))
               }
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