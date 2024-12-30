import { api } from "../../axios/instance";
import {PostsResponse} from "../../../interfaces/IPosts/PostsResponse";

export type GetPostsConfig = AxiosRequestConfig<{communityId: string}>;

export const getCommunityPosts = async ({params, config}: GetPostsConfig) =>
    api.get<PostsResponse>(`community/${params.communityId}/post`, config);