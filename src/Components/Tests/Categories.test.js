import { render, screen } from '@testing-library/react'
import Categories from '../Categories'
import { BrowserRouter } from 'react-router-dom'

const MockCat = () => {
    return (<BrowserRouter>
        <Categories />
    </BrowserRouter>)
}
describe("categories page", () => {

    it('renders all the categories', async () => {
        render(<MockCat />)
        const catElement = await screen.findAllByRole('listitem')
        expect(catElement).toHaveLength(7);
    })

    it('renders the categories (specific)', async () => {
        render(<MockCat />)
        const catElement = await screen.findByText('strategy')
        expect(catElement).toBeInTheDocument();
    })

})


