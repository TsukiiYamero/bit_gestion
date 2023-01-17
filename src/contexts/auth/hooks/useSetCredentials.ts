import { useEffect } from "react"
import { useAuthDispatch } from "./useAuthContext";
import { AuthActions, AuthUser } from "../auth.types";
import { PASSWORD_DEFAULT, USERNAME_DEFAULT } from "@/utils/userCredentials";

export const useSetCredentials = () => {
    const authDispatch = useAuthDispatch();

    useEffect(() => {
        const getUserLogged = async () => {
            const user = localStorage.getItem('user');
            if (!user) return;

            let userObj: AuthUser | null = null;
            try {
                userObj = JSON.parse(user);
            } catch (error) {
                console.error('Failed to parse user')
            }

            if (userObj?.username === USERNAME_DEFAULT && userObj?.password === PASSWORD_DEFAULT)
                authDispatch({ type: AuthActions.loginSuccess, payload: userObj })
        }

        getUserLogged();
    }, [authDispatch]);
}