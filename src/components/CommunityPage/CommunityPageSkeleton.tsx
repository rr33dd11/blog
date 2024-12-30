import {Card, Col, Row, Skeleton} from "antd";
import {PostsSkeleton} from "../common/PostSkeleton.tsx";

export const CommunityPageSkeleton = () => {
    return (
        <Row gutter={[16, 16]}>
            <Col span={24}><Card>
                <Row gutter={[16, 16]}>
                    <Col span={24}><Skeleton.Input active block/> </Col>
                    <Col span={24}><Skeleton.Input active size='small'/> </Col>
                    <Col span={24}><Skeleton.Input active size='small'/> </Col>
                    <Col span={24}><Skeleton.Input active/></Col>
                    <Col span={24}>
                        <Row align='middle' gutter={[16, 16]}>
                            <Col><Skeleton.Avatar active size='large'/></Col>
                            <Col><Skeleton.Input active size='small' block/></Col>
                        </Row>
                    </Col>
                    <Col span={24}>
                        <Row align='middle' gutter={[16, 16]}>
                            <Col><Skeleton.Avatar active size='large'/></Col>
                            <Col><Skeleton.Input active size='small' block/></Col>
                        </Row>
                    </Col>
                </Row>
            </Card></Col>

            <Col span={24}><Card>
                <Row gutter={[16, 16]}>
                    <Col span={24}><Skeleton.Input active size='small'/></Col>
                    <Col span={12}><Skeleton.Input active block/> </Col>
                    <Col span={12}><Skeleton.Input active block/> </Col>
                    <Col span={24}>
                        <Row justify='space-between'>
                            <Col span={8}><Skeleton.Input active block/> </Col>
                            <Col span={8}><Skeleton.Button active block/> </Col>
                        </Row>
                    </Col>
                </Row>
            </Card></Col>

            <PostsSkeleton/>
        </Row>
    )
}