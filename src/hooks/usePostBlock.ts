import {useLocation} from "react-router-dom";
import {getPosts} from "../api/requests/Post/getPosts.ts";
import {useQuery} from "react-query";
import {getCommunityPosts} from "../api/requests/Community/getCommunityPosts.ts";

export const usePostBlock = (id?: string) => {
    const location = useLocation();

    const fetchPosts = () => {
        const search = new URLSearchParams(location.search);
        return id
            ? getCommunityPosts({params: {communityId: id},config: {params: search}})
                .then((response) => response.data)
            : getPosts({config: {params: search}}).then((response) => response.data);

    }

    const {data: postsResponse, isLoading} = useQuery(['posts', location.search], fetchPosts, {
        keepPreviousData: true,
        refetchOnWindowFocus: false,
        onSuccess: () => window.scrollTo({ top: 0, behavior: "instant" }),
    })

    return {postsResponse, isLoading}
}