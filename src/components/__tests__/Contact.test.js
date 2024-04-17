import React from 'react';
import { render, screen } from '@testing-library/react';
import Contact from '../Contact';
import '@testing-library/jest-dom';

describe('Contact component', () => {

    test('renders contact component', () => {
        render(<Contact/>);
        
        const heading = screen.getByRole('heading');
        expect(heading).toBeInTheDocument();
    });

    test('renders contact component with correct text', () => {
        render(<Contact/>);

        const paragraph = screen.getByText('This is the contact page of Namasate REACT 🚀');
        expect(paragraph).toBeInTheDocument();
    });

    test('renders contact component with correct text', () => {
        render(<Contact/>);

        const github = screen.getByText('Github');
        expect(github).toBeInTheDocument();
    });

});