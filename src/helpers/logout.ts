import { logout } from "../store/userSlice";
import { AppDispatch, store } from "../store/store";

export const Logout = async () => {
    (store.dispatch as AppDispatch)(logout());
    localStorage.clear()
}