import {Card, Col, Divider, Row, Typography, Image, Button} from "antd"
import { PostDTO } from "../../interfaces/IPosts/PostDTO"
import {CommentOutlined, EnvironmentOutlined, HeartFilled, HeartOutlined} from "@ant-design/icons"
import dayjs from 'dayjs';
import {Link, useNavigate} from "react-router-dom";
import {usePost} from "../../hooks/usePost.ts";
import {useState} from "react";

interface PostProps {
    post: PostDTO,
    isFull?: boolean,
}

export const Post = ({ post, isFull=false } : PostProps) => {
    const [expanded, setExpanded] = useState(false);
    const navigate = useNavigate()
    const {dislikePost, likePost, hasLike, isAuth, likesNumber, addressString, isAddressLoading} = usePost(post, isFull)

    return (
        <Card >
            <Typography.Text>
                <Link to={`/?author=${post.author}`}><Typography.Text>{post.author}</Typography.Text></Link> - {dayjs(post.createTime).format('DD.MM.YYYY HH:mm')}
                {post.communityId ? (
                    <> в сообществе <Link to={`/communities/${post.communityId}`}><Typography.Text>"{post.communityName}"</Typography.Text></Link></>
                ) : ''}
            </Typography.Text>
            <Link to={`/post/${post.id}`}><Typography.Title style={{ marginTop: 10 }} level={3}>{post.title}</Typography.Title></Link>
            <Divider style={{ margin: 10 }} variant='solid' />
            {post.image ?
                <Image src={post.image} preview={false} fallback="" style={{maxHeight: 600, maxWidth: "100%", objectFit: 'contain'}}/>
                : null}
            <Typography.Paragraph
                ellipsis={isFull ? undefined : {
                    rows: 6,
                    expandable: 'collapsible',
                    expanded,
                    onExpand: (_, info) => setExpanded(info.expanded),
                    symbol: expanded ? 'Свернуть' : 'Читать полностью'
                }}
            >
                {post.description}
            </Typography.Paragraph>
            <Typography.Paragraph>
                {post.tags?.map((tag) =>
                    (<Link key={tag.id} to={`/?tags=${tag.id}`}>
                        <Typography.Text>#{tag.name} </Typography.Text>
                    </Link>))}
            </Typography.Paragraph>
            <Typography.Paragraph>Время чтения: {post.readingTime} мин.</Typography.Paragraph>
            <Typography.Paragraph>
            {isFull
                ? post.addressId
                        ? isAddressLoading
                            ? 'Загрузка'
                            : (<><EnvironmentOutlined /> {addressString()}</>)
                        : 'Адрес не указан'
                : null}
            </Typography.Paragraph>
            <Divider style={{ margin: 10 }} variant='solid' />
            <Row justify='space-between'>
                <Col>
                    <Button onClick={() => {
                        localStorage.setItem('isCommentView', 'true')
                        navigate(`/post/${post.id}`)
                    }} icon={<CommentOutlined />}>{post.commentsCount}</Button>
                </Col>
                <Col>
                    <Button
                        disabled={!isAuth}
                        onClick={hasLike ? dislikePost : likePost}
                        icon={hasLike
                            ? (<HeartFilled style={{ color: 'red' }} />)
                            : (<HeartOutlined style={{ color: 'red' }} />)
                        }
                    >{likesNumber}</Button>
                </Col>
            </Row>
        </Card>
    )
}