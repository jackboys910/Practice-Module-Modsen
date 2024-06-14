const convertFn = (callbackFn) => {
  return new Promise((resolve, reject) => {
    if (typeof callbackFn === 'function') {
      try {
        resolve(callbackFn())
      } catch (error) {
        reject(error)
      }
    } else {
      reject(new Error('Передана не колбек функция'))
    }
  })
}

convertFn(() => {
  console.log('Функция сработала успешно.')
}) // Функция сработала успешно. Промис разрешен
  .then(() => {
    console.log('Промис разрешен')
  })
  .catch((error) => {
    console.error(`Ошибка в функции: ${error}`)
  })

convertFn(1) // Error: Передана не колбек функция
