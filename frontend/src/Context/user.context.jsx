import { createContext, useState } from "react";

export const UserContext = createContext(undefined);

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState({name: undefined, email: undefined, id: undefined})

    return <UserContext.Provider value={{ user, setUser }}>{ children }</UserContext.Provider>;
}