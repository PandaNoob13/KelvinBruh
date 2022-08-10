import { loginService } from "./LoginService"

export const ServiceFactory = (apiClient) => {
    return{
        loginService: loginService(apiClient)
    }
}