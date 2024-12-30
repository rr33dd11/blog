import {CommentDTO} from "../../interfaces/IPosts/CommentDTO.ts";
import {Button, Col, Form, Input, Row, Tooltip, Typography} from "antd";
import {DeleteOutlined, EditOutlined} from "@ant-design/icons";
import {useComment} from "../../hooks/useComment.ts";

interface CommentProps {
    comment: CommentDTO,
    isAuth: boolean,
    myId: string
    postId: string
    isNested?: boolean
    parentId?: string
}
export const Comment = ({comment, isAuth, myId, postId, isNested=false, parentId}: CommentProps) => {
    const {form, updateComment, removeComment, replyComment, setIsEditing, showMore, setShowMore, isEditing, comments,
        isLoading, isAnswered, setIsAnswered} = useComment(parentId, comment, postId, isNested);

    return (
        <Form form={form}>
            <Row gutter={[5, 7]}>
                <Col span={24}>
                    <Row gutter={[5,5]}>
                        <Col>{comment.deleteDate
                            ? <Typography.Text strong>[Комментарий удален]</Typography.Text>
                            : <Typography.Text strong>{comment.author}</Typography.Text>}
                        </Col>
                        {myId == comment.authorId && (
                            <>
                                <Col>
                                    <EditOutlined style={{color: "#ffb908ff"}} onClick={() => {
                                        setIsEditing(!isEditing)
                                        form.setFieldValue('editingContent', comment.content)
                                    }}/>
                                </Col>
                                <Col>
                                    <DeleteOutlined style={{color:"#c50a0a"}} onClick={() => removeComment.mutate()}/>
                                </Col>
                            </>
                        )}

                    </Row>
                </Col>
                <Col span={24}>
                {isEditing
                    ? (<Row gutter={[16,16]}>
                        <Col span={18}>
                            <Form.Item name='editingContent' rules={[{required: true, message: 'Введите комментарий'}]}>
                                <Input/>
                            </Form.Item>
                        </Col>
                        <Col span={3}>
                            <Button block onClick={() => {
                                updateComment.mutate()
                                setIsEditing(false)}}>
                                Редактировать
                            </Button>
                        </Col>
                        <Col span={3}>
                            <Button danger block onClick={() => setIsEditing(false)}>
                                Отмена
                            </Button>
                        </Col>
                    </Row>)
                    : (<Row gutter={5}>
                        <Col>
                            {comment.deleteDate
                                ? <Typography.Text>[Комментарий удален]</Typography.Text>
                                : <Typography.Text>{comment.content}</Typography.Text>
                            }
                        </Col>

                        {comment.modifiedDate && !comment.deleteDate &&
                            <Col><Tooltip title={new Date(comment.modifiedDate).toLocaleString()}>
                                <Typography.Text type='secondary'>(изменен)</Typography.Text>
                            </Tooltip></Col>}
                    </Row>)
                }
                </Col>
                <Col span={24}>
                    <Row gutter={[7, 7]}>
                        <Col><Typography.Text type="secondary">{new Date(comment.createTime).toLocaleString()}</Typography.Text></Col>
                        {isAuth && !comment.deleteDate && <Col><Typography.Link onClick={() => {
                            setIsAnswered(!isAnswered)
                            form.setFieldValue('replyContent', '')
                        }}>Ответить</Typography.Link></Col>}
                    </Row>
                </Col>

                {isAnswered && (
                    <Col span={24}>
                        <Row gutter={[16, 16]}>
                            <Col span={15}>
                                <Form.Item name='replyContent' rules={[{required: true, message: 'Введите ответ'}]}>
                                    <Input/>
                                </Form.Item>
                            </Col>
                            <Col span={5}><Button type='primary' block onClick={() => {
                                replyComment.mutate(comment.id)
                            }}>Ответить</Button></Col>
                            <Col span={4}><Button danger block onClick={() => setIsAnswered(false)}>Отмена</Button></Col>
                        </Row>
                    </Col>
                )}
                {comment.subComments > 0 && !isNested && (<Col span={24}><Typography.Link onClick={() => setShowMore(!showMore)}>
                        {showMore ? 'Скрыть ответы' : 'Раскрыть ответы'}
                </Typography.Link></Col>)}
                {showMore && (
                    <Col span={24} style={{paddingLeft: 10}}>
                        <Row gutter={[16,16]}>
                            {/*..getNestedComments.data?.*/}
                            {isLoading ? <>загрузка</> : comments?.map(c => (
                                <Col span={24}>
                                    <Comment key={c.id} comment={c} postId={postId} isAuth={isAuth} myId={myId}
                                             isNested={true} parentId={comment.id} />
                                </Col>
                            ))}
                        </Row>
                    </Col>
                )}
            </Row>
        </Form>
    )
}