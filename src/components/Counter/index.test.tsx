import { render, screen } from '@testing-library/react';
import Counter from './';
import userEvent from '@testing-library/user-event';

describe('Counter', () => {
    it('renders with initial count', () => {
        render(<Counter />);
        expect(screen.getByText(/Counter: 0/i)).toBeInTheDocument();
    });

    it('increments the count', async () => {
        render(<Counter />);
        const incrementButton = screen.getByText(/Increment/i);
        await userEvent.click(incrementButton);
        expect(screen.getByText(/Counter: 1/i)).toBeInTheDocument();
    });

    it('decrements the count', async () => {
        render(<Counter />);
        const decrementButton = screen.getByText(/Decrement/i);
        await userEvent.click(decrementButton);
        expect(screen.getByText(/Counter: -1/i)).toBeInTheDocument();
    });
});
