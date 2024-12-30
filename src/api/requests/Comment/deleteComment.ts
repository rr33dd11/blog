import { api } from "../../axios/instance";

export type DeleteCommentConfig = AxiosRequestConfig<{commentId: string}>;

export const deleteComment = async ({params, config}: DeleteCommentConfig ) =>
    api.delete(`/comment/${params.commentId}`, config)