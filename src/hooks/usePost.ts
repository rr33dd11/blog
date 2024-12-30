import {useState} from "react";
import {useSelector} from "react-redux";
import {RootState} from "../store/store.ts";
import {deleteLike} from "../api/requests/Post/deleteLike.ts";
import {postLike} from "../api/requests/Post/postLike.ts";
import {PostDTO} from "../interfaces/IPosts/PostDTO.ts";
import {useQuery} from "react-query";
import {getAddressChain} from "../api/requests/Address/getAddressChain.ts";

export const usePost = (post: PostDTO, isFull: boolean) => {

    const [hasLike, setHasLike] = useState<boolean>(post.hasLike)
    const [likesNumber, setLikesNumber] = useState<number>(post.likes)
    const isAuth = useSelector((state: RootState) => state.user.isAuth)

    const dislikePost = async () => {
        const response = await deleteLike({params: {postId: post.id}})
        if (response.status == 200) {
            setHasLike(false);
            setLikesNumber(likesNumber-1)
        }
    }

    const fetchAddress = () =>
        getAddressChain({config: {params: {objectGuid: post.addressId}}}).then((response) => response.data);


    const {data: addressElements, isLoading: isAddressLoading} = useQuery(['address', post.id], fetchAddress, {
        keepPreviousData: true,
        enabled: isFull,
        refetchOnWindowFocus: false
    })

    const likePost = async () => {
        const response = await postLike({params: {postId: post.id}})
        if (response.status == 200) {
            setHasLike(true)
            setLikesNumber(likesNumber+1)
        }
    }

    const addressString = () => {
        let resultAddress: string = ''
        addressElements?.forEach((addressElement, index) => {
            resultAddress = resultAddress.concat(addressElement.text as string, index == addressElements.length - 1 ? '' : ', ')
        })
        return resultAddress
    }

    return {dislikePost, likePost, hasLike, isAuth, likesNumber, addressString, isAddressLoading}
}