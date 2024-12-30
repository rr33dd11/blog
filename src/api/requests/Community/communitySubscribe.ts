import { api } from "../../axios/instance";

export type CommunitySubscribeConfig = AxiosRequestConfig<{communityId: string}>;

export const postSubscribe = async ({params, config}: CommunitySubscribeConfig ) =>
    api.post(`/community/${params.communityId}/subscribe`, config)