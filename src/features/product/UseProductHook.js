import { useState } from "react"
import { useHookContext, UserContext } from "../../context/state"

const UseProductHook = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [data, setData] = useState({id: '', productName: ''})
    const [error, setError] = useState(null)
    const {productService: {addProduct}} = useHookContext()
    const handleOnInput = (e) => {
        const key = e.target.key;
        const value = e.target.value;
        setData({
            data: {
                [key]: value
            }
        })
    }
    const handleSaveProduct = async () => {
        setIsLoading(true);
        setError(null);
        try {
            const result = await addProduct({
                id: data.id,
                productName: data.productName
            })
            if (result) alert(result)
            setData({id: '', productName: ''});
            setError(null);
        } catch (e) {
            setError(e);
            setIsLoading(false);
            setData({id: '', productName: ''});
        }
    }
    return {
        isLoading, data, error, handleOnInput, handleSaveProduct
    }
}
export default UseProductHook;