
let count = 0

const promiseMetodo1 = () => {
  thisCount  = ++count

  console.log('M1: Started: ', thisCount)

  const promise = new Promise((resolve, reject) => {
    console.log('M1: Promise started :', thisCount)
    setTimeout(() => resolve(thisCount), Math.random() * 3000 + 1000)
  })

  promise.then(val => console.log('M1: Promise fulfilled: ', val))
  console.log('M1: Promise made :', thisCount)
}

const promiseMetodo2 = () => {
  thisCount = ++count

  console.log('M2: Started: ', thisCount)

  const promise = new Promise((resolve, reject) => {
    console.log('M2: Promise started :', thisCount)
    setTimeout(() => resolve(thisCount), Math.random() * 2000 + 1000)
  })

  promise.then(val => console.log('M2: Promise fulfilled: ', val))
  console.log('M2: Promise made :', thisCount)
}

promiseMetodo1()
promiseMetodo2()

