import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';


test('renders button with text', () => {
  render(<Button text="Click me" onClick={() => {}} />);
  expect(screen.getByText('Click me')).toBeInTheDocument();
});


test('calls onClick when clicked', () => {
  const handleClick = jest.fn();
  render(<Button text="Click me" onClick={handleClick} />);
  fireEvent.click(screen.getByText('Click me'));
  expect(handleClick).toHaveBeenCalledTimes(1);
});
