import { api } from "../../axios/instance";
import {CommunityRole} from "../../../enums/CommunityRole.ts";

export type GetRoleConfig = AxiosRequestConfig<{communityId: string}>;

export const getRole = async ({params, config}: GetRoleConfig ) =>
    api.get<CommunityRole | null>(`/community/${params.communityId}/role`, config)