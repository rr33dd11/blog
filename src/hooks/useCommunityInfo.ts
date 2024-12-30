import {useNavigate} from "react-router-dom";
import {useMutation, useQueryClient} from "react-query";
import {deleteSubscribe} from "../api/requests/Community/deleteSubscribe.ts";
import {postSubscribe} from "../api/requests/Community/communitySubscribe.ts";
import {useSelector} from "react-redux";
import {RootState} from "../store/store.ts";

export const useCommunityInfo = (id: string) => {
    const navigate = useNavigate();
    const queryClient = useQueryClient()

    const isAuth = useSelector((state: RootState) => state.user.isAuth)

    const unsubscribe = useMutation(() =>
        deleteSubscribe({params: {communityId: id || ''}}), {
        onSuccess: () => {
            queryClient.invalidateQueries(['community', id])
            queryClient.invalidateQueries(['role', id])
        }
    })

    const subscribe = useMutation(() =>
        postSubscribe({params: {communityId: id || ''}}), {
        onSuccess: () => {
            queryClient.invalidateQueries(['community', id])
            queryClient.invalidateQueries(['role', id])
        }
    })

    return {navigate, unsubscribe, subscribe, isAuth}
}