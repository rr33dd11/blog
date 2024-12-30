import { api } from "../../axios/instance";

export type PostLikeConfig = AxiosRequestConfig<{postId: string}>;

export const deleteLike = async ({params, config}: PostLikeConfig ) =>
    api.delete(`/post/${params.postId}/like`, config)