import { createContext, useContext } from "react";

const DepsContext = createContext({})
export function useDeps(){
    return useContext(DepsContext)
}
export function DepProvider({children, services}){
    return(
        <DepsContext.Provider value = {services}>
            {children}
        </DepsContext.Provider>
    )
}