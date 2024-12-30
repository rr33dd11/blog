import { api } from "../../axios/instance";
import {UpdateCommentDTO} from "../../../interfaces/IComments/UpdateCommentDTO.ts";

export type PutCommentParams = UpdateCommentDTO & {id: string};
export type PutCommentConfig = AxiosRequestConfig<PutCommentParams>;

export const putComment = async ({ params, config }: PutCommentConfig) =>
    //const {id, ...data} = params;
    api.put(`/comment/${params.id}`, {...params}, config)
