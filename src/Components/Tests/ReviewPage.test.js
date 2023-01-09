import { render, screen } from '@testing-library/react'
import ReviewPage from '../ReviewPage'
import { BrowserRouter } from 'react-router-dom'

const MockRev = () => {
    return (<BrowserRouter>
        <ReviewPage />
    </BrowserRouter>)
}
describe("review page for each category", () => {

    it('renders the articles list', async () => {
        render(<MockRev />)
        const titleElement = await screen.findByRole('list')
        expect(titleElement).toBeInTheDocument();
    })

    it('renders the category name', async () => {
        render(<MockRev />)
        const titleElement = await screen.findByRole('heading')
        expect(titleElement).toBeInTheDocument();
    })
})