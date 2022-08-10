import { jsonPlaceHolderService } from "./JsonPlaceHolderService"

export const ServiceFactory = (apiClient) => {
    return{
        jsonPlaceHolderService: jsonPlaceHolderService(apiClient)
    }
}