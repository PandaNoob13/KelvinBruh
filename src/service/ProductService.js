export const ProductService = () => {
    const addProduct = (newProduct) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (newProduct.id !== ''){
                    resolve('Add product success')
                }else{
                    reject(new Error('Oops...'))
                }
            });
        })
    }
    return {
        addProduct
    }
}