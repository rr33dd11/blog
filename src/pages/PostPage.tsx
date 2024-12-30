import {Post} from "../components/common/Post.tsx";
import {PostDTO} from "../interfaces/IPosts/PostDTO.ts";
import {Card, Col, Row, Skeleton} from "antd";
import {PostSkeleton} from "../components/common/PostSkeleton.tsx";
import {CommentsSkeleton} from "../components/PostPage/CommentSkeleton.tsx";
import {CommentsBlock} from "../components/PostPage/CommentsBlock.tsx";
import {PostFullDTO} from "../interfaces/IPosts/PostFullDTO.ts";
import {CommentInput} from "../components/PostPage/CommentInput.tsx";
import {usePostPage} from "../hooks/usePostPage.ts";

export const PostPage = () => {
    const {id, postInfo, isCommentView, isLoading, currentBlock} = usePostPage()

    return (
        <Row justify='center' gutter={[16, 16]}>
            <Col span={20}>
                {isLoading ? (<PostSkeleton/>) : (<Post post={postInfo as PostDTO} isFull={true}></Post>)}
            </Col>
            <Col span={20} ref={isCommentView ? currentBlock : undefined}>
                {isLoading ? (<CommentsSkeleton/>) : (<CommentsBlock comments={(postInfo as PostFullDTO).comments} postId={id as string}/>)}
            </Col>
            <Col span={20}>
                <Card>
                    {isLoading ? <Skeleton.Button active block size='large'/> :
                        <CommentInput postId={id as string}/>}
                </Card>
            </Col>
        </Row>
    )
}