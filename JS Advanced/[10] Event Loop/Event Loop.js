const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

async function printNumbers() {
  for (let number = 1; number <= 10; number++) {
    console.log(number)
    await delay(1000)
  }
}

printNumbers()
