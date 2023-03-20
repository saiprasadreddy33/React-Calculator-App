import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders calculator header', () => {
  render(<App />);
  const headerElement = screen.getByText(/calculator/i);
  expect(headerElement).toBeInTheDocument();
});

test('clears input field on click of clear button', () => {
  render(<App />);
  const inputElement = screen.getByRole('textbox');
  const clearButton = screen.getByText(/c/i);
  fireEvent.click(clearButton);
  expect(inputElement).toHaveValue('');
});

test('evaluates expression and displays result on click of equals button', () => {
  render(<App />);
  const inputElement = screen.getByRole('textbox');
  const equalsButton = screen.getByText('=');
  fireEvent.click(screen.getByText('2'));
  fireEvent.click(screen.getByText('+'));
  fireEvent.click(screen.getByText('3'));
  fireEvent.click(equalsButton);
  expect(inputElement).toHaveValue('5');
});

test('displays error message if expression is invalid', () => {
  render(<App />);
  const inputElement = screen.getByRole('textbox');
  const equalsButton = screen.getByText('=');
  fireEvent.click(screen.getByText('2'));
  fireEvent.click(screen.getByText('/'));
  fireEvent.click(screen.getByText('0'));
  fireEvent.click(equalsButton);
  expect(inputElement).toHaveValue('Error');
});
