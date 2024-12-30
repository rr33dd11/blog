import { api } from "../../axios/instance";
import {CreatePostDTO} from "../../../interfaces/IPosts/CreatePostDTO.ts";

export type PostCreateCommunityPostParams = CreatePostDTO & {groupId: string};
export type PostCreateCommunityPostConfig = AxiosRequestConfig<PostCreateCommunityPostParams>;

export const postCreateCommunityPost = async ({ params, config }: PostCreateCommunityPostConfig) =>
    api.post(`community/${params.groupId}/post`, params, config)

