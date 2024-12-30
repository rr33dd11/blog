import { api } from "../../axios/instance";
import {CreateCommentDTO} from "../../../interfaces/IComments/CreateCommentDTO.ts";

export type PostCommentParams = CreateCommentDTO & {id: string};
export type PostCommentConfig = AxiosRequestConfig<PostCommentParams>;

export const postComment = async ({ params, config }: PostCommentConfig) =>
    api.post(`/post/${params.id}/comment`, {...params}, config)
