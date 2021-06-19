import * as React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test.skip('renders app', () => {
    const { getByText } = render(<App />);
    const heading = getByText(/нетflix/i);
    expect(heading).toBeInTheDocument();
} );