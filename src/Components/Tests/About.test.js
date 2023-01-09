import { render, screen } from '@testing-library/react'
import About from '../About'


describe("about page", () => {
    it('renders the About blurb', () => {
        render(<About />)
        const aboutElement = screen.getByText(/This is a website to show the skills that have been learnt during training to become a developer/i)
        expect(aboutElement).toBeInTheDocument();
    })
})
