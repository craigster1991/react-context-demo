import { render, screen } from '@testing-library/react';
import App from '.';
import UserContext from '../../contexts/userContext';

const userContextMock = {
  amILoggedIn: () => false,
}

const renderComponent = (userContextOverride = {}) => (
  render(
    <UserContext.Provider value={{ ...userContextMock, ...userContextOverride }}>
      <App />
    </UserContext.Provider>
  )
)

describe('rendering the app', () => {
  it('shows the header', async () => {
    renderComponent()
    expect(await screen.findByTitle('header')).toBeInTheDocument()
  })

  it('shows the footer', async () => {
    renderComponent()
    expect(await screen.findByTitle('footer')).toBeInTheDocument()
  })

  it('shows the log in/out buttons', async () => {
    renderComponent()
    expect(await screen.findByText(/Log In/i)).toBeInTheDocument()
    expect(await screen.findByText(/Log Out/i)).toBeInTheDocument()
  })

  describe.each([
    { isLoggedIn: false, expected: 'out' },
    { isLoggedIn: true, expected: 'in' },
  ])('given isLoggedIn = $isLoggedIn', ({ isLoggedIn, expected }) => {

    const mock = { amILoggedIn: () => isLoggedIn }

    it('shows the correct text in the header', async () => {
      renderComponent(mock)
      expect(await screen.findByText(`I am logged ${expected} - header`)).toBeInTheDocument()
    })
    it('shows the correct text in the footer', async () => {
      renderComponent(mock)
      expect(await screen.findByText(`I am logged ${expected} - footer`)).toBeInTheDocument()
    })
  })
})