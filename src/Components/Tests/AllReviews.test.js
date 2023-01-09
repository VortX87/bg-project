import { render, screen } from '@testing-library/react'
import AllReviews from '../AllReviews'
import { BrowserRouter } from 'react-router-dom'

const MockAllRev = () => {
    return (<BrowserRouter>
        <AllReviews />
    </BrowserRouter>)
}

describe("all reviews landing page", () => {

    it('renders the date created option', async () => {
        render(<MockAllRev />)
        const titleElement = await screen.findByText('Date Created')
        expect(titleElement).toBeInTheDocument();
    })

    it('renders the number of comments option', async () => {
        render(<MockAllRev />)
        const titleElement = await screen.findByText('No. of Comments')
        expect(titleElement).toBeInTheDocument();
    })

    it('renders the number of votes option', async () => {
        render(<MockAllRev />)
        const titleElement = await screen.findByText('No. of Votes')
        expect(titleElement).toBeInTheDocument();
    })

    it('renders the ascending order option', async () => {
        render(<MockAllRev />)
        const titleElement = await screen.findByText('Ascending Order')
        expect(titleElement).toBeInTheDocument();
    })

    it('renders the descending order option', async () => {
        render(<MockAllRev />)
        const titleElement = await screen.findByText('Descending Order')
        expect(titleElement).toBeInTheDocument();
    })

    it('renders the articles', async () => {
        render(<MockAllRev />)
        const titleElement = await screen.findByRole('list')
        expect(titleElement).toBeInTheDocument();
    })
    it('renders the correct amount of articles', async () => {
        render(<MockAllRev />)
        const titleElement = await screen.findAllByRole('link')
        expect(titleElement).toHaveLength(24);
    })
    it('renders both dropdown options', async () => {
        render(<MockAllRev />)
        const titleElement = await screen.findAllByRole('combobox')
        expect(titleElement).toHaveLength(2);
    })

})