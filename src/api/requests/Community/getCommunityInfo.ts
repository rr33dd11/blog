import { api } from "../../axios/instance";
import {CommunityFullDTO} from "../../../interfaces/ICommunities/CommunityFulDTO.ts";

export type GetCommunityInfoConfig = AxiosRequestConfig<{communityId: string}>;

export const getCommunityInfo = async ({params, config}: GetCommunityInfoConfig) =>
    api.get<CommunityFullDTO>(`/community/${params.communityId}`, config);