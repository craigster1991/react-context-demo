import { render, screen } from '@testing-library/react';
import Header from '.';

describe('rendering the header', () => {
  it('shows the default text', async () => {
    render(<Header></Header>)
    expect(await screen.findByText('default header text!')).toBeInTheDocument()
  })
  it('accepts custom text', async () => {
    const mock = 'foo-bar'
    render(<Header text={mock}></Header>)
    expect(await screen.findByText(mock)).toBeInTheDocument()
  })
})