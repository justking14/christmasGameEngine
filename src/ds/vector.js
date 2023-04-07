class Vector{
     constructor(x, y) {
          this.x = x || 0;
          this.y = y || 0;
     }
     add(x, y) {
          this.x += x;
          this.y += y;
     }
     addVector(otherVector) {
          this.x += otherVector.x;
          this.y += otherVector.y;
     }
     subtract(x, y) {
          this.x -= x;
          this.y -= y;
     }
     subtractVector(otherVector) {
          this.x -= otherVector.x;
          this.y -= otherVector.y;
     }

     scale(n) {
          this.x *= n;
          this.y *= n;
     }
     scaleX(n) { this.x *= n; }
     scaleY(n) { this.y *= n; }
}