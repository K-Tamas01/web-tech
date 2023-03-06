import { createContext, useState } from "react";

export const AlertBoxContext = createContext(null);

export const AlertBoxProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    
    return <AlertBoxContext.Provider value={{ isOpen, setIsOpen}}>{ children }</AlertBoxContext.Provider>;
}