import {PostDTO} from "./PostDTO";
import {IPagination} from "../ICommon/IPagination";

export interface PostsResponse {
    posts: PostDTO[]
    pagination: IPagination
}