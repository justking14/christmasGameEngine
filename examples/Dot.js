class Dot {
     constructor(name, x, y,type, radius, locked) {
          this.name = name;
          this.type = type || "undefined"
          this.locked = locked
          this.pos = new Vector(x, y);
          this.startPos = new Vector(x, y)
          this.goalPos = new Vector(x,y)
          this.oldpos = new Vector(x,y)// + (vx || 0), y + (vy || 0)); // velocity x, y

          this.friction = 0.97;
          this.groundFriction = 0.7;

          this.gravity = new Vector(0, 1);

          this.radius = radius;
          this.color = "#e62a4f";
          this.mass = 999999999;
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
          
          //this.pos.add(this.gravity);
     }

     constrain() {
          if (this.pos.x > CANVAS_WIDTH - this.radius) {this.pos.x = CANVAS_WIDTH - this.radius;}
          if (this.pos.x < this.radius) {this.pos.x = this.radius;}
          if (this.pos.y > CANVAS_HEIGHT - this.radius) {this.pos.y = CANVAS_HEIGHT - this.radius;}
          if (this.pos.y < this.radius) {this.pos.y = this.radius;}
     };

     render(ctx, color) {
          if (this.locked) {
               this.pos.x = this.startPos.x;
               //this.pos.y = this.startPos.y;
          }
          ctx.beginPath();
          ctx.fillStyle = color
          ctx.arc(this.pos.x, this.pos.y, this.radius, 0, Math.PI * 2);
          ctx.fill();
          ctx.closePath();
     }
}