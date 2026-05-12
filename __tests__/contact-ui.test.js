import React from 'react'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import Contact from '../pages/contact'

test('Contact form submits and shows reply', async () => {
  const mockResponse = {
    success: true,
    reply: 'Merci Alice ! Votre message a bien été reçu.',
    received: { name: 'Alice', message: 'Hello' }
  }

  global.fetch = jest.fn().mockResolvedValue({ ok: true, json: async () => mockResponse })

  render(<Contact />)

  fireEvent.change(screen.getByLabelText(/Nom/i), { target: { value: 'Alice' } })
  fireEvent.change(screen.getByLabelText(/Message/i), { target: { value: 'Hello' } })
  fireEvent.click(screen.getByText(/Envoyer/i))

  await waitFor(() => expect(screen.getByText(/Merci Alice/)).toBeInTheDocument())

  if (global.fetch.mockRestore) global.fetch.mockRestore()
})
