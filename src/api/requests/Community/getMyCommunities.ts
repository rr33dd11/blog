import { api } from "../../axios/instance";
import {CommunityUserDTO} from "../../../interfaces/ICommunities/CommunityUserDTO.ts";

export type GetCommunitiesConfig = AxiosRequestConfig;

export const getMyCommunities = async (requestConfig?: GetCommunitiesConfig) =>
    api.get<CommunityUserDTO[]>('/community/my', requestConfig?.config);