/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('App Component', function () {
  it('should have hello world message', function () {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  });
});
