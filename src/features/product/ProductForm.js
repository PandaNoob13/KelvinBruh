import { useEffect } from "react";
import UseProductHook from "./UseProductHook";

const ProductForm = () => {
    const {isLoading, data, error, handleOnInput, handleSaveProduct} = UseProductHook();
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
                    {/* {error && <div>Oops {error}</div>} */}
            </div>
        )
}

export default ProductForm;