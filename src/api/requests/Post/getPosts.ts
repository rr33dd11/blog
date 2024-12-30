import { api } from "../../axios/instance";
import {PostsResponse} from "../../../interfaces/IPosts/PostsResponse";

export type GetPostsConfig = AxiosRequestConfig;

export const getPosts = async (requestConfig?: GetPostsConfig) =>
    api.get<PostsResponse>('post', requestConfig?.config);