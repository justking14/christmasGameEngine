const arr = ["dog", "cat", "bear"]
for (let i = 0; i < arr.length; i++){console.log(arr[i])}
for (const e of arr) {console.log(e)}

//array altering
const newArray = arr.filter(v => v === "bear")//new array without bear
const isThere1Dog = arr.some(v => v === "dog")//returns true if dog is present
const isEverything = arr.every(v => v > 0)//returns true if every element follows the rule
const count = arr.reduce((acc, cur) => {
     return acc + (cur === "dog" ? 1 : 0)//returns number of dogs in array
})
const sort = arr.sort((a, b) => a < b)//put items in order

const numbers = [0, 1, 2, 3, 4, 5, 6];
const doubledNumbers = numbers.map(n => n * 2); // [0, 2, 4, 6, 8, 10, 12]
const evenNumbers = numbers.filter(n => n % 2 === 0); // [0, 2, 4, 6]
const sum = numbers.reduce((prev, next) => prev + next, 0); // 21
const greaterThanFour = numbers.find((n) => n>4); // 5

//looping through object keys
const obj = {a: 1, b: 2, c:3}
for (const key in obj) { console.log(obj[key]) }
for (const v of Object.values(obj)) { console.log(v) }




arr[Symbol.iterator] = function () {
     let i = 0;
     let arr = this;
     return {
          next: function () {
               if (i >= arr.length) {
                    return {done: true }
               } else {
                    const value = arr[i] + " goat"
                    i++
                    return {value, done: false}
               }
          }
     }
}