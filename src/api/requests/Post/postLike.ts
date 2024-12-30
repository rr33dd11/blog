import { api } from "../../axios/instance";

export type PostLikeConfig = AxiosRequestConfig<{postId: string}>;

export const postLike = async ({params, config}: PostLikeConfig ) =>
    api.post(`/post/${params.postId}/like`, config)