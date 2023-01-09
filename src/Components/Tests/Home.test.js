import { render, screen } from '@testing-library/react'
import Home from '../Home'


describe("home page", () => {
    it('renders the welcome message', () => {
        render(<Home />)
        const homeElement = screen.getByText(/Home of all the best board game reviews/i)
        expect(homeElement).toBeInTheDocument();
    })

    it('renders the welcome heading', () => {
        render(<Home />)
        const homeElement = screen.getByRole("heading")
        expect(homeElement).toBeInTheDocument();
    })

    it('renders the welcome image', () => {
        render(<Home />)
        const homeElement = screen.getByRole("img")
        expect(homeElement).toBeInTheDocument();
    })
})
