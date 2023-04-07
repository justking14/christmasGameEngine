 const getRandomValue = (array) => { return array[ Math.floor(Math.random() * array.length) ]}


class TileElement {
     constructor(item, x, y) {
          this.item = item;
          this.x = x + 1;
          this.y = y + 1;
          this.neighbors = [] 
          this.allNeighbors = []
          this.wall = false
          this.isFlower = false;
          this.battle = null;

          this.state = "waiting"
          this.timeTilHarvest = 10;
          this.timeTilRot = 10;

          if (this.x < 6) {
               this.element = "Earth"
          } else if (this.x < 12) {
               this.element = "Water"
          } else {
               this.element = "Fire"
          }
          const nMap = {"Earth": "url(/images/grassE.png)", "Water": "url(/images/grassW.png)", "Fire": "url(/images/grassF.png)"}
          if ( (this.x === 2 || (this.x + 1) % 3 === 0) && (this.y === 2 || (this.y + 1) % 3 === 0) ) {
               this.isFlower = true;
               this.item.style.backgroundImage = "url(/images/flower.png)"
          } else {
               //this.item.style.backgroundImage = nMap[this.element];
          }

          this.checked = false;
          this.g = 99999;//cost to reach this node 
          this.h = 99999;//estimated cost to reach goal from this node;
          this.parent = null;
     }
     get currentState() {
          let states = {
               "waiting": "Awaiting Planting",
               "growing": "Growing Wheat",
               "fullyGrown": "Ready To Harvest",
               "rotten": "Wheat Has Gone Rotten"
          }
          return states[this.state]
     }
     get style(){
          return this.item.style
     }
     f(goal) {
          return this.g + (Math.abs(this.x - goal.x) + Math.abs(this.y - goal.y))
     }
     setNeighbors(map) {
          for (let tile of map) {
               //if (tile.isFlower === false) {
                    if (Math.abs(this.x - tile.x) <= 1 && Math.abs(this.y - tile.y) <= 1) {
                         this.allNeighbors.push(tile)
                    }
               //if(tile.isFlower === false){
                    if (this.x === tile.x && (this.y === tile.y - 1 || this.y === tile.y + 1)) {
                         this.neighbors.push(tile)
                    }
                    if (this.y === tile.y && (this.x === tile.x - 1 || this.x === tile.x + 1)) {
                         this.neighbors.push(tile)
                    }
               //}
          }
     }

     obliterateNeighbors(){
          for (let tile of this.neighbors) {
               tile.item.style.visibility = "hidden"
          }
     }

     seedNeighbors() {
          this.timeTilHarvest = 10;
          this.timeTilRot = 10;
          this.state = "growing"
          for (let tile of this.allNeighbors) {
               tile.timeTilHarvest = 10;
               tile.timeTilRot = 10;
               tile.state = "growing"
          }
     }
     clearNeighbors() {
          this.state = "waiting"
          for (let tile of this.allNeighbors) {
               tile.state = "waiting"
          }
     }

}