import { render, screen } from '@testing-library/react'
import Comments from '../Comments'
import { BrowserRouter } from 'react-router-dom'

const MockCom = () => {
    return (<BrowserRouter>
        <Comments />
    </BrowserRouter>)
}

describe("comments section", () => {

    it('renders the comments title', async () => {
        render(<MockCom />)
        const comElement = await screen.findByText('Comments')
        expect(comElement).toBeInTheDocument();
    })

})