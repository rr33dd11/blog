import {useLocation} from "react-router-dom";
import {useState} from "react";
import {useSelector} from "react-redux";
import {RootState} from "../store/store.ts";
import {postLogout} from "../api/requests/Users/postLogout.ts";
import {Logout} from "../helpers/logout.ts";

export const useHeader = () => {
    const location = useLocation();
    const [activeKey, setActiveKey] = useState<string>(location.pathname.slice(1) || 'main')
    const isAuth = useSelector((state: RootState) => state.user.isAuth)
    const email = useSelector((state: RootState) => state.user.email)

    const logout = () => {
        postLogout().then(Logout);
    }

    return {logout, isAuth, email, activeKey, setActiveKey}
}
