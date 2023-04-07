
var speeds = {pause: 500, slow: 120, normal: 90, fast: 40, superFast: 10};//high # = longer delay
var textLines = {
     demo: 
          [
               { speed: speeds.slow, string: "Oh, hello!" },
               { speed: speeds.pause, string: "", pause: true },
               { speed: speeds.normal, string: "Have you seen my pet" },
               { speed: speeds.superFast, string: "frog", classes: ["green"] },
               { speed: speeds.normal, string: "around?" }
          ],
     intro: [
               { speed: speeds.slow, string: "Oh, hello!", classes: ["green"] },
               { speed: speeds.pause, string: "", pause: true },
               { speed: speeds.normal, string: "Have you seen my pet" },
               { speed: speeds.superFast, string: "frog" },
               { speed: speeds.normal, string: "around?" }
     ]
};
const typingState = {
     typing: 0,
     finishedTyping: 1,
     readyToEnd: 2,
     ended: 3
}
class textBox{
     constructor(identifier) {
          this.container = document.querySelector(".text");
          
          this.textLines = textLines[identifier]

          this.state = typingState.typing
          /*
          this.done = false;
          this.readyToClose = false 
          this.finished = false;
          */

          var characters = [];
          this.textLines.forEach((line, index) => {
               if (index < this.textLines.length - 1) {
                    line.string += " "; //Add a space between lines
               }
               line.string.split("").forEach((character) => {
                    var span = document.createElement("span");
                    span.textContent = character;
                    this.container.appendChild(span);
                    characters.push({
                         span: span,
                         isSpace: character === " " && !line.pause,
                         delayAfter: line.speed,
                         classes: line.classes || []
                    });
               });
          });

          this.list = characters;
          let tmpParent = this;
          setTimeout(function () {
               tmpParent.revealOneCharacter();
          }, 600);
     }

     revealOneCharacter() {
          var next = this.list.splice(0, 1)[0];//remove first item
          console.log(next.span.textContent)
          if (!next.isSpace) {
               next.span.classList.add("revealed");//set opacity to 1
          }
          next.classes.forEach((c) => {next.span.classList.add(c);});//add green/red color 
          var delay = next.isSpace && !next.pause ? 0 : next.delayAfter;//if space and not paused, no delay
          if (this.list.length > 0 && this.state === typingState.typing) {
               let tmpParent = this;
               setTimeout(function () {
                    tmpParent.revealOneCharacter(this.list);
               }, delay);
          } else {
               this.state = typingState.readyToEnd
          }
          console.log(this.container)
     }

     enterWasPressed() {
          if (this.done === false) {
               this.state = typingState.done 
               console.log(this.list)
               this.list.forEach((item) => {
                    var next = item;//remove first item
                    console.log(next.span.textContent)
                    if (!next.isSpace) {
                         next.span.classList.add("revealed");//set opacity to 1
                    }
                    next.classes.forEach((c) => { next.span.classList.add(c); });//add green/red color 
               })
               let tmpParent = this;
               setTimeout(function () {
                    tmpParent.state = typingState.readyToEnd
               }, 2000);
          } else if (this.state === typingState.readyToEnd) {
               this.state = typingState.ended
               this.container.innerHTML = ""

          }
     }
}