import React, { useState,useEffect } from "react";
import { useDeps } from "../../shared/DepContext";


const ProductView = () => {
    const {productService} = useDeps()
    const [products, setProducts] = useState([])
    const [isLoading, setLoading] = useState(false);
    useEffect(()=>{
        onGetAllProduct();
    }, [])

    const onGetAllProduct = async () => {
        setLoading(true);
        try {
            const response = await productService.getAllProduct();
            console.log(response);
            setProducts(response)
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false)
        }
    }

    return(
        <div>
            <ul>
                {products.map((product) => {
                    return <li key={product.id}>{product.name}</li>
                })}
            </ul>
        </div>
    )
}
export default ProductView;