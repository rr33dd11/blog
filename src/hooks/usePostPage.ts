import {useParams} from "react-router-dom";
import {useEffect, useRef} from "react";
import {getPostInfo} from "../api/requests/Post/getPostInfo.ts";
import {useQuery} from "react-query";

export const usePostPage = () => {
    const {id} = useParams<{ id: string }>();

    const isCommentView = !!localStorage.getItem("isCommentView");
    const currentBlock = useRef(null);

    const fetchPostInfo = () =>
        getPostInfo({params: {postId: id as string}}).then((response) => response.data);

    const {data: postInfo, isLoading} = useQuery(['post', id], fetchPostInfo, {
        refetchOnWindowFocus: false,
        keepPreviousData: true
    });

    useEffect(() => {
        if (currentBlock.current && isCommentView) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            currentBlock.current.scrollIntoView({
                behavior: "smooth",
                block: "center",
            })
            if (!isLoading) localStorage.removeItem("isCommentView");
        }
    }, [isLoading]);

    return {id, postInfo, isCommentView, isLoading, currentBlock};
}