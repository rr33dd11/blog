import { RootState } from "../store/store";
import { ReactNode } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

interface PrivateRouterProps {
    children: ReactNode;
    isAuth: boolean
}

export const PrivateRouter= ({children, isAuth} : PrivateRouterProps) => {
    const _isAuth = useSelector((state: RootState) => state.user.isAuth)

    if (isAuth == _isAuth) {
        return <>{children}</>
    }
    if (_isAuth) {
        return <Navigate to ="/"/>
    }
    return <Navigate to ="/login"/>
}