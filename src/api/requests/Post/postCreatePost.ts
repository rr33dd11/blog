import { api } from "../../axios/instance";
import {CreatePostDTO} from "../../../interfaces/IPosts/CreatePostDTO.ts";

export type PostCreatePostParams = Omit<CreatePostDTO, 'groupId'>;
export type PostCreatePostConfig = AxiosRequestConfig<PostCreatePostParams>;

export const postCreatePost = async ({ params, config }: PostCreatePostConfig) =>
    api.post('post', params, config)