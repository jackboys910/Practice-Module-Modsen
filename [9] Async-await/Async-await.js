async function fetchUserData(id) {
  const info = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  const showInfo = await info.json()
  return showInfo
}

fetchUserData(1)
  .then((info) =>
    console.log(`Объект с id: 1\n${JSON.stringify(info, null, 2)}\n`)
  )
  .catch((error) => console.error(`Ошибка при загрузке данных: ${error}\n`))
fetchUserData(2)
  .then((info) =>
    console.log(`Объект с id: 2\n${JSON.stringify(info, null, 2)}\n`)
  )
  .catch((error) => console.error(`Ошибка при загрузке данных: ${error}\n`))
fetchUserData(50)
  .then((info) =>
    console.log(`Объект с id: 50\n${JSON.stringify(info, null, 2)}\n`)
  )
  .catch((error) => console.error(`Ошибка при загрузке данных: ${error}\n`))
