const increment = (num) => num + 1;
const decrement = (num) => num - 1;


export const logMessage = (message = "Something went wrong")=> {
     console.log(message)
}

export const getRGB = (r, g, b) =>{return "#" + (r).toString(16)+(g).toString(16)+(b).toString(16)}
export const getRandomValue = (array) => { return array[ Math.floor(Math.random() * array.length) ]}




