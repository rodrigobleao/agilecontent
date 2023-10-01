type HandleInputActionFunction = (
  searchInput: string,
  action: () => void
) => void

export const handleInputAction: HandleInputActionFunction = (
  searchInput,
  action
) => {
  const trimmedInput = searchInput.trim()
  if (trimmedInput) {
    action()
  }
}
