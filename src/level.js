import { drawCircle, drawRect } from "./canvas.js";
import { Pointer } from "./pointer.js";

export class Level{
     constructor() {
          this.setup();
     }
     setup = async () => {
          this.canvas = document.querySelector("canvas") ;
          this.ctx = this.canvas.getContext("2d")
          //this.setScreenSize()
     }
     setScreenSize() {
          let w = window.innerWidth;
          let h = window.innerHeight;
          this.canvas.width = w;
          this.canvas.height = h;
     }
     run() {
          drawRect(this.ctx, 0, 0, window.innerWidth, window.innerHeight, {fillStyle: "black"})
          drawCircle(this.ctx, Pointer.pos.x, Pointer.pos.y, 10, 0, Math.PI * 2 , {fillStyle: "red"})
          //console.log(Pointer.pos)

     }
}