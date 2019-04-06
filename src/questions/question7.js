
const loopTimeoutWithVar = () => {
  for(var i = 0; i <= 3; i++) {
    setTimeout(() => console.log(i), 100)
  }  
}

const loopTimeoutWithLet = () => {
  for(let i = 0; i <= 3; i++) {
    setTimeout(() => console.log(i), 100)
  }  
}

loopTimeoutWithVar()
loopTimeoutWithLet()
