// __tests__/Contact.test.js
import React from 'react'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Contact from '..'
const portrait = { name: "portraits", description: "Portraits of people in my life" };

afterEach(cleanup)

describe('Contact component', () => {

  it('renders', () => {
    render(<Contact currentCategory={portrait} />);
  });

  it('matches snapshot DOM node structure', () => {
    const { asFragment } = render(<Contact currentCategory={portrait} />)
    expect(asFragment()).toMatchSnapshot()
  })
});

it('renders', () => {
  const { getByTestId } = render(<Contact currentCategory={portrait} />)
  expect(getByTestId('h1tag')).toHaveTextContent('Portraits')
})