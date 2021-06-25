import React, { useState, useEffect } from 'react'
import { auth } from '../base'

export const AuthContext = React.createContext()

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null)

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                const { email, uid } = user
                const userObj = { email: email, id: uid }
                // console.log(email)
                setCurrentUser(userObj)
            } else {
                // console.log('No users logged in.')
            }
        })
        
    },[])

    // console.log(9999, currentUser)

    return (
        <AuthContext.Provider value={[currentUser, setCurrentUser]}>
            { children }
        </AuthContext.Provider>
    )
}