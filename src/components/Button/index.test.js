/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from './index';

const props = {
  id: 'button',
  onClick: jest.fn(),
  name: 'Primary button',
  type: 'button'
};

describe('Button', () => {
  it('shoulld render Button Component', () => {
    const { container } = render(<Button {...props} />);
    expect(container).toMatchSnapshot();
  });
  it('should click on Button', () => {
    const { getByTestId } = render(<Button {...props} />);
    const btnElement = getByTestId('button');
    fireEvent.click(btnElement);
    expect(props.onClick).toHaveBeenCalled();
  });
});
