import { useContext } from "react";
import { UserContext } from "../context/user/index";

export function useAccount() {
    const userContext = useContext(UserContext);
    console.log("userContext in useAccount:", userContext);

    const isLoggedIn = userContext && userContext.user !== null && userContext.user !== undefined;
    console.log("isLoggedIn in useAccount:", isLoggedIn);

    const errorLogin = userContext.user?.status === 500 || !userContext.user?.id;

    return {
        userContext,
        isLoggedIn,
        errorLogin
    };
}