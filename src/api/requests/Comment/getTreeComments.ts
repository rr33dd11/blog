import { api } from "../../axios/instance";
import {CommentDTO} from "../../../interfaces/IPosts/CommentDTO.ts";

export type GetTreeCommentsConfig = AxiosRequestConfig<{commentId: string}>;

export const getTreeComments = async ({params, config}: GetTreeCommentsConfig) =>
    api.get<CommentDTO[]>(`/comment/${params.commentId}/tree`, config);