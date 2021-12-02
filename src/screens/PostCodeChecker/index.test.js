/**
 * @jest-environment jsdom
 */
import React from 'react';
import axios from 'axios';
import { render, fireEvent, waitFor, act } from '@testing-library/react';
import PostCodeChecker from './index';

jest.mock('axios');

describe('PostCodeChecker', () => {
  it('should render PostCodeChecker component', () => {
    const { container } = render(<PostCodeChecker />);
    expect(container).toMatchSnapshot();
  });
  it('should show success msg when valid postCode', () => {
    const { container, getByTestId } = render(<PostCodeChecker />);
    const inputElement = getByTestId('input-postcode');
    const btnElement = getByTestId('submit');
    fireEvent.change(inputElement, { target: { value: 'SE1 7QD' } });
    fireEvent.click(btnElement);
    expect(container).toMatchSnapshot();
  });
  it('should call the API to show postcode is invalid', () => {
    const { container, getByTestId } = render(<PostCodeChecker />);
    const postCodeDetails = {
      data: {
        result: {
          postcode: 'G41 1AL',
          lsoa: 'Pollokshields East - 02',
          msoa: 'Pollokshields East'
        }
      }
    };
    axios.get.mockResolvedValueOnce(postCodeDetails);
    const inputElement = getByTestId('input-postcode');
    const btnElement = getByTestId('submit');
    fireEvent.change(inputElement, { target: { value: 'G41 1AL' } });
    fireEvent.click(btnElement);
    expect(container).toMatchSnapshot();
  });
  it('should show success msg when valid  lsoa', async () => {
    const { container, getByTestId } = render(<PostCodeChecker />);
    const postCodeDetails = {
      data: {
        result: {
          postcode: 'G41 1AM',
          lsoa: 'Southwark East - 02',
          msoa: 'Pollokshields East'
        }
      }
    };
    axios.get.mockResolvedValueOnce(postCodeDetails);
    const inputElement = getByTestId('input-postcode');
    const btnElement = getByTestId('submit');
    act(() => {
      fireEvent.change(inputElement, { target: { value: 'G41 1AM' } });
    });
    await waitFor(() => {
      act(() => {
        fireEvent.click(btnElement);
      });
    });
    expect(container).toMatchSnapshot();
  });
});
