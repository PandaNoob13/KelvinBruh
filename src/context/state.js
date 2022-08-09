import { createContext, useContext } from "react";

const UserContext = createContext()
const UserProvider = ({children, service}) => {
    return (
        <UserContext.Provider value={{service}}>
            {children}
        </UserContext.Provider>
    )
}
export function useHookContext(){
    return useContext(UserContext)
}
export {UserContext, UserProvider} 