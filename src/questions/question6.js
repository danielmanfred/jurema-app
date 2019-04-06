
let count = 0

const metodo1 = async () => {
  try {
    const timeout = await setTimeout(() => console.log('M1: Promise made'), Math.random() * 3000 + 1000)
    return timeout
  }
  catch (err) {
    console.log(`Error: ${err}`)
  }
}

const metodo2 = async () => {
  try {
    const timeout = await setTimeout(() => console.log('M2: Promise made'), Math.random() * 2000 + 1000)
    return timeout
  }
  catch (err) {
    console.log(`Error: ${err}`)
  }
}

console.log('Método 1: ', metodo1())
console.log('Método 2: ', metodo2())

