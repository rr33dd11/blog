import { api } from "../../axios/instance";
import {PostFullDTO} from "../../../interfaces/IPosts/PostFullDTO.ts";

export type GetPostInfoConfig = AxiosRequestConfig<{postId: string}>;

export const getPostInfo = async ({params, config}: GetPostInfoConfig) =>
    api.get<PostFullDTO>(`/post/${params.postId}`, config);