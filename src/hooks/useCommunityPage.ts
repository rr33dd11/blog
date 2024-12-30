import {useParams} from "react-router-dom";
import {getRole} from "../api/requests/Community/getRole.ts";
import {getCommunityInfo} from "../api/requests/Community/getCommunityInfo.ts";
import {useQuery} from "react-query";
import {useSelector} from "react-redux";
import {RootState} from "../store/store.ts";

export const useCommunityPage = () => {
    const {id} = useParams<{ id: string }>();
    const isAuth = useSelector((state: RootState) => state.user.isAuth)
    const fetchRole = () =>
        getRole({params: {communityId: id || ''}}).then((response) => response.data)

    const fetchCommunityInfo = () =>
        getCommunityInfo({params: {communityId: id || ''}}).then((response) => response.data);

    const {data: info, isLoading: isInfoLoading} = useQuery(['community', id], fetchCommunityInfo, {
        refetchOnWindowFocus: false
    })

    const {data: role, isLoading} = useQuery(['role', id], fetchRole, {
        enabled: isAuth,
        refetchOnWindowFocus: false,
    })

    return {id, info, isLoading, role, isInfoLoading}
}