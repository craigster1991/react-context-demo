import { render, screen } from '@testing-library/react';
import Footer from '.';

describe('rendering the footer', () => {
  it('shows the default text', async () => {
    render(<Footer></Footer>)
    expect(await screen.findByText('default footer text!')).toBeInTheDocument()
  })
  it('accepts custom text', async () => {
    const mock = 'foo-bar'
    render(<Footer text={mock}></Footer>)
    expect(await screen.findByText(mock)).toBeInTheDocument()
  })
})