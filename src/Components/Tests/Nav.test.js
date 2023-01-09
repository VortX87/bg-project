import { render, screen } from '@testing-library/react'
import Nav from '../Nav'
import { BrowserRouter } from 'react-router-dom'

const MockNav = () => {
    return (<BrowserRouter>
        <Nav />
    </BrowserRouter>)
}

describe("navbar", () => {
    it('renders the nav link', () => {
        render(<MockNav />)
        const navElement = screen.getByRole("navigation", { name: 'mainNav' })
        expect(navElement).toBeInTheDocument();
    })
})