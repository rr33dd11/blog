import {Avatar, Button, Card, Col, Row, Typography} from "antd";
import {CommunityRole} from "../../enums/CommunityRole.ts";
import {UsergroupDeleteOutlined} from "@ant-design/icons";
import {CreateAvatar} from "../../helpers/CreateAvatar.ts";
import {CommunityFullDTO} from "../../interfaces/ICommunities/CommunityFulDTO.ts";
import {useCommunityInfo} from "../../hooks/useCommunityInfo.ts";

interface CommunityInfoProps {
    id: string
    role: string
    info: CommunityFullDTO
}

export const CommunityInfo = ({id, role, info}: CommunityInfoProps) => {

    const {navigate, unsubscribe, subscribe, isAuth} = useCommunityInfo(id as string)
    return (
        <Card style={{marginBottom: 20}}>
            <Row gutter={[12, 12]}>
                <Col span={24}>
                    <Row justify="space-between" gutter={[12, 12]}>
                        <Col><Typography.Title style={{marginTop: 0}} level={3}>
                            Группа "{info?.name}"
                        </Typography.Title></Col>
                        <Col>
                            {role == CommunityRole.Administrator ? (
                                <Button block onClick={() => {
                                    localStorage.setItem('groupId', info.id)
                                    navigate('/post/create')
                                }}>Написать пост</Button>
                            ) : role == CommunityRole.Subscriber ? (
                                <Button variant='solid' color='danger' block
                                        disabled={unsubscribe.isLoading || !isAuth} loading={unsubscribe.isLoading}
                                        onClick={() => unsubscribe.mutate()}
                                >Отписаться</Button>
                            ) : (
                                <Button variant='solid' color='primary' block
                                        disabled={subscribe.isLoading || !isAuth} loading={subscribe.isLoading}
                                        onClick={() => subscribe.mutate()}
                                >Подписаться</Button>
                            )}
                        </Col>
                    </Row>
                </Col>
                <Col span={24}>
                    <UsergroupDeleteOutlined/> {info?.subscribersCount} подписчиков
                </Col>
                <Col span={24}>
                    Тип сообщества : {info?.isClosed ? 'Закрытое' : 'Открытое'}
                </Col>
                <Col span={24}>
                    <Typography.Title style={{marginTop: 0}} level={4}>Администраторы</Typography.Title>
                </Col>
                {info?.administrators.map((administrator) => (
                    <Col span={24} style={{marginBottom: 5}}>
                        <Row align="middle" gutter={20}>
                            <Col>
                                <Avatar size={48} style={{backgroundColor: 'transparent'}}
                                        icon={<span
                                            dangerouslySetInnerHTML={{
                                                __html: CreateAvatar({
                                                    size: 48,
                                                    gender: administrator.gender,
                                                    created: administrator.createTime
                                                })
                                            }}
                                            style={{display: 'inline-block', width: '100%', height: '100%'}}
                                        />
                                        }
                                />
                            </Col>
                            <Col>
                                {administrator.fullName}
                            </Col>
                        </Row>
                    </Col>
                ))}
            </Row>
        </Card>
    )
}