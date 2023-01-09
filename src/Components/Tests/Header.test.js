import { render, screen } from '@testing-library/react'
import Header from '../Header'


describe("header", () => {
    it('renders the header', () => {
        render(<Header />)
        const headerElement = screen.getByText(/Rollin' the dice BoardGame Reviews/i)
        expect(headerElement).toBeInTheDocument();
    })
})