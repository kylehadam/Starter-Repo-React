import { render, screen } from '@testing-library/react';
import App from '../../src/App';

test('renders hello world', () => {
  render(<App />);
  const element = screen.getByText(/hello/i);
  expect(element).toBeInTheDocument();
});
