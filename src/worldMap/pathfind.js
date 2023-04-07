 class PathFind {
     constructor(map, newStart, newGoal) {
          this.map = map
          console.log("goal ", map[0], newGoal)
          for (let tile of this.map) {
               tile.setNeighbors(this.map)
          }
          let start = newStart
          start.g = 0;
          let goal = newGoal//this.map[Math.floor(Math.random() * this.map.length)];

          this.openList = [start]
          this.closedList = []
          this.goalReached = false;
          while (this.openList.length > 0 && this.goalReached === false) {
               let lowestIndex = 0
               for (let i = 0; i < this.openList.length; i++) {
                    if (this.openList[i].isFlower === true) {
                         if (this.openList[i] === goal) {
                              lowestIndex = i    
                         }
                    } else
                         if (this.openList[i].isFlower === false) {
                         if (this.openList[i].f < this.openList[lowestIndex].f) {
                              lowestIndex = i;
                         }
                    }
               }

               let currentNode = this.openList[lowestIndex]

               if (currentNode === goal) {
                    this.goalReached = true
                    let path = []
                    let temp = currentNode;
                    path.push(temp);
                    while (temp.parent) {
                         //temp.style.visibility = "hidden"
                         path.push(temp.parent);
                         temp = temp.parent;
                    }
                    console.log("DONE!");
                    return path.reverse();

               } else {
                    this.openList.splice(lowestIndex, 1)
                    this.closedList.push(currentNode)

                    //console.log(this.openList, this.closedList, currentNode, goal)


                    let neighbors = currentNode.neighbors;
                    for (let neighbor of neighbors) {
                         if (!this.closedList.includes(neighbor)) {
                              let possibleG = currentNode.g + 1;

                              if (!this.openList.includes(neighbor)) {
                                   this.openList.push(neighbor);
                              } else if (possibleG >= neighbor.g) {
                                   continue;
                              }
                              neighbor.g = possibleG;
                              neighbor.parent = currentNode;
                         }
                    }
               }
          }
          return []
     }
}