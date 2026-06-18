async function dataReadFetch() {
  console.log("Start reading data")
  const response = await fetch('./data.json')
  const data = await response.json()

  console.log("Responce: ", data)
}
dataReadFetch()