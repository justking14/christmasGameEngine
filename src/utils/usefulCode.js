let condition = true;
condition && doSomething();//only runs if condition is true

const myTech = 'JavaScript';
const techs = ['HTML', 'CSS', 'JavaScript'];
if (techs.includes(myTech)) { }

//this reference works inside arrow function without "let that = this"
function myFunc() {
     this.myVar = 0;
     setTimeout(() => {
          this.myVar++;//1
     }, 0);
}

//template literal 
const name = "Nick";
`Hello ${name}, the following expression is equal to four : ${2 + 2}`;

//promises and await
let p = new Promise((resolve, reject) => {
     let a = 1 + 1
     if (a === 2) { resolve('won')
     } else { reject('failed')
     }
})
let p2 = new Promise((resolve, reject) => {
     resolve("promise kept")
})
async function doWork() {
     try {
          const response = await p()
          const secondResponse = await p2(response)
     } catch (err) {
          //err will be failed message
     }
}

//enum
const serverUrls = {
  prod: "prod.myweb.com",
  test: "test.myweb.com",
  staging: "staging.myweb.com",
};
const nMap = {1: 'res-1', 2: 'res-2', 3: 'res-3'}
const result = nMap[ n ]

//sort numerically 
numbers.sort((a, b) => a - b);

//if statement alternative
let result2 = n % 2 === 0 ? 'even number' : 'odd number'
