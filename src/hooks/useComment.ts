import {useMutation, useQuery, useQueryClient} from "react-query";
import {useState} from "react";
import {useForm} from "antd/es/form/Form";
import {getTreeComments} from "../api/requests/Comment/getTreeComments.ts";
import {putComment} from "../api/requests/Comment/putComment.ts";
import {deleteComment} from "../api/requests/Comment/deleteComment.ts";
import {postComment} from "../api/requests/Comment/postComment.ts";
import {CommentDTO} from "../interfaces/IPosts/CommentDTO.ts";

export const useComment = (parentId: string | undefined, comment: CommentDTO, postId: string, isNested: boolean) => {
    const queryClient = useQueryClient();
    const [isAnswered, setIsAnswered] = useState<boolean>(false);
    const [isEditing, setIsEditing] = useState<boolean>(false);
    const [showMore, setShowMore] = useState<boolean>(false);
    const [form] = useForm();

    const fetchNestedComments = () =>
        getTreeComments({params: {commentId: comment.id}}).then((response) => response.data);

    const updateComment =  useMutation(() =>
        putComment({params: {content: form.getFieldValue('editingContent'), id: comment.id}}), {
        onSuccess: () => {
            if (isNested) { queryClient.invalidateQueries(['comments', parentId]) }
            queryClient.invalidateQueries(['post', postId])
        }
    })

    const removeComment =  useMutation(() =>
        deleteComment({params: {commentId: comment.id}}), {
        onSuccess: () => {
            if (isNested) { queryClient.invalidateQueries(['comments', parentId]) }
            queryClient.invalidateQueries(['post', postId])
        }
    })

    const replyComment =  useMutation((parentId: string | undefined) =>
        postComment({params: {content: form.getFieldValue('replyContent'), id: postId, parentId: parentId}}), {
        onSuccess: () => {
            if (isNested) { queryClient.invalidateQueries(['comments', parentId]) }
            queryClient.invalidateQueries(['post', postId])
            form.setFieldValue('replyContent', '')
            setIsAnswered(false)
        }})

    const {data: comments, isLoading} = useQuery(['comments', comment.id], fetchNestedComments, {
        keepPreviousData: true,
        enabled: !isNested && comment.subComments > 0 && showMore
    })

    return {form, removeComment, replyComment, updateComment, showMore, setIsEditing, setShowMore, isEditing, comments,
        isLoading, isAnswered, setIsAnswered}
}