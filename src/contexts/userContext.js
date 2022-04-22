import React, { createContext, useState } from 'react'

const UserContext = createContext()

const UserProvider = ({ children }) => {

    const [userState, setUserState] = useState({ loggedIn: false })
    
    const logMeIn = () => {
      setUserState({loggedIn: true})
    }

    const logMeOut = () => {
      setUserState({loggedIn: false})
    }

    const amILoggedIn = () => userState.loggedIn

    return (
        <UserContext.Provider value={{
          logMeIn,
          logMeOut,
          amILoggedIn
        }}>
          {children}
        </UserContext.Provider>
    )
}

export { UserProvider }
export default UserContext
