import {Card, Col, Row, Skeleton} from "antd";

export const PostsSkeleton = () => {
    return (
        <Row style={{marginTop:16}} gutter={[16, 16]}>
            <Col span={24}><PostSkeleton/></Col>
            <Col span={24}><PostSkeleton/></Col>
            <Col span={24}><PostSkeleton/></Col>
        </Row>
    )
}

export const PostSkeleton = () => {
    return (
        <Card>
            <Row gutter={[0, 16]}>
                <Col span={6}><Skeleton.Input active size="small"/></Col>
                <Col span={24}><Col span={15}><Skeleton.Input active block/></Col></Col>
                <Col span={24}><Skeleton.Input block active size='small'/></Col>
                <Col span={24}><Col span={4}><Skeleton.Input block active size='small'/></Col></Col>
                <Col span={24}><Col span={5}><Skeleton.Input block active size='small'/></Col></Col>

                <Col span={24}>
                    <Row justify='space-between'>
                        <Skeleton.Button active/>
                        <Skeleton.Button active/>
                </Row>
                </Col>
            </Row>
        </Card>
    )
}