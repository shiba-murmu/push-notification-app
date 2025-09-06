// MyContext.js
import {createContext, useState } from 'react';


// Create context
export const MyContext = createContext();

// create provider component
export const MyProvider = ({ children }) => {
    // This is my global states
    const [user, setUser] = useState(null);
    const [theme, setTheme] = useState('light');

    return (
    <MyContext.Provider value={{ user, setUser, theme, setTheme }}>
      {children}
    </MyContext.Provider>
  );
}