import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";// 연동을 위해 Client
import { 
    userLoginApi,
    userRegisterApi,
    userAllGetapi
} from "../apis/user.api";

export const useLoginUser = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: userLoginApi,
        onSuccess: (user) =>{
            localStorage.setItem("currentUser", JSON.stringify(user))
            // queryClient.setQueriesData(
            //     ["user"], user
            //)
        }
    })
}

export const useRegisterUser = () => {
    return useMutation({
        mutationFn: userRegisterApi,
    })
}

export const useLogout = () => {
    localStorage.removeItem("currentUser")
}

export const getCurrentUser = () => {
    const user = localStorage.getItem("currentUser")
    return user && JSON.parse(user)
}

export const useAllGetUser = () => {
    return useQuery({
        queryKey : ["user"], 
        queryFn : userAllGetapi
    })
}