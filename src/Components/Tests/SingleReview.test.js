import { render, screen } from '@testing-library/react'
import SingleReview from '../SingleReview'
import { BrowserRouter } from 'react-router-dom'


const MockSingRev = () => {
    return (<BrowserRouter>
        <SingleReview />
    </BrowserRouter>)
}

describe("single review page", () => {

    it('renders the designer heading', async () => {
        render(<MockSingRev />)
        const headElement = await screen.getByText('Designer')
        expect(headElement).toBeInTheDocument();
    })

    it('renders the owner heading', async () => {
        render(<MockSingRev />)
        const headElement = await screen.getByText('Owner')
        expect(headElement).toBeInTheDocument();
    })
    it('renders the review heading', async () => {
        render(<MockSingRev />)
        const headElement = await screen.getByText('Review')
        expect(headElement).toBeInTheDocument();
    })
    it('renders the votes heading', async () => {
        render(<MockSingRev />)
        const headElement = await screen.getByText('Votes :')
        expect(headElement).toBeInTheDocument();
    })
    it('renders the image', async () => {
        render(<MockSingRev />)
        const headElement = await screen.getByRole('img')
        expect(headElement).toBeInTheDocument();
    })
    it('checks for two buttons', async () => {
        render(<MockSingRev />)
        const headElement = await screen.getAllByRole('button')
        expect(headElement).toHaveLength(2);
    })
    it('checks for comment area', async () => {
        render(<MockSingRev />)
        const headElement = await screen.getByRole('textbox')
        expect(headElement).toBeInTheDocument();
    })


})