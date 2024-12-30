import { api } from "../../axios/instance";
import {SearchAddressModel} from "../../../interfaces/IAddress/SearchAddressModel.ts";

export type GetAddressSearchConfig = AxiosRequestConfig;

export const getAddressSearch = async (requestConfig?: GetAddressSearchConfig) =>
    api.get<SearchAddressModel[]>('address/search', requestConfig?.config);