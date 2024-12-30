import { IPagination } from "../ICommon/IPagination";

export interface PostsFilters {
    tags: string[];
    author: string;
    min: number;
    max: number;
    sorting: boolean;
    pagination: Omit<IPagination, 'count'>
}