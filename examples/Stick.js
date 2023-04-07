class Stick {
     constructor(p1, p2) {
          this.startPoint = p1;
          this.endPoint = p2;
          this.stiffness = 2;
          this.color = '#f5476a';
          
          this.length = this.startPoint.pos.dist(this.endPoint.pos);
     }

     update() {
          // calculate the distance between two dots
          let dx = this.endPoint.pos.x - this.startPoint.pos.x;
          let dy = this.endPoint.pos.y - this.startPoint.pos.y;
          // pythagoras theorem
          let dist = Math.sqrt(dx * dx + dy * dy);
          // calculate the resting distance betwen the dots
          let diff = (this.length - dist) / dist * this.stiffness;

          // getting the offset of the dots
          let offsetx = dx * diff * 0.5;
          let offsety = dy * diff * 0.5;

          // calculate mass
          let m1 = this.startPoint.mass + this.endPoint.mass;
          let m2 = this.startPoint.mass / m1;
          m1 = this.endPoint.mass / m1;

          // and finally apply the offset with calculated mass
          if (!this.startPoint.pinned) {
               this.startPoint.pos.x -= offsetx * m1;
               this.startPoint.pos.y -= offsety * m1;
          }
          if (!this.endPoint.pinned) {
               this.endPoint.pos.x += offsetx * m2;
               this.endPoint.pos.y += offsety * m2;
          }

     }

     render(ctx, color) {
          ctx.beginPath();
          ctx.strokeStyle = color//this.color;
          ctx.moveTo(this.startPoint.pos.x, this.startPoint.pos.y);
          ctx.lineTo(this.endPoint.pos.x, this.endPoint.pos.y);
          ctx.stroke();
          ctx.closePath();
     }
}