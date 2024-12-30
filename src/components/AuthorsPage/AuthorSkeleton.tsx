import {Card, Col, Row, Skeleton,} from "antd";

export const AuthorsSkeleton = () => {
    return (
        <Col span={20}>
            <Row gutter={[6, 6]}>
                <Col span={24}><AuthorSkeleton/></Col>
                <Col span={24}><AuthorSkeleton/></Col>
                <Col span={24}><AuthorSkeleton/></Col>
                <Col span={24}><AuthorSkeleton/></Col>
                <Col span={24}><AuthorSkeleton/></Col>
                <Col span={24}><AuthorSkeleton/></Col>
                <Col span={24}><AuthorSkeleton/></Col>
            </Row>
        </Col>
    )
}

const AuthorSkeleton = () => {
    return (
        <Card>
            <Row align="middle" gutter={20}>
                <Col><Skeleton.Avatar active size={64}/></Col>
                <Col flex='auto'>
                    <Row gutter={[50, 10]}>
                        <Col span={20}><Skeleton.Input block size='small'/> </Col>
                        <Col span={4}><Skeleton.Button block size='small'/> </Col>
                        <Col span={24}>
                            <Row gutter={[50, 10]} justify='space-between'>
                                <Col span={4}><Skeleton.Input block size='small'/> </Col>
                                <Col span={4}><Skeleton.Button block size='small'/> </Col>
                            </Row>
                        </Col>

                        <Col></Col>
                    </Row>
                </Col>
            </Row>
        </Card>
    )
}