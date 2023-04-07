import { Level } from "./level.js"
import { Pointer } from "./pointer.js"
import { Settings } from "./settings.js"

class Game {
     constructor() {
          this.level = new Level();
          this.previousTime = Date.now();

          this.txt = new textBox("demo")
          new KeyPressListener("Enter", () => {
               this.txt && this.txt.enterWasPressed()
          })

          Pointer.init();
          this.run();
     }
     run = () => {
          if (this.txt.state === typingState.ended) {
               this.txt = new textBox("intro")
          }
          let newTime = Date.now();
          Settings.dt = (newTime - this.previousTime) / 1000
          this.previousTime = newTime;

          this.level.run();
          requestAnimationFrame(this.run);
     }
}

window.addEventListener("DOMContentLoaded", () => {new Game()})