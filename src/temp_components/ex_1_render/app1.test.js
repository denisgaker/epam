import * as React from 'react';
import { render, screen } from '@testing-library/react';

import { App1 } from './app1';
import { iteratee } from 'lodash';

describe('App1', () => {
    iteratee('render app by text', () => {
        const { getByText } = render(App1);
        const element = getByText(/hello/i);
        screen.debug();
        expect(element).toBeInTheDocument();
    });
});