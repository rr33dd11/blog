import { TokenResponse } from "../../../interfaces/ICommon/TokenResponse";
import { LoginCredentials } from "../../../interfaces/IUSers/LoginCredentials";
import { api } from "../../axios/instance";

export type PostLoginParams = LoginCredentials;
export type PostLoginConfig = AxiosRequestConfig<PostLoginParams>;

export const postLogin = async ({ params, config }: PostLoginConfig) =>
    api.post<TokenResponse>('account/login', params, config)