import React from 'react';
import App from '../src/App'
import { render, screen } from '@testing-library/react';

describe('App', () => {
  it('renders', () => {
    render(<App />);
  });
});
