import { api } from "../../axios/instance";
import {SearchAddressModel} from "../../../interfaces/IAddress/SearchAddressModel.ts";

export type GetAddressChainConfig = AxiosRequestConfig;

export const getAddressChain = async (requestConfig?: GetAddressChainConfig) =>
    api.get<SearchAddressModel[]>('address/chain', requestConfig?.config);