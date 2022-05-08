// __tests__/About.test.js
import React from 'react';
import { render, cleanup } from '@testing-library/react';
// import extend-expect from jest-dom
import '@testing-library/jest-dom/extend-expect';
import About from '..';

// call the cleanup function using the afterEach global function from Jest
afterEach(cleanup);

describe('About component', () => {
  // first test
  it('renders', () => {
    // use render function to render the About component using JSX
    render(<About />);
  });
  // second test
  it('matches snapshot DOM node structure', () => {
    const { asFragment } = render(<About />);
    
    expect(asFragment()).toMatchSnapshot();
  });
})
