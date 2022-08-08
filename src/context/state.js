import { createContext } from "react";
import { useState } from "react";
import { ProductService } from "../ProductService";

const UserContext = createContext()

const UserProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(false)
    const [data, setData] = useState({id: '', productName: ''})
    const [error, setError] = useState(null)
    const productService = ProductService();

    return (
        <UserContext.Provider value={{isLoading, setIsLoading, data, setData, error, setError, productService}}>
            {children}
        </UserContext.Provider>
    )
}
export {UserContext, UserProvider}