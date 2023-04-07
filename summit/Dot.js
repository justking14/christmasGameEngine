class Dot {
     constructor(name, x, y,type, radius, locked) {
          this.name = name;
          this.type = type || "undefined"
          this.locked = locked
          this.pos = new Vector(x, y);
          this.startPos = new Vector(x, y)
          this.goalPos = new Vector(x,y)
          this.oldpos = new Vector(x,y)// + (vx || 0), y + (vy || 0)); // velocity x, y

          this.resetPos = new Vector(x,y)


          this.friction = 0.25;
          this.groundFriction = 0.7;

          let afDifference = 0//(Math.random())/15
          this.airFriction = 0.025//0.005 + afDifference

          let gravityY = 2 + Math.random()
          this.gravity = new Vector(0, gravityY);
          this.gravityBool = false;
          this.gravityBool2 = false;
          this.gravityBool3 = false;


          this.radius = radius;
          this.color = "#e62a4f";
          this.mass = 999999999;
          this.vel = new Vector(0, 0);
          
          this.center = new Vector(910/2,660/2)
     }


     update() {
          
          /*
          let vel = Vector.sub(this.pos, this.oldpos);
          vel.mult(this.friction);

          // if the point touches the ground set groundFriction
          if (this.pos.y >= CANVAS_HEIGHT - this.radius && vel.magSq() > 0.000001) {
               var m = vel.mag();
               vel.x /= m;
               vel.y /= m;
               vel.mult(m * this.groundFriction);
          }
          this.oldpos.setXY(this.pos.x, this.pos.y);
          this.pos.add(vel);
          */
          
          this.vel.mult(this.friction)
          this.vel.add(this.gravity)
          //this.pos.add(this.vel)
          
          if (this.gravityBool3 === true) {
               let vel = Vector.sub(this.resetPos, this.pos);
               vel.mult(this.airFriction);
               this.pos.add(vel);
          }else if (this.gravityBool2 === true) {
               let vel = Vector.sub(this.center, this.pos);
               vel.mult(this.airFriction);
               this.pos.add(vel);

          } else if (this.gravityBool === true) {
               //console.log(this.pos)
               //if (this.pos.x >= 0 && this.pos.x <= 910) {
                    this.pos.add(this.vel);
               //}
          }
          
     }

     constrain() {
          if (this.gravityBool) {
               if (this.pos.x > CANVAS_WIDTH - this.radius) { this.pos.x = CANVAS_WIDTH - this.radius; }
               if (this.pos.x < this.radius) { this.pos.x = this.radius; }
               if (this.pos.y > CANVAS_HEIGHT - this.radius - 5) { this.pos.y = CANVAS_HEIGHT - this.radius - 5; }
               if (this.pos.y < this.radius) { this.pos.y = this.radius; }
          }
     };

     render(ctx, color) {
          if (isNaN(this.pos.x)) {
               this.pos.x = this.oldpos.x;
               this.pos.y = this.oldpos.y;
          }
          if (this.locked) {
               //this.pos.x = this.startPos.x;
               //this.pos.y = this.startPos.y;
          }
          ctx.beginPath();
          ctx.fillStyle = color
          ctx.arc(this.pos.x, this.pos.y, this.radius, 0, Math.PI * 2);
          ctx.fill();
          ctx.closePath();
     }
}