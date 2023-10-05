export const getRandomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export const randomDelay = () => {
  const minDelay = 1 * 1000
  const maxDelay = 3 * 1000

  const delay = getRandomNumber(minDelay, maxDelay)

  return new Promise((resolve) => {
    setTimeout(resolve, delay)
  })
}
