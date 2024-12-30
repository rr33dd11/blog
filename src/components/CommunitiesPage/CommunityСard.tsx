import { Button, Card, Col, Row, Skeleton, Typography } from "antd";
import { Link } from "react-router-dom";
import {CommunityRole} from "../../enums/CommunityRole.ts";
import {useCommunityCard} from "../../hooks/useCommunityCard.ts";

interface CommunityProps {
    id: string;
    name: string;
}

export const CommunityCard = ({ id, name } : CommunityProps) => {

    const {isAuth, role, isLoading, unsubscribe, subscribe} = useCommunityCard(id)

    return (
        <Card>
            <Row justify='space-between' gutter={12}>
                <Col xs={24} sm={16} md={16} lg={18} xl={20}>
                    {isLoading ?
                        <Skeleton.Input block active /> :
                        <Link to={`/communities/${id}`}><Typography.Title level={4} style={{ margin: 0 }}>{name}</Typography.Title></Link>
                    }
                </Col>
                <Col xs={24} sm={8} md={8} lg={6} xl={4}>
                    {isLoading ? (
                        <Skeleton.Button block active />
                    ) : (
                        role != CommunityRole.Administrator && (
                            <Button variant='solid' color={role == CommunityRole.Subscriber ? 'danger' : 'primary'} block
                                    disabled={unsubscribe.isLoading || subscribe.isLoading || !isAuth}
                                    loading={unsubscribe.isLoading || subscribe.isLoading}
                            onClick={() => role == CommunityRole.Subscriber ? unsubscribe.mutate() : subscribe.mutate()}
                            >
                                {role == CommunityRole.Subscriber ? 'Отписаться' : 'Подписаться'}
                            </Button>
                        )
                    )}
                </Col>
            </Row>
        </Card>
    )
}