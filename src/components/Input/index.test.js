/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Input from './index';

const props = {
  id: 'submit',
  onChange: jest.fn(),
  value: 'G41'
};
describe('Input', () => {
  it('should render Input Component', () => {
    const { container } = render(<Input {...props} />);
    expect(container).toMatchSnapshot();
  });
  it('should call onChange', () => {
    const { getByTestId } = render(<Input {...props} />);
    const inputElement = getByTestId('submit');
    fireEvent.change(inputElement, { target: { value: 'G41DL' } });
    expect(props.onChange).toHaveBeenCalled();
  });
});
