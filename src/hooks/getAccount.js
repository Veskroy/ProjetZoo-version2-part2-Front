import { useContext } from "react";
import { UserContext } from "../context/user/index";

// récupération du compte courant
export function useAccount() {
    const userContext = useContext(UserContext);
    console.log("userContext in useAccount:", userContext);

    const isLoggedIn = userContext && userContext.user !== null && userContext.user !== undefined;
    console.log("isLoggedIn in useAccount:", isLoggedIn);

    const errorLogin = userContext?.user?.status === 500 || !userContext?.user?.id;

    return {
        userContext,
        isLoggedIn,
        errorLogin,
    };
}

// récupération des rôles de l'utilisateur
export function useRolesUser() {
    const userContext = useContext(UserContext);
    console.log("userContext in getRolesUser:", userContext);

    const roles = userContext && userContext.user && userContext.user.roles;
    console.log("roles in getRolesUser:", roles);

    const isAdmin = roles && roles.includes("ROLE_ADMIN");
    const isUser = roles && roles.includes("ROLE_USER");
    const isEmployee = roles && roles.includes("ROLE_EMPLOYEE");

    return {
        isAdmin,
        isUser,
        isEmployee
    };
}

// récupère le nom complet de l'utilisateur (prénom + nom)
export function useUserToString() {
    const userContext = useContext(UserContext);
    const userToString = userContext && userContext.user && `${userContext.user.firstname} ${userContext.user.lastname}`;

    return userToString;
}