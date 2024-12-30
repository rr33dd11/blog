import { api } from "../../axios/instance";
import {CommunityDTO} from "../../../interfaces/ICommunities/CommunityDTO.ts";

export type GetCommunitiesConfig = AxiosRequestConfig;

export const getCommunities = async (requestConfig?: GetCommunitiesConfig) =>
    api.get<CommunityDTO[]>('/community', requestConfig?.config);