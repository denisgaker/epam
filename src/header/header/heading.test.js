import React from 'react';
import { getByText, render, screen } from '@testing-library/react';

import Heading from './Heading';

describe('Heading', () => {
    it('render app by text', () => {
        const { getByText } = render(Heading);
        const element = getByText(/НЕТflix/i);
        screen.debug();
        expect(element).toBeInTheDocument();
    });
});