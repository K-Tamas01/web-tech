import { createContext, useState } from "react";

export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState({name: null, email: null, id: null})

    return <UserContext.Provider value={{ user, setUser }}>{ children }</UserContext.Provider>;
}