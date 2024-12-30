import { api } from "../../axios/instance";

export type PostLogoutConfig = AxiosRequestConfig;

export const postLogout = async (requestConfig?: PostLogoutConfig) =>
    api.post('account/logout', requestConfig?.config)