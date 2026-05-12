import React from 'react'
import { render, screen } from '@testing-library/react'

test('sample test works', () => {
  render(React.createElement('div', null, 'hello'))
  expect(screen.getByText('hello')).toBeTruthy()
})
