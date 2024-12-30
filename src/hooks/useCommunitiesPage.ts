import {getCommunities} from "../api/requests/Community/getCommunities.ts";
import {useQuery} from "react-query";

export const useCommunitiesPage = () => {
    const fetchCommunities = () =>
        getCommunities().then((response) => response.data)

    const {data: communities} = useQuery(['communities'], fetchCommunities, {
        refetchOnWindowFocus: false,
        keepPreviousData: true,
    });

    return {communities}
}