import { jsonPlaceHolderService } from "./JsonPlaceHolderService"
import { productService } from "./ProductService"

export const ServiceFactory = (apiClient) => {
    return{
        jsonPlaceHolderService: jsonPlaceHolderService(apiClient),
        productService: productService(apiClient)
    }
}