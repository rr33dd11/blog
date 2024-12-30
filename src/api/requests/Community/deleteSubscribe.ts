import { api } from "../../axios/instance";

export type DeleteSubscribeConfig = AxiosRequestConfig<{communityId: string}>;

export const deleteSubscribe = async ({params, config}: DeleteSubscribeConfig ) =>
    api.delete(`/community/${params.communityId}/unsubscribe`, config)