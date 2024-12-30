import {PostsSkeleton} from "../common/PostSkeleton.tsx";
import {Col, Empty, Row} from "antd";
import {Post} from "../common/Post.tsx";
import {PaginationBlock} from "../common/PaginationBlock.tsx";
import {usePostBlock} from "../../hooks/usePostBlock.ts";

interface PostsBlockProps {
    id?: string
}

export const PostBlock = ({id} : PostsBlockProps ) => {

    const {isLoading, postsResponse} = usePostBlock(id)

    return (
        <>
        {isLoading
            ? <PostsSkeleton/>
            : <>
                {postsResponse && postsResponse.posts.length == 0
                    ? <Empty description='Нет постов' style={{marginTop: 20}} imageStyle={{height: '25%'}} />
                    : <>
                        <Row gutter={[12, 12]} style={{marginTop: 15, marginBottom: 15}}>
                            {postsResponse && postsResponse.posts.map((post) => (
                                <Col span={24}>
                                    <Post key={post.id} post={post}/>
                                </Col>
                            ))}
                        </Row>
                        <Row justify='center'>
                            {postsResponse ? (<PaginationBlock pagination={postsResponse.pagination}/>) : null}
                        </Row>
                    </>}
            </>}
        </>
    )
}