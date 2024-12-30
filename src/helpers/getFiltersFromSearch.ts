import {IPostFilters} from "../interfaces/other/IPostFilters"
import {Sorting} from "../enums/Sorting.ts";

export const getFiltersFromSearch = (params: string): IPostFilters => {

    const searchParams = new URLSearchParams(params)
    return {
        tags: searchParams.getAll('tags') || undefined,
        author: searchParams.get('author') || undefined,
        min: searchParams.get('min') ? Number(searchParams.get('min')) : undefined,
        max: searchParams.get('max') ? Number(searchParams.get('max')) : undefined,
        sorting: searchParams.get('sorting') in Sorting
                ? Sorting[searchParams.get('sorting') as keyof typeof Sorting]
                : Sorting.CreateDesc,
        onlyMyCommunities: searchParams.get('onlyMyCommunities') == 'true' ? true : undefined,
        size: searchParams.get('size') ? Number(searchParams.get('size')) : 5,
    }
}