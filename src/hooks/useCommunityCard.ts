import {useMutation, useQuery, useQueryClient} from "react-query";
import {useSelector} from "react-redux";
import {RootState} from "../store/store.ts";
import {getRole} from "../api/requests/Community/getRole.ts";
import {deleteSubscribe} from "../api/requests/Community/deleteSubscribe.ts";
import {postSubscribe} from "../api/requests/Community/communitySubscribe.ts";

export const useCommunityCard = (id: string) => {
    const queryClient = useQueryClient()
    const isAuth = useSelector((state: RootState) => state.user.isAuth)

    const fetchRole = () =>
        getRole({params: {communityId: id}}).then((response) => response.data)

    const {data: role, isLoading} = useQuery(['role', id], fetchRole, {
        enabled: isAuth,
        refetchOnWindowFocus: false,
    })

    const unsubscribe = useMutation(() =>
        deleteSubscribe({params: {communityId: id}}), {
        onSuccess: () => queryClient.invalidateQueries(['role', id])
    })

    const subscribe = useMutation(() =>
        postSubscribe({params: {communityId: id}}), {
        onSuccess: () => queryClient.invalidateQueries(['role', id])
    })

    return {isAuth, unsubscribe, subscribe, role, isLoading}
}