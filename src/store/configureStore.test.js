import { createLoggerMiddleware, injectDevTools } from './configureStore'


test('should return anything', () => {
  process.env.NODE_ENV = 'development'
  expect(createLoggerMiddleware([])).toBeDefined()
})

test('should return', () => {
  expect(injectDevTools()).toBeDefined()
})
