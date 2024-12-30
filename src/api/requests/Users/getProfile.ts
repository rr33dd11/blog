import { api } from "../../axios/instance";
import {UserDTO} from "../../../interfaces/IUSers/UserDTO.ts";

export type GetProfileConfig = AxiosRequestConfig;

export const getProfile = async (requestConfig?: GetProfileConfig) =>
  api.get<UserDTO>('account/profile', requestConfig?.config);