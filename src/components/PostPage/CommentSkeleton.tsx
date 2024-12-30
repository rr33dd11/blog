import {Card, Col, Row, Skeleton} from "antd";

export const CommentsSkeleton = () => {
    return (
        <Card>
            <Row gutter={[16, 20]}>
                <Col span={24}><Col span={6}><Skeleton.Input block/></Col></Col>
                <Col span={24}><CommentSkeleton/></Col>
                <Col span={24}><CommentSkeleton/></Col>
            </Row>
        </Card>
    )
}

const CommentSkeleton = () => {
    return (
        <Row gutter={[16, 8]}>
            <Col span={24}><Col span={4}><Skeleton.Input size='small' block active/></Col></Col>
            <Col span={24}><Col span={12}><Skeleton.Input size='small' block active/></Col></Col>
            <Col span={24}><Col span={8}><Skeleton.Input size='small' block active/></Col></Col>
            <Col span={24}><Col span={6}><Skeleton.Input size='small' block active/></Col></Col>
        </Row>
    )
}