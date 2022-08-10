export const productService = ({doGet}) => {
    const getAllProduct = async () => {
        try {
            return await doGet({url: '/users'})
        } catch (error) {
            throw error
        }
    }
    return {getAllProduct}
}