// MyContext.js
import {createContext, useState , useEffect } from 'react';


// Create context
export const MyContext = createContext();

// create provider component
export const MyProvider = ({ children }) => {
    // This is my global states
    const [User, setUser] = useState(() => {
        // Load user from localstorage
        const storedUser = localStorage.getItem('user')
        return storedUser ? JSON.parse(storedUser) : null
    });

    const [theme, setTheme] = useState('light')
    // whenever changes save , save to localstorage
    useEffect(() => {
        if (User) {
            localStorage.setItem('user', JSON.stringify(User))

        } else {
            localStorage.removeItem('user')
        }
    }, [User])

    const logout = () => {
        setUser(null); // clear all states

        localStorage.removeItem('user')
    }

    return (
    <MyContext.Provider value={{ User, setUser, theme, setTheme , logout }}>
      {children}
    </MyContext.Provider>
  );
}