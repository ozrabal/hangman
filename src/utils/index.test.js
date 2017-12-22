import { validKey } from '../utils'

test('should return true', () => {
  expect(validKey(70)).toBe(true)
})

test('should return false', () => {
  expect(validKey(100)).toBe(false)
})
