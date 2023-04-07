function makeStraightLine(x1, y1, x2, y2, intervalLength) {
     let lineEntity = new Entity({}, "black")
     let xDist = x1 - x2
     let yDist = y1 - y2

     let intervalCount = xDist / intervalLength
     if (Math.abs(yDist) > Math.abs(xDist)) {
          intervalCount = yDist / intervalLength
     }

     for (let i = 0; i <= Math.abs(intervalCount); i++) {
          if (Math.abs(yDist) > 0) {
               lineEntity.addDot("step", x1, y1 + (intervalLength * i), "none", 3)
          } else {
               lineEntity.addDot("step", x1 + (intervalLength * i), y1, "none", 3)
          }
          if (i > 0) {lineEntity.addStickIndex(i - 1, i)}
     }

     return lineEntity
}
function makeBorder(x1,y1,x2,y2,intervalLength){
                    
     let lineEntity = [];// = new Entity({}, "black")
     let xDist = x1 - x2
     let yDist = y1 - y2

     let lineEntity1 = new Entity({}, "black")
     let intervalCount = yDist / intervalLength
     for (let i = 0; i <= Math.abs(intervalCount); i++) {
          lineEntity1.addDot("step", x1, y1 + (intervalLength * i), "none", 5)
          if (i > 0) { lineEntity1.addStickIndex(i - 1, i) }
     }

     let lineEntity2 = new Entity({}, "black")
     for (let i = 0; i <= Math.abs(intervalCount); i++) {
          lineEntity2.addDot("step", x2, y1 + (intervalLength * i), "none", 5)
          if (i > 0) { lineEntity2.addStickIndex(i - 1, i) }
     }
                    
     let lineEntity3 = new Entity({}, "black")
     intervalCount = xDist / intervalLength
     for (let i = 0; i <= Math.abs(intervalCount); i++) {
          lineEntity3.addDot("step", x1 + (intervalLength * i), y1, "none", 5)
          if (i > 0) { lineEntity3.addStickIndex(i - 1, i) }
     }
     let lineEntity4 = new Entity({}, "black")
     for (let i = 0; i <= Math.abs(intervalCount); i++) {
          lineEntity4.addDot("step", x1 + (intervalLength * i), y2, "none", 5)
          if (i > 0) { lineEntity4.addStickIndex(i - 1, i) }
     }

     for (let st of lineEntity1.sticks) {
          st.lineWidth = 3;
     }
     for (let st of lineEntity2.sticks) {
          st.lineWidth = 3;
     }
     for (let st of lineEntity3.sticks) {
          st.lineWidth = 3;
     }
     for (let st of lineEntity4.sticks) {
          st.lineWidth = 3;
     }
     return [lineEntity1,lineEntity2,lineEntity3,lineEntity4]
}
                   
function calculateLinePoint(x1, y1, x2, y2) {
     // Calculate the distance between the two endpoints of the line
     const distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);

     // Calculate the x and y coordinates of the point 30% down the line
     const x = x1 + 0.3 * (x2 - x1);
     const y = y1 + 0.3 * (y2 - y1);

     console.log(`The point 20% down the line is (${x}, ${y})`);
}