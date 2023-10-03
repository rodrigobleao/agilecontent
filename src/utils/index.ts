export const randomDelay = () => {
  const minDelay = 1 * 1000
  const maxDelay = 3 * 1000

  const delay = Math.floor(Math.random() * (maxDelay - minDelay + 1)) + minDelay

  return new Promise((resolve) => {
    setTimeout(resolve, delay)
  })
}
