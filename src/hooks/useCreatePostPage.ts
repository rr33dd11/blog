import {Form} from "antd";
import {useNavigate} from "react-router-dom";
import {getTag} from "../api/requests/Tag/getTag.ts";
import {useMutation, useQuery} from "react-query";
import {CreatePostDTO} from "../interfaces/IPosts/CreatePostDTO.ts";
import {postCreatePost} from "../api/requests/Post/postCreatePost.ts";
import {postCreateCommunityPost} from "../api/requests/Community/postCreateCommunityPost.ts";
import {useState} from "react";

export const useCreatePostPage = () => {
    const [form] = Form.useForm()
    const navigate = useNavigate()

    const [selectedAddressElements, setSelectedAddressElements] = useState<string[]>([])

    const fetchTags = () =>
        getTag().then((response) => response.data);

    const {isLoading: tagsLoading, data: tags} = useQuery(['tags'], fetchTags, {
        refetchOnWindowFocus: false,
    })

    const createPost = useMutation({
        mutationFn: (postData: Omit<CreatePostDTO, 'groupId'>) => postCreatePost({params: postData}),
        onSuccess: () => navigate('/')
    })

    const createCommunityPost = useMutation({
        mutationFn: ({ postData, groupId }: { postData: CreatePostDTO, groupId: string }) =>
            postCreateCommunityPost({ params: { ...postData, groupId } })
    })

    const Create = () => {
        const postData: CreatePostDTO = {
            ...form.getFieldsValue(),
            addressId: selectedAddressElements[selectedAddressElements.length - 1]
        };

        const groupId: string = form.getFieldValue('group')
        groupId == 'undefined' ? createPost.mutate(postData) : createCommunityPost.mutate({postData: postData, groupId})

    }

    return {form, Create, tagsLoading, tags, setSelectedAddressElements}
}