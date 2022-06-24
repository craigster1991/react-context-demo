import React, { useContext } from 'react';
import { render, screen } from '@testing-library/react';
import UserContext, { UserProvider } from './userContext';
import { act } from 'react-dom/test-utils';
/////////////////////////////////////////////
////// THIS FILE IS NOT FINISHED ////////////
/////////////////////////////////////////////
jest.unmock('./userContext');
const renderComponent = async testComponent => (
  // await act(async () => {
    render(<UserProvider>{testComponent}</UserProvider>)
  // })
);

describe('User context', () => {
  it('logs in a user', async () => {
    const TestComponent = () => <div>{useContext(UserContext).logMeIn()}</div>;
    renderComponent(<TestComponent />);
    expect(screen.getByText('true')).toBeInTheDocument();
  })
});