import handler from '../../pages/api/contact'

test('contact API returns success for POST', async () => {
  const req = { method: 'POST', body: { name: 'Alice', message: 'Hi' } }

  let statusCode = null
  let jsonData = null
  const res = {
    status(code) { statusCode = code; return this },
    json(obj) { jsonData = obj; return this }
  }

  await handler(req, res)

  expect(statusCode).toBe(200)
  expect(jsonData).toHaveProperty('success', true)
  expect(jsonData.reply).toMatch(/Merci/)
  expect(jsonData.received).toEqual({ name: 'Alice', message: 'Hi' })
})
