import {Avatar, Button, Card, Col, Row, Typography} from "antd";
import {CreateAvatar} from "../../helpers/CreateAvatar.ts";
import {AuthorDTO} from "../../interfaces/IAuthor/AuthorDTO.ts";
import {Link} from "react-router-dom";

interface AuthorProps {
    author: AuthorDTO
}

// gold -- #efbf04
// serebro -- #c0c0c0
// bronze -- #ce8946

export const AuthorCard = ({author} : AuthorProps) => {
    return (
        <Card>
            <Row align="middle" gutter={20}>
                <Col>
                    <Avatar size={64} style={{ backgroundColor: 'transparent' }}
                        icon={<span
                            dangerouslySetInnerHTML={{ __html: CreateAvatar({gender: author.gender, created: author.created, size: 64})}}
                            style={{ display: 'inline-block', width: '100%', height: '100%' }}
                        />
                        }
                    />
                </Col>
                <Col flex='auto'>
                    <Row justify='space-between' gutter={12}>
                        <Col>
                            <Row gutter={[12, 6]}>
                                <Col span={24}>
                                    <Row gutter={6}>
                                        <Col><Link to={`/?author=${author.fullName}`}><Typography.Text strong>{author.fullName}</Typography.Text></Link></Col>
                                        <Col><Typography.Text type="secondary" italic>
                                             Создан: {new Date(author.created).toLocaleDateString()}
                                        </Typography.Text></Col>
                                    </Row>
                                </Col>
                                <Col span={24}>
                                    <Row gutter={6}>
                                        <Col><Typography.Text strong type='secondary'>Дата рождения:</Typography.Text></Col>
                                        <Col><Typography.Text type="secondary">
                                            {author.birthDate
                                                ? new Date(author.birthDate).toLocaleDateString()
                                                : 'не указана'
                                            }
                                        </Typography.Text></Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                        <Col span={4}>
                            <Row gutter={[12, 6]}>
                                <Col span={24}>
                                    <Button type='primary' block size="small" style={{cursor: "default"}}>Постов: {author.posts}</Button>
                                </Col>
                                <Col span={24}>
                                    <Button type='primary' block size="small" style={{cursor: "default"}}>Лайков: {author.likes}</Button>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Card>
    )
}