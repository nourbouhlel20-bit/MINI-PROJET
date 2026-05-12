import React from 'react'
import { render, screen } from '@testing-library/react'
import Home from '../pages/index'

test('Home page renders with title and description', () => {
  render(<Home />)
  expect(screen.getByText('Next.js + Devcontainer')).toBeInTheDocument()
  expect(screen.getByText(/Projet d’intégration/i)).toBeInTheDocument()
})
