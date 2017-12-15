export const validKey = (code) => {
  if ((code > 64 && code < 91)) {
    return true
  }
  return false
}
