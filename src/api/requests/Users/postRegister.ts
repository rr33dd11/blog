import { UserRegisterModel } from "../../../interfaces/IUSers/UserRegisterModel";
import { api } from "../../axios/instance";

export type PostRegisterParams = UserRegisterModel;
export type PostRegisterConfig = AxiosRequestConfig<PostRegisterParams>;

export const postRegister = async ({params, config} : PostRegisterConfig) =>
    api.post('account/register', params, config)