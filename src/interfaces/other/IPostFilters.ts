import {Sorting} from "../../enums/Sorting.ts";

export interface IPostFilters{
    tags?: string[];
    author?: string;
    min?: number;
    max?: number;
    sorting: Sorting;
    onlyMyCommunities?: boolean;
    size: number;
}