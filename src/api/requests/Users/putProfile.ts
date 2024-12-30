import { UserEditModel } from "../../../interfaces/IUSers/UserEditModel";
import { api } from "../../axios/instance";

export type PutProfileParams = UserEditModel;
export type PutProfileConfig = AxiosRequestConfig<PutProfileParams>;

export const putProfile = async ({ params, config }: PutProfileConfig) =>
    api.put('account/profile', params, config)