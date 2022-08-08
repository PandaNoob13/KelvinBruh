import { useEffect, useState } from "react";
import { ProductService } from "./ProductService";

const ProductForm = props => {
    const [isLoading, setIsLoading] = useState(false)
    const [data, setData] = useState({id: '', productName: ''})
    const [error, setError] = useState(null)
    const productService = ProductService();

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
            const result = await productService.addProduct({
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

    useEffect(() => {
        if(error != null){
            alert(error)
        }
    }, [error])

        return(
            <div>
                <label>ID</label>
                <input name="id" type='text' value={data.id} onChange={handleOnInput}></input>
                <label>Product Name</label>
                <input name="productName" type='text' value={data.productName} onChange={handleOnInput}></input>
                <button disabled={isLoading} onClick={handleSaveProduct}>Save</button>
                {error && <div>Oops {error}</div>}
            </div>
        )
}

export default ProductForm;