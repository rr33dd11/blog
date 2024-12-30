import {CommentDTO} from "../../interfaces/IPosts/CommentDTO.ts";
import {Card, Col, Divider, Row} from "antd";
import {Comment} from "./Comment.tsx";
import {useSelector} from "react-redux";
import {RootState} from "../../store/store.ts";

interface CommentsBlockProps {
    comments: CommentDTO[]
    postId: string
}

export const CommentsBlock = ({comments, postId}: CommentsBlockProps) => {
    const isAuth = useSelector((state: RootState) => state.user.isAuth)
    const myId = useSelector((state: RootState) => state.user.id)

    return (
        <>
            {comments.length > 0 ? (
            <Card>
                <Row style={{maxHeight: "350px",overflowY: "auto"}} gutter={[16, 16]}>{
                    comments.map((comment: CommentDTO, index) => (
                    <>
                        <Col span={24}>
                            <Comment comment={comment} isAuth={isAuth} myId={myId} postId={postId}/>
                        </Col>
                        {index != comments.length - 1 ? <Divider style={{margin: 0}}/> : null }
                    </>
                ))}</Row>
            </Card>
        ) : null}
        </>
    )
}